// Visualizzare in un alert 5 numeri casuali.
// 30 secondi dopo la chiusura dell'alert, l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Creazione array con 5 numeri casuali 
const userRandomNumbersArray = randomNumberGenerator(5, 1, 100);
alert(userRandomNumbersArray);

// Funzione per generare un array di numeri casuali
function randomNumberGenerator(numberOfArrayElements, rangeMin, rangeMax) {
    // Creazione array vuoto
    const randomNumbersArray = [];
    // Finchè la lunghezza dell'array è inferiore al numero di elementi dell'arrey
    while(randomNumbersArray.length < numberOfArrayElements) {
        // Genero un numero random da rangeMin a rangeMax
        const randomNumber = getRndInteger(rangeMin, rangeMax);
        // Inserisco il numero nell'array solo se esso non è già presente 
        if(!randomNumbersArray.includes(randomNumber)) {
            randomNumbersArray.push(randomNumber);
        }
    }

    return randomNumbersArray;
}

// Funzione per generare un numero random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

setTimeout(function() {
    // Creazione array vuoto
    const seenNumbersArray = [];
    
    while(seenNumbersArray.length < 5) {
        // Chiedere all'utente di inserire uno alla volta i numeri di userRandomNumbersArray
        const userNumbers = parseInt(prompt('Inserisci i numeri visti precedentemente'));

        // Aggiungere i numeri inseriti dall'utente dentro array vuoto precedentemente creato, solo se essi non sono già presenti
        if(!seenNumbersArray.includes(userNumbers) && !isNaN(userNumbers) && (userNumbers >= 1 && userNumbers <= 100)) {
            seenNumbersArray.push(userNumbers);
        }
    }

    const guessedNumbers = [];
    for(let i = 0; i < 5; i++) {
        if(userRandomNumbersArray.includes(seenNumbersArray[i])) {
            guessedNumbers.push(seenNumbersArray[i]);
        }
    }
    alert(`Il tuo punteggio è: ${guessedNumbers.length}. I numeri indovinati sono; ${guessedNumbers}.`);

}, 30000)