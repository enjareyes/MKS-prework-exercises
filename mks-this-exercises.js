// Partner Exercise #1.1
// Fix the following code (1 syntax error, 3 logic errors) so that the console logs successfully.

// var bagOfChips = {
//   count: 2
//   takeChip: function () {
//     if (count === 0) {
//       alert('No chips left!');
//     }
//     else {
//       count = count - 1;
//       alert('munch');
//     }
//   }
// };
// bagOfChips.takeChip();
// bagOfChips.takeChip();
// bagOfChips.takeChip();


// Fixed: 

// var bagOfChips = function(){
//   this.count= 2,
//   this.takeChip= function(){
//     if (this.count === 0) {
//       alert('No chips left!');
//     }
//     else {
//       this.count -= 1;
//       alert('munch');
//     }
//   }
// };

// var my_bag = new bagOfChips
// my_bag.takeChip();
// my_bag.takeChip();
// my_bag.takeChip();





// Partner Exercise #1.2
// Fix the following code (4 syntax error, 1 logic errors) so that the console logs successfully.

// var water = function (amount) {
//   happiness += amount;
//   console.log('You watered the ' + this.plantType);
// };

// var greenHouse = {
//   room1: {
//     plantType: 'strawberries'
//     happiness: 3
//     water: water
//   }
//   room2: {
//     plantType: 'eggplants'
//     happiness: 1,
//     water: water
//   }
// };

// greenHouse.room1.water(2);
// console.log('Strawberries should have 5 happiness:', greenHouse.room1.happiness);

// greenHouse.room2.water(23);
// console.log('Eggplants should have 24 happiness:', greenHouse.room2.happiness);



//Fixed: 

// var greenHouse = {
//   room1: {
//     plantType: 'strawberries',
//     happiness: 3,
//     water: function(amount) {
//       this.happiness += amount;
//       console.log('You watered the ' + this.plantType);
//     }
//   },
//   room2: {
//     plantType: 'eggplants',
//     happiness: 1,
//     water: function(amount) {
//       this.happiness += amount;
//       console.log('You watered the ' + this.plantType);
//     }
//   }
// };

// var room1 = greenHouse.room1
// room1.water(2);
// console.log('Strawberries should have 5 happiness:', room1.happiness);

// var room2 = greenHouse.room2;
// room2.water(23);
// console.log('Eggplants should have 24 happiness:', room2.happiness);



// Partner Exercise #1.2
// Copy/paste the following code in your <script> tag. 
// Fix the following code (1 logic errors) so that the alerts call successfully.

// var sprayPixieDust = function (person) {
//   person.pixieDust += 1;
// };

// var wendy = {
//   fly: function () {
//     if (this.pixieDust < 2) {
//       return 'thump!';
//     }
//     else {
//       return 'I can fly!';
//     }
//   }
// };

// console.log('Wendy should not be able to fly (yet):', wendy.fly());

// sprayPixieDust(wendy);
// console.log('Wendy should STILL not be able to fly:', wendy.fly());

// sprayPixieDust(wendy);
// console.log('Can she fly now?', wendy.fly());

//Fixed code in the html file.




// Partner Exercise #2.1
// Write a method stealCoins that takes a number parameter and decreases 
// the wishing well's coin count by that amount.
// Do not let the coinCount go below zero. 
// Do not use the wishingWell variable in your function.

// var wishingWell = {
//   coinCount: 2,
//   wishToss: function () {
//     this.coinCount += 1;
//   }
// };

// wishingWell.wishToss();
// console.log('Wishing well should have 3 coins:', wishingWell.coinCount);

// wishingWell.stealCoins(2);
// console.log('Wishing well should have 1 coin:', wishingWell.coinCount);

// wishingWell.stealCoins(5);
// console.log('Wishing well should have 0 coins:', wishingWell.coinCount);

//Fixed: 

// var wishingWell = {
//   coinCount: 2,
//   wishToss: function() {
//     this.coinCount += 1;
//   },
//   stealCoins: function(stolen_coins_amount) {
//     if (this.coinCount > 0 && this.coinCount>=stolen_coins_amount) {
//       this.coinCount -= stolen_coins_amount
//     } else if (this.coinCount > 0 && this.coinCount < stolen_coins_amount){
//       console.log("There aren't enough coins!")
//       this.coinCount = 0
//     }else {
//       console.log("You can't steal coins- there are none left!")
//       this.coinCount = 0
//     }
//   }
// };

// wishingWell.wishToss();
// console.log('Wishing well should have 3 coins:', wishingWell.coinCount);

// wishingWell.stealCoins(2);
// console.log('Wishing well should have 1 coin:', wishingWell.coinCount);

// wishingWell.stealCoins(5);
// console.log('Wishing well should have 0 coins:', wishingWell.coinCount);

// wishingWell.stealCoins(5);
// console.log('Wishing well should have 0 coins:', wishingWell.coinCount);




// Partner Exercise #2.2
// Write a method play that changes what the musicPlayer is currently playing.
// Do not use the musicPlayer variable in your function.


// var musicPlayer = {
//   currentlyPlaying: null
// };

// musicPlayer.play('Giant Steps');
// console.log('Music player should be playing "Giant Steps":', musicPlayer.currentlyPlaying);

// musicPlayer.play('Blue Glasses');
// console.log('Music player should be playing "Blue Glasses":', musicPlayer.currentlyPlaying);



//Fixed: 

// var musicPlayer = {
//   currentlyPlaying: null,
//   play: function(song) {
//     this.currentlyPlaying= song;
//   }
// };


// musicPlayer.play('Giant Steps');
// console.log('Music player should be playing "Giant Steps":', musicPlayer.currentlyPlaying);

// musicPlayer.play('Blue Glasses');
// console.log('Music player should be playing "Blue Glasses":', musicPlayer.currentlyPlaying);





// Partner Exercise #2.3
// Copy/paste the following code in your <script> tag. Fix the following code 
// (3 syntax errors, 1 logic errors) so that the spies each reveal their secrets.


// var revealSecret = function () {
//   return secret;
// };

// var incept = function (person, func) {
//   person.inception = func;
//   var result = person.inception();
//   alert(person.name + " said: " result);
// };

// var spy = {
//   name: "Mr. Smith"
//   secret: "I like pie"
// };
// incept(spy, revealSecret);

// var otherSpy = {
//   name: "Dr. Tran"
//   secret: "I can lick my elbow"
// };
// incept(otherSpy, revealSecret);

//Fixed code on html doc
















