import './loadouts';
import './Game';
import main from './sudoku';

function Puzzle() {

	return (
		<div id="comp-puzzle">

			<div id="puzzle-container" className="container"></div>

			<div className="container d-flex my-4 justify-content-center">
				<div className="col-lg-6 col-12">
					<div className="d-flex col-12 justify-content-center">
						<div className="d-flex">
							<label className="text-center" htmlFor="easy">Easy</label>
							<input id="easy" className="my-1 mx-3" type="radio" name="difficulty" value="easy" onChange={(e) => e.target.checked = true} />
						</div>
						<div className="mx-3 d-flex">
							<label htmlFor="medium">Medium</label>
							<input id="medium" className="my-1 mx-2" type="radio" name="difficulty" value="medium" onChange={(e) => e.target.checked = true} />
						</div>
						<div className="d-flex">
							<label htmlFor="hard">Hard</label>
							<input id="hard" className="my-1 mx-2" type="radio" name="difficulty" value="hard" onChange={(e) => e.target.checked = true} />
						</div>
					</div>

					<div className="col-12 mt-3 d-flex">
						<button id="new-game" className="btn m-auto">New Game</button>
					</div>
				</div>
			</div>


			<div id="picker-wheel" data-tilenumber="" className="d-none">
				<button id="close-wheel-btn" type="button" className="close">&times;</button>
				<button id="btn-one" type="button" className="btn num-btn" value="1">1</button>
				<button id="btn-two" type="button" className="btn num-btn" value="2">2</button>
				<button id="btn-three" type="button" className="btn num-btn" value="3">3</button>
				<button id="btn-four" type="button" className="btn num-btn" value="4">4</button>
				<button id="btn-five" type="button" className="btn num-btn" value="5">5</button>
				<button id="btn-six" type="button" className="btn num-btn" value="6">6</button>
				<button id="btn-seven" type="button" className="btn num-btn" value="7">7</button>
				<button id="btn-eight" type="button" className="btn num-btn" value="8">8</button>
				<button id="btn-nine" type="button" className="btn num-btn" value="9">9</button>
			</div>

			{
				setTimeout(() => {
					main()
				}, 200)
			}
		</div>


	);
}

export default Puzzle;
