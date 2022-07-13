import { Container, Row } from 'react-bootstrap';

function Error404() {
    return (
        <Container style={{marginTop: '25%', marginBottom: '25%'}}>
            <Row>
                <div className="col-12 text-center">
                    <h1>Error 404</h1>
                    <p>Page not found.</p>
                </div>
            </Row>
        </Container>
    )
}

export default Error404;