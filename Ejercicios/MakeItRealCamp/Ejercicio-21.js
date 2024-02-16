/* 21. Encontrar números pares en un arreglo
Escribir una función llamada pares que reciba un arreglo de números y retorne un nuevo arreglo con los números pares únicamente.*/

// escribe tu función acá
function pares(arreglo){
    let nuevo = [];
    
    for(let i = 0; i < arreglo.length; i++){
        if(arreglo[i] % 2 === 0){
            nuevo.push(arreglo[i]);
        }
    }
    return nuevo;
}

// código de prueba
console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(pares([])) // []