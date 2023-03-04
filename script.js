const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  if (seconds === 59) {
    secondHand.style.transition = "none";
  } else {
    secondHand.style.transition = "all 0.05s";
  }
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  if (seconds === 0) {
    minHand.style.transitionDelay = "0.05s";
  } else {
    minHand.style.transitionDelay = "0s";
  }
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;
  if (minutes === 0 && seconds === 0) {
    hourHand.style.transitionDelay = "0.05s";
  } else {
    hourHand.style.transitionDelay = "0s";
  }
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
