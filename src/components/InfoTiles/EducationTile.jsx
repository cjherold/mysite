import { Row } from 'react-bootstrap';

function EducationTile() {
    return (
        <Row>
			<div className='col-md-5 col-12 d-flex p-4 img-section bg-white'>
				<img className='m-auto' src='./assets/img/wsu-logo.png' alt='main' />
			</div>
			<div className='col-md-7 col-12 d-flex text-section'>
				<div className=''>
					<h3 className='title'>Education</h3>
					<p>
						I graduated from Winona State University in 2020 with a Bachelors's in
						Computer Science. Yes, I know, not the most opportune time to finish school,
						but I made it work. I'm now a full-stack web developer and I'm constantly
						learning new things.
					</p>
					<button className='btn'>Click Here</button>
				</div>
			</div>
		</Row>

	);
}

export default EducationTile;