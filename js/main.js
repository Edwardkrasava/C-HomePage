$(document).ready(function () {



    $(window).resize(function (event) {
        console.log(event);
        if (event.target.innerWidth < 864) {
            $('.right__content').insertAfter('.pups');
        } else {
            $('.right__content').insertAfter('.left__content');
        }
    });

    $('#menu_icon').on('click', function (event) {
        event.preventDefault();
        $('.container__navigation').toggle(500);
    });



});