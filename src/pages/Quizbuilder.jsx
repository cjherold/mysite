import { QuizApp } from '../components';
import { Container, Row } from 'react-bootstrap';

function Quizbuilder({ isDark }) {
	return (
		<div className={isDark ? 'dark-theme' : ''}>
			<Container>
				<Row>
					<h1 id='main-title' className='text-center col-12 coloring-book'>
						Quizbuilder
					</h1>
				</Row>
			</Container>
			<QuizApp />
		</div>
	);
}

export default Quizbuilder;
