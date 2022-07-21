import { QuizApp } from '../components';
import { Container, Row } from 'react-bootstrap';
import Main from '../layouts/Main';


export default function Quizbuilder({ isDark }) {
	return (
		<Main>
			<Container>
				<Row>
					<h1 id='main-title' className='text-center col-12 coloring-book'>
						Quizbuilder
					</h1>
				</Row>
			</Container>
			<QuizApp />
		</Main>

	);
}
