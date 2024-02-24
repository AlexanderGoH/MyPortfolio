/* En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.

Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos 
y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.*/

function manufacture(gifts, materials){
    let result = [];

    for(let i = 0; i < gifts.length; i++){
        let gift = gifts[i];
        let canMake = true;

        for(let j = 0; j < gift.length; j++){
            if(!materials.includes(gift[j])){
                canMake = false;
                break;
            }
        }

        if(canMake){
            result.push(gift);
        }
    }

    return result;
}

// Pruebas
const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

console.log(manufacture(gifts, materials)) // ["tren", "oso"]

const gifts2 = ['juego', 'puzzle']
const materials2 = 'jlepuz'

console.log(manufacture(gifts2, materials2)) // ["puzzle"]

const gifts3 = ['libro', 'ps5']
const materials3 = 'psli'

console.log(manufacture(gifts3, materials3)) // []
