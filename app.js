const plays = document.querySelectorAll(".play-btn");

plays.forEach(play => {
    play.addEventListener("click", () => {
        
    });
});

let song1 = document.getElementById("song1");

playBtn.addEventListener("click", () => {
    let audio = new Audio("audio/hanumanChalisa.mp3");
    audio.play();
});