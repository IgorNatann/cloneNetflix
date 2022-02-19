$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    
    // Definindo responsividade, limitando quantos itens aparece por pixels na tela.
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})