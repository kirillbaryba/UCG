(function () {

//init flickity carusel
    $('.carusel').flickity({
        // options
        autoPlay: 5000,
        pauseAutoPlayOnHover: false,
        cellAlign: 'left',
        wrapAround: true,
        pageDots: false,
        contain: true,
        arrowShape: {
            x0: 0,
            x1: 70, y1: 50,
            x2: 70, y2: 0,
            x3: 70
        }
    });

})();