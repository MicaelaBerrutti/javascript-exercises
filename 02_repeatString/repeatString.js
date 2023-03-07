const repeatString = function(a, b) {
    if(b<0){
        return 'ERROR';
    }
    var final='';
      for(let i =0; i<=b-1; i++){
        final = final + a;
      };
      return final;
  };
  
  
  console.log(repeatString('hey', 3));
// Do not edit below this line
module.exports = repeatString;
