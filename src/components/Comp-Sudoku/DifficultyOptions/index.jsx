import { Button, Container, Row } from 'react-bootstrap';
// import { useState } from 'react';

export default function DifficultyOptions() {

	// might use this later once thigns are more refactored
	// const [difficulty, setDifficulty] = useState('easy');
	// const updateDifficulty = e => {
	// 	setDifficulty(e.target.value)
	// };

	return (
		<Container>
			<Row>
				<div className='col-lg-6 offset-lg-3 offset-0 col-12 mt-3 d-flex'>
					<h3 id="new-game-title" className="text-center mx-auto">New Game</h3>
				</div>
			</Row>
			<Row>
				<div className='d-flex col-lg-6 offset-lg-3 offset-0 col-12 mx-auto justify-content-center'>
					<Button
						className='my-1 mx-3 difficulty-btn'
						// onClick={updateDifficulty}
						value='easy'
					>
						Easy
					</Button>
					<Button
						className='my-1 mx-3 difficulty-btn'
						// onClick={updateDifficulty}
						value='medium'
					>
						Medium
					</Button>
					<Button
						className='my-1 mx-3 difficulty-btn'
						// onClick={updateDifficulty}
						value='hard'
					>
						Hard
					</Button>
				</div>
			</Row>
		</Container>
	);
}
