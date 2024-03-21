function descendingOrder(n){
    if(n > 0){
        const stringN = n.toString().split('');
        const arregloEntero = stringN.map((numero)=>(parseInt(numero)));
        const orderDesc = stringN.sort((a, b)=>(b-a));
        return parseInt(orderDesc.join(''));
    }
}

console.log(descendingOrder(145263));