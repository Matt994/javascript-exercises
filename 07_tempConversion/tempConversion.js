const convertToCelsius = function(far) {
  cel = (far - 32) * 5/9
  if (!Number.isInteger(cel)) {
    round = Math.round(cel * 10) / 10;
    return round;
  } else {
    return cel;
  }
  
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
