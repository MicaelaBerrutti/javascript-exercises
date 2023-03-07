const palindromes = function (a) {
    var final = '';
    var inicial ='';
    for(var i = a.length-1; i >=0; i--){
   // for(var i = 0 ; i< a.lenght; i++){
      if(a[i] != '!' && a[i]!= '.' && a[i]!= ',' && a[i]!= '?' && a[i]!= ' ' ){
        final = final + a[i];
      }}
    for(var i = 0 ; i < a.length; i++){
      if(a[i] != '!' && a[i]!= '.' && a[i]!= ',' && a[i]!= '?' && a[i]!= ' ' ){
        inicial = inicial + a[i];
    }
    };
    final = final.toLowerCase();
    inicial = inicial.toLowerCase();
    return(final==inicial);
};
// Do not edit below this line
module.exports = palindromes;
