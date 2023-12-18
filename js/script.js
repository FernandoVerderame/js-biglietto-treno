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

// ! 5 Calcolare il prezzo totale del viaggio
// 5 - A Calcolare il prezzo del biglietto (0.21 € al km)
let totalPrice = userKilometres * 0.21;
console.log(totalPrice);
