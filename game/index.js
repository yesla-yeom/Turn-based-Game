const startBtn = document.getElementsByClassName("start_button")[0];
const punchBtn = document.getElementsByClassName("punch_img")[0];
const pikachuFrame = document.getElementsByClassName("pikachu_frame")[0];
const rabbitFrame = document.getElementsByClassName("rabbit_frame")[0];

const addLight = document.createElement("img");
const addCarrot = document.createElement("img");
addLight.style.width = "40px";
addLight.src = "./img/light.png";
addCarrot.src = "./img/carrot.png";

let started = false;

startBtn.addEventListener("click", () => {
  if (started) {
    gameOver();
  } else {
    gameStart();
  }
});

const gameStart = () => {
  started = true;
  initGame();
  startBtn.style.display = "none";
};

const initGame = () => {
  started = true;
  addItem();
};

const addItem = () => {
  for (let i = 1; i < 11; i++) {
    pikachuFrame.appendChild(addLight);
    rabbitFrame.appendChild(addCarrot);
  }
};
