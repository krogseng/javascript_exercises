"use strict";
//Arrays!

//Write a function that adds all the numbers in a given array and
//returns the total
//eg: [1, 2, 3] -> 6
//[3, 4, 1] -> 8
function addNumbers(array) {
  //your code here!
 var sum = array.reduce(function(a, b) {
    return a + b;
}, 0);
return sum;
}

//Write a function that tells you whether an array contains a given
//string
//eg: ['sloth', 'slug', 'salmon'], 'sloth' -> true
//    ['slugs are better whatever'], 'sloth' -> true

function hasItem(array, match) {
  //your code here
  return array.includes(match);
}

//Write a function that tells you the highest value in a given array
//eg [2, 5, 9] -> 9
// [6, 4, 6] -> 6
function highestNumber(array) {
  //your code here
  var biggest = array.reduce(function(a,b) {
    if (a > b) return a
    else return b;
  })
  return biggest;
};

//Write a function that adds an s to the end of each string in an array

//eg: ['sloth', 'slug', 'bat'] -> ['sloths', 'slugs', 'bats']
//eg: ['snakes', 'baby'] -> ['snakess', 'babys']
function pluralize(array) {
  //your code here
  var plurals = array.map(function(word) {
    return word + 's';
  });
  return plurals;
};

exports.addNumbers = addNumbers;
exports.hasItem = hasItem;
exports.highestNumber = highestNumber;
exports.pluralize = pluralize;
