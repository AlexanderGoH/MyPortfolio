/* 26. Imprimir una matriz
Escribir una función llamada imprimirMatriz que reciba una matriz (un arreglo de arreglos) e imprima todos los elementos del arreglo.*/

// escribe tu función acá
function imprimirMatriz(matriz){
    for(let i = 0; i < matriz.length; i++){
        let subarreglo = matriz[i];

        for(let j = 0; j < subarreglo.length; j++){
            let elemento = subarreglo[j];
            console.log(elemento);
        }
    }
}

// código de prueba
imprimirMatriz([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
])

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9