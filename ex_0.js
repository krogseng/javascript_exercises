"use strict";
//Write a function that returns the passed in string with an s added
//eg 'bat' -> 'bats'
//eg 'bats' ->  'batss'

function firstFunction(string) {
  //your code here
    string += "s";
    return string;
}


exports.firstFunction = firstFunction;
