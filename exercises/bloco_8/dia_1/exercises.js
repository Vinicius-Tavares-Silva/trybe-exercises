//1
const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

const newPerson = (name) => {
  const person = {
    nomeCompleto: name,
    email: `${name.replace(' ', '_').toLowerCase()}@trybe.com `,
  };
  return person;
};
console.log(newEmployees(newPerson));

//2
const prizeDraw = (num, prizeCheck) => {
  const bigNum = Math.round(Math.random() * 5);
  if (prizeCheck(num, bigNum)) {
    return 'Parabéns você ganhou';
  } else {
    return 'Tente novamente';
  }
};

const prizeCheck = (num, bigNum) => {
  if (num === bigNum) {
    return true;
  } else {
    return false;
  }
};
console.log(prizeDraw(1, prizeCheck));