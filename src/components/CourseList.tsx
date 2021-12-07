import Courses from "../data/courses.json";
import { Table } from "react-bootstrap";
import React from "react";
import "./CourseList.css";

export function CourseList (): JSX.Element {
    return (
        <div className="course-table-div" >
            <Table striped 
                bordered 
                hover
                variant="dark"
                className="course-table">
                <thead className="course-table-head">
                    <tr>
                        <th className="course-number">Course Number</th>
                        <th className="course-name">Course Name</th>
                        <th className="course-credits">Credits</th>
                        <th className="course-description">Description</th>
                        <th className ="course-prereq">Prerequisites</th>
                    </tr>
                </thead>
                <tbody className="course-table-body">
                    { Courses.map(course => {
                        return(
                            <tr key={course.Number}>
                                <td>{ course.Number }</td>
                                <td>{ course.Name }</td>
                                <td className="credits">{ course.Credits }</td>
                                <td>{ course.Description }</td>
                                <td>{ course.Prereq }</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>


        </div>
    );
}