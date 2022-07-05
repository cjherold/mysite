// import './style.scss';
import { Container, Row } from "react-bootstrap";



function About() {
	return (
		<>
			<Container fluid id='comp-about' className='coloring-book-container'>
				<Container className="">
					<Row className="">
						<div className='col-lg-5 col-12 d-flex p-0 m-0'>
							<div className='m-auto col-lg-12 col-10 p-3'>
								<h3 className='col-12 title'>About</h3>
								<p>
									Hi, my name is Chris and I'm a web developer. I sort of took the
									long way around when finding my major. Although I was always
									interested in technology and good with computers, I just considered
									them something that was more fun than work. I met a few people that
									worked as programmers but they always gave some vague explanation of
									what their job was. It wasn't until I worked on a CNC that I saw how
									a program actually ran. I knew I finally found what I wanted to do.
									I enrolled in a local college and started teaching myself how to
									code. Now I'm in a career that lets me have fun with computers.
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
