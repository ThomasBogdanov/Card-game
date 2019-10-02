$(document).ready(function(){

  // when page loads keep track of hand
  $('.testDiv').on('click',function(event){
    // const card = $(this);
    console.log($(".middleCard").data('colour'),$(".middleCard").data('value'))

    console.log(($(this).data('colour')), $(this).data('value'))

    if(($(this).data('colour')) === ($(".middleCard").data('colour')) || ($(this).data('value')) === ($(".middleCard").data('value')) ||$(this).data('colour') === 'black'){  
      $(this).parent().remove();
      $(".middleCard").replaceWith(this);
      $(this).attr("class", "middleCard");
      //make a post request to /uno/:id/play with body of card= {caradobject}
      event.preventDefault();
      console.log("in the agax request")
      const card = $(this);
      const url = "/uno/:id/playCard";
      console.log(card);
      console.log(url);
      console.log($(this).data("game"));
            $.ajax({
        type: "post",
        url: `/games/uno/${$(this).data("game")}/play`,
        data: card,
        success: function (response) { 
          console.log('almost there!')
          console.log(response);
        }
      })
      
    }
    // $("#play").submit(function(event) {
      
    // })

    

      // $.ajax({
      //   type: "post",
      //   url: url,
      //   data: card,
      //   success: function () { 
      //     location.reload()
      //   }
      // })
    
    })







      // $.ajax({
      //   type:'POST',
      //   url:'/uno/:id/playcard',
      //   data:{colour:card.data('colour'),value:card.data('value')}
      // })
  })
 
