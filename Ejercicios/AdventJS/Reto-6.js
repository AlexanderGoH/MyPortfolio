function maxDistance(movements){
    let distance = 0;

    for(let i = 0; i < movements.length; i++){
        switch(true){
            case movements[i] === '>':
                distance++;
                break;
            case movements[i] === '*':
                distance++;
                break;
            case movements[i] === '<':
                distance--;
                break;
        }
    }

    return Math.abs(distance);
}

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5