$(document).ready(function () {
        var currentBlock = $('.info-block .main');
        var currentNavItem = $('.top-nav').children().eq(0)[0];

        //Active navItem and current info block
        function navBlock() {
            $('.top-nav > .nav-item').on('click', function () {
                $('.top-nav > .nav-item').removeClass('active');
                $(this).addClass('active');
                $(this).removeClass('hover');

                $(currentBlock).addClass('fadeOutLeft');

                setTimeout(function () {
                    var t = $('.info-block .item');
                    for (var k = 0;k < t.length; k++) {
                        if ($($('.info-block .item')[k]).html() != $(currentBlock).html()) {
                            $($('.info-block .item')[k]).removeClass('active-block');
                        }
                    }
                    $('.info-block .item').removeClass('fadeOutLeft');
                }, 1000)
                if ($(this).html() === $('.top-nav').children().eq(0)[0].innerHTML) {
                    activeBlock('.main', 0);
                }
                else if ($(this).html() === $('.top-nav').children().eq(1)[0].innerHTML) {
                    activeBlock('.about-block', 1);
                }
                else if ($(this).html() === $('.top-nav').children().eq(2)[0].innerHTML) {
                    activeBlock('.contact', 2);
                }

            });
        }

        function activeBlock(newBlock, id){
            $(newBlock).addClass('fadeIn').one('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function () {
                $(newBlock).removeClass('fadeIn');
            });
            $(newBlock).addClass('active-block');
            currentBlock = newBlock;
            currentNavItem = $('.top-nav').children().eq(id)[0];
        }
        navBlock();

        //Hover on topMenuItem
        function topMenuHover() {
            $('.top-nav > .nav-item').hover(function () {
                if ($(this).html() !== currentNavItem.innerHTML) {
                    $(this).addClass('hover');
                }
            },
            function(){
                $(this).removeClass('hover');
            })
        }
        topMenuHover();
    }
)
