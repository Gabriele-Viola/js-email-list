console.log('hi');
axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
.them(respo => {
    const result = response.data;
    
    
})
.catch(error => {
    console.error(error)
})
.them(()=>{
    console.log(respo);
    
})