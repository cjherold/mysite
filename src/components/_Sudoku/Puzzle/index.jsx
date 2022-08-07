import './loadouts';
import './Game';
import main from './sudoku';
import PickerWheel from '../PickerWheel';
import DifficultyOptions from '../DifficultyOptions';

export default function Puzzle() {
	return (
		<div id='comp-puzzle'>
			<div id='puzzle-container' className='container'></div>

			<DifficultyOptions />
			<PickerWheel />

			{setTimeout(() => {
				main();
			}, 200)}
		</div>
	);
}
