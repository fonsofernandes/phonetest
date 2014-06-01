/// <reference path="zepto.min.js" />
$(document).ready(function () {

    function toogleMenu() {

        var menu = $('#menu');
        var page = $('#page');

        var width = menu.width();

        if ( width > 0 ) {
            page.css( 'width','100%' );
            menu.width( 0 );
        }
        else {
            page.css( 0 );
            menu.css( 'width', '100%' );
        }
    }

    function loadPage( url ){
        
        $.get('view/' + url + '.html', function (page) {
            $('#container').html(page);
            $.getScript('js/controller/' + url + '.js', true);
        });
    }

    $('.navigate').on('click', function () {

        var nav = $(this);

        loadPage(nav.attr('data-page'));

        toogleMenu();

    });

        $('.toogle-menu').on('click', toogleMenu);

    });