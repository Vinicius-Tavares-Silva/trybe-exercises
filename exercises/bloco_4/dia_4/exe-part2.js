//1
function verificaPalindrome(palavra) {
    let compare = '';
    for (let c = palavra.length - 1; c >= 0; c -= 1) {
        compare = compare + palavra[c];
    }
    if (palavra === compare) {
        return true
    }
    return false
}

//2
let seq = [20, 3, 6, 37, 1, 11];

function maiorNumero(seq) {
    let maior = seq[0];
    let maiorindex = 0;
    for (let num = 0; num < seq.length; num += 1) {
        if (seq[num] > maior) {
            maior = seq[num];
            maiorindex = num;
        }
    }
    return maiorindex;
}

//3
function menorNumero(seq) {
    let menor = seq[0];
    let menorindex = 0;
    for (let num = 0; num < seq.length; num += 1) {
        if (seq[num] < menor) {
            menor = seq[num];
            menorindex = num;
        }
    }
    return menorindex;
}








//Validação do exercicio
console.log(menorNumero(seq));