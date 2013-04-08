$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});




// $(document).ready(function() {
//   var game_over = false;
//   var endPoint = $('.player1_strip td').size()-1

//   $(document).on('keyup', function(event) {
//     var pressed_key = String.fromCharCode(event.which);

//     if (game_over){
//       // do northing
//     }else if (pressed_key == 'Q') {
//       increment('1');
//     }
//     else if (pressed_key == 'P') {
//       increment('2');
//     };  

//     if ($('.player2_strip .active').index() == endPoint) {

//       $('.message span').replaceWith('Player 2 Finished!');

//       game_over = true;
//     }

//     else if ($('.player1_strip .active').index() == endPoint) {
//       $('.message span').replaceWith('Player 1 Finished!');
//       game_over = true;

//     };
//   });

//   $(".reset").on('click', 'button', function() {
//     // console.log($(this).text() + "was clicked");
//     $('.racer_table').find('.active').removeClass('active');
//     $('.racer_table td:first-child').addClass('active');
//     game_over = false

//   });


// });

// function increment(player_num){
//   $('.player'+player_num+'_strip td.active').removeClass('active').next().addClass('active');
// };
