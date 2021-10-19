import React from "react";
import { Table } from "react-bootstrap";


export function SemesterTable (): JSX.Element{
    return(
        <Table striped bordered hover variant="dark">
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
                    <td>CISC108</td>
                    <td>Introduction to Programming</td>
                    <td>3</td>
                    <td>Computing and principles of programming with an emphasis on systematic program design. 
                        Topics include functional programming, data abstraction, procedural abstraction, use of control and state, recursion, testing, and object-oriented programming concepts.
                         Requires no prior programming experience, open to any major, but intended primarily for majors and minors in computer science or mathematics. </td>
                </tr>
                <tr>
                    <td>MATH241</td>
                    <td>Analytic Geometry and Calculus A</td>
                    <td>4</td>
                    <td>Functions, limits, continuity, derivatives. Polynomial, rational, exponential, hyperbolic, logarithmic, trigonometric and inverse trigonometric functions. 
                        Definite and indefinite integrals and the Fundamental Theorem of Calculus. Simple differential equations (separable ODE, linear ODE). ODE models leading to exponential growth and decay.</td>
                </tr>
                <tr>
                    <td>EGGG101</td>
                    <td>Introduction to Engineering</td>
                    <td>2</td>
                    <td>Introduction to profession, including disciplines of chemical, civil, computer, electrical, environmental, and mechanical engineering. 
                        Prepares students for success through integration of: technical problem solving and engineering design, ethical decision-making, teamwork, and communicating to diverse audiences.</td>
                </tr>
                <tr>
                    <td>ENGL110</td>
                    <td>Seminar and Compostion</td>
                    <td>3</td>
                    <td>Introduction to the process of academic writing that centers on the composition of analytical, research-based essays.</td>
                </tr>
            </tbody>
        </Table>
    );
}