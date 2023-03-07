const reverseString = function(word) {
    var final = '';
    for(let i = 1 ; i<= word.length; i++){
      final = final + word[word.length-i];
    }
    return final;
};

console.log(reverseString('hello there'));
// Do not edit below this line
module.exports = reverseString;
