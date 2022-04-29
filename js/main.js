$(function () {
    $(".header__slider").slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow_down.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow_up.svg" alt=""></button>',
        vertical: true,
        responsive: [{
            breakpoint: 416,
            settings: {
                dots: false,
                arrows: false,
                autoplay: true,
                autoplay: 2000,
            }
        }]
    });

    $('.product__name').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.product__content',
        vertical: true,
        prevArrow: '<button type="button" class="product-prev"><img src="images/product_arrow_down.svg" alt=""></button>',
        nextArrow: '<button type="button" class="product-next"><img src="images/product_arrow_up.svg" alt=""></button>',
        responsive: [{
            breakpoint: 891,
            settings: {
                vertical: false,
                slidesToShow: 1,
                arrows: false,
                centerMode: true,
                autoplay: true,
                autoplay: 5000,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                vertical: false,
                slidesToShow: 1,
                arrows: false,
                centerMode: true,
                autoplay: false,
                dots: true
            }
        }
        ]
    });
    $('.product__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product__name',
        focusOnSelect: true,
        vertical: true,
        arrows: false,
        responsive: [{
            breakpoint: 891,
            settings: {
                vertical: false,
            }
        }]
    });
    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
    });

});