const balls = document.querySelectorAll('.balls');
const bigNumber = document.getElementById('big-number');
const recentNumbers = document.getElementById('recent-numbers');
const resetButton = document.getElementById('reset-button');
const numberGatt = document.getElementById('numbergatt');  // Ny referanse til input-feltet

let selectedNumbers = [];

// Funksjon for å oppdatere recentNumbers til å vise maks 9 elementer i 3x3 format
function updateRecentNumbers() {
    recentNumbers.innerHTML = '';
    selectedNumbers.slice(-9).reverse().forEach(num => {
        const numElement = document.createElement('div');
        numElement.textContent = num;
        recentNumbers.appendChild(numElement);
    });
}

// Oppdaterer antall valgte tall i numberGatt (fortsetter å telle uten begrensning)
function updateSelectedCount() {
    numberGatt.value = selectedNumbers.length;
}

// Funksjon for å håndtere klikk på en ball
balls.forEach(ball => {
    ball.addEventListener('click', function () {
        const number = this.textContent;
        
        if (selectedNumbers.includes(number)) {
            // Fjern tallet hvis det allerede er valgt
            selectedNumbers = selectedNumbers.filter(n => n !== number);
            this.classList.remove('clicked');
            bigNumber.textContent = '';
        } else {
            // Legg til tallet hvis det ikke er valgt
            selectedNumbers.push(number);
            this.classList.add('clicked');
            bigNumber.textContent = number;
        }
        
        updateRecentNumbers();
        updateSelectedCount();  // Oppdater antall valgte tall
    });
});

// Funksjon for tilbakestilling av alle tall
resetButton.addEventListener('click', () => {
    selectedNumbers = [];
    bigNumber.textContent = '';
    recentNumbers.innerHTML = '';
    balls.forEach(ball => ball.classList.remove('clicked'));
    updateSelectedCount();  // Tilbakestill antall valgte tall
	document.getElementById("rekke").selectedIndex = 0;
});
