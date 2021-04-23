let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let media;
let maior = 0;
let valorImpar = 0;
let menor = 1000;

//1
for (let number of numbers) {
    console.log(number);
}

//2
for (let number of numbers) {
    sum = sum + number;
}
console.log(sum);

//3
media = sum / numbers.length
console.log(media);

//4
if (media > 20) {
    console.log('valor maior que 20')
} else {
    console.log('valor menor ou igual a 20')
}

//5
for (let number of numbers) {
    if (maior < number) {
        maior = number
    }
}
console.log(maior);

//6
for (let number of numbers) {
    if (number % 2 != 0) {
        console.log(number);
        valorImpar++
    }
}
if (valorImpar = 0) {
    console.log('nenhum valor impar encontrado');
}

//7
for (let number of numbers) {
    if (menor > number) {
        menor = number
    }
}
console.log(menor);