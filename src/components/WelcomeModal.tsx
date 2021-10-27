import {Modal,Button} from "react-bootstrap";
import React, {useState} from "react";

export function WelcomeModal(): JSX.Element{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return(
        <><Button variant="info" onClick={handleShow}>
            Need help?
        </Button><Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>About UD CIS Scheduler</Modal.Title>
            </Modal.Header>
            <Modal.Body>Welcome! This site should be a nifty resource for students, advisors, and teachers to set up a course schedule.<p></p> You can make multiplie
                        schedules for future semesters if you wish by using the tabs at the top, or you can just stick to one semester.
                        You can get started by taking a look at the course list, and clicking on the course info on the scheduler to edit it to your liking.
                        You can also add courses using the green &quot;Add Course button&quot;, clear specific courses using the &quot;Clear Course&quot; button, or 
                        clear an entire semester using the &quot;Remove all Courses&quot; button.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal></>
    );
}