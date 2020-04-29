/*jshint esversion: 6 */
window.onload = function () {
    "use strict";
    let isStarted = false;
    let speed = 300;
    let pos = 0;
    let animationArray = [];
    let animation = "Blank";

    document.getElementById("start").onclick = startOrStopBtnCLicked;
    document.getElementById("stop").onclick = startOrStopBtnCLicked;
    document.getElementById("animation").onchange = animationTypeChanged;
    document.getElementById("fontsize").onchange = fontSizeChanged;
    document.getElementById("turbo").onchange = turboChanged;

    /*A fnction to change speed of the animation, when the turbo button status is changed*/
    function turboChanged() {
        if(document.getElementById("turbo").checked){
            speed = 50;
        }else{
            speed = 250;
        }
    }

    /*A function to select change the animation type between juggler, exercise and bysicle etc is selected */
    function animationTypeChanged() {
        animation = document.getElementById("animation").value;
        pos = 0;
        animationArray = ANIMATIONS[animation].split("=====\n");
    }
/*A function to start and stop the animation when start and stop button is clicekd repsectively */
    function startOrStopBtnCLicked() {
        isStarted = !isStarted;
        pos = 0;
        animationArray = ANIMATIONS[animation].split("=====\n");
        document.getElementById("start").disabled = isStarted;
        document.getElementById("stop").disabled = !isStarted;

        if(isStarted){
            run();
        }
    }
/*a function which runs teh animation after the start button is clicked*/
    function run() {
        document.getElementById("text-area").value = animationArray[pos%animationArray.length];
        pos++;
        if(isStarted){
            setTimeout(run,  speed);
        }
    }
    /*A function to change the size of animation text when font size is selected*/
function fontSizeChanged() {

        let fontSize = "12pt";
        switch (document.getElementById("fontsize").value) {
            case "Tiny":
                fontSize = "6pt";
                break;
            case "Small":
                fontSize = "11pt";
                break;
            case "Medium":
                fontSize = "13pt";
                break;
            case "Large":
                fontSize = "18pt";
                break;
            case "Extra Large":
                fontSize = "24pt";
                break;
            case "XXL":
                fontSize = "36pt";
                break;
        }
    document.getElementById("text-area").style.fontSize = fontSize;
}

}