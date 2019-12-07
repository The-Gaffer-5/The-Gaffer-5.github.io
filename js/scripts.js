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
startFade('.c7', 1400)


// ---------------MODAL---------------

var teacherrepository = (function () {




  var repository = [
    {
      tag: "nerd",
      name: "Nerdflix",
      instruments: "https://prescottflixapp.herokuapp.com/client/",
      github: "https://github.com/The-Gaffer-5/Nerdflix",
      description: "MERN stack (MongoDB, Express, React, and Node.js) using password hashing for CRUD methods. Allows you to favorite/unfavorite different movies once logged in.",
      imageUrl: "css/img/nerdflixcorn.png",
      daClass: "c1"
    },
    {
      tag: "vue",
      name: "Fello",
      instruments: "https://the-gaffer-5.github.io/fello-deploy/",
      github: "https://github.com/The-Gaffer-5/fello-app",
      description: "Small app that allows you to add/remove TODO items.",
      imageUrl: "css/img/fello.png",
      daClass: "c7"
    },
    {
      tag: "mma",
      name: "Mountainside Music Academy",
      instruments: "https://www.mountainsidemusicacademy.com/",
      github: "https://www.mountainsidemusicacademy.com/",
      description: "A website for a music school",
      imageUrl: "css/img/mtnipad2.png",
      daClass: "c2"
    },
    {
      tag: "din",
      name: "What's for Dinner",
      instruments: "https://the-gaffer-5.github.io/real-cookbook-app/",
      github: "https://github.com/The-Gaffer-5/real-cookbook-app",
      description: "jQuery website that pulls data from food2fork api",
      imageUrl: "css/img/dinnercarrot.png",
      daClass: "c3"
    },
    {
      tag: "meet",
      name: "Meetup App",
      instruments: "https://the-gaffer-5.github.io/meetup/",
      github: "https://github.com/The-Gaffer-5/meetup",
      description: "Meetup Mockup is a Web Progressive App that uses the meetup API and AWS. Data visualization is displayed where applicable.",
      imageUrl: "css/img/placeholder.png",
      daClass: "c4"
    },
    {
      tag: "clark",
      name: "Clark's Domebreaker",
      instruments: "https://humbabah.itch.io/clarksdomebreaker",
      github: "https://humbabah.itch.io/clarksdomebreaker",
      description: "Game made at a gamejam",
      imageUrl: "css/img/clarks.png",
      daClass: "c5"
    },
    {
      tag: "quiz",
      name: "Angular Quiz App",
      instruments: "https://the-gaffer-5.github.io/my-awesome-quiz-app/",
      github: "https://github.com/The-Gaffer-5/my-awesome-quiz-app",
      description: "Angular quiz app that tests your knowledge of French or Math.",
      imageUrl: "css/img/quiz.png",
      daClass: "c6"
    },

  ];


  function addNewCard(teacher) {
    var $newTeacher = $('<div class="project-card" id="box-' + teacher.tag + '"><div class="' + teacher.daClass + '"><a><img class="little-comp" src="' + teacher.imageUrl + '"><h3 id="' + teacher.tag + '">' + teacher.name + '</h3></a></div></div>');
    $(".my-projects").append($newTeacher);
    var $addModal = $('<div id="modal-' + teacher.tag + '" class="modal"><div class="modal-content"><span class="close">&times;</span><h1 id="mod-' + teacher.tag + '">' + teacher.name + '</h1><img class="modal-img" src="' + teacher.imageUrl + '" alt=""><p>' + teacher.description + '</p><a target="_blank" class="modal-link" href="' + teacher.instruments + '">Visit the Site</a><a target="_blank" class="modal-link" href="' + teacher.github + '">Github</a></div>');
    $("#big-wrapper").append($addModal);
    //makeModal(teacher);
  };

  function getAll() {
    return repository;
  }



  function addModal(teacher) {
    $('#box-' + teacher.tag).click(function () {
      if ($("#" + teacher.tag).text() === $("#mod-" + teacher.tag).text()) {
        document.getElementById("modal-" + teacher.tag).style.display = "block";
      } else {
        console.log("modal error")


      }
      window.onclick = function (event) {
        if (event.target === document.getElementById("modal-" + teacher.tag)) {
          document.getElementById("modal-" + teacher.tag).style.display = "none";
          //$addModal = $('')
          $(".teachName").text("");
        }
      }
      $('.close').click(function () {
        document.getElementById("modal-" + teacher.tag).style.display = "none";
      })
    })
  }



  return {
    addNewCard: addNewCard,
    addModal: addModal,
    getAll: getAll,
  }



})();

teacherrepository.getAll().forEach(function (eachTeach) {
  teacherrepository.addNewCard(eachTeach);
  $('#' + eachTeach.tag).click(teacherrepository.addModal(eachTeach));

})



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


