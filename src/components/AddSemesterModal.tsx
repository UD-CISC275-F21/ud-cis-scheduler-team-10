import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Course } from "../interfaces/Course";
import { Semester } from "../interfaces/Semester";

export function AddSemesterModal({visible, setVisible, addSemester}:{visible: boolean, setVisible: (b: boolean) => void, addSemester:(s: Semester) => void}):JSX.Element{
    
    const [semsterTitle, setSemesterTitle] = useState<string>("Set Title");

    const newCourse = {} as Course;
    newCourse.Number = "--";
    newCourse.Credits = "--";
    newCourse.Name = "--";
    newCourse.Description = "--";

    function saveSemester(){
        addSemester({
            Title: semsterTitle,
            Courses: [newCourse, newCourse, newCourse]
        });
        setVisible(false);
    }

    const hide = () => setVisible(false);
    return (
        <Modal show={visible} onHide={hide}>
            <Modal.Header closeButton>
                <Modal.Title>Add Semester</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="editCourseForm.semesterTitleArea">
                        <Form.Label >Semester Title</Form.Label>
                        <Form.Control as="textarea" rows={3} data-testid = "modal_add_semester_textbox"
                            value={semsterTitle}
                            onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setSemesterTitle(ev.target.value)}/>
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button data-testid="close-Semester-button" variant="secondary" onClick={hide}>Close</Button>
                <Button data-testid="save-Semester-button" variant="primary" onClick={saveSemester}>Save changes</Button>
            </Modal.Footer>

        </Modal>
    );
}
