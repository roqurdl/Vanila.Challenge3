const clockTitle = document.querySelector(".js-clock");

const CAL_DAY = 1000 * 60 * 60 * 24;
const CAL_HOUR = 1000 * 60 * 60;
const CAL_MIN = 1000 * 60;

const currentYear = new Date().getFullYear();

function paintDDay() {
  const dDay = new Date(`December 25, ${currentYear}`);
  const today = new Date();
  const gap = dDay.getTime() - today.getTime();
  const day = Math.ceil(gap / CAL_DAY);
  const hour = Math.ceil((gap % CAL_DAY) / CAL_HOUR);
  const min = Math.ceil((gap % CAL_HOUR) / CAL_MIN);
  const sec = Math.ceil((gap % CAL_MIN) / 1000);

  clockTitle.innerText = `${day}d ${hour}h ${min}m ${sec}s`;
}

setInterval(paintDDay, 1000);
