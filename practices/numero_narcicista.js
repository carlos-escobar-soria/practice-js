function narcissistic(value) {
    // Code me to return true or false\
    const stringValue = value.toString();
    const arrayValue = stringValue.split("");
    const digitos = stringValue.length;
    let suma = 0;
    const elevado = arrayValue.map((number)=>{
      return Math.pow(parseInt(number), digitos);
    });
    // return elevado;
    suma =  elevado.reduce((a, b)=>{
      return a + b;
    }, 0 );
    // return suma    
    return suma == value;
  }

  console.log(narcissistic("153"))