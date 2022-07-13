// import './style.scss';
import { Container, Row } from "react-bootstrap";



function About() {

	const aboutText = `
		Hi, my name is Chris and I'm a web developer. It took me a while to discover programming. I started with a few different majors while studying in Minnesota, France, Kansas, and Florida. Then I just took some time away from school to work, and figure out what I wanted to do with my life. While working as a CNC operator, I saw how code was run line by line and it just clicked for me. I bought a Java textbook, taught myself how to code, and I was instantly hooked. Then I signed up for the Computer Science program at the nearest school. Now I get to play with computers and build websites for huge companies. It's awesome!
	`;

	return (
		<>
			<Container fluid id='comp-about' className='coloring-book-container'>
				<Container className="">
					<Row className="">
						<div className='col-lg-5 col-12 d-flex p-0 m-0'>
							<div className='m-auto col-lg-12 col-10 p-3'>
								<h3 className='col-12 title'>About</h3>
								<p>
									{aboutText}
								</p>

							</div>
						</div>

						<div className='col-lg-7 col-12 d-flex p-lg-4 p-3 m-0'>
							<img
								className='m-auto shadow'
								src='./assets/img/me400x500.png'
								alt='main'
							/>
						</div>
					</Row>

				</Container>
			</Container>
		</>
	);
}


export default About;
