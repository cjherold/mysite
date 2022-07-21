// import './style.scss';
// import './dark-theme.scss';
import { Container, Row } from 'react-bootstrap';
import iconsList from './icons-list';


function Skills() {
	return (
        <>
            <Container id='comp-skills'>
                <Row>
                    <div className="col-12">
                        <h3 className="title p-3 text-center">
                            Some Tech Favorites
                        </h3>
                    </div>
                </Row>
                <Row className='justify-content-around skills-row mx-auto'>
                    {
                        iconsList.map((icon, index) => {
                            return (
                                    <div key={index} className='col-sm-2  col-6 p-md-4 p-2 icon-div'>
                                        <img key={index} src={icon} alt='icon' />
                                    </div>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
	);
}

export default Skills;
