$(function () {
    let cleanScreenData = {
        timer: null
    };


    function getValue(id) {
        return $("#"+id).val();
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[getRandomInt(16)];
        }
        return color;
    }

    function mousemove(event) {
        $(this).css(
            "opacity", function (indx, oldVal) {
                let newVal = oldVal - 0.01;
                if(newVal<=0){
                    this.remove();
                }
                return newVal;
            }
        );
    }


    function growCircle() {
        let growthAmount = getValue("growthAmount");

        function grow(idx, oldValue){
            let newVal = (parseInt(oldValue)+parseInt(growthAmount));
            return newVal+"px";
        }


        function move(idx, oldValue) {
            return parseInt(oldValue)-growthAmount/2+"px";
        }
        $(".circle").css("width", grow);
        $(".circle").css("height", grow);
        $(".circle").css("top", move);
        $(".circle").css("left", move);

        $(".circle").css("border-radius", function(idx, oldValue) {
            return parseInt(oldValue)+growthAmount/2+"px";
        });

    }

    function getNewCircle() {
        return $("<div>",{
            "class": "circle",
            "css":{
                "background-color": getRandomColor(),
                "top": getRandomInt(500)+"px",
                "left": getRandomInt(1600)+"px"
            }
        });
    }

    function start(){
        if(cleanScreenData.timer!=null){
            clearInterval(cleanScreenData.timer);
        }
        let count = getValue("circleCount");
        let $circles = [];
        for(let i = 0; i < count; i++){
            $circles.push( getNewCircle());
        }
        $(".circle-container").append($circles);
        cleanScreenData.timer = setInterval(growCircle, getValue("growRate"));
    }

    $("#start").on("click", start);
    $(".circle-container")
        .on("click", "div.circle", function () {this.remove();})
        .on("mousemove", "div.circle", mousemove);
});