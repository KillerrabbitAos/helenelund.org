let currentWeekIndex = 0;
let menuData = null;

async function fetchMenu() {
    try {
        const response = await fetch('https://services.helenelund.org/api/lunch');
        const data = await response.json();
        menuData = data;
        renderMenu(currentWeekIndex);
    } catch (error) {
        console.error('Tekniska problem:', error);
        document.getElementById('menu-list').innerHTML = '<li>Kan inte hämta meny just nu.</li>';
    }
}

function renderMenu(weekIndex) {
    const menuList = document.getElementById('menu-list');
    const weekLabel = document.getElementById('week-label');
    menuList.innerHTML = '';

    if (menuData && menuData.weeks && menuData.weeks.length > weekIndex) {
        const weekData = menuData.weeks[weekIndex];
        weekLabel.textContent = `Vecka ${weekData.number}`;

        const today = new Date().setHours(0, 0, 0, 0);

        if (weekData.days && weekData.days.length > 0) {
            weekData.days.forEach(day => {
                const li = document.createElement('li');
                const date = new Date(day.date * 1000);
                const formattedDate = date.toLocaleDateString('sv-SE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

                if (day.items && day.items.length > 0) {
                    li.innerHTML = `<strong><span class="datum">${formattedDate}:</span></strong><br>${day.items.join('<br>')}`;
                } else {
                    li.innerHTML = `<strong><span class="datum">${formattedDate}:</span></strong><br>Ingen meny tillgänglig för denna dag.`;
                }

                if (date.setHours(0, 0, 0, 0) === today) {
                    li.classList.add('current-day');
                }

                menuList.appendChild(li);
            });
        } else {
            menuList.innerHTML = '<li>Ingen meny tillgänglig för denna vecka.</li>';
        }
    } else {
        menuList.innerHTML = '<li>Ingen menydata tillgänglig.</li>';
        weekLabel.textContent = 'Vecka -';
    }
}


document.getElementById('prev-week-btn').addEventListener('click', () => {
    if (currentWeekIndex > 0) {
        currentWeekIndex--;
        renderMenu(currentWeekIndex);
    }
});

document.getElementById('next-week-btn').addEventListener('click', () => {
    if (menuData && currentWeekIndex < menuData.weeks.length - 1) {
        currentWeekIndex++;
        renderMenu(currentWeekIndex);
    }
});

window.onload = fetchMenu;
