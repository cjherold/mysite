import { Row } from 'react-bootstrap';

function GoalsTile() {
	return (
		<Row>
			<div className='col-md-5 col-12 d-flex p-4 img-section'>
				<img className='m-auto' src='./assets/img/wsu-logo300x250.png' alt='main' />
			</div>
			<div className='col-md-7 col-12 d-flex text-section'>
				<div className=''>
					<h3 className='title'>Goals</h3>
					<p>
						goals
					</p>
					<button className='btn'>Click Here</button>
				</div>
			</div>
		</Row>
	);
}

export default GoalsTile;
