


function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return ('Did parents allow you?');
  }
}

function checkAge1(age){
  return (age > 18 || "less than 18");
}

function min(a, b){
  return (a < b) ? a : b;
}

function pow(a, b){
  return a**b;
}
console.log(pow(1, 100))