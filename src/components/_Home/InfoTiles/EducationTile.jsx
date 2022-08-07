import { Row } from 'react-bootstrap';

export default function EducationTile() {
	// eslint-disable-next-line
	const educationText = "I graduated in 2020 from Winona State University with a Bachelor's in Computer Science. I wouldn't recommend finishing school at the start of a global pandemic but sometimes things just happen. Some of my earlier studies include l\’Université Catholique de l\’Ouest, the University of Kansas, and the University of Tampa.";

	const imagePath = './assets/img/wsu-logo.png';

	return (
		<Row>
			<div className='col-md-5 col-12 d-flex p-4 img-section bg-white'>
				<img className='m-auto' src={imagePath} alt='main' />
			</div>
			<div className='col-md-7 col-12 d-flex text-section'>
				<div className=''>
					<h3 className='title'>Education</h3>
					<p>{educationText}</p>
				</div>
			</div>
		</Row>
	);
}
