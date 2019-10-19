var wasClicked = false

$('.hamburger').click(function () {
  if (wasClicked === false) {
    $('.hamburger').toggleClass('is-active');
    $('#overlay').toggleClass('show');
    $('#medium-wrapper').css({ 'left': -200 })
    $('#menu').css({ 'right': 0 });
    wasClicked = true;
  } else {
    $('.hamburger').toggleClass('is-active');
    $('#overlay').toggleClass('show');
    $('#medium-wrapper').css({ 'left': 0 })
    $('#menu').css({ 'right': '-400px' });
    wasClicked = false;
  }
});

$('#overlay').click(function () {
  $('.hamburger').toggleClass('is-active');
  $('#overlay').toggleClass('show');
  $('#medium-wrapper').css({ 'left': 0 })
  $('#menu').css({ 'right': '-30%' });
  wasClicked = false;
})

var images = new Array('css/img/dinner.jpg', 'css/img/mma3.jpg', 'css/img/nerdflix.jpg');
var nextimage = 1;
var offsetimage = 0;
doSlideshow();
prepFade();



function doSlideshow() {
  Waypoint.refreshAll()
  if (nextimage >= images.length) { nextimage = 0; }
  $('.slide-show-area')
    .css({ 'background-image': 'url(' + images[nextimage++] + ')' })
    .fadeIn(500, function () {
      setTimeout(doSlideshow, 3000);
    });
}

function prepFade() {
  if (offsetimage >= images.length) { offsetimage = 0; }
  $('.slide-show-area-overlay')
    .css({ 'background-image': 'url(' + images[offsetimage++] + ')' })
    .fadeIn(500, function () {
      $('.slide-show-area-overlay').css({ 'opacity': 1 });
      $('.slide-show-area-overlay').fadeTo(1000, 0);
      setTimeout(prepFade, 3000);
    })
}

$('.uk-flag-btn').click(function () {
  $('.swedish-flag-btn').toggleClass('show');
  $('.uk-flag-btn').toggleClass('show');
  $('.menu-title').html("PROJECTS");
  $('.large-headline').html("WEB DEVELOPER.<br>WHO WANTS<br>TO BE IN SWEDEN.");
  $('.blurb').html("Hi! I'm Prescott. I like coding,<br> design and being in the woods.");
  $('.welcome').html("Welcome");
  $('.scroll-down').html("Scroll down for some of my<br>mose recent projects.");
  $('.about-me-title').html("ABOUT ME");
  $('.change-language').html("OLIKA SPRÅK")

})

$('.swedish-flag-btn').click(function () {
  $('.uk-flag-btn').toggleClass('show');
  $('.swedish-flag-btn').toggleClass('show');
  $('.menu-title').html("PROJEKT")
  $('.large-headline').html("WEBBUTVECKLARE.<br>VEM VILL<br>VARA I SVERIGE.");
  $('.blurb').html("Hej! Jag heter Prescott. Jag tycker om coding,<br> design och att blir i skogen.");
  $('.welcome').html("Välkommen");
  $('.scroll-down').html("Rulla ner för några av mina<br>mest nyliga projekt.");
  $('.about-me-title').html("OM MIG");
  $('.change-language').html("CHANGE LANGUAGE")
})

// --------------------SCROLLING-ANIMATIONS---------------------

// $('.big-wrapper').waypoint(function (direction) {
//   $('.little-comp').addClass('animated pulse infinite');
// });

function startFade(theElement, msDelay) {
  $('#trigger').waypoint(function (direction) {
    function delayStart() {
      $(theElement).addClass('animated fadeInUp');
    }
    setTimeout(delayStart, msDelay)
  });
}

startFade('.c1', 100)
startFade('.c2', 300)
startFade('.c3', 500)
startFade('.c4', 700)
startFade('.c5', 900)
startFade('.c6', 1100)



//-------------------LOADING SCREEN----------------------//
// function onReady(callback) {
//   var intervalId = window.setInterval(function () {
//     if (document.getElementsByTagName('body')[0] !== undefined) {
//       window.clearInterval(intervalId);
//       callback.call(this);
//     }
//   }, 1500);
// }

// function setVisible(selector, visible) {
//   document.querySelector(selector).style.display = visible ? 'block' : 'none';
// }

// onReady(function () {
//   setVisible('#big-wrapper', true);
//   setVisible('#loading', false);
// });