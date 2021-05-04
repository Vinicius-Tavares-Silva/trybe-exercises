function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
//1
function createDays() {
  const dezDaysList = [
    29,
    30,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
  ];
  const daysList = document.querySelector('#days');

  for (let day of dezDaysList) {
    const dayItem = document.createElement('li');
    dayItem.innerHTML = day;
    daysList.appendChild(dayItem);
    dayItem.classList.add('day');
    if (day === 24 || day === 31) {
      dayItem.classList.add('holiday');
    } else if (day === 4 || day === 11 || day === 18) {
      dayItem.classList.add('friday');
    } else if (day === 25) {
      dayItem.classList.add('friday');
      dayItem.classList.add('holiday');
    }
  }
}

createDays();

//2
function createBtn(label, elementId) {
  const btnContainer = document.querySelector('.buttons-container');
  const btn = document.createElement('button');
  btn.id = elementId;
  btn.innerHTML = label;
  btnContainer.appendChild(btn);
}

createBtn('Feriado', 'btn-holiday');

//3
let holidayBtn = document.querySelector('#btn-holiday');

holidayBtn.addEventListener('click', function () {
  backgroundChange('.holiday', '#90EE90');
});

function backgroundChange(element, color) {
  let days = document.querySelectorAll(element);
  for (let day of days) {
    if (day.style.backgroundColor === '') {
      day.style.backgroundColor = color;
    } else {
      day.style.backgroundColor = '';
    }
  }
}

//4
createBtn('Sexta-feira', 'btn-friday');

//5
let fridayBtn = document.querySelector('#btn-friday');

fridayBtn.addEventListener('click', function () {
  backgroundChange('.friday', '#FFD700');
});

//6
let calendarDays = document.querySelectorAll('.day');
for (let day of calendarDays) {
  day.addEventListener('mouseover', zoomIn);
  day.addEventListener('mouseleave', zoomOut);
}

function zoomIn(event) {
  event.target.style.fontSize = '28px';
}

function zoomOut(event) {
  event.target.style.fontSize = '20px';
}

//7
const myTasks = document.querySelector('.my-tasks');

function createTask(taskName) {
  const tasks = document.createElement('span');
  tasks.innerHTML = taskName;
  myTasks.appendChild(tasks);
}
createTask('cozinhar');

//8
function createTaskColor(taskColorName) {
  const taskColor = document.createElement('div');
  taskColor.style.backgroundColor = taskColorName;
  taskColor.classList.add('task');
  myTasks.appendChild(taskColor);
}
createTaskColor('#FF8C00');

//9
let task = document.querySelector('.task');
task.addEventListener('click', function () {
  if (event.target.className === 'task') {
    event.target.classList.add('task-selected');
  } else {
    event.target.classList.remove('task-selected');
  }
});

//10

for (let day of calendarDays) {
  day.addEventListener('click', function () {
   let taskSelected = document.querySelector('.task-selected');
    if (taskSelected !== null) {
      if (day.style.backgroundColor !== taskSelected.style.backgroundColor) {
        day.style.backgroundColor = taskSelected.style.backgroundColor;
      } else {
        day.style.backgroundColor = '';
      }
    }
  });
}
