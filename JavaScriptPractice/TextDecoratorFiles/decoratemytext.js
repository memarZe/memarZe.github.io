window.onload=function () {

    document.getElementById("btn").onclick = decorationBtnClicked;
    document.getElementById("btn").onclick = increaseTextSizeEachTimeButtonClicked;
    document.getElementById("bling").onchange = blindInputChanged;

    function increaseTextSizeEachTimeButtonClicked() {
        setInterval(decorationBtnClicked, 500);

    }

    function decorationBtnClicked() {

        let fontSize = parseInt(window.getComputedStyle(document.getElementById("TextArea")).fontSize);
        fontSize += 2;
        document.getElementById("TextArea").style.fontSize = fontSize + "pt";
    }

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