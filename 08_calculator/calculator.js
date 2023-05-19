const add = function(numA, numB) {
	return numA + numB
};

const subtract = function(numA, numB) {
	return numA - numB
};

const sum = function(arr) {
	return arr.reduce((a, b) => a + b, 0)
};

const multiply = function(arr) {
  return arr.reduce((a, b) => a * b, 1)
};

const power = function(numA, numB) {
	return numA ** numB;
};

const factorial = function(num) {
	if(num === 0) {
    return 1;
  } else {
    let fact = 1;
    for (i = 1; i <= num; i++) {
      fact *= i;
    }
    return fact;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
