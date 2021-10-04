const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body'),
};

let timerId = null;

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


function onStartBtnClick() {
  timerId = setInterval(() => {
    colors.map(color => {
      refs.body.style.backgroundColor = `${
        colors[randomIntegerFromInterval(0, 5)]
      }`;
    });
  }, 1000);
  refs.startBtn.setAttribute('disabled', 'disabled');
}

function onStopBtnClick() {
  clearInterval(timerId);
  refs.startBtn.removeAttribute('disabled');
}
