
function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();
console.log('🚀 - file: index.js:10 - object:', g.next().value);
console.log('🚀 - file: index.js:10 - object:', g.next().value);
console.log('🚀 - file: index.js:10 - object:', g.next().value);

function* iterate(array) {
    for(let value of array)
        yield value;
}

const it = iterate(['ISAAC', 'JEREMIAS', 'GABRIEL', 'SOLEDAD', 'YANET']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);