

// ----------------------------
// Build puzzle board
// ----------------------------
const createBoard = () => {
    const puzzleRow = `
            <div class="puzzle-tile d-flex">
                <p 
                    class="m-auto tile-number"
                    data-isHidden="1"
                    data-correctAnswer=""
                    data-guessedAnswer=""
                >1</p>
            </div>
        `.repeat(9);

    const board = `
            <div class="row d-flex justify-content-center puzzle-row">
                ${puzzleRow}
            </div>
        `.repeat(9);

    return board;
}
$('#puzzle-container').append(createBoard());


// -------------------------------
// New Values
// --------------------------------
const fillTileValues = () => {

    return 'filled';
}

// initial array of tiles
const tilesArray = $('.tile-number');
// -----------------------
// give all tiles values
// -----------------------
for (let i=0; i< tilesArray.length; i++ ) {
    tilesArray[i].innerHTML = i;
    tilesArray[i].id = i;
}

// ----------------------------------------------------------
// tiles on click (currently shows coordinates and tile id)
// ----------------------------------------------------------
$('.puzzle-tile').on('click', function (e) {
    const x = e.pageX;
    const y = e.pageY;
    const tileNumber = e.target.firstElementChild;
    console.log('is hidden: ' + e.target.firstElementChild.getAttribute('data-isHidden'));
    console.log('correct answer: ' + e.target.firstElementChild.getAttribute('data-correctAnswer'));

    spawnPickerWheel(x, y, tileNumber.id);
});


// -------------------------------------------
// show picker wheel (currently logs values)
// -------------------------------------------
const spawnPickerWheel = (x, y, tileNumber) => {
    console.log(`x: ${x}, y: ${y}`);
    console.log('id: ' + tileNumber);
}
