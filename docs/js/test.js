// Ways of creating new puzzles
// shifting rows vertically
// swapping values. Example: change all 4's to 3's and all 3's to 4's

// Have a few set loadouts and the amount of differences should be enough that it is not noticable that the same 3 puzzles are being shuffled

const puzzle = [
    [4, 5, 3, 6, 9, 1, 7, 2, 8],
    [8, 7, 9, 3, 5, 2, 4, 6, 1],
    [2, 1, 6, 8, 4, 7, 9, 3, 5],
    [3, 2, 1, 4, 6, 5, 8, 9, 7],
    [7, 6, 8, 2, 1, 9, 3, 5, 4],
    [5, 9, 4, 7, 8, 3, 6, 1, 2],
    [1, 3, 5, 9, 7, 8, 2, 4, 6],
    [6, 8, 2, 1, 3, 4, 5, 7, 9],
    [9, 4, 7, 5, 2, 6, 1, 8, 3],
]




class Game {
    
    constructor(difficulty) {
        // based on setting, percent chance cell is hidden
        const difficultySettings = {
            'easy': 40,
            'medium': 50,
            'hard': 60
        }
        this.difficulty = difficultySettings[difficulty];

        // 2d loadout array
        this.loadout = [];
        // 1d array of cells
        this.cells = [];
    }

    randomValue(smallestValue, largestValue) {
        // Example: randomValue(1, 3) would return something from [1, 2, 3]
        const range = largestValue + 1 - smallestValue; // +1 to includes largestValue in results
        const shift = smallestValue;
        return Math.floor(Math.random() * range ) + shift;
    }

    newGame() {
        // return new puzzle array 2d
        console.log('new game');

        // choose random loadout from list of loadouts
    }

    swapNumbers() {
        // swaps 3's with 4's except random choice of numbers
        // const number1 = random;
        // const number2 = random;
        console.log('swapping numbers');
    }

    swapRows() {
        // swaps rows 
        // const row1 = random;
        // const row2 = random;
        console.log('swapping rows');
    }

    checkAnswer() {
        // checks if current cell is correct after adding a value
        console.log('Checking answer');
    }

    checkFinished(cellArray) {
        // checks all guessed answers with all correct answers, unanswered should be false as default
        console.log('Checking Finished');
        // return false if find an incorrect
        for (let each of cellArray) {
            if (!each.isCorrect) {
                return false;
            }
        }
        // return true if all correct
        return true;
    }

    // create cells from new game array???
    // cells have info that is put into data object of each tile??


    convertArrayToCells(arrayOfNumbers) {
        console.log('converting 2d array values to a 1d array of cells');

        // convert 2d array to 1d array
        const flatArray = arrayOfNumbers.flatMap(each => each);

        // turn array of values into array of cells (note: also applies if cell is hidden based on this.difficulty (easy, medium, hard))
        const arrayOfCells = flatArray.map((each, index) => {
            const newCell = new Cell(
                (Math.floor(Math.random() * 100) > this.difficulty ? 1 : 0),    // isHidden
                each,                                                           // correctAnswer
                null,                                                           // currentValue
                0,                                                              // isCorrect (default to 0 if not already showing)
                index);                                                         // id
            return newCell;
        });

        return arrayOfCells;
    }


}


// Soley for defining the data attributes each cell has and having a constructor to build each cell
class Cell {
    constructor(isHidden, correctAnswer, currentValue, isCorrect, id) {
        this.isHidden = isHidden;
        this.correctAnswer = correctAnswer;
        this.currentValue = currentValue;
        this.isCorrect = isCorrect;
        this.id = id;
    }
}


const myGame = new Game('easy');

const cell = myGame.convertArrayToCells(puzzle);
console.log(myGame.checkFinished(cell));
    
console.clear();



