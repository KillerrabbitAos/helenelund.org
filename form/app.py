from flask import Flask, render_template, request, redirect, url_for, session, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from datetime import datetime, timedelta
import jwt 

app = Flask(__name__)
app.run(host='0.0.0.0', port=80, debug=False, threaded=True)
app.secret_key = 'ciunRLRUHQXENROU3Ol8r3luejkmh3xhru'  # Ersätt med en unik och säker hemlig nyckel
master_key = 'enterknapppåtub'
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

class Post(db.Model):
    __tablename__ = 'post'  # Add this line to explicitly set the table name
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(200), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

with app.app_context():
    db.create_all()

# Kontroll för inloggning
def is_logged_in():
    return 'auth_token' in session

# Generera JWT-token
def generate_token(user_id):
    expiration_time = datetime.utcnow() + timedelta(hours=1)  # Tokenet gäller i 1 timme
    payload = {
        'user_id': user_id,
        'exp': expiration_time
    }
    return jwt.encode(payload, app.secret_key, algorithm='HS256')

@app.route('/', methods=['GET', 'POST'])
def enter_site():
    if request.method == 'POST':
        entered_key = request.form.get('master_key')
        if entered_key == master_key:
            # Set a session variable to indicate the user is authenticated
            session['authenticated'] = True
            return render_template('index.html')

    return render_template('enter_site.html')
def index():
        # Check if the user is authenticated
    if not session.get('authenticated'):
        return redirect(url_for('enter_site'))

    # Your regular route logic here

    if is_logged_in():
        return redirect(url_for('welcome', username=session['username']))
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    if not session.get('authenticated'):
        return redirect(url_for('enter_site'))
    username = request.form.get('username')
    password = request.form.get('password')

    user = User.query.filter_by(username=username).first()

    if user and bcrypt.check_password_hash(user.password, password):
        # Inloggning lyckades, generera JWT-token och sätt i sessionen
        auth_token = generate_token(user.id)
        session['auth_token'] = auth_token
        session['user_id'] = user.id
        session['username'] = user.username
        return redirect(url_for('welcome', user_id=user.id))
    else:
        # Inloggning misslyckades
        return "Felaktigt användarnamn eller lösenord."

@app.route('/logout')
def logout():
    if not session.get('authenticated'):
        return redirect(url_for('enter_site'))
    # Logga ut genom att ta bort auth token från sessionen
    session.pop('auth_token', None)
    session.pop('user_id', None)
    return redirect(url_for('index'))

@app.route('/register', methods=['POST'])
def register():
    if not session.get('authenticated'):
        return redirect(url_for('enter_site'))
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

@app.route('/welcome/<int:user_id>', methods=['GET', 'POST'])
def welcome(user_id):
    if not session.get('authenticated'):
        return redirect(url_for('enter_site'))
    # Kontrollera om användaren är inloggad
    if not is_logged_in():
        return redirect(url_for('index'))

    # Kontrollera om inloggade användaren försöker komma åt en annan användares sida
    if session['user_id'] != user_id:
        return "Du har inte behörighet att visa denna sida."

    user = User.query.get(user_id)

    if request.method == 'POST':
        post_content = request.form.get('post_content')

        new_post = Post(content=post_content, author=user)
        db.session.add(new_post)
        db.session.commit()

        # Redirect to a different URL after processing the form data
        return redirect(url_for('welcome', user_id=user_id))

    posts = Post.query.filter_by(user_id=user.id).all()
    all_posts = Post.query.all()

    return render_template('welcome.html', user=user, posts=posts, all_posts=all_posts)

@app.route('/users')
def list_users():
    if not session.get('authenticated'):
        return redirect(url_for('enter_site'))
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
