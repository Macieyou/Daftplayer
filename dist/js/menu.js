$(function () {

    $('.menuBtn, .back').click(function () {
        $('.more').toggleClass('toggle');
    });
    $('.playlistBtn').click(function () {
        $('.playlist-wrapper').addClass('toggle');
    });
    $('.backBtn').click(function () {
        $('.playlist-wrapper').removeClass('toggle');
    });
    $('.back').click(function () {
        $('.more').removeClass('toggle');
    });

});

let isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS());
    }
};
if (isMobile.any()) {
    let main = document.querySelector('.main-view');
    main.classList.add("flex");
}