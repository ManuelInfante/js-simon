
var numbersDrawn = [];
var totalNumbers = 5;

//* Creazione array dei numeri randomici
while (numbersDrawn.length < totalNumbers) {
    var randomNumbers = getRandomNumber(1, 100);
    console.log("Numero estratto: ", randomNumbers);

    if (!isInArray(randomNumbers, numbersDrawn)) {
        numbersDrawn.push(randomNumbers);
    }
}
console.log("Array numeri estratti: ", numbersDrawn);
alert("Memorizza i seguenti numeri: " + numbersDrawn);



//* Countdown prima di richiesta numeri
setTimeout(function () {
    var userNumbers = [];
    var numbersGuessed = [];

    // Ciclo per l'inclusione del numero nell'array dei numeri giusti
    while (userNumbers.length < totalNumbers) {
        var chosenNumber = getUserNumber();

        if (!isInArray(chosenNumber, userNumbers)) {
            userNumbers.push(chosenNumber);

            if (isInArray(chosenNumber, numbersDrawn)) {
                numbersGuessed.push(chosenNumber);
            }
        } else {
            alert("Hai già scelto questo numero, inserisci un numero diverso")
        }
    }
    
    //Stampa risultato
    if (numbersGuessed.length === 0) {
        alert("Non hai indovinato nessun numero tra quelli precedenti!")
    } else if (numbersGuessed.length === 1) {
        alert("Hai indovinato " + numbersGuessed.length + " numero: " + numbersGuessed + "!");
    } else {
        alert("Hai indovinato " + numbersGuessed.length + " numeri: " + numbersGuessed + "!");
    }

}, 10000);


// FUNZIONI


//generazione numeri random
function getRandomNumber(min, max) {
    max++;
    return randomNumber = Math.floor(Math.random() * (max - min) + min);
}

//controllo dell'aggiunta nell'array
function isInArray(needle, haystack) {
    var found = false;
    var i = 0;
    while (!found & i < haystack.length) {
        if (needle === haystack[i]) {
            found = true;
        }
        i++;
    }
    return found;
}

//controllo validità numero
function isValidNumber(num) {
    if (!num || num.trim() === " " || isNaN(num)) {
        return false;
    }
    return true;
}

//funzione di richiesta numero e validazione
function getUserNumber() {
    var num = prompt("Inserisci un numero tra quelli visti in precedenza");
    while (!isValidNumber(num) || num < 1 || num > 100) {
        alert("Il numero inserito non è valido");
        num = prompt("Scegli un altro numero");
    }
    return parseInt(num);
}





