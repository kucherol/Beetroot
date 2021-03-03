$(function (){
    $('.header__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        vertical: true,
        dots: true,
        dotsClass: 'header__slider-item--dots',
        arrows: false,
    });

    /*$('.header__nav-menu--item').mouseover(function() {
        $('.header__nav-menu--disc').addClass('white');
    })
    $('.header__nav-menu--item').mouseleave(function() {
        $('.header__nav-menu--disc').removeClass('white');
    })
*/
    $('.news__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        dotsClass: 'header__slider-item--dots news__slider--dots',
        prevArrow: '.news__slider--arrow-left',
        nextArrow: '.news__slider--arrow-right',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
            },
        ]
    });
    $("a[href*=#]").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
          scrollTop: $(anchor.attr('href')).offset().top
        }, 19000);
        e.preventDefault();
        return false;
      });
})

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }

  
    