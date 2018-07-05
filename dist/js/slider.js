const slickEl = $('.slider');

slickEl.slick({
    infinite: true,
    centerMode: true,
    centerPadding: '145px',
    slidesToShow: 1,
    prevArrow: '.previous',
    nextArrow: '.next',
    dots: false,
    responsive: [
        {
            breakpoint: 540,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '130px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '115px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 415,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '100px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 361,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '92px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 321,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '82px',
                slidesToShow: 1
            }
        }
    ]
});