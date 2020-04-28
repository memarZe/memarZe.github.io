/*jshint esversion: 6 */
window.onload=function () {
    "use strict";
    document.getElementById("btn").onclick = decorationBtnClicked;
    document.getElementById("btn").onclick = increaseTextSizeEachTimeButtonClicked;
    document.getElementById("bling").onchange = blindInputChanged;
/* a function when the "Bigger Decorations!" button is clicked, make the font size bigger and bigger in every 500 miliseconds*/
    function increaseTextSizeEachTimeButtonClicked() {
        setInterval(decorationBtnClicked, 500);

    }
/* A function changes the sont size of textarea when bigger decoration button is clicked*/
    function decorationBtnClicked() {

        let fontSize = parseInt(window.getComputedStyle(document.getElementById("TextArea")).fontSize);
        fontSize += 2;
        document.getElementById("TextArea").style.fontSize = fontSize + "pt";
    }
/* A function to change the styles of the text inside text area when blind input check box value is changed*/
    function blindInputChanged() {
        let text = document.getElementById("TextArea");
        if (document.getElementById("bling").checked) {
            text.style.fontWeight = "bold";
            text.style.color = "green";
            text.style.textDecoration = "underline";
            document.body.style.backgroundImage = "url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)";
        } else {
            text.style.fontWeight = "";
            text.style.color = "";
            text.style.textDecoration = ""
            document.body.style.backgroundImage = "";
        }
    }
}