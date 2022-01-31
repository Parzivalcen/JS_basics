// write function that takes 2 arguments
// first one is a str and second a number 
// repeat the str as many times as the number 

const repeatString = function(string, num) {
  // make loop as many times as num
  // create a variable to store the str
  // return a str
  if (num < 0){
    return "ERROR"
  }else{
    let stored = '';
    let counter = 0;
    while (counter < num){
      stored = stored.concat(string)
      counter++;
    }
    return stored

  }
};
// console.log(repeatString('hey', 10))
// Do not edit below this line
module.exports = repeatString;
