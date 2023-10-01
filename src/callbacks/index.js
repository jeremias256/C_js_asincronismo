
function sum(num1, num2) {
    return num1 + num2;
}
function rest(num1, num2) {
    return num1 - num2;
}
function mult(num1, num2) {
    return num1 * num2;
}
function div(num1, num2) {
    return num1 / num2;
}
function calc(num1, num2, callback) {
    return callback(num1, num2);
};

console.log('Se ejecutara la suma : ', calc(4, 5, sum));

setTimeout(() => {
    console.log('Javascript');
}, 2000);

function gretting( name, apellido, edad) {
    console.log(`${name} - ${apellido} - ${edad}`);
}

setTimeout(gretting, 3000, 'Jeremias', 'Menacho', '30');
