//
//
//
//
$(function(){

    $('.app__nav-container').click(function(e){
        e.preventDefault()
        $('.app__navscreen-container, .app__nav-bg, .bar').toggleClass('open')
        $(this).toggleClass('z-index-shift')
    })

})
