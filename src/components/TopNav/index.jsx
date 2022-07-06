import { Navbar, Container, Nav } from "react-bootstrap";



function TopNav() {
	return (
		<Navbar
			expand='md'
		>
			{/* container fluid  */}
			<Container fluid className='container-fluid'>
				<Navbar.Brand href='/'>Home</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />

				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ms-auto me-3'>
						<Nav.Link href='/quizbuilder'>Quizbuilder</Nav.Link>
						<Nav.Link href='/mailcall'>Mailcall</Nav.Link>
						<Nav.Link href='/sudoku'>Sudoku</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default TopNav;
