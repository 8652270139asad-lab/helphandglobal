// Passive Trust Notifications
const names = ["Rajesh", "Priya", "Amit", "Suresh", "Vikram", "Anjali"];
const cities = ["Delhi", "Mumbai", "Surat", "Lucknow", "Bangalore"];
const amounts = ["2 Lakh", "50 Lakh", "1 Crore", "4 Lakh"];

function showNotification() {
    const popup = document.getElementById('trust-popup');
    if(!popup) return;

    const name = names[Math.floor(Math.random() * names.length)];
    const city = cities[Math.floor(Math.random() * cities.length)];
    const amt = amounts[Math.floor(Math.random() * amounts.length)];

    document.getElementById('popup-text').innerText = `${name} from ${city} just received ₹${amt} Payout`;
    
    popup.style.display = 'flex';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 4000);
}

// Har 20 second mein notification dikhao
setInterval(showNotification, 20000);