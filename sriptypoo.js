const holem = document.getElementById("carousel");
const buttOne = document.getElementById("first");
const buttTwo = document.getElementById("second");
const buttThree = document.getElementById("third");
const buttFour = document.getElementById("fourth");

let index = 0;
let scrollLength = screen.width;

let scrollIndex = 0;

function reset() {
  if (index <= 0) {
    index = 0;
  }
  if (index >= 4) {
    index = 4;
  }
}

window.addEventListener("wheel", function (scrollcount) {
  if (scrollcount.deltaY >= 0) {
    index++;
    carousel.scrollLeft = scrollLength * index;
  }

  if (scrollcount.deltaY <= 0) {
    index--;
    carousel.scrollLeft = scrollLength * index;
  }

  switch (index) {
    case 0:
      buttOne.classList.replace("buttonOff", "buttonOn");
      buttTwo.classList.replace("buttonOn", "buttonOff");
      buttThree.classList.replace("buttonOn", "buttonOff");
      buttFour.classList.replace("buttonOn", "buttonOff");
      break;

    case 1:
      buttTwo.classList.replace("buttonOff", "buttonOn");
      buttOne.classList.replace("buttonOn", "buttonOff");
      buttThree.classList.replace("buttonOn", "buttonOff");
      buttFour.classList.replace("buttonOn", "buttonOff");
      break;
  }

  console.log(scrollIndex);
  reset();
});

buttOne.addEventListener("click", function () {
  index = 0;

  carousel.scrollLeft = scrollLength * index;

  buttOne.classList.replace("buttonOff", "buttonOn");
  buttTwo.classList.replace("buttonOn", "buttonOff");
});

buttTwo.addEventListener("click", function () {
  index = 1;

  carousel.scrollLeft = scrollLength * index;

  buttTwo.classList.replace("buttonOff", "buttonOn");
  buttOne.classList.replace("buttonOn", "buttonOff");
});
