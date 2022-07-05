import { Container } from 'react-bootstrap';
import EducationTile from './EducationTile';
import ProjectsTile from './ProjectsTile';
import GoalsTile from './GoalsTile';

function InfoTiles() {
	return (
		<>
			<Container className='coloring-book-tiles'>
				<EducationTile/>
				<ProjectsTile/>
				<GoalsTile/>
			</Container>
		</>
	);
}

export default InfoTiles;
