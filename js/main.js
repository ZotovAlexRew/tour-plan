$(document).ready(function (){
  const hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  const reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },

  });

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function(){
    console.log('Клик по кнопке меню');
    document.querySelector(".navbar-button")
    .classList.toggle("navbar-button--visible");
  });

  var modelButton = $("[data-toggle=model]");
  var closeModelButton = $(".model__close");
  modelButton.on("click", openModel);
  closeModelButton.on("click", closeModel);

  function openModel() {
    var modelOverlay = $(".model__overlay");
    var modelDialog = $(".model__dialog");
    modelOverlay.addClass("model__overlay--visible");
    modelDialog.addClass("model__dialog--visible");
  }
  function closeModel(event) {
    event.preventDefault();
    var modelOverlay = $(".model__overlay");
    var modelDialog = $(".model__dialog");
    modelOverlay.removeClass("model__overlay--visible");
    modelDialog.removeClass("model__dialog--visible");
  }

  $(document).keydown(function (e) {
    // ESCAPE key pressed
    if (e.keyCode == 27) {
      var modalOverlay = $(".model__overlay");
      var modalDialog = $(".model__dialog");
      modalOverlay.removeClass("model__overlay--visible");
      modalDialog.removeClass("model__dialog--visible");
    }
  });

  // Обработка форм
  $(".model__form").each(function() {
    $(this).validate({
      errorClass: "inval",
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        email: {
          required: true,
          email: true,
        },
        phone: {
          minlength: 16,
        },
      },
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Your name should not be shorter than 2 letters",
        },
        email: {
          required: "We need your email address",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "We need your phone number",
        },
      },
    });
  })
  $(".footer__form").each(function() {
    $(this).validate({
      errorClass: "inval",
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        email: {
          required: true,
          email: true,
        },
        phone: {
          minlength: 16,
        },
      },
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Your name should not be shorter than 2 letters",
        },
        email: {
          required: "We need your email address",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "We need your phone number",
          minlength: "Your number must be 10 digits",
        },
      },
    });
  })
  $(".form").each(function() {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Your name should not be shorter than 2 letters",
        },
        email: {
          required: "We need your email address",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "We need your phone number",
          minlength: "Your number must be 10 digits",
        },
      },
    });
  })
  $(document).ready(function(){
    $("#phone").mask("+7(000)000-00-00");
    $("#phone1").mask("+7(000)000-00-00");
  });
   AOS.init();
  });