var email = prompt('Inserisci la tua email');
var emailvalide = ['pippo@gmail.com', 'gennaro@gmail.com', 'mattia@virgilio.it', 'ciccio@gmail.com'];
var trovata = false;
for (var i = 0; i<emailvalide.length; i++){
    if (email == emailvalide[i]){
        trovata = true;
    }
}
if (trovata == true){
    alert('Email trovata');
} else {
    alert('Email non presente');
}
