import React, { useState } from "react";
import { Table } from "react-bootstrap";
import InlineEdit from "./InlineEdit";


export function SemesterTable (): JSX.Element{

    const [storedCourseNumber1, setStoredCourseNumber1] = useState("CISC108");
    const [storedCourseCredit1, setStoredCourseCredit1] = useState("3");
    const [storedCourseName1, setStoredCourseName1] = useState("Introduction to Programming");
    const [storedCourseDes1, setStoredCourseDes1] = useState(
        `Computing and principles of programming with an emphasis on systematic program design. Topics include functional programming, data abstraction, procedural abstraction, 
        use of control and state, recursion, testing, and object-oriented programming concepts. Requires no prior programming experience, open to any major, 
        but intended primarily for majors and minors in computer science or mathematics.`);

    const [storedCourseNumber2, setStoredCourseNumber2] = useState("MATH241");
    const [storedCourseCredit2, setStoredCourseCredit2] = useState("4");
    const [storedCourseName2, setStoredCourseName2] = useState("Analytic Geometry and Calculus A");
    const [storedCourseDes2, setStoredCourseDes2] = useState(
        `Functions, limits, continuity, derivatives. Polynomial, rational, exponential, hyperbolic, logarithmic, trigonometric and inverse trigonometric functions. 
        Definite and indefinite integrals and the Fundamental Theorem of Calculus. Simple differential equations (separable ODE, linear ODE). ODE models leading to exponential growth and decay.`);
    
    const [storedCourseNumber3, setStoredCourseNumber3] = useState("EGGG101");
    const [storedCourseCredit3, setStoredCourseCredit3] = useState("2");
    const [storedCourseName3, setStoredCourseName3] = useState("Introduction to Engineering");
    const [storedCourseDes3, setStoredCourseDes3] = useState(
        `Introduction to profession, including disciplines of chemical, civil, computer, electrical, environmental, and mechanical engineering. 
        Prepares students for success through integration of: technical problem solving and engineering design, ethical decision-making, teamwork, and communicating to diverse audiences.`);

    const [storedCourseNumber4, setStoredCourseNumber4] = useState("ENGL110");
    const [storedCourseCredit4, setStoredCourseCredit4] = useState("3");
    const [storedCourseName4, setStoredCourseName4] = useState("Seminar and Composition");
    const [storedCourseDes4, setStoredCourseDes4] = useState("Introduction to the process of academic writing that centers on the composition of analytical, research-based essays.");

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
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><InlineEdit text={storedCourseNumber1} onSetText={text => setStoredCourseNumber1(text)}/></td>
                    <td><InlineEdit text={storedCourseName1} onSetText={text => setStoredCourseName1(text)}/></td>
                    <td><InlineEdit text={storedCourseCredit1} onSetText={text => setStoredCourseCredit1(text)}/></td>
                    <td><InlineEdit text={storedCourseDes1} onSetText={text => setStoredCourseDes1(text)}/></td>
                </tr>
                <tr>
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
                </tr>
            </tbody>
        </Table>
    );
}