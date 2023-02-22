const startBtn = document.getElementsByClassName("start_button")[0];
const punchBtn = document.getElementsByClassName("punch_img")[0];
const pikachuHp = document.getElementsByClassName("pikachu_hp")[0];
const rabbitHp = document.getElementsByClassName("rabbit_hp")[0];
const pikachuImg = document.getElementsByClassName("pikachu_img")[0];
const rabbitImg = document.getElementsByClassName("rabbit_img")[0];

const popUpModal = document.querySelector(".pop-up_modal");
const popUpMsg = document.querySelector(".pop-up_message");

const parent = document.getElementsByClassName("rabbit_hp")[0];

let started = false;
let gameOverCheck = false;

let carrotCount = 10;
let lightCount = 10;

// win = 이기면 트루, 지면 false 되게 해서

const popUpMessage = (win) => {
  console.log(win);
  popUpMsg.innerText = win ? "WIN💗" : "LOSE";
  gameOverCheck = true;
  setTimeout(() => {
    startBtn.style.display = "block";
    popUpMsg.innerText = "";
    popUpModal.classList.remove("pop-up");
    popUpModal.classList.remove("pop-up_message");
  }, 3000);
};

const gameOver = () => {
  started = false;
};

startBtn.addEventListener("click", () => {
  gameOverCheck = false;
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

const gameOnAudio = document.createElement("audio");

const bgm = () => {
  gameOnAudio.src = "./sound/bg.mp3";
  gameOnAudio.autoplay = true;
  gameOnAudio.loop = true;
  gameOnAudio.play();
  startBtn.appendChild(gameOnAudio);
};

const stopBgm = () => {
  gameOnAudio.pause();
};

const initGame = () => {
  started = true;
  addItem();
};

const addItem = () => {
  pikachuHp.innerHTML = "";
  rabbitHp.innerHTML = "";
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
    if (gameOverCheck) return;
    if (parent.innerHTML == "") {
      lightCount = 0;
      stopBgm();
    }
    disappearCarrot();
    rabbitPunch();
    pikachuMove();
    const punchAudio = document.createElement("audio");
    punchAudio.src = "./sound/pikachu_punch.mp3";
    punchAudio.autoplay = true;
    punchBtn.appendChild(punchAudio);

    if (carrotCount == 0) {
      popUpModal.classList.add("pop-up");
      popUpMessage(true);
      const overAudio = document.createElement("audio");
      overAudio.src = "./sound/game_over.mp3";
      overAudio.autoplay = true;
      popUpModal.appendChild(overAudio);
    }
  });

  const pikachuMove = () => {
    // 타격이동
    pikachuImg.style.animation = "attackMove 0.2s 1";
    // 0.2초 후에 초기화 되고, 다시 또 움직임
    setTimeout(() => {
      pikachuImg.style.animation = "";
    }, 200);
  };

  const disappearCarrot = () => {
    // 당근 랜덤으로 사라지게
    const randomMatch = Math.floor(Math.random() * 3);
    carrotCount = carrotCount - randomMatch;
    for (let i = 0; i < randomMatch; i++) {
      if (parent.innerHTML == "") {
        carrotCount = 0;
        stopBgm();
        break;
      } else {
        parent.removeChild(parent.firstChild);
      }
    }
  };
};

const rabbitPunch = () => {
  // 토끼는 자동으로 전투 (왼쪽으로 이동이동)
  if (carrotCount < 10) {
    setTimeout(() => {
      const randomMatch = Math.floor(Math.random() * 3);
      lightCount = lightCount - randomMatch;
      for (let i = 0; i < randomMatch; i++) {
        const parent = document.getElementsByClassName("pikachu_hp")[0];
        parent.removeChild(parent.firstChild);
        if (parent.innerHTML == "") {
          popUpModal.classList.add("pop-up");
          popUpModal.classList.add("pop-up_message");
          stopBgm();
          popUpMessage(false);
          const overAudio = document.createElement("audio");
          overAudio.src = "./sound/game_over.mp3";
          overAudio.autoplay = true;
          popUpModal.appendChild(overAudio);
        }
      }
      rabbitImg.style.animation = "attackMoveRabbit 0.2s 1";
      // 타격이동 반복
      setTimeout(() => {
        rabbitImg.style.animation = "";
      }, 200);

      const rabbitPunchAudio = document.createElement("audio");
      rabbitPunchAudio.src = "./sound/rabbit_punch.mp3";
      rabbitPunchAudio.autoplay = true;
      rabbitImg.appendChild(rabbitPunchAudio);
    }, 100);
  }
};
