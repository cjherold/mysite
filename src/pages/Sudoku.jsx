import { Puzzle } from '../components';
import { Container, Row } from 'react-bootstrap';
import MainLayout from '../layouts/MainLayout';


export default function Sudoku({ isDark }) {
	return (
		<MainLayout pageName="sudoku">
			<Container>
				<Row>
					<h1 id="main-title" className='text-center col-12 coloring-book'>Sudoku</h1>
				</Row>
			</Container>
            <Puzzle/>
		</MainLayout>
	);
}
