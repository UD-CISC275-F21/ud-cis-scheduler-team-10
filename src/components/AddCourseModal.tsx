import React from "react";
import { Button, ButtonGroup, Modal} from "react-bootstrap";
import { Course } from "../interfaces/Course";
import { Semester } from "../interfaces/Semester";


export function AddCourseModal ({visible, setVisible, newCourse, semesters, addToSemester}: {visible: boolean, setVisible: (vis: boolean) => void, newCourse: Course, semesters: Semester[], addToSemester: (t: string, c: Course) => void}): JSX.Element {

    const addCourse = (semesterTitle: string) => {
        addToSemester(semesterTitle, newCourse);
        setVisible(false);
    };

    const hide = () => setVisible(false);

    return (
        <Modal show={visible} onHide={hide}>
            <Modal.Header closeButton data-testid="modal_title">
                <Modal.Title >Add Course to Semester</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h5>Choose which semester you would like to add the course to:</h5>
                <ButtonGroup vertical>
                    { semesters.map(semester => {
                        return(
                            <Button key={semester.Title} onClick={() => addCourse(semester.Title)}>{semester.Title}</Button>            
                        );
                    })}
                </ButtonGroup>
            </Modal.Body>

            <Modal.Footer>
                <Button data-testid="close-button" variant="secondary" onClick={hide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}