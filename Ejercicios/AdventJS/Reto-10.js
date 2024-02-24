function createChristmasTree(ornaments, height) {
    const ornamentLength = ornaments.length;
    let tree = '';

    for (let i = 1; i <= height; i++) {
        const ornamentsForRow = ornaments.repeat(Math.ceil(i / ornamentLength)).slice(0, i);
        const spaces = ' '.repeat(height - i);
        tree += spaces + ornamentsForRow.split('').join(' ') + '\n';
    }

    const trunkSpaces = ' '.repeat(height - 1) + '|';
    tree += trunkSpaces + '\n';

    return tree;
}

// Ejemplos de uso:
const tree1 = createChristmasTree("123", 4);
console.log(tree1);

const tree2 = createChristmasTree("*@o", 3);
console.log(tree2);
