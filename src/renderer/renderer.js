const mainVideo  = document.getElementById("mainVideo");
const playPauseControl = document.getElementById("playPauseControl");
const playIcon = document.getElementById("play");
const pauseIcon = document.getElementById("pause");

playPauseControl.onclick = () => {
  if (mainVideo.paused) {
    mainVideo.play();
    pauseIcon.style.animation = "onPlayPauseAnim .6s forwards";
    playIcon.style.animation = "onPlayPauseAnim .6s  reverse";
    playIcon.classList.add('hidden');
    pauseIcon.classList.remove('hidden');
  } else {
    mainVideo.pause();
    playIcon.style.animation = "onPlayPauseAnim .6s forwards";
    pauseIcon.style.animation = "onPlayPauseAnim .6s  reverse";
    pauseIcon.classList.add('hidden');
    playIcon.classList.remove('hidden');
  }
}
//mainVideo.addEventListener("ended", play.style.animation = "playAppear .5s forwards", false);