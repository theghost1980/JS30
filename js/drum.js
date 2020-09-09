//credits on some files Audio files. S1 Artist Series Sample Pack!
//Artist:(@symbolycone)downloaded from: https://cymatics.fm/blogs/production/free-drum-kits
//cymbal sound from: http://www.dashingstrike.com/Automato/games/ATITD/sounds/cymbals.wav

document.onkeypress = check_keyPress;
//some vars
var a = document.getElementById("a");
var s = document.getElementById("s");
var d = document.getElementById("d");
var f = document.getElementById("f");
var g = document.getElementById("g");
var snare = new Audio('./media-images/sounds/snare.wav');
var hihat = new Audio('./media-images/sounds/hihat.wav');
var kick = new Audio('./media-images/sounds/kick.wav');
var bell = new Audio('./media-images/sounds/bell.wav');
var cymbal = new Audio('./media-images/sounds/cymbal.wav');

function check_keyPress(){
    let evt = this.event || window.event;
    // alert("Code: " + evt.keyCode);
    if (evt.keyCode == 97){
        a.style.color = "red";
        snare.play();
        setTimeout(turn_off,600,"a");
    }
    if (evt.keyCode == 115){
        s.style.color = "red";
        hihat.play();
        setTimeout(turn_off,600,"s");
    }
    if (evt.keyCode == 100){
        d.style.color = "red";
        kick.play();
        setTimeout(turn_off,600,"d");
    }
    if (evt.keyCode == 102){
        f.style.color = "red";
        bell.play();
        setTimeout(turn_off,600,"f");
    }
    if (evt.keyCode == 103){
        g.style.color = "red";
        cymbal.play();
        setTimeout(turn_off,600,"g");
    }
}


function turn_off(k){
    // alert(k);
    document.getElementById(k).style.color = "black";
}