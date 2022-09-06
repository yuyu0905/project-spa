"use strict";

$(document).ready(function () {
  var isLogin = !!localStorage.getItem("login");

  if (isLogin) {
    $("#login-btn").addClass("d-none");
    $("#user-btn").removeClass("d-none");
  } else {
    $("#login-btn").removeClass("d-none");
    $("#user-btn").addClass("d-none");
  } // 滾動視差


  AOS.init(); // 嚴選療程

  var swiper = new Swiper(".swiper-course", {
    slidesPerView: 1,
    spaceBetween: 0,
    //多欄
    breakpoints: {
      992: {
        slidesPerView: 2,
        spaceBetween: 8
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 8
      }
    },
    loop: true,
    speed: 1500,
    autoplay: {
      disableOnInteraction: false,
      delay: 0
    },
    // 左右箭頭
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }); // 環境介紹

  var swiperSpace = new Swiper(".swiper-space", {
    slidesPerView: 1,
    spaceBetween: 0,
    //多欄
    breakpoints: {
      992: {
        slidesPerView: 2,
        spaceBetween: 8
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 8
      }
    },
    loop: true,
    speed: 1500,
    autoplay: {
      disableOnInteraction: false,
      delay: 0
    },
    // 左右箭頭
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
});

function login() {
  var forms = $("#login-form");

  if (!forms[0].checkValidity()) {
    forms[0].reportValidity();
    return false;
  }

  var loginModal = document.getElementById('loginModal');
  var modal = bootstrap.Modal.getInstance(loginModal);
  modal.hide();
  localStorage.setItem("login", "login");
  $("#login-btn").addClass("d-none");
  $("#user-btn").removeClass("d-none");
}

function logout() {
  var logoutModal = document.getElementById('logoutModal');
  var modal = bootstrap.Modal.getInstance(logoutModal);
  modal.hide();
  localStorage.removeItem("login");
  $("#login-btn").removeClass("d-none");
  $("#user-btn").addClass("d-none");
}
//# sourceMappingURL=all.js.map
