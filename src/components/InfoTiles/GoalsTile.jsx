import { Row } from 'react-bootstrap';

function GoalsTile() {
	const goalsText = `
		Here
	`;

	const imagePath = './assets/img/spark.png';

	return (
		<Row>
			<div className='col-md-5 col-12 d-flex p-4 img-section'>
				<img className='m-auto' src={imagePath} alt='main' />
			</div>
			<div className='col-md-7 col-12 d-flex text-section'>
				<div className=''>
					<h3 className='title'>Goals</h3>
					<p>{goalsText}</p>
					<button className='btn'>Click Here</button>
				</div>
			</div>
		</Row>
	);
}

export default GoalsTile;
