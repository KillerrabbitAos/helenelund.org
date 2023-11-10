from flask import Flask, render_template, request, redirect, url_for, session
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from datetime import datetime

app = Flask(__name__)
app.secret_key = 'din_hemliga_nyckel'  # Ersätt med en unik och säker hemlig nyckel
bcrypt = Bcrypt(app)

# Ange en absolut sökväg för databasen
import os
db_path = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'site.db')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + db_path
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)
    posts = db.relationship('Post', backref='author', lazy=True)

with app.app_context():
    # Skapa tabellen i databasen (om den inte redan finns)
    db.create_all()

class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(200), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

# Kontroll för inloggning
def is_logged_in():
    return 'user_id' in session

@app.route('/')
def index():
    if is_logged_in():
        return redirect(url_for('welcome', username=session['username']))
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.form.get('username')
    password = request.form.get('password')

    user = User.query.filter_by(username=username).first()

    if user and bcrypt.check_password_hash(user.password, password):
        # Inloggning lyckades, sätt användar-ID i sessionen
        session['user_id'] = user.id
        session['username'] = user.username
        return redirect(url_for('welcome', username=username))
    else:
        # Inloggning misslyckades
        return "Felaktigt användarnamn eller lösenord."

@app.route('/logout')
def logout():
    # Logga ut genom att ta bort användar-ID från sessionen
    session.pop('user_id', None)
    return redirect(url_for('index'))

@app.route('/register', methods=['POST'])
def register():
    username = request.form.get('username')
    password = request.form.get('password')

    existing_user = User.query.filter_by(username=username).first()

    if existing_user:
        return "Användarnamnet är redan taget."

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    new_user = User(username=username, password=hashed_password)

    db.session.add(new_user)
    db.session.commit()

    return "Registrering lyckades!"

@app.route('/welcome/<username>', methods=['GET', 'POST'])
def welcome(username):
    # Kontrollera om användaren är inloggad
    if not is_logged_in():
        return redirect(url_for('index'))

    user = User.query.filter_by(username=username).first()

    if request.method == 'POST':
        post_content = request.form.get('post_content')

        new_post = Post(content=post_content, author=user)
        db.session.add(new_post)
        db.session.commit()

    posts = Post.query.filter_by(user_id=user.id).all()
    all_posts = Post.query.all()

    return render_template('welcome.html', username=username, posts=posts, all_posts=all_posts)

@app.route('/users')
def list_users():
    # Kontrollera om användaren är inloggad
    if not is_logged_in():
        return redirect(url_for('index'))

    # Hämta alla användare från databasen
    users = User.query.all()

    return render_template('users.html', users=users)

@app.route('/all_posts')
def all_posts():
    # Hämta alla inlägg från alla användare
    all_posts = Post.query.all()

    return render_template('all_posts.html', all_posts=all_posts)

if __name__ == '__main__':
    app.run(debug=True)
