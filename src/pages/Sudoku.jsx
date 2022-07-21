import '../scss/sudoku.scss';
import { Puzzle } from '../components';
import { Container, Row } from 'react-bootstrap';
import Main from '../layouts/Main';


export default function Sudoku({ isDark }) {
	return (
		<Main>
			<Container>
				<Row>
					<h1 id="main-title" className='text-center col-12 coloring-book'>Sudoku</h1>
				</Row>
			</Container>
            <Puzzle/>
		</Main>
	);
}
