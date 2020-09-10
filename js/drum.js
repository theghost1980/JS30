//credits on some files Audio files. S1 Artist Series Sample Pack!
//Artist:(@symbolycone)downloaded from: https://cymatics.fm/blogs/production/free-drum-kits
//cymbal sound from: http://www.dashingstrike.com/Automato/games/ATITD/sounds/cymbals.wav
//drum bg from: https://wall.alphacoders.com/by_sub_category.php?id=173452&name=Drums+Wallpapers

document.onkeypress = check_keyPress;
//some vars
//using array
var p_array = [];
var drum_list = document.querySelectorAll('.p_ar');
drum_list.forEach(function(x){
    p_array.push(x);
});

var snare = new Audio('./media-images/sounds/snare.wav');
var hihat = new Audio('./media-images/sounds/hihat.wav');
var kick = new Audio('./media-images/sounds/kick.wav');
var bell = new Audio('./media-images/sounds/bell.wav');
var cymbal = new Audio('./media-images/sounds/cymbal.wav');
var audio_ar = [snare,hihat,kick,bell,cymbal];

function check_keyPress(){
    let evt = this.event || window.event;
    let ind = 0;
    if (evt.keyCode == 97){
        ind = 0;
    }
    if (evt.keyCode == 115){
        ind = 1;
    }
    if (evt.keyCode == 100){
        ind = 2;
    }
    if (evt.keyCode == 102){
        ind = 3;
    }
    if (evt.keyCode == 103){
        ind = 4;
    }
    //with array
    p_array[ind].style.color = "red";
    audio_ar[ind].play();
    setTimeout(turn_off,600,ind);
}

function turn_off(k){
    p_array[k].style.color = "black";
}