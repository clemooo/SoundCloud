let launch = document.querySelector(".launch")
let countdown = document.querySelector(".countdown")
let ovni = document.querySelector("#ovni")
let number = 5

launch.addEventListener(
    'click',
    function () {
      let ovni1 = document.querySelector(".ovni1");
      ovni1.play();
      ovni1.currentTime=6;
        setInterval(decollage, 1010);
    }, false);

function decollage() {
    if (number > 0) {
        countdown.innerHTML = (number -= 1)
        if (number%2 === 0) {
            countdown.style.transform = "rotateX(360deg)"
            countdown.style.transition = "all 1s"
        }
        else {
            countdown.style.transform = "rotateX(0deg)"
            countdown.style.transition = "all 1s"
        }
    } else {
      countdown.innerHTML = 0
        ovni.style.transform = "translateY(-15000px)"
        ovni.style.transition = "all 18s"
    }
  }
