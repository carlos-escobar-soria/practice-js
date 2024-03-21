
// function searchingChallenge(string) {
//     const words = string.split(" ");
//     let arrayUnico = [];
//      words.forEach(word => {
//         arrayUnico = [new Set( [...word.split("")])];
//     });
//     console.log(arrayUnico);
//     for(let i = 0; i < arrayUnico.length; i++){
//         // const regex = `/${arrayUnico[i]}{2}/`;
//         console.log(regex);
//         words[i].replace(arrayUnico[i], 1);
//     }
//     // console.log([...arrayUnico].sort((a, b)=>(a - b )));
//     console.log(words);
//     return words;
//   }

 


//   console.log(searchingChallenge("No words helalow"));


function contarRepeticiones(palabra) {
    // Objeto para almacenar las repeticiones de cada letra
    const repeticiones = {};
    // Convertir la palabra a minúsculas para hacer el conteo de manera insensible a mayúsculas
    const palabraMinusculas = palabra.toLowerCase();
  
    // Iterar sobre cada letra de la palabra
    for (let letra of palabraMinusculas) {
      // Si la letra ya está en el objeto de repeticiones, incrementar su contador
      if (repeticiones[letra]) {
        repeticiones[letra]++;
      } else {
        // Si la letra no está en el objeto, inicializar su contador en 1
        repeticiones[letra] = 1;
      }
      console.log(repeticiones);
    }
    // Filtrar las letras que tienen más de una repetición
    const letrasRepetidas = Object.keys(repeticiones).filter(letra => repeticiones[letra] > 1);
    console.log(letrasRepetidas);
    return letrasRepetidas.length;
  }
  
  // Ejemplo de uso
  const palabra = "reconocer";
  const letrasRepetidas = contarRepeticiones(palabra);
  console.log(`La palabra "${palabra}" tiene ${letrasRepetidas} letras que se repiten.`);