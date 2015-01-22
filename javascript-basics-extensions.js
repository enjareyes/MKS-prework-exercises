// Create a function square that takes an integer argument and returns its value squared.
// Create a function cube that takes an integer argument and returns its value cubed.
// Create a function sumOfFunctions that takes two functions and an integer as arguments, 
// and returns the sum of the results of the two functions.


var square = function(integer) {
  return (integer * integer);
}

// console.log(square(2)) //4


var cube = function(integer) {
  return Math.pow(integer, 3);
}

// console.log(cube(2)) //8


var combine_funcs = function(integer, func1, func2) {
  var x = func1(integer);
  var y = func2(integer);
  return (x + y);
};

console.log(combine_funcs(2, square, cube)); //12