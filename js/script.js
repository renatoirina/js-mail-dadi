// Array contenente gli indirizzi email autorizzati
const emailsAutorizzate = ["email1@example.com", "email2@example.com", "email3@example.com"];

// Elementi HTML
const emailInput = document.getElementById("emailInput");
const verificaButton = document.getElementById("verificaButton");
const risultato = document.getElementById("risultato");

// Aggiunta dell'evento al click del pulsante di verifica
verificaButton.onclick = function() {
    const emailValue = emailInput.value;
    if (emailsAutorizzate.includes(emailValue)) {
        risultato.innerText = "Email autorizzata. Puoi giocare!";
        // Avvia il gioco dei dadi
        // Genera un numero casuale tra 1 e 6 per il giocatore e per il computer
        const punteggioGiocatore = Math.floor(Math.random() * 6) + 1;
        const punteggioComputer = Math.floor(Math.random() * 6) + 1;

        // Determina il vincitore
        let risultatoGioco;
        if (punteggioGiocatore > punteggioComputer) {
            risultatoGioco = "Hai vinto!";
        } else if (punteggioGiocatore < punteggioComputer) {
            risultatoGioco = "Il computer ha vinto!";
        } else {
            risultatoGioco = "Pareggio!";
        }

        // Mostra il risultato del gioco
        alert(`Il tuo punteggio: ${punteggioGiocatore}\nPunteggio del computer: ${punteggioComputer}\n${risultatoGioco}`);
    } else {
        risultato.innerText = "Email non autorizzata. Accesso negato.";
    }
};
