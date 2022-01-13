

/**
 * Main game class.
 * Selects loadout, shuffles, checks for win, new game
 * Difficulty will affect amount of tiles initially showing
 */
 class Game {
    constructor(difficulty) {
        const difficultyNumber = {
            'easy': 90,
            'medium': 40,
            'hard': 15
        }
        this.difficulty = difficultyNumber[difficulty];
        const selected = Math.floor(Math.random() * loadouts.length);
        this.loadout = loadouts[selected] || [];
        this.gameFinished = false;
    }

    // ----------------------------
    // Build empty puzzle board on first page load.
    // This is a template of how the p tags are going to be structured
    // ----------------------------
    createBoard() {
        const puzzleRow = `
                <div class="puzzle-tile d-flex">
                    <p 
                        class="m-auto tile-number covered"
                        data-correctanswer=""
                        data-correct="0"
                        data-changeable="no"
                    ></p>
                </div>
            `.repeat(9);

        const board = `
                <div class="row d-flex justify-content-center puzzle-row">
                    ${puzzleRow}
                </div>
            `.repeat(9);
        return board;
    }

    /**
     *  Setup on page load
     */
    initialize() {
        // fill the puzzle with blank tiles
        // $('#puzzle-container').html(this.createBoard());

        this.loadTileValues();

        // Picker wheel buttons functionality
        this.pickerWheelFunctionality();

        // Tiles spawn picker wheel on click
        this.tileClickFunctionality();

    }

    /**
     *  Tile click functionality
     */
    tileClickFunctionality() {
        // Tile on click, spawns a picker wheel
        $('.puzzle-tile').on('click', function (e) {
            const x = e.pageX;
            const y = e.pageY;
            const currentTile = e.target.firstElementChild;
            const changeable = e.target.firstElementChild.getAttribute('data-changeable');
            // console.log('changeable', changeable);
            if (changeable === 'yes') {
                // console.log('tripped');
                spawnPickerWheel(x, y, currentTile);
            }
            
        });

        // Show wheel
        const spawnPickerWheel = (x, y, currentTile) => {
            const correctanswer = currentTile.attributes[2].value || 'nope';
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
                    "left": x
                });
            } else {
                const xOffset = (screen.width / 2 - 125);
                const yOffset = (screen.height / 2 - 125);
                $('#picker-wheel').css({
                    "bottom": `${yOffset}px`,
                    "left": `${xOffset}px`
                });
            }
        
            $('#picker-wheel').removeClass('d-none').show(800);

            // Check if tile correct or not
        }
    }


    checkAnswer(chosen, correct, tile) {
        if (chosen === correct) {
            tile.currentTile.attributes[2].value = 1;
            tile.removeClass('covered');
            // console.log('correct');
        } else {
            tile.currentTile.attributes[2].value = 0;
            tile.addClass('covered');
            // console.log('incorrect');
        }
    }
    /**
     *  Picker wheel number select and close functionality
     */
    pickerWheelFunctionality() {
        // Selecting a number from the wheel
        $('.num-btn').on('click', function (e) {
            // console.log(e.target.value);
            const id = $('#picker-wheel').attr('data-tilenumber');
            // console.log('found id: ', id);
            $(`#${id}`).html(e.target.value);
            const correct = $(`#${id}`).data('correctanswer')
            const guess = e.target.value;
            // console.log('correct: --', correct);
            // console.log('guess: ---', guess);
            if (correct == guess) {
                $(`#${id}`).data('correct', 1);
                $(`#${id}`).addClass('correct');
                // console.log('correct');
                const total = $('.correct');
                // console.log('total correct: ', total.length)

                // Win here
                if (total.length > 80) {
                    alert('Winner!');

                    // disable all
                    $('.tile-number').attr('data-changeable', 'no');
                    // console.log($('.tile-number'))
                }
            } else {
                $(`#${id}`).data('correct', 0);
                $(`#${id}`).removeClass('correct');
                // console.log('incorrect');
            }


            $('#picker-wheel').hide();
        
            //update game
        });

        // Close wheel button
        $('#close-wheel-btn').on('click', function () {
            $('#picker-wheel').attr('data-tilenumber', "");
            $('#picker-wheel').hide();
        })
    }



    clearOldEventListeners() {
        // Might need to clear listeners when making new games...
    }


    /**
     *  Shuffles the loadout values and fills the tiles with values
     */
    loadTileValues() {
        this.swapLoadoutValues(2);

        this.shuffleSections();

        this.flattenLoadout();

        this.mapLoadoutTotiles();

        this.fillBoard();
    }

    /**
     * Picks to random numbers and swaps them in the loadout
     */
    swapLoadoutValues(numberOfSwaps) {
        const swapValues = (selected, first, second) => {
            if (selected === first) return second;
            if (selected === second) return first;
            return selected;
        }

        // Do 3 times
        for (let i=0; i<numberOfSwaps; i++) {
            const value1 = (Math.floor(Math.random() * 9)) + 1;
            const value2 = (Math.floor(Math.random() * 9)) + 1;
            // swap values
            this.loadout = this.loadout.map(row => {
                row = row.map(seleced => {
                    return swapValues(seleced, value1, value2);
                });
                return row;
            });
        }
    }

    shuffleSections() {
        const selected = (Math.floor(Math.random() * 3));
        const shuffleOptions = {
            0: () => {
                // console.log('first');
                this.loadout = [
                    this.loadout[3],
                    this.loadout[4],
                    this.loadout[5],
                    this.loadout[6],
                    this.loadout[7],
                    this.loadout[8],
                    this.loadout[0],
                    this.loadout[1],
                    this.loadout[2],
                ]
            },
            1: () => {
                // console.log('second');
                this.loadout = [
                    this.loadout[6],
                    this.loadout[7],
                    this.loadout[8],
                    this.loadout[0],
                    this.loadout[1],
                    this.loadout[2],
                    this.loadout[3],
                    this.loadout[4],
                    this.loadout[5],
                ]
            },
            2: () => {
                // console.log('third');
                this.loadout = [
                    this.loadout[0],
                    this.loadout[1],
                    this.loadout[2],
                    this.loadout[6],
                    this.loadout[7],
                    this.loadout[8],
                    this.loadout[3],
                    this.loadout[4],
                    this.loadout[5],
                ]

            },
        }

        // Perform the shuffle
        shuffleOptions[selected]();
    }

    flattenLoadout() {
        const flatLoadout = [];
        for (let row=0; row<9; row++) {
            for (let col=0; col<9; col++) {
                flatLoadout.push(this.loadout[row][col]);
            }
        }
        this.loadout = flatLoadout;
    }

    mapLoadoutTotiles() {
        // const allTiles = $('.puzzle-tile p');
        // for (let i=0; i<81; i++) {
        //     // Html value
        //     allTiles[i].innerHTML = this.loadout[i];
        //     // Correct answer
        //     allTiles[i].attributes[2].value = this.loadout[i];
        //     // Changeable
        //     // allTiles[i].attributes[3].value = 'yes';
        //     // Set the id of the tile
        //     allTiles[i].id = i;
        // }



        // console.log(allTiles[1].attributes[2]);
        // console.log(allTiles[1].dataset['correctanswer']);
    }

    fillBoard() {
        const puzzleRow = (rowNumber) => {
            let puzzleRow = '';
            for (let i=0; i<9; i++) {
                const id = (rowNumber * 9) + i;
                const covered = (Math.floor(Math.random() * 100) > this.difficulty);
                // const covered = 0;
                const p = {
                    id,
                    correctanswer: this.loadout[id],
                    changeable: (covered) ? 'yes' : 'no',
                    correct: (covered) ? '' : 'correct',
                    covered: (covered) ? 'covered' : '',
                    html: (!covered) ?  this.loadout[id] : '', 
                }
                puzzleRow = puzzleRow + (`
                        <div class="puzzle-tile d-flex">
                            <p id="${p.id}"
                                class="m-auto tile-number ${p.covered} ${p.correct}"
                                data-correctanswer="${p.correctanswer}"
                                data-changeable="${p.changeable}"
                            >${p.html}</p>
                        </div>
                    `);
            }
            return puzzleRow;
        }
        const board = () => {
            let board = '';
            for (let i=0; i<9; i++) {
                board = board + (`
                        <div class="row d-flex justify-content-center puzzle-row">
                            ${puzzleRow(i)}
                        </div>
                    `
                );
            }
            return board;
        }

        const html = board();
        $('#puzzle-container').html('');
        $('#puzzle-container').append(html);

    }

    /**
     * TODO ----------------------------------------------------------------------
     */

    newGame() {
        // Maybe reload the page? need to find solution for difficulty settings then...
    }
    checkIfGameIsFinished() {
        //check all tiles to see if game is finished

        //if finished do something
    }

}

