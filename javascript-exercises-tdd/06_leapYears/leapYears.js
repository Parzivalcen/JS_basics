// Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)

// if year if divisible for 100 and 400, yes is leap
// if year is only divisible by 100, false, is not leap
// check if year is divisible by 4, yes if leap
// else return false

const leapYears = function (year) {
  if (year % 100 == 0 && year % 400 == 0) {
    return true;
  } else if (year % 100 == 0) {
    return false;
  } else if (year % 4 == 0) {
    return true;
  } else {
    return false;
  }
};
leapYears(1985);
// Do not edit below this line
module.exports = leapYears;
