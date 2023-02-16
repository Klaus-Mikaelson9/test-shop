$.fn.slider = function (options) {
    // Vars
    const params = $.extend({
        speed: 300,
        arrows: true,
        dots: true
    }, options);

    const $sliderContainer = $('.slider-container');
    const $slidesRow = $('.slider-container .slides-row');
    const $slides = $('.slider-container .slides-row .slide');

    const slideWidth = $sliderContainer.width();
    const slidesCount = $slides.length;

    let currentSlide = 0;
    let distance = 0;

    // Controllers
    function move(x) {
        distance = x * slideWidth * (-1);
        $slidesRow.css('transform', 'translateX(' + distance + 'px)');

        if (params.dots) {
            $('.dot').removeClass('active');
            $('.dot[data-index="' + x + '"]').addClass('active');
        }
    }
    
    // Init actions
    $slidesRow.css('width', (slideWidth * slidesCount + 100) + 'px');
    $slidesRow.css('transition', params.speed + 'ms');
    $slides.css('width', slideWidth + 'px');

    if (params.arrows) {
        $sliderContainer.append('<a class="arrow prev">Prev</a><a class="arrow next">Next</a>');       
    }
    if (params.dots) {
        let dotsTemplate = '';
        dotsTemplate += '<div class="dots">';
        for (let i = 0; i < slidesCount; i++) {
            dotsTemplate += '<a class="dot" data-index="' + i + '"></a>';
        }
        dotsTemplate += '</div>';
        $sliderContainer.append(dotsTemplate);
    }

    move(currentSlide);

    // Actions
    if (params.arrows) {
        $('.arrow.prev').on('click', function () {
            currentSlide--;
            if (currentSlide < 0) currentSlide = slidesCount - 1;
            move(currentSlide);
        });
        $('.arrow.next').on('click', function () {
            currentSlide++;
            if (currentSlide >= slidesCount) currentSlide = 0;
            move(currentSlide);
        });
    }
    if (params.dots) {
        $('.dot').on('click', function () {
            currentSlide = $(this).attr('data-index');
            move(currentSlide);
        });
    }
}