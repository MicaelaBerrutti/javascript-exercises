const fibonacci = function(num) {
  
    var funcion = [1];
    if(num< 0){
        return 'OOPS'
    }
    num = parseInt(num);
    for(let i=0; i <= num; i++){
    funcion.push(1+i);
    funcion[i+2] = funcion[i]+ funcion[i+1];
      };
    
    
    return funcion[num-1];
  }
  

// Do not edit below this line
module.exports = fibonacci;
