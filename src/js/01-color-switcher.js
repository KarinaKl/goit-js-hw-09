function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`; // To generate a random color
}

const refs = {
  startButton: document.querySelector('[data-start]'),
  stopButton: document.querySelector('[data-stop]'),
};

let intervalId = null;

refs.startButton.addEventListener('click', onStartClick);
refs.stopButton.addEventListener('click', onStopClick);

function onStartClick() {
  refs.startButton.setAttribute('disabled', false);
  refs.stopButton.removeAttribute('disabled');
  intervalId = setInterval(changeBackgroundColor, 1000);
}

function onStopClick() {
  refs.startButton.removeAttribute('disabled');
  refs.stopButton.setAttribute('disabled', false);
  clearInterval(intervalId);
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}
