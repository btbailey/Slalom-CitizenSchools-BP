$(document).foundation();


// ABOUT US PAGE JAVASCRIPT //

function showClock() {
 $('#clock-container').removeClass('hidden');
};

function hideClock() {
  $('#clock-container').addClass('hidden');
};

function showSecretMessage() {
  window.alert('this is coming from public/javascripts/main.js -- replace this text with your own secret message!');
};

function selfDestruct() {
  $('.warning').prop('disabled', true);
  var timeLeft = 4;

  setInterval(function(){
    if (timeLeft >= 0) {
      $('.count-down-timer').html("<h1>" + timeLeft + "</h1>");
      timeLeft -=1 ;
    }
  }, 1000);

  setTimeout(function(){ 
    $('#about-us').html('');
    $('#additional-content').html('');
    $('#footer').html('');
    this.clearInterval();
  }, 6000);
  
};

function watchAVideo() {
  $('.js-video-container').html("<video autoplay muted src='http://clips.vorwaerts-gmbh.de/VfE_html5.mp4' />");
};

function gimmeAFact() {
  $('.fact-container').append(facts[Math.floor((Math.random() * 10) + 1)]);
};

facts = [
"Cat's urine glows under a black light.",
"Many people fear catching a protozoan disease, Toxoplasmosis, from cats. This disease can cause illness in the human, but more seriously, can cause birth defects in the unborn. Toxoplasmosis is a common disease, sometimes spread through the feces of cats. It is caused most often from eating raw or rare beef. Pregnant women and people with a depressed immune system should not touch the cat litter box. Other than that, there is no reason that these people have to avoid cats.",
"Kittens lose their baby teeth!! At three to four months the incisors erupt. Then at four to six months, they lose their canines, premolars and molars. By the time they are seven months old, their adult teeth are fully developed. This is one of the ways a vet (or you) can tell the age of a kitten.",
"Cats have been domesticated for half as long as dogs have been.",
"It has been scientifically proven that stroking a cat can lower one's blood pressure.",
"Like birds, cats have a homing ability that uses its biological clock, the angle of the sun, and the Earth's magnetic field. A cat taken far from its home can return to it. But if a cat's owners move far from its home, the cat can't find them.",
"A tomcat (male cat) can begin mating when he is between 7 and 10 months old.",
"Neutering a cat extends its life span by two or three years.",
"After humans, mountain lions have the largest range of any mammal in the Western Hemisphere.",
"Cats lived with soldiers in trenches, where they killed mice during World War I."
];


// Send Feedback Email
$('#send-button').click(function(){
  
  var name;
  var email;
  var message;
  
  name = $('#contact-name').val();
  email = $('#contact-email').val();
  message = $('#contact-message').val();

  console.log('sending email', {
    name: name,
    email: email,
    message: message
  } );
  
  $.ajax('/feedback', {
    data: {
      name: name,
      email: email,
      message: message
    }
  })
    .done(function(response){
    alert('pass');
  });
  
});
