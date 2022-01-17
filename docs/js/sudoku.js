

/**
 *  Page load setup
 */
 let game = new Game('easy');
 $('#puzzle-container').html('');
 $('#puzzle-container').append(game.initialize());
 pickerWheelFunctionality();
 tileClickFunctionality();
 
 
 /**
  *  New game clicked
  */
 $('#new-game').on('click', function () {
     const difficulty = $('input[name=difficulty]:checked').val();
     game = new Game(difficulty);
     $('#puzzle-container').html('');
     $('#puzzle-container').append(game.initialize());
     tileClickFunctionality();
     console.log(`Loaded ${difficulty}`);
 });
 
 
 
 /**
  *  Setup picker wheel
  */
 function pickerWheelFunctionality () {
     // Selecting a number from the wheel
     $('.num-btn').on('click', function (e) {
         const id = $('#picker-wheel').attr('data-tilenumber');
         $(`#${id}`).html(e.target.value);
         const correct = $(`#${id}`).data('correctanswer')
         const guess = e.target.value;
         if (correct == guess) {
             $(`#${id}`).data('correct', 1);
             $(`#${id}`).addClass('correct');
             const total = $('.correct');
 
             // Win here
             if (total.length > 80) {
                 alert('Winner!');
 
                 // disable all
                 $('.tile-number').attr('data-changeable', 'no');
             }
         } else {
             $(`#${id}`).data('correct', 0);
             $(`#${id}`).removeClass('correct');
         }
 
         $('#picker-wheel').hide();
         // update game
     });
 
     // Close wheel button
     $('#close-wheel-btn').on('click', function () {
         $('#picker-wheel').attr('data-tilenumber', '');
         $('#picker-wheel').hide();
     });
 }
 
 
 
 /**
  *  Setup tile clicks
  */
 function tileClickFunctionality() {
     // Tile on click, spawns a picker wheel
     $('.puzzle-tile').on('click', function (e) {
         const x = e.pageX;
         const y = e.pageY;
         const currentTile = e.target.firstElementChild;
         const changeable = e.target.firstElementChild.getAttribute('data-changeable');
         // console.log('changeable', changeable);
         if (changeable === 'yes') {
             // console.log('tripped');
             spawnPickerWheel({ x, y, currentTile });
         }
 
     });
 
     // Show wheel
     const spawnPickerWheel = ({ x, y, currentTile }) => {
         // const correctanswer = currentTile.attributes[2].value || 'nope';
         const id = currentTile.id;
         // const isHidden = e.target.firstElementChild.getAttribute('data-isHidden');
         // console.log('correct answer: ' + correctanswer);
         // console.log('id??: ', id);
         $('#picker-wheel').attr('data-tilenumber', id);
         // console.log(`x: ${x}, y: ${y}`);
         x = x - 130;
         y = y - 130;
         // console.log('id: ' + tileNumber);
         if (screen.width > 700) {
             $('#picker-wheel').css({
                 "top": y,
                 "left": x,
             });
         } else {
             const xOffset = (screen.width / 2 - 125);
             const yOffset = (screen.height / 2 - 125);
             $('#picker-wheel').css({
                 "bottom": `${yOffset}px`,
                 "left": `${xOffset}px`,
             });
         }
 
         $('#picker-wheel').removeClass('d-none').show(800);
 
         // Check if tile correct or not
     };
 }