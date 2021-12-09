import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Course } from "../interfaces/Course";
import { Semester } from "../interfaces/Semester";
import { AddCourseModal } from "./AddCourseModal";
import "./CourseList.css";


export function CourseListCourseRow ({course, semesters, addToSemester}: {course: Course, semesters: Semester[], addToSemester: (t: string, c: Course) => void}): JSX.Element {
    const [visible, setVisible] = useState(false);

    function showAddCourseModal() {
        setVisible(true);
    }

    return(
        <tr>
            <td className="course-number">{course.Number}</td>
            <td className="course-credits">{course.Credits}</td>
            <td className="course-name">{course.Name}</td>
            <td className="course-description">{course.Description}</td>
            <td className="course-prereq">{course.Prereq}</td>
            <td  data-testid="add_course_button_CL" className="add-course"><Button variant="success" onClick={showAddCourseModal}>Add Course</Button></td>
            <AddCourseModal visible={visible} setVisible={setVisible} newCourse={course} semesters={semesters} addToSemester={addToSemester}></AddCourseModal>
        </tr>
    );
}