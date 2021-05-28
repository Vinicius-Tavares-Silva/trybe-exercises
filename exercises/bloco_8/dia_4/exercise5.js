const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  const aOccurrences = names
    .map((name) => name.toLowerCase())
    .reduce((acc, name) => acc + name)
    .split('')
    .filter((letter) => letter === 'a').length;
  return aOccurrences
}

assert.deepStrictEqual(containsA(), 20);
