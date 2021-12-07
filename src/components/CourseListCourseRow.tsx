import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Course } from "../interfaces/Course";
import { Semester } from "../interfaces/Semester";
import { AddCourseModal } from "./AddCourseModal";


export function CourseListCourseRow ({course, semesters, addToSemester}: {course: Course, semesters: Semester[], addToSemester: (t: string, c: Course) => void}): JSX.Element {
    const [visible, setVisible] = useState(false);

    function showAddCourseModal() {
        setVisible(true);
    }

    return(
        <tr>
            <td>{course.Number}</td>
            <td>{course.Credits}</td>
            <td>{course.Name}</td>
            <td>{course.Description}</td>
            <td><Button variant="success" onClick={showAddCourseModal}>Add Course</Button></td>
            <AddCourseModal visible={visible} setVisible={setVisible} newCourse={course} semesters={semesters} addToSemester={addToSemester}></AddCourseModal>
        </tr>
    );
}