let numRomano = 'CMXXIV'
let gabaritoRomano = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

function converteRomano(numRomano) {
    let seq = [];
    let numFinal = 0;
    for (let letra of numRomano) {
        for (let key in gabaritoRomano) {
            if (letra === key) {
                seq.push(gabaritoRomano[key]);
            }
        }
    }
    numFinal = seq[0]
    for (let index = 1; index < seq.length; index += 1) {
        if (numFinal < seq[index]) {
            numFinal = numFinal * -1;
        }
        numFinal = numFinal + seq[index];
    }

    return numFinal;
}
console.log(converteRomano(numRomano));