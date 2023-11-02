let mainVideo  = document.getElementById("mainVideo");
const play = document.getElementById('play')

function playPauseMainVideo() {
  if (mainVideo.paused) {
    mainVideo.play();
    play.style.animation = "playDisappear .5s forwards";
  } else {
    mainVideo.pause();
    play.style.animation = "playAppear .5s forwards";
  }
}
//mainVideo.addEventListener("ended", play.style.animation = "playAppear .5s forwards", false);