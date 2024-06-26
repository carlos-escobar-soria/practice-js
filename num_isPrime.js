
function isPrime(num) {
    //TODO
    if(num === 2){
        return true;
    }
    if(num > 1 ){
        if(num % 2 == 0){
        return false;
        }else{
        let contador = 1;
        for(let i = 3; i < num; i+2){
            if(num % i == 0){
            contador = contador + 1;
            }
        }
        return (contador == 1)? true: false
        }
    }
    return false;
}
console.log(isPrime(5099));
/**
 * Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Requirements
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.

*/

// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */



if(num > 1 && num % 2 != 0 || num == 2 ){
    let contador = 1;
    let medio = Math.floor(num / 2);
    for(let i = 3; i < medio; i=i+2){
      if(num % i == 0){
        contador = contador + 1;
        break;
      }
    }
    return (contador == 1)? true: false;
}
return false;


function isPrime(numero) {  
    if(numero  < 2){
      return false;
    }
    for (var i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return numero !== 1;
  }
  