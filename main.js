var leftButton = document.getElementById("left-arrow");
var rightButton = document.getElementById("right-arrow");
var sliderCard = document.getElementsByClassName("slider");
var l = 0;
rightButton.onclick = () => {
  l++;
  for (var i of sliderCard) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-740px";
    }
    if (l == 2) {
      i.style.left = "-1480px";
    }
    if (l == 3) {
      i.style.left = "-2220px";
    }
    if (l == 4) {
      i.style.left = "-3400px";
    }
    if (l > 4) {
      l > 4;
    }
  }
};
leftButton.onclick = () => {
  l--;
  for (var i of sliderCard) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-740px";
    }
    if (l == 2) {
      i.style.left = "-1480px";
    }
    if (l == 3) {
      i.style.left = "-2220px";
    }
    if (l == 4) {
      i.style.left = "-2960px";
    }
    if (l < 0) {
      l = 0;
    }
  }
};
