const sumAll = function(a,b) {
    var c = 0 ;
    if(a<0 || b<0 || typeof(a) != 'number'|| typeof(b) != 'number') {
      return 'ERROR';
    }
    if(a<b){
      for(a; a<=b; a++){
        c =c+a;
    }}else{
      for(b; b<=a; b++){
        c = c+b;
    }
   
    }
    return c;
};
sumAll(1, 4)
// Do not edit below this line
module.exports = sumAll;
