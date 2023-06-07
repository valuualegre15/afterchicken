var swiper = new swiper(".mySwiper-1",{
    slidesPerView:1,
    spaceBetween: 30,
    loop:true,
    pagination: {
        el:".swuiper-pagination",
        clickable: true,
    },
    navigation {
        nextE1:".swiper-button-next",
        prevE1:".swiper-button-prev",
    }
});


var swiper = new swiper(".mySwiper-2",{
    slidesPerView:3,
    spaceBetween: 20,
    loop:true,
    loopFillGroupWithBlanck:true,
        navigation{
        nextE1:".swiper-button-next",
        prevE1:".swiper-button-prev",
    },
    breakpoints : {
        0: {
            slidesPerView:1,
        },
        520: {
            slidesPerView:2,
        },
        950: {
            slidesPerView:3,
        }
    }
});

let tabInputs = document.querySelectorAll(".tabInput");
tabInputs.forEach(function(input) {
    input.addEventListener('change', function() {
    let id = input.ariaValueMax;
    let thisSwiper = document.getElementById('swiper' + id);
    thisSwiper.swiper.update();
})
});


