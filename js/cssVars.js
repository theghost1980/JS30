const img = document.querySelector(".img");
const text = document.querySelectorAll(".text");
var blur = getComputedStyle(img).getPropertyValue('--blur-img');

function change_blur(){
    let slider = document.getElementById("blur_img");
    if (slider != null){
        let v = 'blur(' + slider.value + "px)";
        img.style.setProperty('--blur-img',v);
    }
}

function change_padding(){
    let slider = document.getElementById("slid_img");
    // alert(slider.value);
    if (slider != null){
        let v = slider.value + "px";
        img.style.setProperty('--padding-img',v);
    }
}

function change_color(){
    let color = document.getElementById("color").value;
    if (color != null){
        text.forEach(function(x){
            x.style.setProperty('--color-text',color);
        });
    }
}