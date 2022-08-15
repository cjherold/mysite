import { Container, Row } from 'react-bootstrap';
import { MailtoBuilder } from '../components';
import MainLayout from '../layouts/MainLayout';


export default function Mailcall() {
	return (
		<MainLayout pageName="mailcall">
			<Container>
				<Row>
					<h1 id='main-title' className='text-center col-12 coloring-book'>
						Mailcall
					</h1>
				</Row>
			</Container>
			<MailtoBuilder/>
		</MainLayout>
	);
}
