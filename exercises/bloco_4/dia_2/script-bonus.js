// Exercicio 1
let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (array[index] < array[secondIndex]) {
            let position = array[index];
            array[index] = array[secondIndex];
            array[secondIndex] = position;
        }
    }
}
console.log(array);

//Exercicio 2
array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (array[index] > array[secondIndex]) {
            let position = array[index];
            array[index] = array[secondIndex];
            array[secondIndex] = position;
        }
    }
}
console.log(array);


//Exercicio 3
array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let i = 0; i < array.length; i++)
    if (i < array.length - 1) {
        newArray.push(array[i] * array[i + 1]);
    } else {
        newArray.push(array[i] * 2);
    }
console.log(newArray);