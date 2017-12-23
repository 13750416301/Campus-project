var playButton = document.getElementById("play-btn");
var pauseButton = document.getElementById("pause-btn");
var player = document.getElementById("player");
var reload = document.getElementById("reload");
var whole = document.getElementById("whole");
var volume = document.getElementById("volume");
var mute = document.getElementById("volume2");

window.onload=function() {
    playButton.onclick = function() {
        player.play();
        pauseButton.style.display = "block";
        playButton.style.display = "none";
    }
    pauseButton.onclick = function() {
        player.pause();
        playButton.style.display = "block";
        pauseButton.style.display = "none";
    }

    reload.onclick = function() {
        player.load();
        playButton.style.display = "block";
        pauseButton.style.display = "none";
    }

    whole.onclick = function() {
        if(player.webkitRequestFullscreen) {
            player.webkitRequestFullScreen();
        }
    }
    volume.onclick = function() {
        player.muted = true;
        mute.style.display = "block";
        volume.style.display = "none";
    }
    mute.onclick = function() {
        player.muted = false;
        volume.style.display = "block";
        mute.style.display = "none";
    }
    
    
    
    
};
