let box = document.querySelectorAll("#box");
let bool = false;
window.onscroll = function () {
  if (!bool) {
    box.forEach((ele) => start(ele));
  }
  bool = true;
};
function start(ele) {
  let g = ele.dataset.goal;
  let x = setInterval(() => {
    ele.textContent++;
    if (ele.textContent == g) {
      clearInterval(x);
    }
  }, 2000 / g);
}
