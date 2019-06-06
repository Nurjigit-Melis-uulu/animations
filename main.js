let clock = document.querySelector(".clock div");
let timeLine = 0;

function time() {
  timeLine += 1;
  clock.style.transform = `rotateZ(${timeLine}deg)`;

  let timeOut = setTimeout(() => {
    clearTimeout(timeOut);
    time();
  }, 100);
}

time();
