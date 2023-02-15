const startBtn = document.getElementsByClassName("start_button")[0];
const punchBtn = document.getElementsByClassName("punch_img")[0];
const pikachuHp = document.getElementsByClassName("pikachu_hp")[0];
const rabbitHp = document.getElementsByClassName("rabbit_hp")[0];

let started = false;
let clicked = false;

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
    const addLight = document.createElement("img");
    addLight.style.width = "40px";
    addLight.style.marginTop = "50px";
    addLight.src = "./img/light.png";
    pikachuHp.appendChild(addLight);
    // 번개 당근 10개씩 만들기
    const addCarrot = document.createElement("img");
    addCarrot.style.width = "70px ";
    addCarrot.style.marginTop = "40px";
    addCarrot.src = "./img/carrot.png";
    rabbitHp.appendChild(addCarrot);

    // 펀치 버튼 누르면 당근 사라지게
    punchBtn.addEventListener("click", () => {
      if (clicked) {
        disappearCarrot();
      }
    });
    const disappearCarrot = () => {
      // 당근 랜덤으로 사라지게
      const removeHp = rabbitHp.removeChild(removeCarrot);
      const removeCarrot = addCarrot.removeChild(removeHp);
    };
  }
};

const gameOn = () => {
  pikachuPunch();
  rabbitPunch();
};

const rabbitPunch = () => {
  // 토끼는 자동으로 전투
  // disaapearLight()
};

const disappearLight = () => {
  // 번개 랜덤으로 사라지게
};

const PopUp = () => {
  // ...?
  // WIN * LOSE 띄우기
  // 아래에 StopBtn 띄우기
};

const StopBtn = () => {
  // 종료 버튼 누르면 다 사라지게
};
