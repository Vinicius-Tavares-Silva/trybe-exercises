let ang1 = 30;
let ang2 = 30;
let ang3 = 120;
let triangulo;

if (ang1 < 0 || ang2 < 0 || ang3 < 0) {
    console.log('Erro - angulo invalido')
} else {
    triangulo = (ang1 + ang2 + ang3 == 180);
    console.log('É triangulo: ' + triangulo);
}