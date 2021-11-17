import React, {useState} from "react";
import {Button} from "react-bootstrap";
import { Course } from "../interfaces/Course";
import { EditCourseModal } from "./EditCourseModal";


export function CourseRow({course1, semesterTitle, removeCourse, editCourse}: {course1:Course, semesterTitle: string, removeCourse: (c: string) => void, editCourse: (oldc: Course, newc: Course, t: string) => void}): JSX.Element{
    const [visible, setVisible] = useState(false);

    return(
        <div>
            <tr>
                <td>{course1.Number}</td>
                <td>{course1.Credits}</td>
                <td>{course1.Name}</td>
                <td>{course1.Description}</td>
                <td><Button variant='success' onClick = {() => setVisible(true)}>Edit Course</Button></td>
                <td><Button variant = 'danger' onClick = {() => removeCourse(course1.Number)}>Clear Course</Button></td>
            </tr>
            <EditCourseModal visible={visible} setVisible={setVisible} editCourse={ editCourse}  course={course1} semesterTitle = {semesterTitle}></EditCourseModal>
        </div>
    );

}