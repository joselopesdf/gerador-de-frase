let btn =document.querySelector('#new-quote')
let quote =document.querySelector('.quote')
let  person =document.querySelector('.person')


const quotes =[
    {
        person :"Cristiano Ronaldo",
        quote:"Na minha cabeça eu sou o melhor"
    },
    {
        person :"Lionel Messi",
        quote:"Eu jogo com o meu instinto"
    }

]


btn.addEventListener('click',function(){
    let random =Math.floor(Math.random()*quotes.length)
    quote.innerText =quotes[random].quote
    person.innerText =quotes[random].person
    
    


    
})
   


