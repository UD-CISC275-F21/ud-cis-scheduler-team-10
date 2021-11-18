import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Course } from "../interfaces/Course";

export function EditCourseModal({visible, setVisible, editCourse, course, semesterTitle}:
    {visible: boolean, setVisible: (b: boolean) => void,
    editCourse: (oldc: Course, newc: Course, t: string) => void, course: Course, semesterTitle: string}): JSX.Element {
    const [courseNumber, setCourseNumber] = useState(course.Number);
    const [courseCredits, setCourseCredits] = useState(course.Credits);
    const [courseName, setCourseName] = useState(course.Name);
    const [courseDescription, setCourseDescription] = useState(course.Description);

    function saveCourse() {
        const newCourse = {
            Number: courseNumber,
            Credits: courseCredits,
            Name: courseName,
            Description: courseDescription
        };
        editCourse(course, newCourse, semesterTitle);
        setVisible(false);
    }

    const hide = () => setVisible(false);
    return (
        <Modal show={visible} onHide={hide}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Course</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="editCourseForm.courseNumberArea">
                        <Form.Label >Course Number</Form.Label>
                        <Form.Control as="textarea" rows={3} data-testid = "modal_course_number_textbox"
                            value={courseNumber}
                            onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setCourseNumber(ev.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="editCourseForm.courseCreditsArea">
                        <Form.Label>Credits</Form.Label>
                        <Form.Control as="textarea" rows={3} data-testid = "modal_course_credits_textbox"
                            value={courseCredits}
                            onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setCourseCredits(ev.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="editCourseForm.courseNameArea">
                        <Form.Label>Course Name</Form.Label>
                        <Form.Control as="textarea" rows={3} data-testid = "modal_course_name_textbox"
                            value={courseName}
                            onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setCourseName(ev.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="editCourseForm.courseDescriptionArea">
                        <Form.Label>Course Description</Form.Label>
                        <Form.Control as="textarea" rows={3} data-testid = "modal_course_description_textbox"
                            value={courseDescription}
                            onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setCourseDescription(ev.target.value)}/>
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button data-testid="close-button" variant="secondary" onClick={hide}>Close</Button>
                <Button data-testid="save-changes-button" variant="primary" onClick={saveCourse}>Save changes</Button>
            </Modal.Footer>
        </Modal>
    );
}