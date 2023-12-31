//links
const noticias = document.querySelector("#noticias")
const filmesSeries = document.querySelector("#filmesSeries")


// seções 
const secNoticias = document.querySelector(".secNoticias")
const secFilmesSeries = document.querySelector(".secFilmesSeries")


noticias.addEventListener('click', () => {
    secNoticias.setAttribute('style', 'display:flex;')
    secFilmesSeries.setAttribute('style', 'display:none;')

})

filmesSeries.addEventListener('click', () => {
    secNoticias.setAttribute('style', 'display:none;')
    secFilmesSeries.setAttribute('style', 'display:flex;')

})

const allNoticias = [{
    url: "./src/imgNoticias/ingressosparabarbie.jpg",
    newsType: "Filme Barbie Ingressos",
    msg: "Vários estados do Brasil esgotaram os ingressos para o filme Barbie."
}, {
    url: "./src/imgNoticias/barbieEken.png",
    newsType: "Barbie na Rede social",
    msg: "Filme da Barbie ganha muita espectativa, está em alta em varias plataformas sociais."
}, {
    url: "./src/imgNoticias/barbieRoupa.webp",
    newsType: "Tendencia de roupa rosa",
    msg: "Estimaçe que 90% dos Jovens e Adolescentes verão o filme vestidos(a) de ROSA"
}, {
    url: "./src/imgNoticias/barbieEKneconzinheiro.png",
    newsType: "Frete gratis",
    msg: "Atenção!!! Frete gratis na compra do Ken e Barbie cozinheiros."
}]

secNoticias.innerHTML = allNoticias.map(noticias => {
    return `
    
        <div class="noticias">
            <img src="${noticias.url}">
            <h3>${noticias.newsType}</h3>
            <p>${noticias.msg}</p>
        </div>
    `

}).join('');


// botoes
const filmesBtn = document.querySelector("#filmesBtn")
const seriesBtn = document.querySelector("#seriesBtn")

// Filme e serie sections
const filmes = document.querySelector("#filmes")
const series = document.querySelector("#series")

const allFilmes = [{
    imgFilmes: "/src/imgMovieBarbie/movie2023.webp",
    nameFilmes: "Barbie 2023"
}, {
    imgFilmes: "/src/imgMovieBarbie/BarbieReinodasFadas.webp",
    nameFilmes: "Segredo das Fadas"
}, {
    imgFilmes: "/src/imgMovieBarbie/magiadepegaso.png",
    nameFilmes: "Magia de Pégaso"
}, {
    imgFilmes: "/src/imgMovieBarbie/oCastelodeDiamante.webp",
    nameFilmes: "O Castelo de diamante"
}, {
    imgFilmes: "/src/imgMovieBarbie/BarbiePrincesaIlha.jpg",
    nameFilmes: "Barbie e a Princesa da Ilha"
}, {
    imgFilmes: "/src/imgMovieBarbie/BarbiePortalSecreto.jpg",
    nameFilmes: "Barbie e o Portal Secreto"
}, {
    imgFilmes: "/src/imgMovieBarbie/BarbiePrincesaPlebeia.jpg",
    nameFilmes: "Barbie e a Princesa e a Plebeia"
}, {
    imgFilmes: "/src/imgMovieBarbie/aventuraNaEstrelas.jpg",
    nameFilmes: "Aventura Nas Estrelas"
}, {
    imgFilmes: "/src/imgMovieBarbie/Barbie12PrincesasBailarinas.webp",
    nameFilmes: "E as 12 Princesas Bailarinas"
}, {
    imgFilmes: "/src/imgMovieBarbie/BarbieOLagodosCisnes.jpg",
    nameFilmes: "Barbie em O Lago dos Cisnes"
}, {
    imgFilmes: "/src/imgMovieBarbie/princessapopstar.jpg",
    nameFilmes: "Princessa e Popstar"
}]

filmesBtn.addEventListener('click', () => {
    filmes.setAttribute('style', 'display:flex;')
    series.setAttribute('style', 'display:none;')
})
filmes.innerHTML = allFilmes.map(filmes => {
    return `
    
            <div class="filmesSeries">
                <img src="${filmes.imgFilmes}" alt="filme ou serie">
                <p>${filmes.nameFilmes}</p>
            </div>
    `
}).join('');

const allSeries = [{
    imgSeries: "/src/imgSerieBarbie/LifeintheDreamhouse.jpg",
    nameSeries: "Life in the Dreamhouse"
}, {
    imgSeries: "/src/imgSerieBarbie/dreamhouseAdventures.jpeg",
    nameSeries: "Dreamhouse Adventures"
}, {
    imgSeries: "/src/imgSerieBarbie/DreamhouseParty.jpg",
    nameSeries: "Dreamhouse Party"
}, {
    imgSeries: "/src/imgSerieBarbie/Dreamtopia.jpg",
    nameSeries: "Dreamtopia"
}, {
    imgSeries: "/src/imgSerieBarbie/ItTakesTwo.jpg",
    nameSeries: "It Takes Two"
}, {
    imgSeries: "/src/imgSerieBarbie/PrincessesPower.jpg",
    nameSeries: "Princesses Power"
}]

seriesBtn.addEventListener('click', () => {
    series.setAttribute('style', 'display:flex;')
    filmes.setAttribute('style', 'display:none;')

    series.innerHTML = allSeries.map(series => {
        return `
    
            <div class="filmesSeries">
                <img src="${series.imgSeries}" alt="filme ou serie">
                <p>${series.nameSeries}</p>
            </div>

    `
    }).join('');
})



