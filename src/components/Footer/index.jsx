import { Container, Row } from 'react-bootstrap';


export default function Footer() {
	return (
		<>
			<Container id='comp-footer'>
				<Row className='mt-4'>
					<div className="col-lg-6 offset-lg-3 col-12 offset-0 d-flex">
						<div className='col-6 p-2 text-center'>
							<a href="https://github.com/cjherold" target="_blank" rel="noreferrer">
								<img
									width='20px'
									height='20px'
									src='./assets/icons/github30.svg'
									className='mb-1'
									alt='github'
								/>
								&nbsp;Github
							</a>
						</div>
						<div className='col-6 p-2 text-center'>
							<a href='https://www.linkedin.com/in/cjherold' target="_blank" rel="noreferrer">
								<img
									width='20px'
									height='20px'
									src='./assets/icons/linkedin30.svg'
									className='mb-1'
									alt='linkedin'
								/>
								&nbsp;LinkedIn
							</a>
						</div>

					</div>
				</Row>
			</Container>
		</>
	);
}
