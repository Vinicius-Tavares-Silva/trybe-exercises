let a = 10;
let b = 5;
operator = '*';
let results;

switch (operator) {
    case '+':
        results = a + b;
        break;
    case '-':
        results = a - b;
        break;
    case '*':
        results = a * b;
        break;
    case '/':
        results = a / b;
        break;
    case '%':
        results = a % b;
        break;
    default:
        console.log('Operador não definido');
}
console.log(results);