/*
*   Descrizione:

* • Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
* • Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
* • Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/


const btn = document.querySelector('.btn');

let min = 1;
let max = 100;
const arrayList = [];

btn.addEventListener('click',generateNumbers);

function generateNumbers(){
    for(let i = 0; i <= 5; i++){
        arrayList.push(getRndInteger(1,100));
    }
}
