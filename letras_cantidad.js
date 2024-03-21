function cantiadLetras(word) {
    let dato = {}
    for(let leter of word){
        if(dato[leter]){
            dato[leter]++;
        }else{
            dato[leter] = 1;
        }
    }
    let contador = 0;
    const keys = Object.keys(dato);
    for(let letra of keys){
        if(dato[letra] > 1){
            contador = contador + dato[letra];
        }
    }
    return {
        cantidad: contador,
        word: word
    };
}

function letras(word="hola hello carlos roberto"){
    const arrayWord = word.split(" ");
    let resultado = [];
    for(let palabra of arrayWord){
        resultado = [...resultado, cantiadLetras(palabra)];
    }
    let i = 0;
    let mayor = resultado[i];
    do{
        if(mayor.cantidad < resultado[i+1].cantidad){
            mayor = resultado[i+1];
        }
        i = i+2;
    }while(i < (resultado.length ));
    return mayor.word;
}


console.log(letras());