let n = 5;
let texto = '';
let l;
//1
texto = '';
l = n;
for (let index = 0; index < l; index += 1) {
    for (let i = 0; i < n; i += 1) {
        texto = texto + '*';
    }
    console.log(texto);
    texto = '';
}
console.log('--------------------------------------------');

//2
texto = '';
for (let index = 0; index < n; index += 1) {
    texto = texto + '*';
    console.log(texto);
}
console.log('--------------------------------------------');

//3
texto = '';
let posLinha;
for (let linha = 1; linha <= n; linha += 1) {
    posLinha = n - linha
    for (let car = 0; car < n; car += 1) {
        if (car >= posLinha) {
            texto = texto + '*';
        } else {
            texto = texto + ' ';
        }
    }
    console.log(texto);
    texto = '';
}

console.log('--------------------------------------------');