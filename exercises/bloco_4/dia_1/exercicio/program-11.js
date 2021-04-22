let salBruto = 6000.00;
let salBase;
let salLiquido;
let inss;
let ir;
let pmt;

if (salBruto <= 1556.94) {
    inss = salBruto * 0.08;
} else if (salBruto >= 1556.95 && salBruto <= 2594.92) {
    inss = salBruto * 0.09;
} else if (salBruto >= 2594.93 && salBruto <= 5189.82) {
    inss = salBruto * 0.11;
} else {
    inss = 570.88;
}
salBase = salBruto - inss;

if (salBase <= 1903.98) {
    ir = 0;
    pmt = 0;
} else if (salBase >= 1903.99 && salBase <= 2826.65) {
    ir = 0.075 * salBase;
    pmt = 142.80;
} else if (salBase >= 2826.66 && salBase <= 3751.05) {
    ir = 0.15 * salBase;
    pmt = 354.80;
} else if (salBase >= 3751.06 && salBase <= 4664.68) {
    ir = 0.225 * salBase;
    pmt = 636.13;
} else {
    ir = 0.275 * salBase;
    pmt = 869.36;
}
salLiquido = salBase - (ir - pmt);
console.log('Para o salario bruto de R$' + salBruto);
console.log('Temos o salario liquido de R$' + salLiquido);