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

    $('.app__user-settingsbox').hover(function(e){
        e.preventDefault()
        $('.box').toggleClass('active')
    })

    $('.app__user-settingsbox').click(function(e){
        e.preventDefault()
        $('.app__user-settingspane').toggleClass('settings-open');
    })

    $(window).scroll(function(){
        if($(this).scrollTop() + $(this).height() == $(document).height()){
            $('.app__core-footercontainer').addClass('at--bottom')
        }else{
            $('.app__core-footercontainer').removeClass('at--bottom')
        }
    })

})
