import React, { useState, useRef } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";

export default function App() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <div className="App">
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Sub Section 1
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">action 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">action 2</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <div
                          style={{
                            "border-bottom": "1px solid #CCC",
                            "margin-bottom": "10px"
                          }}
                        >
                          <p>
                            question 1
                            <Button ref={target} onClick={() => setShow(!show)}>
                              More info
                            </Button>
                            <Overlay
                              rootClose={true}
                              rootCloseEvent={"click"}
                              onHide={() => setShow(!show)}
                              target={target.current}
                              show={show}
                              placement="right"
                            >
                              {(props) => (
                                <Tooltip id="overlay-example" {...props}>
                                  My Tooltip
                                </Tooltip>
                              )}
                            </Overlay>
                          </p>
                          <ButtonToolbar
                            className="mb-3 "
                            aria-label="Toolbar with Button groups"
                          >
                            <div>choice 1</div>
                            <ButtonGroup
                              className="mr-2"
                              aria-label="First group"
                            >
                              <Button variant="secondary">Yes</Button>{" "}
                              <Button variant="secondary">No</Button>{" "}
                              <Button variant="secondary">N/A</Button>{" "}
                            </ButtonGroup>
                          </ButtonToolbar>
                          <ButtonToolbar
                            className="mb-3 "
                            aria-label="Toolbar with Button groups"
                          >
                            <div>choice 2</div>
                            <ButtonGroup
                              className="mr-2"
                              aria-label="First group"
                            >
                              <Button variant="secondary">Yes</Button>{" "}
                              <Button variant="secondary">No</Button>{" "}
                              <Button variant="secondary">N/A</Button>{" "}
                            </ButtonGroup>
                          </ButtonToolbar>
                          <ButtonToolbar
                            className="mb-3 "
                            aria-label="Toolbar with Button groups"
                          >
                            <div>choice 3</div>
                            <ButtonGroup
                              className="mr-2"
                              aria-label="First group"
                            >
                              <Button variant="secondary">Yes</Button>{" "}
                              <Button variant="secondary">No</Button>{" "}
                              <Button variant="secondary">N/A</Button>{" "}
                            </ButtonGroup>
                          </ButtonToolbar>
                          <ButtonToolbar
                            className="mb-3 "
                            aria-label="Toolbar with Button groups"
                          >
                            <div>choice 4</div>
                            <ButtonGroup
                              className="mr-2"
                              aria-label="First group"
                            >
                              <Button variant="secondary">Yes</Button>{" "}
                              <Button variant="secondary">No</Button>{" "}
                              <Button variant="secondary">N/A</Button>{" "}
                            </ButtonGroup>
                          </ButtonToolbar>
                        </div>
                        <div style={{ "border-bottom": "1px solid #CCC" }}>
                          <p>
                            question 2
                            <Button ref={target} onClick={() => setShow(!show)}>
                              More info
                            </Button>
                            <Overlay
                              rootClose={true}
                              rootCloseEvent={"click"}
                              onHide={() => setShow(!show)}
                              target={target.current}
                              show={show}
                              placement="right"
                            >
                              {(props) => (
                                <Tooltip id="overlay-example" {...props}>
                                  My Tooltip
                                </Tooltip>
                              )}
                            </Overlay>
                          </p>
                          <ButtonToolbar
                            className="mb-3 "
                            aria-label="Toolbar with Button groups"
                          >
                            <div>choice 1</div>
                            <ButtonGroup
                              className="mr-2"
                              aria-label="First group"
                            >
                              <Button variant="secondary">Yes</Button>{" "}
                              <Button variant="secondary">No</Button>{" "}
                              <Button variant="secondary">N/A</Button>{" "}
                            </ButtonGroup>
                          </ButtonToolbar>
                          <ButtonToolbar
                            className="mb-3 "
                            aria-label="Toolbar with Button groups"
                          >
                            <div>choice 2</div>
                            <ButtonGroup
                              className="mr-2"
                              aria-label="First group"
                            >
                              <Button variant="secondary">Yes</Button>{" "}
                              <Button variant="secondary">No</Button>{" "}
                              <Button variant="secondary">N/A</Button>{" "}
                            </ButtonGroup>
                          </ButtonToolbar>
                          <ButtonToolbar
                            className="mb-3 "
                            aria-label="Toolbar with Button groups"
                          >
                            <div>choice 3</div>
                            <ButtonGroup
                              className="mr-2"
                              aria-label="First group"
                            >
                              <Button variant="secondary">Yes</Button>{" "}
                              <Button variant="secondary">No</Button>{" "}
                              <Button variant="secondary">N/A</Button>{" "}
                            </ButtonGroup>
                          </ButtonToolbar>
                          <ButtonToolbar
                            className="mb-3 "
                            aria-label="Toolbar with Button groups"
                          >
                            <div>choice 4</div>
                            <ButtonGroup
                              className="mr-2"
                              aria-label="First group"
                            >
                              <Button variant="secondary">Yes</Button>{" "}
                              <Button variant="secondary">No</Button>{" "}
                              <Button variant="secondary">N/A</Button>{" "}
                            </ButtonGroup>
                          </ButtonToolbar>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">content for tab2</Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Sub Section 2
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}
