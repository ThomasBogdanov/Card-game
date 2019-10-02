//check whether user can play the cards
const currentCards = {colour:'blue',value:1};
const userHand = [
  {colour:'blue','value':2},
  {colour:'yellow','value':1},
  {colour:'blue','value':2}
]
const playCard = function (handCards){
  for(let element of handCards){
    if(element.colour === currentCards.colour || element.value === currentCards.value){
      console.log('play')
      return true
    }
    else{
      console.log('not play') 
      return false
    }
  }
}
playCard(userHand)