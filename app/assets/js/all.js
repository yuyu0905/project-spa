$(document).ready(function () {
  let isLogin = !!localStorage.getItem("login");
  if(isLogin) {
    $("#login-btn").addClass("d-none");
    $("#user-btn").removeClass("d-none");
    $(".user-menu").removeClass("d-none");
  } else {
    $("#login-btn").removeClass("d-none");
    $("#user-btn").addClass("d-none");
    $(".user-menu").addClass("d-none");
  }

  // 滾動視差
  AOS.init();

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
    speed: 1500,
    autoplay: {
      disableOnInteraction: false,
      delay: 0
    },
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
    speed: 1500,
    autoplay: {
      disableOnInteraction: false,
      delay: 0
    },
    // 左右箭頭
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // 日期套件
  const elem = document.getElementById('reserve-date');
  if(elem) {
    const datepicker = new Datepicker(elem, {
      format: "yyyy/mm/dd",
      language: "zh-TW",
      todayBtn: true,
      todayBtnMode: 1,
      todayHighlight: true,
    });
  
    elem.addEventListener('changeDate', function(e) {
      console.log('choose date is', datepicker.getDate("yyyy/mm/dd"));
    });
  }

  // 療程類別
  $(".service-type-btn").click(function(e) {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    let filterType = $(this).attr("data-type");

    $(".service-list > div").map(function(i, item){
      // console.log(item, i);
      if(filterType === "all") {
        $(item).show();
      } else if($(item).attr("data-service") === filterType) {
        $(item).show();
      } else {
        $(item).hide();
      }
    });
  });

  // 選擇按摩師
  $(".service-reserve-masseur").click(function(e) {
    $(this).addClass('active');
    $(this).parent().siblings().children('div').removeClass('active');
  });

  // 預約時間
  $(".service-reserve-time-btn").click(function(e) {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  });


});

function login() {
  let forms = $("#login-form");
  if(!forms[0].checkValidity()) {
    forms[0].reportValidity();
    return false;
  }

  let loginModal = document.getElementById('loginModal');
  let modal = bootstrap.Modal.getInstance(loginModal);
  modal.hide();
  localStorage.setItem("login", "login");
  $("#login-btn").addClass("d-none");
  $("#user-btn").removeClass("d-none");
  $(".user-menu").removeClass("d-none");

  // 預約療程,登入後導頁至預約頁面
  if(!!localStorage.getItem("reserve")) {
    window.location.href =  window.location.pathname.slice(0, window.location.pathname.lastIndexOf("/")) + "/service-reserve.html";
    localStorage.removeItem("reserve");
  }
}

function logout() {
  let logoutModal = document.getElementById('logoutModal');
  let modal = bootstrap.Modal.getInstance(logoutModal);
  modal.hide();
  localStorage.removeItem("login");
  $("#login-btn").removeClass("d-none");
  $("#user-btn").addClass("d-none");
  $(".user-menu").addClass("d-none");
}

function goReserve() {
  // 確認是否登入
  let isLogin = !!localStorage.getItem("login");
  if(isLogin) {
    window.location.href = window.location.pathname.slice(0, window.location.pathname.lastIndexOf("/")) + "/service-reserve.html";
  } else {
    localStorage.setItem("reserve", "reserve");
    let loginModal = document.getElementById('loginModal');
    let modal = new bootstrap.Modal(document.getElementById('loginModal'), {
      keyboard: false
    })
    modal.show(loginModal);
  }
}