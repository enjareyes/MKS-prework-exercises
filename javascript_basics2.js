
// Write a jQuery event handler moveButton so that the button will randomly 
// change its position each time the user clicks it:

// $(document).on('click', '.jumping-bean', moveButton);

// You can use jQuery's css function to change the CSS of an element. 
// You may also use the following JavaScript function, which will return a random 
// number of px between 1 and 50:

// Change your html to start with 10 buttons. Make them all jump around 
// randomly in different directions, starting on page load.
// Every time a button is clicked, make the font size becomes smaller, and 
// make it move faster and/or farther. When it gets clicked three times, remove it from the page.
// Add a timer for how long a user takes to defeat all 10 buttons on the page.

var buttonCounter = 10;
var startime = Math.floor(Date.now() / 1000);
console.log(startime);

var randomPx = function () {
  return Math.floor(Math.random() * 800) + 'px';
};


$('.jumping-bean').css('background-color', 'lightblue');


function buttonController(elementId) {
  this.elementId = elementId,
  this.speed = 2000,
  this.counter = 0,
  this.fontsize = 25,
  this.jump = function() {
    var element = $(elementId);
    element.css('top', randomPx());
    element.css('right', randomPx());
  },
  this.infiniteJump = function() {
    var that = this;
    setTimeout(function(){
      var element = $(that.elementId);
      element.css('top', randomPx());
      element.css('right', randomPx());
      element.css('font-size', that.fontsize)
      that.infiniteJump();
    }, that.speed);
  },
  this.speedupSmallerfont = function () {
    var that = this;
    $(that.elementId).on('click', function() {
      if (that.counter == 2) {
        $('button').remove(that.elementId); 
        buttonCounter -= 1
        if(buttonCounter == 0) {
          var endtime = Math.floor(Date.now() / 1000);
            console.log('Your total time is: ' + (endtime-startime)  + 'seconds')
        }
      }
      that.counter +=1;
      that.speed -= 500;
      that.fontsize -= 5;
    });
  }
}


var button1Controller = new buttonController('#button-1');
button1Controller.infiniteJump();
button1Controller.speedupSmallerfont();

var button2Controller = new buttonController('#button-2');
button2Controller.infiniteJump();
button2Controller.speedupSmallerfont();

var button3Controller = new buttonController('#button-3');
button3Controller.infiniteJump();
button3Controller.speedupSmallerfont();

var button4Controller = new buttonController('#button-4');
button4Controller.infiniteJump();
button4Controller.speedupSmallerfont();

var button5Controller = new buttonController('#button-5');
button5Controller.infiniteJump();
button5Controller.speedupSmallerfont();

var button6Controller = new buttonController('#button-6');
button6Controller.infiniteJump();
button6Controller.speedupSmallerfont();

var button7Controller = new buttonController('#button-7');
button7Controller.infiniteJump();
button7Controller.speedupSmallerfont();

var button8Controller = new buttonController('#button-8');
button8Controller.infiniteJump();
button8Controller.speedupSmallerfont();

var button9Controller = new buttonController('#button-9');
button9Controller.infiniteJump();
button9Controller.speedupSmallerfont();

var button10Controller = new buttonController('#button-10');
button10Controller.infiniteJump();
button10Controller.speedupSmallerfont();


// ------------------------------------------------------------
// counter = {};
// speed = {};

// for(var i = 8 ; i <= 80; i++){
//   var selector = '#button-' + 'i'
//   buttonController(selector);
// }

