/*
*   Descrizione:

* • Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
* • Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
* • Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/


const buttonSubmitNumber = document.querySelector('.btn');
const textCont = document.getElementById('text-container');
const boxNum = document.getElementById('box-number');
const randArrayList = [];
let correctNum = []
let insertedNumber;

buttonSubmitNumber.addEventListener('click',generateNumbers);

function generateNumbers(){
    for(let i = 0; i < 5; i++){
        let randNum = getRndInteger(1, 99);
        randArrayList.push(randNum);
        console.log(randArrayList);
        textCont.innerHTML = 'Memorise the numbers shown on the box, you have 30 seconds';
        boxNum.innerHTML += `${randNum}, `;
    }
}
setTimeout(insertNumber, 30000);

function insertNumber(){
    boxNum.classList.add('hidden');
    for(let i = 1; i <= 5; i++){
        let insertedNumber = parseInt(prompt('Type the numbers'));

        if (randArrayList.includes(insertedNumber)) {
            correctNum.push(insertedNumber);

            textCont.innerHTML="Numbers you have guessed are:";
            boxNum.innerHTML = ` ${correctNum}, `;
            // boxNum.classList.remove("hidden");
        
        } else {
            console.log('oh no!');
            console.log(correctNum);
        }

        if(correctNum.length === 5){
            textCont.innerHTML = 'Good job! You have guessed all the numbers';
            console.log('they match');
        } else if (correctNum.length === 0){
            textCont.innerHTML = 'Oh no, you have not guessed any numbers';
            console.log('they don\'t match');
        }
    }
}