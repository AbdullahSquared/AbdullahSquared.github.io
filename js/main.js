
function changeImage() {
  var image = document.getElementById('img');
  if (image.src.match('FULTZ')){
    image.src = "img/Picture%201.png";
  }
  else if(image.src.match("DEMAR")){
    image.src = "img/FULTZ.png";
  }
  else{
    image.src = "img/DEMAR.png";
  }
}


function hey() {
  alert("Thank you for your Submission")
}


(function($) {
  "use strict";


  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });


  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  $('#sidebar-wrapper .js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });

  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

})(jQuery);


function splitString(){
  var str = document.getElementById("addtext").value;

  var s = str.split(" ");

  alert("Word count is: "+s.length);

}

function showChars(){
  var result="";

  var str = document.getElementById("addtext").value;

  for (var c = 0; c < str.length; c++) {
    result+=(str.charAt(c)+"\n");
  }
  alert(result);}
