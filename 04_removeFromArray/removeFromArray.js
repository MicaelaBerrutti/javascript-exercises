const removeFromArray = function(array, ...c) {
  var b = [];
  array.forEach((numero)=>{
    if(!c.includes(numero)){
      b.push(numero);
    }
  });
  return b;
}
  removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
