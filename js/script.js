(function() {

    // event pada saat link di click
    $('.page-scroll').on('click', function(e) {

        // ambil isi href
        let tujuan = $(this).attr('href');
        
        // tangkap elemen
        let elemenTujuan = $(tujuan);
        
        // pindahkan scroll
        $('html, body').animate({
            scrollTop: elemenTujuan.offset().top - 56
        }, 1000, 'easeInOutExpo');

        e.preventDefault();

    });

    // About
    $(window).on('load', function() {
        $('.pKiri, .pKanan, .pBawah').addClass('pMuncul');
    });

    // parallax
    $(window).scroll(function() {
        let wScroll = $(this).scrollTop();
        // jumbotron
        $('.jumbotron img').css({
            'transform' : 'translate(0px, ' + wScroll/6 + '%)'
        });

        $('.jumbotron h1').css({
            'transform' : 'translate(0px, ' + wScroll/2 + '%)'
        });

        $('.jumbotron p').css({
            'transform' : 'translate(0px, ' + wScroll/1.5 + '%)'
        });

        // jumbotron opacity
        if( wScroll > $('.jumbotron').offset().top) {
            $('.jOpacity').css({
                'opacity' : function(){
                    let elementTinggi = $('.jumbotron').height();
                    return 0 + (elementTinggi - wScroll) / elementTinggi;
                }
            });
        } else {
            $('.jOpacity').css({
                'opacity' : 1
            });
        };


        // album
        if( wScroll > $('.album').offset().top - 260 ) {
            $('.album .card').each(function(i) {
                setTimeout(function() {
                    $('.album .card').eq(i).addClass('muncul');
                }, 300 * i );
            });
        };

    });

})();