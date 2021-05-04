window.onload = function () {
  VisitConfig();

  getConfigBtn = document.querySelector('button');
  getConfigBtn.addEventListener('click', loadVisitConfig);
};

function VisitConfig() {
  localStorage.setItem('bgColor', 'rgb(59, 59, 59)');
  localStorage.setItem('txColor', 'white');
  localStorage.setItem('fntSize', '25px');
  localStorage.setItem('lineSpace', '30px');
  localStorage.setItem('fntType', 'Courier New');
}

function loadVisitConfig() {
  let body = document.querySelector('body');
  body.style.backgroundColor = localStorage.getItem('bgColor');
  body.style.color = localStorage.getItem('txColor');
  body.style.fontSize = localStorage.getItem('fntSize');
  body.style.lineHeight = localStorage.getItem('lineSpace');
  body.style.fontFamily = localStorage.getItem('fntType');
}
