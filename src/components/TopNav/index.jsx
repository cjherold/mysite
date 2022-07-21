import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';



export default function TopNav() {
	return (
		<Navbar
			expand='md'
		>
			{/* container fluid  */}
			<Container fluid className='container-fluid'>
				<Link className="navbar-brand" to="/">Home</Link>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />

				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ms-auto me-3'>
						<Link className="nav-link" to='/mailcall'>Mailcall</Link>
						<Link className="nav-link" to='/sudoku'>Sudoku</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
