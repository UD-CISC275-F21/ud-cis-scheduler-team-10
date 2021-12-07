import React, {useState} from "react";
import {Button} from "react-bootstrap";
import { Course } from "../interfaces/Course";
import { EditCourseModal } from "./EditCourseModal";
import { Table } from "react-bootstrap";


export function CourseRow({course, semesterTitle, removeCourse, editCourse}: {course:Course, semesterTitle: string, removeCourse: (c: string) => void, editCourse: (oldc: Course, newc: Course, t: string) => void}): JSX.Element{
    const [visible, setVisible] = useState(false);

    return(
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Course Number</th>
                        <th>Credits</th>
                        <th>Course Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{course.Number}</td>
                        <td>{course.Credits}</td>
                        <td>{course.Name}</td>
                        <td>{course.Description}</td>
                        <td><Button variant='success' onClick = {() => setVisible(true)}>Edit Course</Button></td>
                        <td><Button variant = 'danger' onClick = {() => removeCourse(course.Number)}>Clear Course</Button></td>
                        <td><Button variant = 'success'>Prerequisites</Button></td>
                    </tr>
                    <EditCourseModal visible={visible} setVisible={setVisible} editCourse={ editCourse}  course={course} semesterTitle = {semesterTitle}></EditCourseModal>
                </tbody>
            </Table>
        </div>
    );

}