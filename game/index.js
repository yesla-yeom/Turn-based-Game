const startBtn = document.getElementsByClassName("start_button")[0];
const punchBtn = document.getElementsByClassName("punch_img")[0];
const pikachuHp = document.getElementsByClassName("pikachu_hp")[0];
const rabbitHp = document.getElementsByClassName("rabbit_hp")[0];
const pikachuImg = document.getElementsByClassName("pikachu_img")[0];
const rabbitImg = document.getElementsByClassName("rabbit_img")[0];

const popupModal = document.querySelector(".pop-up");
const popUpMsg = document.querySelector(".pop-up_message");
const popUpRefresh = document.querySelector(".pop-up_refresh");

let started = false;
let clicked = false;

let CARROT_COUNT = 10;

startBtn.addEventListener("click", () => {
  if (started) {
    gameOver();
  } else {
    gameStart();
    const startAudio = document.createElement("audio");
    startAudio.src = "./sound/alert.wav";
    startAudio.autoplay = true;
    startBtn.appendChild(startAudio);
  }
});

const gameStart = () => {
  started = true;
  initGame();
  startBtn.style.display = "none";
  bgm();
};

const bgm = () => {
  const gameOnAudio = document.createElement("audio");
  gameOnAudio.src = "./sound/bg.mp3";
  gameOnAudio.autoplay = true;
  gameOnAudio.loop = true;
  gameOnAudio.play();
  startBtn.appendChild(gameOnAudio);
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
  }

  // 펀치 버튼 누르면 당근 사라지게
  punchBtn.addEventListener("click", () => {
    disappearCarrot();
    pikachuMove();
    const punchAudio = document.createElement("audio");
    punchAudio.src = "./sound/pikachu_punch.mp3";
    punchAudio.autoplay = true;
    punchBtn.appendChild(punchAudio);
  });

  const pikachuMove = () => {
    // 타격이동
    pikachuImg.style.animation = "attackMove 0.2s 1";

    setTimeout(() => {
      pikachuImg.style.animation = "";
    }, 200);
  };

  const disappearCarrot = () => {
    // 당근 랜덤으로 사라지게
    const randomMatch = Math.floor(Math.random() * 3);
    for (let i = 0; i < randomMatch; i++) {
      const parent = document.getElementsByClassName("rabbit_hp")[0];
      parent.removeChild(parent.firstChild);
    }
  };
};

const gameOn = () => {
  pikachuPunch();
  rabbitPunch();
};

const rabbitPunch = () => {
  clicked = true;
  // 토끼는 자동으로 전투 (왼쪽으로 이동이동)
  if (CARROT_COUNT < 10) {
    const parent = document.getElementsByClassName("pikachu_hp")[0];
    parent.removeChild(parent.firstChild);

    rabbitImg.style.animation = "attackMoveRabbit 0.2s 1";
    // 타격이동 반복
    setTimeout(() => {
      rabbitImg.style.animation = "";
    }, 200);
  }

  // 피카츄한테서 선빵 맞은 후에 셋타임아웃 걸고 공격하게

  const rabbitPunchAudio = document.createElement("audio");
  rabbitPunchAudio.src = "./sound/rabbit_punch.mp3";
  rabbitPunchAudio.autoplay = true;
  rabbitImg.appendChild(rabbitPunchAudio);
};

const popUp = () => {
  // ...?
  // WIN * LOSE 띄우기
  // 아래에 StopBtn 띄우기
};

const popUpMessage = () => {
  popUpMsg.innerText = "YOU WIN!";
};

const stopBtn = () => {
  // 종료 버튼 누르면 다 사라지게
};

const gameOver = () => {
  if ((CARROT_COUNT = 0)) {
    const rabbitBlood = document.createElement("img");
    rabbitBlood.src = "./img/blood.png";
    rabbitImg.appendChild(rabbitBlood);
  }
};
