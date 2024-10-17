

axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
.then(respo =>{
    const result = respo.data;
    console.log(result.response);
    
})