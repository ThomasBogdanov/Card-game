$(() => {
  registeringClickGameHandler()
  registeringClickStartHandler()
  playCard()
  // drawCard()
});
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

const user = getCookie('userID')

function registeringClickGameHandler() {
  $("#new-game").submit(function (event) {
    event.preventDefault();
    const game = $(this);
    const numGames = $(".game").length
    const url = game.attr("action");

  //   $.ajax({
  //     type: 'POST',
  //     url: url,
  //     data: game,
  //     success: function() {   
  //       location.reload();
  //     }
  //   })
  })
}

function registeringClickStartHandler() {
  $("#start").submit(function (event) {
    event.preventDefault();
    const deck = $(this);
    const url = deck.attr("action");

    // $.ajax({
    //   type: 'POST',
    //   url: url,
    //   data: game,
    //   success: function() {   
    //     location.reload();
    //   }
    // })
  })
}

function playCard() {
  $(".testDiv").click(function () {
    if(($(".player-card").attr("colour")) === ($(".middleCard img").attr("colour"))) {
    $(".middleCard img").attr("src", $(this).attr("src"));
    // console.log($(".middleCard img").attr("src"))

    $(".middleCard img").attr("data-colour", $(this).attr("data-colour"));
    $(".middleCard img").attr("data-value", $(this).attr("data-value"));
    }

  })
};