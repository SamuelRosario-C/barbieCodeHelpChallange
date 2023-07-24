//links
const noticias = document.querySelector("#noticias")
const filmesSeries = document.querySelector("#filmesSeries")


// seções 
const secNoticias = document.querySelector(".secNoticias")
const secFilmesSeries = document.querySelector(".secFilmesSeries")


noticias.addEventListener('click', () =>{
    secNoticias.setAttribute('style', 'display:flex;')
    secFilmesSeries.setAttribute('style', 'display:none;')

})

filmesSeries.addEventListener('click', () => {
    secNoticias.setAttribute('style', 'display:none;')
    secFilmesSeries.setAttribute('style', 'display:flex;')
   
})