const convertToFahrenheit = function(a) {
  var f= (a * 1.8)+32;
  f = parseFloat(f.toFixed(1));
  return f
};

const convertToCelsius = function(b) {
  var c = (b-32)/1.8;
  c = parseFloat(c.toFixed(1));
  return c;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
