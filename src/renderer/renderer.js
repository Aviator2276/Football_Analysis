let mainVideo  = document.getElementById("mainVideo");

function playPauseMainVideo() { 
    if (mainVideo.paused) 
      mainVideo.play(); 
    else 
      mainVideo.pause(); 
  } 