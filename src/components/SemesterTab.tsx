import React, { useState } from "react";
import { Button, Tab, Table, Tabs } from "react-bootstrap";
import { Course } from "../interfaces/Course";
import { Semester } from "../interfaces/Semester";
import { CourseRow } from "./CourseRow";
import { CSVLink } from "react-csv";
import {cloneDeep} from "lodash";



//const courseArray = JSON.parse(JSON.stringify(CourseData));

export const LOCAL_STORAGE_COURSES = "scheduler-courses";

export function getLocalStorageCourses({tab1, tab2, tab3}: {tab1: Semester, tab2: Semester, tab3: Semester}): Semester[]{
    const rawCourses: string | null = localStorage.getItem(LOCAL_STORAGE_COURSES);
    if (rawCourses == null) {
        return[tab1,tab2,tab3];
    }else {
        return JSON.parse(rawCourses);
    }
}

export function SemesterTab({tab1, tab2, tab3}: {tab1: Semester, tab2: Semester, tab3: Semester}): JSX.Element {
    const loadCourses = getLocalStorageCourses({tab1, tab2, tab3});
    const [semesterCount, setSemesterCount] = useState(3);
    const [semesterNumber, setSemesterNumber] = useState(4);
    const [semesters, setSemesters] = useState(loadCourses);


    function editCourse(oldCourse: Course, newCourse: Course, title: string) {
        for (let i = 0; i < semesters.length; i++) {
            if (semesters[i].Title === title) {
                const newArr = cloneDeep(semesters);
                for (let j = 0; j<newArr[i].Courses.length; j++) {
                    if (newArr[i].Courses[j].Number === oldCourse.Number) {
                        newArr[i].Courses[j] = newCourse;
                        setSemesters(newArr);
                    }
                }    
            }
        }
    }
    
    function save(){
        localStorage.setItem(LOCAL_STORAGE_COURSES, JSON.stringify(semesters));
    }
    const handleAddSemester = () => {
        setSemesterCount(semesterCount+1);
        setSemesterNumber(semesterNumber + 1);
        const semesterTitle = "Semester " + semesterNumber as string;

        const newCourse = {} as Course;
        newCourse.Number = "--";
        newCourse.Credits = "--";
        newCourse.Name = "--";
        newCourse.Description = "--";

        const newSemester = {} as Semester;
        newSemester.Title = semesterTitle;
        newSemester.Courses = [newCourse, newCourse, newCourse];
        setSemesters([...semesters,newSemester]);
    };

    const removeSemester = (c: string) => {
        setSemesterCount(semesterCount-1);
        setSemesterNumber(semesterNumber-1);
        const newArr = semesters.filter(semester => !semester.Title.includes(c));
        setSemesters([...newArr]);
    };

    const removeAllSemesters = () =>{
        setSemesters([]);
        setSemesterNumber(1);
        setSemesterCount(0);
    };


    const handleAddRow = (t: string) => {
        const newCourse = {} as Course;
        newCourse.Number = "--";
        newCourse.Credits = "--";
        newCourse.Name = "--";
        newCourse.Description = "--";
        for (let i = 0; i < semesters.length; i++) {
            if (semesters[i].Title === t) {
                const newArr = [...semesters];
                newArr[i].Courses = [...newArr[i].Courses, newCourse];
                setSemesters([...newArr]);
            }
        }
    };

    const handleClearAll = (t: string) =>{
        for (let i = 0; i < semesters.length; i++) {
            if (semesters[i].Title === t) {
                const newArr = [...semesters];
                newArr[i].Courses = [];
                setSemesters([...newArr]);
            }
        }
    };
    
    const removeCourseRow = (t:string, c: string) => {
        for (let i = 0; i < semesters.length; i++) {
            if (semesters[i].Title === t) {
                const newSemesterArr = [...semesters];
                const newCourseArr = newSemesterArr[i].Courses.filter(courseRow => !courseRow.Number.includes(c));
                newSemesterArr[i].Courses = [...newCourseArr];
                setSemesters(newSemesterArr);
            }
        }
    };


    if(semesterCount !== 0){
        return (
            <div>
                <Tabs defaultActiveKey={semesters[0].Title} id="Semester_tabs" className="mb-3">
                    {semesters.map(semester => {
                        return(
                            <Tab key = {semester.Title} eventKey={semester.Title} title={[semester.Title, " ", <Button key={semester.Title} variant = 'danger' onClick = {() => removeSemester(semester.Title)}>X</Button>]}>
                                <Table striped bordered hover variant="dark">
                                    <thead>
                                        <tr>
                                            <th>Course Number</th>
                                            <th>Course Name</th>
                                            <th>Credits</th>
                                            <th>Description</th>
                                            <th><Button variant = 'danger' onClick = {() => handleClearAll(semester.Title)}>Remove All Courses</Button></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {semester.Courses.map((course: Course) => {
                                            return(
                                                <div key = {course.Number}>
                                                    <CourseRow  course1 = {course} removeCourse = {() => removeCourseRow(semester.Title, course.Number) } editCourse={editCourse} semesterTitle={semester.Title}></CourseRow>
                                                    
                                                </div>
                                            );
                                        })}
                                    </tbody>
                                    <Button variant = 'success' onClick = {() => handleAddRow(semester.Title)}>Add Course</Button>
                                </Table>
                            </Tab>
                        );
                    })}
                    <Tab eventKey="add_semester_tab" title={<Button variant = 'success' onClick = {handleAddSemester}>+Add Semester+</Button>}></Tab>
                </Tabs>
                <Button variant = 'danger' onClick = {removeAllSemesters}>-Remove all Semesters-</Button>
                <Button variant = 'success' onClick = {save}>Save Courses</Button>
                <div>
                    <CSVLink data = {JSON.stringify(semesters,null,2)}>Download to CSV!</CSVLink>
                </div>
                
            </div> 
        );
    } else{
        return(
            <div>
                <Tabs id="Semester_tabs" className="mb-3">
                    <Tab eventKey="add_semester_tab" title={<Button variant = 'success' onClick = {handleAddSemester}>+Add Semester+</Button>}></Tab>
                </Tabs>
                <Button variant = 'danger' onClick = {removeAllSemesters}>-Remove all Semesters-</Button>
                <Button variant = 'success' onClick = {save}>Save Courses</Button>
            </div>
        );
    }
} 
