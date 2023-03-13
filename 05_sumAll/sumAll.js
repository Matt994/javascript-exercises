const sumAll = function(num1, num2) {
    const arrOfNumbers = [];
    if (num1.constructor == Array || num2.constructor == Array) {
        return "ERROR";
    }
    else if (typeof num1 === "string" || typeof num2 === "string") {
        return "ERROR";
    }
    else if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    else if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
        arrOfNumbers.push(i);
    }} else {
        for (let i = num2; i <= num1; i++) {
            arrOfNumbers.push(i);
    }}
    const initialValue = 0;
    const sumWithInitial = arrOfNumbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue, initialValue
      );
    return sumWithInitial;
};

// Do not edit below this line
module.exports = sumAll;
