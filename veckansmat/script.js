async function fetchMenu() {
    try {
        const response = await fetch('https://services.helenelund.org:3000/menu');
        const data = await response.json();
        renderMenu(data);
    } catch (error) {
        console.error('Tekniska problem..:', error);
    }
}

function renderMenu(menuData) {
    const menuList = document.getElementById('menu-list');
    menuList.innerHTML = '';

    if (menuData.weeks && menuData.weeks.length > 0) {
        const today = new Date();

        menuData.weeks[0].days.forEach(day => {
            const li = document.createElement('li');
            const date = new Date(day.date * 1000);
            const formattedDate = date.toLocaleDateString('sv-SE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

            if (date.toDateString() === today.toDateString()) {
                li.classList.add('highlighted');
            }

            li.innerHTML = `<strong><span class="datum">${formattedDate}:</span></strong><br>${day.items.join(',<br>')}`;
            menuList.appendChild(li);
        });
    } else {
        menuList.innerHTML = '<li>Ingen meny tillgänglig</li>';
    }
}

window.onload = fetchMenu;
