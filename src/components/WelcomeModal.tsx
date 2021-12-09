import {Modal,Button} from "react-bootstrap";
import React, {useState} from "react";

export function WelcomeModal(): JSX.Element{
    const [show, setShow] = useState(true);
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
                        You can get started by taking a look at the course list down below, and clicking on the &quot;Edit Course&quot; in the scheduler to edit it to your liking.
                        If you want, you can add a course directly to a semester using the button in the Course list.
                        You can also add courses using the green &quot;Add Course button&quot;, clear specific courses using the &quot;Clear Course&quot; button, or 
                        clear an entire semester using the &quot;Remove all Courses&quot; button. <p></p>
                        You can also add and remove specific semesters using the &quot;Add Semester&quot; and the red X respectively, as well as remove
                        all semesters, save your progress in your browser, or download the courselist to a CSV file using the respective buttons below. Check out the 
                        degree requirements using the button at the top, and make sure to check your pre-requisites tab whenever you pick a course.
            </Modal.Body>
            <Modal.Footer>
                <Button data-testid="welcome-modal_close_button" variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal></>
    );
}