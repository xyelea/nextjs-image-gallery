import { Container, Row, Col, Button } from "@/components/bootstrap";

export default function notFound({}) {
  return (
    <Container
      fluid
      className="vh-100 d-flex align-items-center justify-content-center bg-dark text-white">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} className="text-center">
          <h2 className="display-1">404</h2>
          <h3 className="display-4 mb-3">Page Not Found</h3>
          <p>We're sorry, but the page you requested could not be found.</p>
          <Button href="/" variant="primary">
            Go Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
