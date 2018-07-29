// function active_button(number){
//     for(var i=0; i < menuButtons.length; i++){
//         menuButtons[i].classList.remove('active');
//     }
//     menuButtons[number].classList.add('active');
//     return this
// }
//
// var menuButtons = document.querySelectorAll('.top-nav > .nav-item');
//
// for(var i=0; i < menuButtons.length; i++){
//     menuButtons[i].addEventListener('click', active_button(i),false);
// }
//
var currentBlock = $('.main:first-child');
$('.top-nav > .nav-item').bind('click', function(){
    $('.top-nav > .nav-item').removeClass('active');
    $(this).addClass('active');

    if($(this).html() === $('.top-nav').children().eq(0)[0].innerHTML){
        $(currentBlock).addClass('fadeOutLeft');
        $('.main').addClass('fadeInRight');
        $('.main').addClass('active-block');
        currentBlock = $('.main');
    }
    else if($(this).html() === $('.top-nav').children().eq(1)[0].innerHTML){
        $(currentBlock).addClass('fadeOutLeft');
        $('.about-block').addClass('fadeInRight');
        $('.about-block').addClass('active-block');
        currentBlock = $('.about-block');
    }
    else if($(this).html() === $('.top-nav').children().eq(2)[0].innerHTML){
        $(currentBlock).addClass('fadeOutLeft');
        $('.contact').addClass('fadeInRight')
        $('.contact').addClass('active-block')
        currentBlock = $('.contact');

    }

});

