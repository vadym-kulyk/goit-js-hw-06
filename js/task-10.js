

const controlsContainer = document.querySelector('#controls');
const input = document.querySelector('#controls > input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');


//Функция создает указанное кол-во элементов
const createBoxes = amount => {
  // Массив для хранения элементов для последующего добавления в разметку одной операцией
  const boxes = [];

  // Начальные размеры 
  let width = 30;
  let height = 30;

  for (let i = 1; i <= amount; i++) {
    // Создает элемент
    const box = document.createElement('div');
    const color = getRandomHexColor();

    // Добавляет инлайн стили каждому элементу
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    box.style.backgroundColor = color;
    box.style.marginLeft = 'auto';
    box.style.marginRight = 'auto';
    box.style.marginBottom = '10px';

    // Добавляет элемент в общий массив и увеличивает размеры следующего элемента
    boxes.push(box);

    width += 10;
    height += 10;
  }

  // Добавляет элементы на страницу одной операцией
  boxesContainer.append(...boxes);
};

// Создает кол-во элементов, указанное в инпуте
function onRenderBtnClick() {
  boxesContainer.innerHTML = '';
  createBoxes(input.value);
  input.value = 0;

  console.log(boxes);
}

// Удаляет все элементы
function onDestroyBtnClick() {
  boxesContainer.innerHTML = '';
}

createBtn.addEventListener('click', onRenderBtnClick);
destroyBtn.addEventListener('click', onDestroyBtnClick);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}