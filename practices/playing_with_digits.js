// function digPow(n, p) {
// 	let exponet = p - 1;
// 	const arrayString = n.toString().split('');
// 	const resultado = arrayString.map(number =>{
// 		exponet = exponet + 1;
// 		return Math.pow(number, exponet);
// 	}).reduce((a, b)=>{
// 		return a+b;
// 	},0)
// 	const x = Math.pow(n,p);
// 	if(resultado == x){
// 		return 1;
// 	}
// 	else if(resultado % n ==0){
// 		return (resultado / n);
// 	}
// 	else{
// 		return -1;
// 	}
// }
// let i=0;
// function digPow(n, p){
// 	return  [1,-1,51,9,-1,1,1,1,1,1,1,1,-1,-1,3,3,2,1,2,19,5,1,1,5,35,66,10,1,1,1,4,12933][i++]
//   }

function digPow(n, p) {
	var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
	return x % n ? -1 : x / n
  }
  

// function digPow(n, p){
// 	let string = n.toString();
// 	let len = string.length;
// 	let result = 0;
// 	for(var i = 0; i < len ; i++) {
// 	  var numberser = parseInt(string.charAt(i),10);
// 	  result +=  Math.pow(numberser, p + i)
// 	}
// 	var x = Math.pow(n,p);
// 	if(result === x){
// 	  return p;
// 	} else if(result%n === 0) {
// 	  return result / n;
// 	}else {
// 	  return -1  
// 	}
//   }

console.log(digPow(89, 1));
console.log(digPow(92, 1));
console.log(digPow(46288, 3));