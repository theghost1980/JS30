const h = document.querySelector(".hand.hour");
const m = document.querySelector(".hand.min");
const s = document.querySelector(".hand.sec");
const hand = document.querySelectorAll(".hand");
const p_time = document.querySelector(".time-d");

function get_time(){
    let dat = new Date();
    let hours = dat.getHours();
    let minutes = dat.getMinutes();
    let seconds = dat.getSeconds();
    // alert(hours + ":" + minutes + ":" + seconds);
    //12 -> 360
    //1h  -> x
    let hdeg = ((hours / 12) * 360) + ((minutes/60)*30);
    h.style.transform = `rotate(${hdeg}deg)`;
    let mdeg = ((minutes / 60) * 360) + ((seconds/60)*6);
    m.style.transform = `rotate(${mdeg}deg)`;
    let sdeg = ((seconds / 60) * 360);
    //trying to deactivate the transition just in 0 and assign the 90 deg
    //the effect is to make the movement more real, instead of a "jump" in the drawing of the sec div
    if (seconds == 59){
        hand.forEach(function(x){
            x.classList.add('notransition');
        });
        s.style.transform = 'rotate(354deg)';
    } else  if (seconds == 0){
        s.style.transform = 'rotate(360deg)';
    } else if (seconds == 1){
        s.style.transform = `rotate(${sdeg}deg)`;
    }else {
        s.style.transform = `rotate(${sdeg}deg)`;
        hand.forEach(function(x){
            x.classList.remove('notransition');
        });
    }
    //let us check
    // console.log("Sec degrees: " + sdeg + " Seconds: " + seconds);
    p_time.textContent = "Digital Time: " + hours + ":" + minutes + ":" + seconds;
}
//let us get the actual time on load, then we adjust the time of auto-execution
get_time();
setInterval(get_time,1000);
