$(function() {
  // 嚴選療程
  const swiper = new Swiper(".swiper-course", {
    slidesPerView: 1,
    spaceBetween: 0,
    //多欄
    breakpoints: {
      992: {
        slidesPerView: 2,
        spaceBetween: 8,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 8,
      }
    },
    loop: true,
    // speed: 1500,
    // autoplay: {
    //   disableOnInteraction: false,
    //   delay: 0
    // },
    // 左右箭頭
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // 環境介紹
  const  swiperSpace = new Swiper(".swiper-space", {
    slidesPerView: 1,
    spaceBetween: 0,
    //多欄
    breakpoints: {
      992: {
        slidesPerView: 2,
        spaceBetween: 8,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 8,
      }
    },
    loop: true,
    // 左右箭頭
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
});