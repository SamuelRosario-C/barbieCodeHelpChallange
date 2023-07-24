//links
const noticias = document.querySelector("#noticias")
const filmesSeries = document.querySelector("#filmesSeries")
const loja = document.querySelector("#loja")

// seções 
const secNoticias = document.querySelector(".secNoticias")
const secFilmesSeries = document.querySelector(".secFilmesSeries")
const secLoja = document.querySelector(".secLoja")


// troca de botão
noticias.addEventListener('click', () =>{
    secNoticias.setAttribute('style', 'display:flex;')
    secFilmesSeries.setAttribute('style', 'display:none;')
})

filmesSeries.addEventListener('click', () => {
    secNoticias.setAttribute('style', 'display:none;')
    secFilmesSeries.setAttribute('style', 'display:flex;')
})