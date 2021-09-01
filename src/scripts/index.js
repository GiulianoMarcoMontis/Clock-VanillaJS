const hourLine = document.querySelector('[data-hr-line]');
const minuteLine = document.querySelector('[data-min-line]');
const secondLine = document.querySelector('[data-sec-line]');

const setClock = () => {
  const currentDate = new Date();

  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

  setRotation(secondLine, secondsRatio);
  setRotation(minuteLine, minutesRatio);
  setRotation(hourLine, hoursRatio);
};

const setRotation = (element, rotationRatio) => {
  element.style.setProperty('--rotation', rotationRatio * 360);
};

setInterval(setClock, 1000);

setClock();
