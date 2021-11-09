import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Course } from "../interfaces/Course";
import { Button } from "react-bootstrap";
import { CourseRow } from "./CourseRow";


export function SemesterTable ({courses}: {courses: Course[]}): JSX.Element{

    const [courseRows, setCourseRows] = useState (courses);

    const handleAddRow = () => {
        const newCourse = {} as Course;
        newCourse.Number = "--";
        newCourse.Credits = "--";
        newCourse.Name = "--";
        newCourse.Description = "--";
        setCourseRows([...courseRows,newCourse]);
    };

    const handleClearAll = () =>{
        setCourseRows([]);
    };
    
    const removeCourseRow = (c: string) => {
        const newArr = courseRows.filter(courseRow => !courseRow.Number.includes(c));
        setCourseRows([...newArr]);
    };

    return(
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Course Number</th>
                    <th>Course Name</th>
                    <th>Credits</th>
                    <th>Description</th>
                    <th><Button variant = 'danger' onClick = {handleClearAll}>Remove All Courses</Button></th>
                </tr>
            </thead>
            <tbody>
                {courseRows.map(post => {
                    return(
                        <CourseRow key = {post.Number} course1 = {post} removeCourse = {() => removeCourseRow(post.Number) }></CourseRow>
                    );
                })}
            </tbody>
            <Button variant = 'success' onClick = {handleAddRow}>Add Course</Button>
        </Table>

        
    );
}


