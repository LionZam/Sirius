$(document).ready(function () {
    var currentNavItem = calculateCurrentNavItem();

    function calculateCurrentNavItem() {
        var result;
        var topOfWindow = $(window).scrollTop();
        if (topOfWindow <= $('#main').height() * 0.3) {
            result = $('.tablenav').children().eq(0)[0];
        } else if (Math.round($(document).height()) == Math.round($(window).height() + $(window).scrollTop())) {
            result = $('.tablenav').children().eq(2)[0];
        } else {
            result = $('.tablenav').children().eq(1)[0];
        }
        return result;
    }

    newActiveTopMenuItem(currentNavItem);

    function newActiveTopMenuItem(menuItem) {
        currentNavItem = menuItem;
        $('.tablenav > .nav-item').removeClass('active');
        $(menuItem).addClass('active');
    }


    function navbarClickListener() {
        $('.tablenav > .nav-item').on('click', function () {
            var id = $($(this).children().eq(0)).attr('href'),
                top = $(id).offset().top;
            if (id == '#contacts') {
                scrollTo($(document).height() - $(window).height(), this)
            } else {
                scrollTo(top - $('.tablenav').height(), this)
            }
        });
    }

    navbarClickListener();


    function scrollTo(position, menuItem) {
        newActiveTopMenuItem(menuItem);
        $('body,html').stop().animate({scrollTop: position}, 1000);
        $(menuItem).removeClass('hover');
        event.preventDefault();
    }

    //Hover on topMenuItem
    function topMenuHover() {
        $('.tablenav > .nav-item').hover(function () {
                if ($(this).html() !== currentNavItem.innerHTML) {
                    $(this).addClass('hover');
                }
            },
            function () {
                $(this).removeClass('hover');
            })
    }

    topMenuHover();

    function mouseScroll() {
        $('.mousey').on('click', function () {
            scrollTo($('#about-us').offset().top - $('.tablenav').height(), $('.tablenav').children().eq(1)[0])
        })
    }

    mouseScroll();

    function currentSection() {
        $(document).bind('mousewheel', function () {
            newActiveTopMenuItem(calculateCurrentNavItem())
        })
    }

    currentSection();

    function showDetails() {
        $('.details button').on('click', function () {
            if ($('.about').css('max-height') == '270px') {
                $('.about').animate({
                    'max-height': '1000px',
                    'margin-bottom': '50px'
                }, 1000);
            } else {
                $('.about').animate({
                    'max-height': '270px',
                    'margin-bottom': '0'
                }, 1000);
            }
        })
    }

    showDetails();
    function stickyTopNavabr(){
        if ($(window).scrollTop() > $('.forscroll').height()) {
            $('.top-navbar').addClass('is-sticky');
            $(".top-navbar > .container").removeClass("border-gradient")

        }else{
            $('.top-navbar').removeClass('is-sticky');
            $(".top-navbar > .container").addClass("border-gradient")


        }
    }

    $(document).scroll(function () {
        stickyTopNavabr();
    });

    stickyTopNavabr();
});
