$(document).ready(function() {
  // == URL Value

  var url = window.location.href ;
  var filename = url.substring(url.lastIndexOf('='));
  var indexfile = url.substring(url.lastIndexOf('/')+1);
  var home = "=home";
  var about = "=about";
  var menu = "=menu";
  var reservation = "=reservation";
  var contact = "=contact";
  var post = "=post";
  var shop = "=shop";
  var blog = "=blog";
  var error = "=error";

  if ( filename === home ){
    // Show Homepage
    $('.home-content').addClass('d-block');
    $('.home-content').removeClass('d-none');

    // Remove All Page
    $('.error-content').addClass('d-none');
    $('.about-content').addClass('d-none');
    $('.menu-content').addClass('d-none');
    $('.reservation-content').addClass('d-none');
    $('.contact-content').addClass('d-none');
    $('.post-content').addClass('d-none');
    $('.shop-content').addClass('d-none');
    $('.blog-content').addClass('d-none');

  }else{

    switch(filename) {

     case about:
      //execute code block 1
      // Show About
      $('.about-content').addClass('d-block');
      $('.about-content').removeClass('d-none');

      // Remove All Page
      $('.error-content').addClass('d-none');
      $('.home-content').addClass('d-none');
      $('.menu-content').addClass('d-none');
      $('.reservation-content').addClass('d-none');
      $('.contact-content').addClass('d-none');
      $('.post-content').addClass('d-none');
      $('.shop-content').addClass('d-none');
      $('.blog-content').addClass('d-none');

      break;

    case menu:
      // Show Menu
      $('.menu-content').addClass('d-block');
      $('.menu-content').removeClass('d-none');

      // Remove All Page
      $('.error-content').addClass('d-none');
      $('.about-content').addClass('d-none');
      $('.home-content').addClass('d-none');
      $('.reservation-content').addClass('d-none');
      $('.contact-content').addClass('d-none');
      $('.post-content').addClass('d-none');
      $('.shop-content').addClass('d-none');
      $('.blog-content').addClass('d-none');

      break;

    case reservation:
      // Show Reservation
      $('.reservation-content').addClass('d-block');
      $('.reservation-content').removeClass('d-none');

      // Remove All Page
      $('.error-content').addClass('d-none');
      $('.about-content').addClass('d-none');
      $('.home-content').addClass('d-none');
      $('.menu-content').addClass('d-none');
      $('.contact-content').addClass('d-none');
      $('.post-content').addClass('d-none');
      $('.shop-content').addClass('d-none');
      $('.blog-content').addClass('d-none');

      break;

   case contact:
     // Show Contact
     $('.contact-content').addClass('d-block');
     $('.contact-content').removeClass('d-none');

     // Remove All Page
     $('.error-content').addClass('d-none');
     $('.about-content').addClass('d-none');
     $('.menu-content').addClass('d-none');
     $('.home-content').addClass('d-none');
     $('.reservation-content').addClass('d-none');
     $('.post-content').addClass('d-none');
     $('.shop-content').addClass('d-none');
     $('.blog-content').addClass('d-none');

     break;

   case post:
     // Show Post
     $('.post-content').addClass('d-block');
     $('.post-content').removeClass('d-none');

     // Remove All Page
     $('.error-content').addClass('d-none');
     $('.about-content').addClass('d-none');
     $('.menu-content').addClass('d-none');
     $('.home-content').addClass('d-none');
     $('.contact-content').addClass('d-none');
     $('.reservation-content').addClass('d-none');
     $('.shop-content').addClass('d-none');
     $('.blog-content').addClass('d-none');

     break;

   case shop:
     // Show Shop
     $('.shop-content').addClass('d-block');
     $('.shop-content').removeClass('d-none');

     // Remove All Page
     $('.error-content').addClass('d-none');
     $('.about-content').addClass('d-none');
     $('.menu-content').addClass('d-none');
     $('.home-content').addClass('d-none');
     $('.contact-content').addClass('d-none');
     $('.post-content').addClass('d-none');
     $('.reservation-content').addClass('d-none');
     $('.blog-content').addClass('d-none');

     break;

   case blog:
     // Show Blog
     $('.blog-content').addClass('d-block');
     $('.blog-content').removeClass('d-none');

     // Remove All Page
     $('.error-content').addClass('d-none');
     $('.about-content').addClass('d-none');
     $('.menu-content').addClass('d-none');
     $('.home-content').addClass('d-none');
     $('.contact-content').addClass('d-none');
     $('.post-content').addClass('d-none');
     $('.shop-content').addClass('d-none');
     $('.reservation-content').addClass('d-none');

     break;

     default:
       // Show Error
       $('.error-content').addClass('d-block');
       $('.error-content').removeClass('d-none');

       // Remove All Page
       $('.home-content').addClass('d-none');
       $('.about-content').addClass('d-none');
       $('.menu-content').addClass('d-none');
       $('.reservation-content').addClass('d-none');
       $('.contact-content').addClass('d-none');
       $('.post-content').addClass('d-none');
       $('.shop-content').addClass('d-none');
       $('.blog-content').addClass('d-none');
    }
  }

  $(".loadingPage").height($(window).height());
  $("body").niceScroll({
    cursorcolor: "#181818",
    cursorwidth: "5px",
    background: "rgba(20,20,20,0.3)",
    cursorborderradius: 0,
    cursoropacitymin: 0.4,
    cursorborder: 0
  });
  $(".sp-wrap").smoothproducts();

  $(window).scroll(function() {
    if ($(this).scrollTop()) {
      $("#toTop").fadeIn();
    } else {
      $("#toTop").fadeOut();
    }
  });

  $("#toTop").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });
  $(".loadingPage")
    .delay(10000)
    .fadeOut();

  $(".show_menu").click(function() {
    $("#navbarNav").animate({ opacity: "1" });
    $(".navbar-collapse .navbar-nav").animate({ marginLeft: "0" });
  });
  $(".back_memu").click(function() {
    $(".navbar-collapse .navbar-nav").animate({ marginLeft: "-50%" });
    $("#navbarNav").animate({ opacity: "0" });
  });
  $(".search_icon").click(function() {
    $(".search_element").toggle();
  });
});
