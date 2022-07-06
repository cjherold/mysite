import { Row } from 'react-bootstrap';

function EducationTile() {
	const educationText = `
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptates debitis doloribus asperiores voluptatibus, ut voluptate officiis recusandae eum? Minus, asperiores! Ipsam quaerat maiores deserunt, cumque id unde et dolor.
	`;
    return (
        <Row>
			<div className='col-md-5 col-12 d-flex p-4 img-section bg-white'>
				<img className='m-auto' src='./assets/img/wsu-logo.png' alt='main' />
			</div>
			<div className='col-md-7 col-12 d-flex text-section'>
				<div className=''>
					<h3 className='title'>Education</h3>
					<p>{educationText}</p>
					<button className='btn'>Click Here</button>
				</div>
			</div>
		</Row>

	);
}

export default EducationTile;