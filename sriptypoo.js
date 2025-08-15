const holem = document.getElementById("carousel");
const buttOne = document.getElementById("first");
const buttTwo = document.getElementById("second");
const buttThree = document.getElementById("third");

let index = 0;
let scrollLength = window.innerWidth;

//This caps the index on the carousel scroll
//update this when adding new buttons
function reset() {
  if (index <= 0) {
    index = 0;
  }
  if (index >= 2) {
    index = 2;
  }
}

window.addEventListener("resize", function () {
  scrollLength = window.innerWidth;
});

//DEBOUNCE - Non Priority until more sections are added
//throttle this function to stop the wack ass trackpad nonsense
window.addEventListener("wheel", function (scrollcount) {
  console.log(index);
  if (scrollcount.deltaY >= 0) {
    index++;
    reset();
    carousel.scrollLeft = scrollLength * index;
  }

  if (scrollcount.deltaY <= 0) {
    index--;
    reset();
    carousel.scrollLeft = scrollLength * index;
  }

  //switch case is easier to work with when adding additional cards in the future
  switch (index) {
    case 0:
      buttOne.classList.replace("buttonOff", "buttonOn");
      buttTwo.classList.replace("buttonOn", "buttonOff");
      buttThree.classList.replace("buttonOn", "buttonOff");
      break;

    case 1:
      buttTwo.classList.replace("buttonOff", "buttonOn");
      buttOne.classList.replace("buttonOn", "buttonOff");
      buttThree.classList.replace("buttonOn", "buttonOff");
      break;

    case 2:
      buttThree.classList.replace("buttonOff", "buttonOn");
      buttOne.classList.replace("buttonOn", "buttonOff");
      buttTwo.classList.replace("buttonOn", "buttonOff");
      break;
  }
});

//Touchscreen Functionality, potentially will need a range added when used on mobile to avoid unintentional swipes
let touchdown;

window.addEventListener("touchstart", function (e) {
  touchdown = e.touches[0].screenX;
  console.log(touchdown);
});

window.addEventListener("touchend", function (z) {
  let touchup = z.changedTouches[0].screenX;
  console.log(touchup);
  if (touchdown > touchup) {
    index++;
    carousel.scrollLeft = scrollLength * index;
    reset();
  } else {
    index--;
    carousel.scrollLeft = scrollLength * index;
    reset();
  }

  switch (index) {
    case 0:
      buttOne.classList.replace("buttonOff", "buttonOn");
      buttTwo.classList.replace("buttonOn", "buttonOff");
      buttThree.classList.replace("buttonOn", "buttonOff");
      break;

    case 1:
      buttTwo.classList.replace("buttonOff", "buttonOn");
      buttOne.classList.replace("buttonOn", "buttonOff");
      buttThree.classList.replace("buttonOn", "buttonOff");
      break;

    case 2:
      buttOne.classList.replace("buttonOn", "buttonOff");
      buttTwo.classList.replace("buttonOn", "buttonOff");
      buttThree.classList.replace("buttonOff", "buttonOn");
      break;
  }
});

//Manual Button Scroll

buttOne.addEventListener("click", function () {
  index = 0;

  carousel.scrollLeft = scrollLength * index;

  buttOne.classList.replace("buttonOff", "buttonOn");
  buttTwo.classList.replace("buttonOn", "buttonOff");
  buttThree.classList.replace("buttonOn", "buttonOff");
});

buttTwo.addEventListener("click", function () {
  index = 1;

  carousel.scrollLeft = scrollLength * index;

  buttTwo.classList.replace("buttonOff", "buttonOn");
  buttOne.classList.replace("buttonOn", "buttonOff");
  buttThree.classList.replace("buttonOn", "buttonOff");
});

buttThree.addEventListener("click", function () {
  index = 2;

  carousel.scrollLeft = scrollLength * index;

  buttTwo.classList.replace("buttonOn", "buttonOff");
  buttOne.classList.replace("buttonOn", "buttonOff");
  buttThree.classList.replace("buttonOff", "buttonOn");
});
