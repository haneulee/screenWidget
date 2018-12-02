const body = document.body;

const BG_NUM = 5;

function getRandomNum() {
  return Math.floor(Math.random() * BG_NUM);
}

function paintBackground(num) {
  const img = new Image();

  img.src = `./images/${num}.jpg`;
  img.classList.add("bg");

  body.prepend(img);
}

function init() {
  const random = getRandomNum();

  paintBackground(random);
}

init();
