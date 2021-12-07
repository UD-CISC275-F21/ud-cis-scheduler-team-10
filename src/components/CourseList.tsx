import Courses from "../data/courses.json";
import { Table } from "react-bootstrap";
import React from "react";
import "./CourseList.css";
import { Semester } from "../interfaces/Semester";
import { Course } from "../interfaces/Course";
import { CourseListCourseRow } from "./CourseListCourseRow";

export function CourseList ({semesters, addToSemester}: {semesters: Semester[], addToSemester:(t: string, c: Course) => void}): JSX.Element {
    

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
                        <th className="course-credits">Credits</th>
                        <th className="course-name">Course Name</th>
                        <th className="course-description">Description</th>
                        <th className="add-course">Add to Semester</th>
                    </tr>
                </thead>
                <tbody className="course-table-body">
                    { Courses.map(course => {
                        return(
                            <CourseListCourseRow key={course.Number} course={course} semesters={semesters} addToSemester={addToSemester}></CourseListCourseRow>
                        );
                    })}
                </tbody>
            </Table>


        </div>
    );
}