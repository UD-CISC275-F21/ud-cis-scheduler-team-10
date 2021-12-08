import {Modal,Button, Row, Container, Col} from "react-bootstrap";
import React, {useState} from "react";

export function DegreeRequirementsModal(): JSX.Element{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return(
        <><Button variant="info" onClick={handleShow}>
            Degree Requirements
        </Button><Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Courses Needed To Graduate</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col>
                            Core Requirements:<br />
                            CISC 108 - Introduction to Computer Science I<br />
                            CISC 181 - Introduction to Computer Science II<br />
                            CISC 210 - Introduction to Systems Programming<br />
                            CISC 220 - Data Structures<br />
                            CISC 260 - Machine Organization and Assembly Language<br />
                            CISC 275 - Introduction to Software Engineering<br />
                            CISC 303 - Automata Theory<br />
                            CISC 361 - Operating Systems<br />
                            CISC 372 - Parallel Computing<br />
                            Six additional credits of computer science technical electives numbered 301 or above, except for CISC 355, CISC 356, CISC 357, CISC 465, CISC 366 and CISC 466<br />
                            Twelve credits in advanced courses in a focus area.<br />
                            MATH 205 - Statistical Methods OR MATH 350 - Probability Theory and Simulation Methods<br />
                            MATH 210 - Discrete Mathematics I<br />
                            MATH 241 - Analytic Geometry and Calculus A<br />
                            MATH 242 - Analytic Geometry and Calculus B<br />
                            <br />
                            Capstone Requirement:<br />
                            CISC 498 - Computer Science Senior Design Project I<br />
                            CISC 499 - Computer Science Senior Design Project II<br />
                            UNIV 401 - Senior Thesis<br />
                            UNIV 402 - Senior Thesis<br />
                            <br />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Science Requirements:<br />
                            Twelve credits in science courses including one of the following eight credit laboratory science sequences:<br />
                            Option I:<br />
                            PHYS 207 - Fundamentals of Physics I <br />
                            PHYS 227 - Fundamentals of Physics Laboratory I<br />
                            PHYS 208 - Fundamentals of Physics II<br />
                            PHYS 228 - Fundamentials of Physics Laboratory II <br />
                            Option II:<br />
                            CHEM 103 - General Chemistry <br />
                            CHEM 133 - General Chemistry Laboratory<br />
                            CHEM 104 - General Chemistry <br />
                            CHEM 134 - General Chemistry Laboratory<br />
                            Option III:<br />
                            BISC 207 - Introductory Biology I<br />
                            BISC 208 - Introductory Biology II<br />
                            Option IV:<br />
                            GEOL 107 - Geology of Dynamic Earth<br />
                            GEOL 110 - Earth’s Evolving Systems<br />
                            Option V:<br />
                            GEOL 105 - Geological Hazards and Their Human Impact <br />
                            GEOL 107 - Geology of Dynamic Earth <br />
                            GEOL 115 - Geological Hazards Laboratory <br />
                            <br />
                            Additional Requirements:<br />
                            A course chosen from CISC 304 or MATH 349, or a 300-level or above math course<br />
                            ENGL 312 - Written Communications in Business<br />
                            ENGL 410 - Technical Writing<br />
                            CISC 355 - Computers, Ethics and Society<br />
                            After required courses are completed, sufficient elective credits must be taken to meet the minimum credit requirement for the degree.
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal></>
    );
}