const images = document.getElementsByTagName("img");
const boxes = document.querySelectorAll(".box");
let randomNum;
let duplications = [];
let counter = 0;
let btnClickCounter = 0;

function renderImages() {
  do {
    randomNum = getRndInteger(1, 8);

    if (duplications.filter((x) => x === randomNum).length < 2) {
      duplications.push(randomNum);
      images[counter].setAttribute("src", `img/Shape-${randomNum}.png`);
      counter++;
    }
  } while (counter < 16);
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let btnList = [];
let classLists = [];

boxes.forEach((box) => {
  box.onclick = () => {
    let clickedBox = box.firstElementChild.getAttribute("src");
    let clickedBoxClassList = Array.from(box.classList);

    if (btnList.length < 2) {
      classLists.push(clickedBoxClassList);
      btnList.push(clickedBox);
      console.log(`Button Lists = ${btnList}`);
      console.log(`Class lists = ${classLists}`);
    } else return;

    if (btnList[0] === btnList[1] && classLists[0][1] !== classLists[1][1]) {
      console.log(true);
      classLists = [];
      btnList = [];
    } else if (
      btnList.length == 2 &&
      btnList[0] === btnList[1] &&
      classLists[0][1] === classLists[1][1]
    ) {
      console.log(false);
      classLists = [];
      btnList = [];
    } else if (btnList.length == 2) {
      console.log(false);
      classLists = [];
      btnList = [];
    }
  };
});
