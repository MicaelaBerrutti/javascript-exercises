const add = function(a,b) {
  return (a+b);
	
};

const subtract = function(a,b) {
	return (a-b);
};

const sum = function(a) {
  var final = 0;
  a.forEach(num =>{
    final = final + num;
  })
	return(final);
};

const multiply = function(a) {
  var final = 1;
  a.forEach(num =>{
    final = final * num
  });
  return final;
};

const power = function(a,b) {
  var final = 1;
  for(var i = 0; i<b; i++){
    final = final * a;
  }
	return final;
};

const factorial = function(a) {
  var final =1;
  for(var i = 1; i<=a; i++ ){
    final = final * i;
  };
  return final;
	
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
