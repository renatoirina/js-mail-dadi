# Gioco dei Dadi con Verifica dell'Email

## Descrizione del Programma

Questo programma è un semplice gioco dei dadi implementato in HTML, CSS e JavaScript. L'obiettivo è quello di creare un'applicazione web interattiva che consenta all'utente di giocare ai dadi contro il computer. Prima di iniziare il gioco, viene richiesta all'utente la sua email per verificare se è autorizzato a giocare.

## Progettazione del Programma

### Passaggi principali:

1. **Interfaccia Utente (HTML/CSS)**:
    - L'interfaccia utente è realizzata principalmente utilizzando HTML e CSS.
    - È composta da un input per l'email, un pulsante per avviare la verifica e un'area per visualizzare il risultato.
    - Il CSS è utilizzato per lo stile e la disposizione degli elementi dell'interfaccia utente.

2. **Verifica dell'Email (JavaScript)**:
    - Quando l'utente preme il pulsante di verifica, viene eseguita la funzione `controllaEmail()`.
    - Questa funzione prende l'email inserita dall'utente e confronta con un array di email autorizzate.
    - Se l'email è presente nell'array, viene visualizzato un messaggio di autorizzazione e avviato il gioco dei dadi. Se l'email non è autorizzata, viene mostrato un messaggio di accesso negato.

3. **Gioco dei Dadi (JavaScript)**:
    - Se l'email è autorizzata, viene avviata la funzione `giocoDeiDadi()`.
    - Questa funzione genera un numero casuale per il giocatore e per il computer (compresi tra 1 e 6).
    - I punteggi vengono confrontati e viene determinato il vincitore.
    - Viene visualizzato un messaggio con il punteggio del giocatore, del computer e il risultato del gioco (vincitore o pareggio).
