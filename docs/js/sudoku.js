

// ----------------------------
// Build puzzle board
// ----------------------------
const createBoard = () => {
    const puzzleRow = `
            <div class="puzzle-tile d-flex">
                <p class="m-auto tile-number">1</p>
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

// -----------------
// tiles on click
// -----------------
$('.puzzle-tile').on('click', function () {
    // const tileValue = $(this).find('p')[0].innerHTML;
    const tileValue = $(this)[0].children[0];
    console.log(tileValue.innerHTML); // tile-number html
    console.log(tileValue.id); // tile-number id
});
