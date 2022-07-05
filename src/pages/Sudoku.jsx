import '../scss/sudoku.scss';
import { Puzzle } from '../components';
import { Container, Row } from 'react-bootstrap';

function Sudoku({ isDark }) {
	return (
		<div className={isDark ? 'dark-theme' : ''}>
			<Container>
				<Row>
					<h1 id="main-title" className='text-center col-12 coloring-book'>Sudoku</h1>

				</Row>
			</Container>
            <Puzzle/>
		</div>
	);
}

export default Sudoku;
