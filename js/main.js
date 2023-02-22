/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

const km = parseInt(prompt("Quanti Km devi percorrere"));
const eta = parseInt(prompt("Quanti anni hai?"));

const prezzoPieno = (km * 0.21).toFixed(2);
console.log("Il prezzo del biglietto è: " + prezzoPieno + "€");


const sconto20 = (prezzoPieno / 100 * 20).toFixed(2); //per sapere di quanto verrà scontato il prezzo
const sconto40 = (prezzoPieno / 100 * 40).toFixed(2); //per sapere di quanto verrà scontato il prezzo

let prezzoFinale;

if (eta <= 17) {
   console.log("Ti facciamo uno sconto di: " + sconto20 + "€");
   prezzoFinale = sconto20 + prezzoPieno;
} else if (eta >= 65) {
   console.log("Ti facciamo uno sconto di: " + sconto40 + "€");
   prezzoFinale = sconto40 + prezzoPieno;
} else {
   console.log("Non sono previsti sconti!");
   prezzoFinale = prezzoPieno;
}

console.log(prezzoFinale)


// console.log("Il prezzo finale è: " + prezzoFinale + "€");










console.log("Fine!");
