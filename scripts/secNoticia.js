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