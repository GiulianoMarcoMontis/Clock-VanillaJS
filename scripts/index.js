// // DOM selectors

const hourLine = document.querySelector('[data-hr-line]');
const minuteLine = document.querySelector('[data-min-line]');
const secondLine = document.querySelector('[data-sec-line]');

// // get time through JS Date and pass it to the rotation function

const setClock = () => {
  const currentDate = new Date();

  const seconds = currentDate.getSeconds() / 60;
  const minutes = (seconds + currentDate.getMinutes()) / 60;
  const hours = (minutes + currentDate.getHours()) / 12;

  setRotation(secondLine, seconds);
  setRotation(minuteLine, minutes);
  setRotation(hourLine, hours);
};

// // function to pass time as rotation degrees to the css classes

const setRotation = (element, rotationRatio) => {
  element.style.setProperty('--rotation', rotationRatio * 360);
};

// // refresh every second

setInterval(setClock, 1000);

// // fire the clock!!

setClock();
