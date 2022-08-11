import { QuizApp } from '../components';
import { Container, Row } from 'react-bootstrap';
import MainLayout from '../layouts/MainLayout';


export default function Quizbuilder({ isDark }) {
	return (
		<MainLayout pageName="quizbuilder">
			<Container>
				<Row>
					<h1 id='main-title' className='text-center col-12 coloring-book'>
						Quizbuilder
					</h1>
				</Row>
			</Container>
			<QuizApp />
		</MainLayout>

	);
}
