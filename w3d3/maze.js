$(document).ready(function(){
let gameStatus = {
    started: false,
};

$("#start").click(function () {
    gameStatus.started = true;
    $(".boundary").removeClass("youlose");
    $("h2").text("Good Luck!");

});

$(".boundary").mouseover(function () {
      if(gameStatus.started){
          $(".boundary").addClass("youlose");
          $("h2").text("Sorry, you lost the Game!");
          gameStatus.started = false;
      }
  });

$("#maze").mouseleave(function () {
    if(gameStatus.started){
        $(".boundary").addClass("youlose");
       gameStatus.started = false;
        $("h2").text("Sorry, you lost the Game!");
    }
});

    $("#end").click(function () {
       if(gameStatus.started){
           $("h2").text("Gongratulation, you win! :) ");
           gameStatus.started = false;
       }
    });
});