import { Container, Row } from 'react-bootstrap';
import { MailtoBuilder } from '../components';
import Main from '../layouts/Main';


function Mailcall({ isDark }) {
	return (
		<Main>
			<Container>
				<Row>
					<h1 id='main-title' className='text-center col-12 coloring-book'>
						Mailcall
					</h1>
				</Row>
			</Container>
			<MailtoBuilder/>
		</Main>
	);
}

export default Mailcall;
