"use strict";
//Strings!

//Write a function that capitalizes the first string, lower cases the second string and then makes one string out of them
//eg: 'bat', 'slOth' -> 'BATsloth'
//eg: 'my', 'Bud' -> 'MYbud'

function capHalf(firstString, secondString) {
  //your code here!
  var halfWay;
  halfWay = firstString.toUpperCase();
  halfWay += secondString.toLowerCase();

  return halfWay;
}

//Write a function that takes a name and returns only the first initial capitalized with a period after it
//eg: 'mega man' -> 'M.'
//eg: 'sailor moon' -> 'S.'

function mainInitial(name) {
  //your code here!
  return name[0].toUpperCase() + ".";
}

//Write a function that reverses a string
//eg: 'sloth' -> 'htols'
//eg: 'bat' -> 'tab'

function reverseString(string) {
  var reversed = [];
  for (var  i=(string.length -1); i>=0; i--) {
    reversed += string[i];
  };
    return reversed.toString();
  //your code here!
}

//Write a function that capitalizes the first letter of every word
//eg: 'no way that rules' -> 'No Way That Rules'
//eg: 'whatever sloths are the best' ->  'Whatever Sloths Are The Best'

function capitalizeEach(string) {
  // use map here
  return string.split(' ')
    .map(function(word) {
      return word[0].toUpperCase() + word.substr(1);
    })
    .join(' ');
 };


exports.capHalf = capHalf;
exports.mainInitial = mainInitial;
exports.reverseString = reverseString;
exports.capitalizeEach = capitalizeEach;
