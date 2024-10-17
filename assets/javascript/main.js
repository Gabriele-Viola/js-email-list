/*Descrizione
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Abbellire con CSS o Bootstrap
Inserire un bottone che al click fetchi altre 10 mail (sostituendo le altre)*/


let maniMails = 10

const formEl= document.querySelector('form')
console.log(formEl);
const amountEl= document.getElementById('amount')
console.log(amountEl);
maniMails = amountEl.value
console.log(maniMails);
const listEl = document.querySelector('.list')
console.log(listEl);



formEl.addEventListener('submit', function (e) {
    e.preventDefault()
    listEl.innerHTML=''
    maniMails = amountEl.value
    amountEl.value=''
    
    for (let i = 0; i < maniMails; i++) {
        const element = maniMails[i];
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(respo =>{
        let result = respo.data;
        console.log(result.response);
        const email = document.createElement('p')
        email.innerText = result.response
        listEl.appendChild(email)
    })
        
    }
    
})


