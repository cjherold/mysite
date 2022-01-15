
let game = new Game('easy');

game.initialize();

$('#new-game').on('click', function () {
    const difficulty = $('input[name=difficulty]:checked').val();
    game = new Game(difficulty);
    game.initialize();
    console.log(`Loaded ${difficulty}`);
});
