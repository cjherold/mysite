import { Container, Row } from 'react-bootstrap';
import MainLayout from '../../layouts/MainLayout';


export default function Error404() {
	return (
		<MainLayout>
			<Container style={{marginTop: '25%', marginBottom: '25%'}}>
				<Row>
					<div className="col-12 text-center">
						<h1>Error 404</h1>
						<p>Page not found.</p>
					</div>
				</Row>
			</Container>
		</MainLayout>
	)
}
