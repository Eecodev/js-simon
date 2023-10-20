/*
*   Descrizione:

* • Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
* • Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
* • Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// const inviteeList = [];
// for (let i = 0; i < 3; i++){
//     let name;
//     let surname;
//     let invitee;
//     name = nameList[getRndInteger(0, nameList.length -1)];
//     surname = surnameList[getRndInteger(0, nameList.length -1)];
//     invitee = name + '' + surname;
//     console.log(invitee);
//     inviteeList.push
// }


const btn = document.querySelector('btn');

let min = 1;
let max = 100;
const ARRAY_NUMBERS = 5
const arrayNumbers = [];

btn.addEventListener('click',function(){
    for(let i = 0; i <= ARRAY_NUMBERS.length; i++) {arrayNumbers.push(Math.random())}
    
})
