function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours();

    const timeString = now.toLocaleTimeString();
    clockElement.textContent = timeString;

    // Mudar o fundo de acordo com a hora
    if (hours >= 6 && hours < 12) {
        clockElement.style.color = 'white';
        document.body.style.backgroundImage = "url('assests/morning.jpg')"; 
    } else if (hours >= 12 && hours < 18) {
        clockElement.style.color = 'white';
        document.body.style.backgroundImage = "url('assests/afternoon.jpg')"; 
    } else {
        clockElement.style.color = 'white';
        document.body.style.backgroundImage = "url('assests/night.jpg')"; 
    }
}

setInterval(updateClock, 1000);
updateClock();
