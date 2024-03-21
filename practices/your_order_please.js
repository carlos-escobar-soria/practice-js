// const {assert} = require('chai');

// describe("order", () => {
//   it("should work corectly", () => {
//     assert.strictEqual(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
//     assert.strictEqual(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
//     assert.strictEqual(order(""), "", "empty input should return empty string" )
//   });
// });

function order(words) {
  if(words.length == 0) {
    return "";
  }
  const arrayWords = words.trim().split(' ');
  const expresionWord = /[0-9]{1}/i;
  const expresion = arrayWords.map((word)=>{
    return expresionWord.exec(word);
  })
  const orderWord = expresion.sort((a,b)=>{
    return a - b;
  })
  const cadena = orderWord.map((word)=>{
    return word['input'];
  })
  return cadena.join(" ");
}

console.log(order("is2 Thi1s T4est 3a"));
console.log(order(""));


function order(words){
  return words.split(' ').sort(function(a, b){
    return a.match(/\d/) - b.match(/\d/);
  }).join(' ');
}    

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""