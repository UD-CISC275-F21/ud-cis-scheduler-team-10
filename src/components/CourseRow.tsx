import React, {useState} from "react";
import {Button} from "react-bootstrap";
import { Course } from "../interfaces/Course";
import InlineEdit from "./InlineEdit";


export function CourseRow({course1}: {course1:Course}): JSX.Element{
    const [storedCourseNumber1, setStoredCourseNumber1] = useState(course1.Number);
    const [storedCourseCredit1, setStoredCourseCredit1] = useState(course1.Credits);
    const [storedCourseName1, setStoredCourseName1] = useState(course1.Name);
    const [storedCourseDes1, setStoredCourseDes1] = useState(course1.Description);
    const handleRemoveItem2 = () =>  {
        setStoredCourseName1 ("--");
        setStoredCourseCredit1("--");
        setStoredCourseNumber1("--");
        setStoredCourseDes1("--");

    };
    return(
        <tr>
            <td><InlineEdit text={storedCourseNumber1} onSetText={text => setStoredCourseNumber1(text)}/></td>
            <td><InlineEdit text={storedCourseName1} onSetText={text => setStoredCourseName1(text)}/></td>
            <td><InlineEdit text={storedCourseCredit1} onSetText={text => setStoredCourseCredit1(text)}/></td>
            <td><InlineEdit text={storedCourseDes1} onSetText={text => setStoredCourseDes1(text)}/></td>
            <td><Button variant = 'danger' onClick = {handleRemoveItem2}>Clear Course</Button></td>
        </tr>
    );

}