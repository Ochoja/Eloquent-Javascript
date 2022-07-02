const isEven = function (number) {
  if (number < 0) {
    return false; //return false if number is negative
  } else if (number == 1) {
    return false;
  } else if (number == 0) {
    return true;
  } else {
    return isEven(number - 2);
  }
};

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
