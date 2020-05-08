$(document).ready(function(){
    /*an object to initialize status of the game ( if the game started or not*/
let gameStatus = {
    started: false,
};
/*an event to start the game*/
$("#start").click(function () {
    gameStatus.started = true;
    $(".boundary").removeClass("youlose");
    $("h2").text("Good Luck!");

});
/*an even to control the game and if the player loses the road or violates the rule of the game, it stoped the game*/
$(".boundary").mouseover(function () {
      if(gameStatus.started){
          $(".boundary").addClass("youlose");
          $("h2").text("Sorry, you lost the Game!");
          gameStatus.started = false;
      }
  });

/*and event to controll the player if leaving the boundary of teh game*/
$("#maze").mouseleave(function () {
    if(gameStatus.started){
        $(".boundary").addClass("youlose");
       gameStatus.started = false;
        $("h2").text("Sorry, you lost the Game!");
    }
});
/*an event to end the game*/
    $("#end").click(function () {
       if(gameStatus.started){
           $("h2").text("Gongratulation, you win! :) ");
           gameStatus.started = false;
       }
    });
});