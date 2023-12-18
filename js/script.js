console.log('JS OK');

// ! 1 Prendo l'elemento dal DOM (la p)
const paragraph = document.getElementById('result');
console.log(paragraph);

// ! 2 Costruiamo il messaggio
let message = 'Il prezzo totale del viaggio è di: ';
console.log(message);

// ! 3 Chiedere all'utente il numero di chilometri da percorrere
const userKilometres = prompt('Quanti chilometri vuoi percorrere?');
console.log(userKilometres);

// ! 4 Chiedere all'utente l'età
const userAge = prompt('Qual è la tua età?');
console.log(userAge);

// Controllo scelta
let errorMessage;

if (isNaN(userKilometres) || isNaN(userAge) || userKilometres < 1 || userAge < 1)
errorMessage = 'Devi inserire un numero valido in entrambi i campi!';

// ! 5 Calcolare il prezzo totale del viaggio
// 5 - A Calcolare il prezzo del biglietto (0.21 € al km)
if (errorMessage) {
    alert(errorMessage);
} else {

    let totalPrice = userKilometres * 0.21;
    console.log(totalPrice);

    // 5 - B & C Sconto del 20% per i minorenni
    let discount20 = totalPrice * 20 / 100;
    let discount40 = totalPrice * 40 / 100;
    console.log(discount20, discount40);

    let discountPrice;

    if (userAge < 18) {
        totalPrice += - discount20;
    }

    if (userAge > 65) {
        totalPrice += - discount40;
    }

    console.log(totalPrice);

    // ! 6 Prezzo finale (con massimo due decimali)
    totalPrice = Math.round((totalPrice + Number.EPSILON) * 100) / 100;
    console.log(totalPrice);

    // ! 7 Inseriamo il risultato nell'elemento HTML
    // Aggiorniamo il messaggio
    message += `<strong>${totalPrice} €</strong>`;

    paragraph.innerHTML = message;
}
