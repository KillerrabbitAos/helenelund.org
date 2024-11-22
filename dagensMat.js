async function fetchMenu() {
    try {
        const response = await fetch('https://services.helenelund.org/api/lunch');
        const data = await response.json();
        renderTodaysMenu(data);
        console.log(data);
    } catch (error) {
        console.error('Fel vid hämtning av meny:', error);
    }
}

function renderTodaysMenu(menuData) {
    const matDiv = document.getElementById('mat');
    matDiv.innerHTML = '';

    if (menuData.weeks && menuData.weeks.length > 0) {
        const today = new Date();

        const todaysMenu = menuData.weeks[0].days.find(day => {
            const dayDate = new Date(day.date * 1000);
            return dayDate.toDateString() === today.toDateString();
        });

        if (todaysMenu) {
            const formattedDate = today.toLocaleDateString('sv-SE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
            const vegetarisk = `<span class="vegetarisk">(Vegetarisk) ${todaysMenu.items[0]}</span>`;
            const kött = `<span class="kott">(Kött) ${todaysMenu.items.slice(1).join(', ')}</span>`;

            matDiv.innerHTML = `<strong>${formattedDate}:</strong><br>${kött}<br>${vegetarisk}`;
        } else {
            matDiv.innerHTML = '<p>Ingen matinformation tillgänglig för idag.</p>';
        }
    } else {
        matDiv.innerHTML = '<p>Ingen meny tillgänglig</p>';
    }
}

window.onload = fetchMenu;
