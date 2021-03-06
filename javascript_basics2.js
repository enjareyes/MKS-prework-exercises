
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


//Initial code calling outline
// var button1Controller = new buttonController('#button-1');
// button1Controller.infiniteJump();
// button1Controller.speedupSmallerfont();


var start_buttons = function(id, button_var_name) {
  var button_var_name = new buttonController(id);
  button_var_name.infiniteJump();
  button_var_name.speedupSmallerfont();
}

for(var x = 0; x<=10; x++) {
  the_id = '#button-' + x 
  var_name = 'button' + x + "controller"
  start_buttons(the_id, var_name);
}



