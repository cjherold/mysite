import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from 'react';



function TopNav() {
	return (
		<Navbar
			expand='md'
		>
			{/* container fluid  */}
			<Container fluid className='container-fluid'>
				<Link to="/" className="navbar-brand">Home</Link>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />

				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ms-auto me-3'>
						<Link to="/mailcall" className="nav-link">Mailcall</Link>
						<Link to="/sudoku" className="nav-link">Sudoku</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default TopNav;
