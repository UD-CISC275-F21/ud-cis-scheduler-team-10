import React, {useState} from "react";
import {Button} from "react-bootstrap";
import { Course } from "../interfaces/Course";
import InlineEdit from "./InlineEdit";


export function CourseRow({course1, semesterTitle, removeCourse, editCourse}: {course1:Course, semesterTitle: string, removeCourse: (c: string) => void, editCourse: (c: Course, t: string) => void}): JSX.Element{
    
    return(
        <tr>
            <td>{course1.Number}</td>
            <td>{course1.Credits}</td>
            <td>{course1.Name}</td>
            <td>{course1.Description}</td>
            <td><Button variant='success' onClick = {() => editCourse(course1, semesterTitle)}>Edit Course</Button></td>
            <td><Button variant = 'danger' onClick = {() => removeCourse(course1.Number)}>Clear Course</Button></td>
        </tr>
    );

}