// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matrizClaveValor = [];

  for (clave in objeto)
  {
     matrizClaveValor.push([clave, objeto])
     
  }

  return matrizClaveValor;  
   
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  
  
  
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  
  var arrayMayPrimero = [];
  for ( i = 0; i < s.length; i++)
  {
    if( s[i] === s[i].toUpperCase() )
    {
      arrayMayPrimero.push(s[i]);
    }
  }
  for ( i = 0; i < s.length; i++)
  {
    if( s[i] !== s[i].toUpperCase() )
    {
      arrayMayPrimero.push(s[i]);
    }
  }


  return arrayMayPrimero.join('');
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
   
  var arrayInicial = str.split('');
  var arrayUltimaFrase;
  var arrayEspejo = [];
  var valor = 0;
  var vacio = 0;
  var aux = false;
  

  for(i = 0; i <= arrayInicial.length; i ++)
  {
    if( arrayInicial[i] === ' ')
    {
      vacio = i - 1;
      aux = true;

      for( j = vacio; j >= valor; j--)
      {
        arrayEspejo.push(arrayInicial[j])
      }
      if ( aux === true)
      {
        arrayEspejo.push(' ');
      }
      aux = false;
      valor = i + 1   
    }
        
  } 
  
  arrayUltimaFrase = arrayInicial.slice(valor);
  
  for (i = arrayUltimaFrase.length - 1; i >= 0; i--)
  {
     arrayEspejo.push(arrayUltimaFrase[i]);
  }
  
  return arrayEspejo.join('')

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  
  var numeroString = numero.toString();

  if (numeroString === numeroString.split('').reverse().join('')){
    return 'Es capicua';
  }
  return 'No es capicua';
 
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var arrayCadena = cadena.split(''); 
  arrayCadena.forEach( function(x,y){                                

    if( x === 'a' || x === 'b' || x === 'c' )
    {
      arrayCadena[y] = '';
    }
    
  });
      
  return arrayCadena.join('');
  
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  
  var aux;
  
  for ( i = 0; i < arr.length - 1; i++){
    for(j = i+1; j < arr.length; j++){
      if(arr[i].length > arr[j].length)
      {
        aux = arr[i];
        arr[i] = arr[j];
        arr[j] = aux;
      }
    }
  }

  return arr;

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  
  var arrayComun = [];
  for (i= 0; i < arreglo1.length; i++)
  {  
    j = 0;
    
    for(j = 0; j < arreglo2.length; j++)
    {
      if( arreglo2[j] === arreglo1[i])
      {
        arrayComun.push(arreglo1[i]);
      }       
    }
     
  }
         
  return arrayComun;  
    
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

