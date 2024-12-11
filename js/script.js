/*Descrizione: Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
BONUS:
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
Consigli del giorno:
Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.
Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array*/


//FUNCTION






//VARIABLES
let second =30;
let random = [];
let userNumber= [];
let numberFound=[];


//DOM ELEMENT 
const cromeTimeFieldElm = document.getElementById("crono-time")
const formNumberElm = document.getElementById("form-number")
//Randomnumber
const randomNumberElm = document.getElementById("random-number")
const firstNumberFieldElm = document.getElementById("first-number")
const secondNumberFieldElm = document.getElementById("second-number")
const thirdNumberFieldElm = document.getElementById("third-number")
const fourthNumberFieldElm = document.getElementById("fourth-number")
const fifthNumberFieldElm = document.getElementById("fifth-number")

//formnumber
const userFirstNumberElm = document.getElementById("first-number-user")
const userSecondNumberElm = document.getElementById("second-number-user")
const userThirdNumberElm = document.getElementById("third-number-user")
const userFourthNumberElm = document.getElementById("fourth-number-user")
const userFifthNumberElm = document.getElementById("fifth-number-user")
 const inputNumberElm = document.getElementById("input-number")
const btnSubmit = document.getElementById("btn")
const insertNumberElm = document.getElementById("insert-number")
const numbersMatchedElm = document.getElementById("numbers-matched")


//SetInterval
 const intervalID = setInterval(() => {
    if(second == -1){
        clearInterval(intervalID)
        randomNumberElm.classList.add("d-none")
        formNumberElm.classList.remove("d-none")
        insertNumberElm.classList.remove("d-none")
    }else{
        cromeTimeFieldElm.innerHTML= second--
    }
}, 1000);

//Cicle random number
for(let i = 0; i < 5; i++){
    let randomNumber = Math.floor(Math.random() * 100) +1
    random.push (randomNumber)
}

firstNumberFieldElm.innerHTML = random[0]
secondNumberFieldElm.innerHTML = random[1] 
thirdNumberFieldElm.innerHTML = random[2] 
fourthNumberFieldElm.innerHTML = random[3] 
fifthNumberFieldElm.innerHTML = random[4] 

//DOM EVENTS
formNumberElm.addEventListener("submit", function(event){
 event.preventDefault();
     
 userNumber.push(userFirstNumberElm.value)    
 userNumber.push(userSecondNumberElm.value)   
 userNumber.push(userThirdNumberElm.value)
 userNumber.push(userFourthNumberElm.value) 
 userNumber.push(userFifthNumberElm.value) 
 userNumber = userNumber.map(Number)   

for(i = 0; i <= random.length -1; i++){  
    if(userNumber.includes(random[i])){
        numberFound.push(random[i])
        numbersMatchedElm.classList.remove("d-none")
        numbersMatchedElm.innerHTML = `Hai indovinato ${numberFound.length} numeri  (${numberFound})`
     }else{
        numbersMatchedElm.classList.remove("d-none")
         } 

     }
     
});







