import { Button } from 'react-bootstrap';

export default function DifficultyOptions() {
	return (
		<div className='container d-flex my-4 justify-content-center'>
			<div className='col-lg-6 col-12'>
				<div className='d-flex col-12 justify-content-center'>
					<div className='d-flex'>
						<label className='text-center' htmlFor='easy'>
							Easy
						</label>
						<input
							id='easy'
							className='my-1 mx-3'
							type='radio'
							name='difficulty'
							value='easy'
							onChange={e => (e.target.checked = true)}
							checked='checked'
						/>
					</div>
					<div className='mx-3 d-flex'>
						<label htmlFor='medium'>Medium</label>
						<input
							id='medium'
							className='my-1 mx-2'
							type='radio'
							name='difficulty'
							value='medium'
							onChange={e => (e.target.checked = true)}
						/>
					</div>
					<div className='d-flex'>
						<label htmlFor='hard'>Hard</label>
						<input
							id='hard'
							className='my-1 mx-2'
							type='radio'
							name='difficulty'
							value='hard'
							onChange={e => (e.target.checked = true)}
						/>
					</div>
				</div>

				<div className='col-12 mt-3 d-flex'>
					<Button id='new-game' className='m-auto'>
						New Game
					</Button>
				</div>
			</div>
		</div>
	);
}
