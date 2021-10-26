import React, { useState } from "react";
import { Table } from "react-bootstrap";
import InlineEdit from "./InlineEdit";
import { Course } from "../interfaces/Course";
import { Button } from "react-bootstrap";

export function SemesterTable ({course1, course2, course3}: {course1: Course, course2: Course, course3: Course}): JSX.Element{

    const [storedCourseNumber1, setStoredCourseNumber1] = useState(course1.Number);
    const [storedCourseCredit1, setStoredCourseCredit1] = useState(course1.Credits);
    const [storedCourseName1, setStoredCourseName1] = useState(course1.Name);
    const [storedCourseDes1, setStoredCourseDes1] = useState(course1.Description);
    
    const [storedCourseNumber2, setStoredCourseNumber2] = useState(course2.Number);
    const [storedCourseCredit2, setStoredCourseCredit2] = useState(course2.Credits);
    const [storedCourseName2, setStoredCourseName2] = useState(course2.Name);
    const [storedCourseDes2, setStoredCourseDes2] = useState(course2.Description);
    
    const [storedCourseNumber3, setStoredCourseNumber3] = useState(course3.Number);
    const [storedCourseCredit3, setStoredCourseCredit3] = useState(course3.Credits);
    const [storedCourseName3, setStoredCourseName3] = useState(course3.Name);
    const [storedCourseDes3, setStoredCourseDes3] = useState(course3.Description);

    const handleRemoveItem = () =>  {
        setStoredCourseName1 ("--");
        setStoredCourseCredit1("--");
        setStoredCourseNumber1("--");
        setStoredCourseDes1("--");

    };
    const handleRemoveItem2 = () =>  {
        setStoredCourseName2 ("--");
        setStoredCourseCredit2("--");
        setStoredCourseNumber2("--");
        setStoredCourseDes2("--");

    };
    const handleRemoveItem3 = () =>  {
        setStoredCourseName3 ("--");
        setStoredCourseCredit3("--");
        setStoredCourseNumber3("--");
        setStoredCourseDes3("--");

    };

    const handleRemoveTable = () => {
        setStoredCourseName1 ("--");
        setStoredCourseCredit1("--");
        setStoredCourseNumber1("--");
        setStoredCourseDes1("--");
        setStoredCourseName2 ("--");
        setStoredCourseCredit2("--");
        setStoredCourseNumber2("--");
        setStoredCourseDes2("--");
        setStoredCourseName3 ("--");
        setStoredCourseCredit3("--");
        setStoredCourseNumber3("--");
        setStoredCourseDes3("--");
    };
        
    /* 
    const [storedCourseNumber4, setStoredCourseNumber4] = useState("ENGL110");
    const [storedCourseCredit4, setStoredCourseCredit4] = useState("3");
    const [storedCourseName4, setStoredCourseName4] = useState("Seminar and Composition");
    const [storedCourseDes4, setStoredCourseDes4] = useState("Introduction to the process of academic writing that centers on the composition of analytical, research-based essays.");
*/


    return(
        <Table striped 
            bordered 
            hover
            variant="dark">
            <thead>
                <tr>
                    <th>Course Number</th>
                    <th>Course Name</th>
                    <th>Credits</th>
                    <th>Description</th>
                    <th><td><Button variant = 'danger' onClick = {handleRemoveTable}>Clear All Courses</Button></td></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><InlineEdit text={storedCourseNumber1} onSetText={text => setStoredCourseNumber1(text)}/></td>
                    <td><InlineEdit text={storedCourseName1} onSetText={text => setStoredCourseName1(text)}/></td>
                    <td><InlineEdit text={storedCourseCredit1} onSetText={text => setStoredCourseCredit1(text)}/></td>
                    <td><InlineEdit text={storedCourseDes1} onSetText={text => setStoredCourseDes1(text)}/></td>
                    <td><Button variant = 'danger' onClick = {handleRemoveItem}>Clear Course</Button></td>
                </tr>
                <tr>
                    <td><InlineEdit text={storedCourseNumber2} onSetText={text => setStoredCourseNumber2(text)}/></td>
                    <td><InlineEdit text={storedCourseName2} onSetText={text => setStoredCourseName2(text)}/></td>
                    <td><InlineEdit text={storedCourseCredit2} onSetText={text => setStoredCourseCredit2(text)}/></td>
                    <td><InlineEdit text={storedCourseDes2} onSetText={text => setStoredCourseDes2(text)}/></td>
                    <td><Button variant = 'danger' onClick = {handleRemoveItem2}>Clear Course</Button></td>
                </tr>
                <tr>
                    <td><InlineEdit text={storedCourseNumber3} onSetText={text => setStoredCourseNumber3(text)}/></td>
                    <td><InlineEdit text={storedCourseName3} onSetText={text => setStoredCourseName3(text)}/></td>
                    <td><InlineEdit text={storedCourseCredit3} onSetText={text => setStoredCourseCredit3(text)}/></td>
                    <td><InlineEdit text={storedCourseDes3} onSetText={text => setStoredCourseDes3(text)}/></td>
                    <td><Button variant = 'danger' onClick = {handleRemoveItem3}>Clear Course</Button></td>
                </tr>
            </tbody>
        </Table>
    );
}
/*<tr>
                    <td><InlineEdit text={storedCourseNumber2} onSetText={text => setStoredCourseNumber2(text)}/></td>
                    <td><InlineEdit text={storedCourseName2} onSetText={text => setStoredCourseName2(text)}/></td>
                    <td><InlineEdit text={storedCourseCredit2} onSetText={text => setStoredCourseCredit2(text)}/></td>
                    <td><InlineEdit text={storedCourseDes2} onSetText={text => setStoredCourseDes2(text)}/></td>
                </tr>
                <tr>
                    <td><InlineEdit text={storedCourseNumber3} onSetText={text => setStoredCourseNumber3(text)}/></td>
                    <td><InlineEdit text={storedCourseName3} onSetText={text => setStoredCourseName3(text)}/></td>
                    <td><InlineEdit text={storedCourseCredit3} onSetText={text => setStoredCourseCredit3(text)}/></td>
                    <td><InlineEdit text={storedCourseDes3} onSetText={text => setStoredCourseDes3(text)}/></td>
                </tr>
                <tr>
                    <td><InlineEdit text={storedCourseNumber4} onSetText={text => setStoredCourseNumber4(text)}/></td>
                    <td><InlineEdit text={storedCourseName4} onSetText={text => setStoredCourseName4(text)}/></td>
                    <td><InlineEdit text={storedCourseCredit4} onSetText={text => setStoredCourseCredit4(text)}/></td>
                    <td><InlineEdit text={storedCourseDes4} onSetText={text => setStoredCourseDes4(text)}/></td>
                </tr>*/