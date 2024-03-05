//calcolo prezzo biglietto treno

//chiedi all'utente quanti chilometri vuole fare 
//e chiedere la sua età
const userKm = parseInt(prompt('quanti chilometri devi percorrere?'));
console.log(userKm);

const userAge = parseInt(prompt('quanti anni hai?'));
console.log(userAge);

//calcolare il prezzo del viaggio
const travelCost = userKm * 0.21;
console.log(travelCost);

//applicare gli sconti adeguati
let finalPrice;
if(userAge < 18){
    const discount = travelCost * 20 / 100;
    let finalPrice = travelCost - discount;
    console.log(finalPrice);
} else if(userAge > 65){
    const discount = travelCost * 40 / 100;
    let finalPrice = travelCost - discount;
    console.log(finalPrice);
} else{
    let finalPrice = travelCost;
}

//arrotondare il costo a massimo 2 cifre decimali

//scrivere il prezzo finale
const userMessage = 'Il costo del tuo biglietto sarà ' + finalPrice;

document.getElementById("message").innerHTML = userMessage;