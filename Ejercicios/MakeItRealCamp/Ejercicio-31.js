/* 31. Distancia entre dos strings
Escribir una función llamada distancia que reciba dos strings y retorne el número de caracteres diferentes (comparando posición por posición).

Nota: Puedes asumir que los strings siempre tienen la misma longitud. Sin embargo, si quieres agregarle más dificultad puedes pensar 
cómo solucionarlo si un string es más largo que el otro (la diferencia entre las longitudes agregaría al resultado).*/

// escribe tu función acá
function distancia(palabra1, palabra2){
    let diferencias = 0;
    let longitud = Math.min(palabra1.length, palabra2.length);

    for(let i = 0; i < longitud; i++){
        if(palabra1[i] !== palabra2[i]){
            diferencias++;
        }
    }

    diferencias += Math.abs(palabra1.length - palabra2.length);
    return diferencias;
}

// código de prueba
console.log(distancia("hola", "hola")) // 0
console.log(distancia("sol", "tol")) // 1
console.log(distancia("carro", "correr")) // 3