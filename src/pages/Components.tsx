import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Components({ elements }: {elements:{ element: JSX.Element; title: string}[]}) {
  return (
    <Container fluid className="components-container">
      <Row>
        <Col>
          <h1>Components</h1>
        </Col>
      </Row>
      {elements.map(({element,title}, index) => {
        return (
          <>
            <Row className="pt-4">
                <Col md="12" className="d-flex justify-content-md-center">
                    <h2>{title}</h2>
                </Col>
            </Row>
            <Row key={index} className="pt-4 pb-4">
              <Col md="12" className="d-flex justify-content-md-center">{element}</Col>
            </Row>
            <hr/>
          </>
        );
      })}
    </Container>
  );
}
