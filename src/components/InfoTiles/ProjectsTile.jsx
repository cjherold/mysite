import { Row } from 'react-bootstrap';

function ProjectsTile() {
    const projectsText = `
		A few of my projects are just tied into my website. I have a sudoku game, mailto link builder, and soon I'll have my quiz page. On Github I have a few different projects in the works. Spark is a really cool and simple website builder using Vite. Runway is a more complex website builder that is more focused on server side possiblities. Quick-Stash is a fast way to get a database up and running using Docker. It's great for fun projects. I'm rebuilding my personal site using React right now and I'm sure to add more so keep an eye on things.
	`;

	const imagePath = './assets/img/spark.png';

	return (
		<Row>
			<div className='col-md-7 col-12 d-md-flex d-none text-section'>
				<div className=''>
					<h3 className='title'>Projects</h3>
					<p>
                        {projectsText}
					</p>
					<a href="./sudoku" className='btn'>Try Sudoku</a>
				</div>
			</div>
			<div className='col-md-5 col-12 d-flex p-4 img-section project-image'>
				<img className='m-auto' src={imagePath} alt='main' />
			</div>
			<div className='col-md-7 col-12 d-md-none d-flex text-section'>
				<div className=''>
					<h3 className='title'>Projects</h3>
					<p>
						{projectsText}
					</p>
					<a href="./sudoku" className='btn'>Try Sudoku</a>
				</div>
			</div>
		</Row>
	);
}

export default ProjectsTile;