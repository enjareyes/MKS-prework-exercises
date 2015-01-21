
// Write a jQuery event handler moveButton so that the button will randomly 
// change its position each time the user clicks it:

// $(document).on('click', '.jumping-bean', moveButton);

// You can use jQuery's css function to change the CSS of an element. 
// You may also use the following JavaScript function, which will return a random 
// number of px between 1 and 50:

var randomPx = function () {
  return Math.floor(Math.random() * 800) + 'px';
};


$('.jumping-bean').css('background-color', 'lightblue');
// $('.jumping-bean').css('font-size', 'xx-large');

// var moveButton = function() {
//   $(this).css('margin-left', randomPx);
//   $(this).css('margin-top', randomPx);
// };

// $(document).on('click', '.jumping-bean', moveButton);


//Hardcoded it works.

// var moveButtonAuto = function() {
//   var a = randomPx();
//   var b = randomPx();
//   $('.jumping-bean').css('margin-left', a);
//   $('.jumping-bean').css('margin-top', b);
//   setTimeout(moveButtonAuto, 1000);
  
//   console.log(a + b)
// };

// non-hardcoded working version: 

// var moveButtonAuto = function(selector) {
//   $(selector).css('margin-left', randomPx);
//   $(selector).css('margin-top', randomPx);

//   var moveit = function () {
//     return moveButtonAuto(selector)
//   }
  
//   return setTimeout(moveit, 2000);
// };

// $(document).ready(moveButtonAuto('.jumping-bean'));




//updated to add speeding up after click

var moveButtonAuto = function(selector, set_time_method_time) {
  $(selector).css('margin-left', randomPx);
  $(selector).css('margin-top', randomPx);

  var moveit = function () {
    return moveButtonAuto(selector, set_time_method_time)
  }
  
  setTimeout(moveit, set_time_method_time);
};

$(document).ready(moveButtonAuto('#button-1', 2000));
$(document).ready(moveButtonAuto('#button-2', 2000));


//Hardcoded working version:

// var counter=0

// var after_clicks = function() {
//   if (counter === 3) {
//     $('button').remove('#button-1'); //delete after three clicks
//   } else {
//     counter+=1
//     console.log(counter);
//     $('#button-1').css('font-size', 'smaller'); //make font smaller
//   }  
// };

// $('.jumping-bean').on('click', after_clicks);



//Translated to non-hard-coded working version:

// var counter=0

// var after_clicks = function(elementid) {
//   if (counter === 3) {
//     $('button').remove(elementid); //delete after three clicks
//   } else {
//     counter+=1
//     console.log(counter);
//     $(elementid).css('font-size', 'smaller'); //make font smaller
//   }  
// };

// var return_clicks = function(id) {
//   return after_clicks('#button-1')
// }

// $('.jumping-bean').on('click', return_clicks);


// Working version for a single button

// var button_container = {}

// function update_button_container(element_id) {
//   button_container[element_id] +=1
// }


// var after_clicks = function(elementid, counter) {
//   if (counter === undefined) {
//     var counter = 0 
//   } else {
//     var counter = counter
//   }

//   if (counter === 3) {
//     return $('button').remove(elementid); //deletes after three clicks
//   } else {
//     counter += 1;
//     update_button_container(elementid); //updating object
//     console.log(counter);
//     $(elementid).css('font-size', 'smaller'); //make font smaller
//     //make speed faster
//   };
//   // after_clicks(elementid, counter)   
// }

// var call_functions = function(element_id) {
//   if (button_container.hasOwnProperty(element_id)) {
//     var the_counter = button_container[element_id];
//     // console.log(the_counter)
//     // console.log(button_container)
//     after_clicks(element_id, the_counter);
//   } else {
//     button_container[element_id] = 0
//     return after_clicks(element_id, 0)
//   }
// };

// var return_call_functions_button1 = function() {
//   return call_functions('#button-1')
// }

// // var return_call_functions_button2 = function() {
// //   return call_functions('#button-2')
// // }


// $('button').on('click', return_call_functions_button1);
// // $('button').on('click', return_call_functions_button2);

// // $('button').on('click', second_button);



//Working version with the speed up after click added: 


// function _clicks_constructor(element_id) {
//   this.id = element_id,
//   this.counter = 0,
//   this.speed = 2000,
//   this.return_call_functions = function() {
//     return this.after_clicks();
//   }
//   this.speedup = function() {
//     this.speed = this.speed-200;
//     return moveButtonAuto(this.id, this.speed);
//   }
// };


// _clicks_constructor.prototype.after_clicks= function() {

//   if (this.counter == 3) {
//     return $('button').remove(this.id); //deletes after three clicks
//   } else {
//     this.counter += 1;
//     // console.log(this.counter);
//     $(this.id).css('font-size', 'smaller'); //make font smaller
//     this.speedup(); // adjust setTimeout - make speed faster
//     // console.log(this.speed)  
//   };
// };



// var button1 = new _clicks_constructor('#button-1');
// var button1click = function() {
//   button1.return_call_functions();
// }

// var button2 = new _clicks_constructor('#button-2');
// var button2click = function() {
//   button2.return_call_functions();
// }


// $('button').on('click', button1click);

// $('button').on('click', button2click);




//Now to separate the objects...


function _clicks_constructor(element_id) {
  this.id = element_id,
  this.counter = 0,
  this.speed = 2000,
  this.return_call_functions = function() {
    return this.after_clicks();
  }
  this.speedup = function() {
    this.speed = this.speed-200;
    return moveButtonAuto(this.id, this.speed);
  }
};


_clicks_constructor.prototype.after_clicks= function() {

  if (this.counter == 3) {
    return $('button').remove(this.id); //deletes after three clicks
  } else {
    this.counter += 1;
    // console.log(this.counter);
    $(this.id).css('font-size', 'smaller'); //make font smaller
    this.speedup(); // adjust setTimeout - make speed faster
    // console.log(this.speed)  
  };
};


var button1 = new _clicks_constructor('#button-1');
var button1click = function() {
  button1.return_call_functions();
}

var button2 = new _clicks_constructor('#button-2');
var button2click = function() {
  button2.return_call_functions();
}


$('button').on('click', button1click);
$('button').on('click', button2click);






