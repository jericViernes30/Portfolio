$(window).on('load', () => {
    $('.loader').fadeOut(1000)
    setTimeout(function(){
        $('#page').fadeIn(100);
    }, 1000);
})