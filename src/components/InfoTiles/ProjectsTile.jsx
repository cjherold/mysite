import { Row } from 'react-bootstrap';

function ProjectsTile() {
    const projectsText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus incidunt ratione distinctio labore, explicabo cupiditate. Error cumque animi rem eum dicta voluptatem soluta inventore beatae blanditiis ipsum omnis, assumenda eveniet!';

	return (
		<Row>
			<div className='col-md-7 col-12 d-md-flex d-none text-section'>
				<div className=''>
					<h3 className='title'>Projects</h3>
					<p>
                        {projectsText}
					</p>
					<button className='btn'>Click Here</button>
				</div>
			</div>
			<div className='col-md-5 col-12 d-flex p-4 img-section'>
				<img className='m-auto' src='./assets/img/wsu-logo300x250.png' alt='main' />
			</div>
			<div className='col-md-7 col-12 d-md-none d-flex text-section'>
				<div className=''>
					<h3 className='title'>Projects</h3>
					<p>
						{projectsText}
					</p>
					<button className='btn'>Click Here</button>
				</div>
			</div>
		</Row>
	);
}

export default ProjectsTile;