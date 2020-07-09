// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// variabili utente e computer
var dadoutente = Math.floor(Math.random()*6)+1;
var dadocomputer = Math.floor(Math.random()*6)+1;
document.getElementById('utente').innerHTML = 'Questo è il dado dell\'utente' + ' ' + dadoutente;
document.getElementById('computer').innerHTML = 'Questo è il dado del computer' + ' ' + dadocomputer;
if (dadoutente > dadocomputer){
    document.getElementById('vincitore').innerHTML = 'Il vincitore è l\'utente';
} else if (dadocomputer > dadoutente) {
    document.getElementById('vincitore').innerHTML = 'Il vincitore è il computer';
} else {
    document.getElementById('vincitore').innerHTML = 'I dadi sono uguali, non si può calcolare un vincitore';
}
