window.onload = function () {
  generateUf();
};

const ufBrasil = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
];

function generateUf() {
  const getSelectBox = document.querySelector('select');
  for (let uf of ufBrasil) {
    let estado = document.createElement('option');
    estado.innerHTML = uf;
    getSelectBox.appendChild(estado);
  }
}
