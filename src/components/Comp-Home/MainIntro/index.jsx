// import './style.scss';
import { Container, Row } from 'react-bootstrap';

export default function MainIntro() {
	return (
		<>
			<Container id='comp-mainintro' fluid>
				<Row>
					<div className='col-md-5 col-12 d-flex ps-lg-5'>
						<div className='m-auto col-12'>
							<h1 className='m-auto coloring-book col-12'>Christopher Herold</h1>
							<p className='coloring-book-subtext col-12'>Web Developer</p>
						</div>
					</div>

					<div className='col-md-7 col-12 d-flex'>
						<img
							className='img-fluid shadow'
							src='./assets/img/daisy-outside.png'
							alt='main'
						/>
					</div>
				</Row>
			</Container>
		</>
	);
}
