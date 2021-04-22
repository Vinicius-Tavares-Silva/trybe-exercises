let nota = 100;
let candidata;

// Parte IV
if (nota >= 80) {
    candidata = "aprovada";
} else if (nota < 80 && nota >= 60) {
    candidata = "lista";
} else {
    candidata = "reprovada";
}
console.log(candidata);

//Parte V
switch (candidata) {
    case "aprovada":
        console.log("Parabéns, você foi aprovada(o)!");
        break;
    case "lista":
        console.log("Você está na nossa lista de espera");
        break;
    case "reprovada":
        console.log("Você foi reprovada(o)");
        break;
    default:
        console.log("Não se aplica");
}