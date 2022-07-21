import '@popperjs/core';
import 'bootstrap';
import Game from './Game';
import $ from 'jquery';

const main = () => {
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
		$('#main-title').html('Sudoku').removeClass('winner');
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
	function pickerWheelFunctionality() {
		// Selecting a number from the wheel
		$('.num-btn').on('click', function (e) {
			const id = `#${$('#comp-pickerwheel').attr('data-tilenumber')}`;
			const correct = $(id).data('correctanswer');
			const guess = e.target.value;
			$(id).html(guess);
			// eslint-disable-next-line
			if (correct == guess) {
				$(id).data('correct', 1);
				$(id).addClass('correct');
				const total = $('.correct');
				if (total.length > 80) {
					winnerNotification();
					$('.tile-number').attr('data-changeable', 'no');
				}
			} else {
				$(id).data('correct', 0);
				$(id).removeClass('correct');
			}
			$('#comp-pickerwheel').hide();
		});

		// Close wheel button
		$('#close-wheel-btn').on('click', function () {
			$('#comp-pickerwheel').attr('data-tilenumber', '');
			$('#comp-pickerwheel').hide();
		});
	}

	/**
	 *  Show when game is won
	 */
	function winnerNotification() {
		$('#main-title').html('Winner!!').addClass('winner');
	}

	/**
	 *  Setup tile clicks
	 */
	function tileClickFunctionality() {
		// Tile on click, spawns a picker wheel
		$('.puzzle-tile').on('click', function (e) {
			const currentTile = e.target.firstElementChild;
			const isChangeable = e.target.firstElementChild.getAttribute('data-changeable') === 'yes';
			if (isChangeable) {
				spawnPickerWheel({ x: e.pageX, y: e.pageY, currentTile });
			}
		});

		// Show wheel
		const spawnPickerWheel = ({ x, y, currentTile }) => {
			const id = currentTile.id;
			$('#comp-pickerwheel').attr('data-tilenumber', id);

			if (window.innerWidth > 700) {
				$('#comp-pickerwheel').css({
					top: y - 130,
					left: x - 130,
				});
			} else {
				const xOffset = window.innerWidth / 2 - 125;
				const yOffset = window.innerHeight / 2 - 125;
				$('#comp-pickerwheel').css({
					bottom: `${yOffset}px`,
					left: `${xOffset}px`,
				});
			}
			$('#comp-pickerwheel').removeClass('d-none').show();
		};
	}
}

export default main;