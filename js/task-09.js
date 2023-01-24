function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('.change-color');
const textColorEl = document.querySelector('.color');

btnEl.addEventListener('click', onChangeColor);
function onChangeColor() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  textColorEl.textContent = newColor;
}