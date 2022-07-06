import { Container, Row } from 'react-bootstrap';
import { MailtoBuilder } from '../components';

function Mailcall({ isDark }) {
	return (
		<div className={isDark ? 'dark-theme' : ''}>
			<Container>
				<Row>
					<h1 id='main-title' className='text-center col-12 coloring-book'>
						Mailcall
					</h1>
				</Row>
			</Container>
			<MailtoBuilder/>
		</div>
	);
}

export default Mailcall;
