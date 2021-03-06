import React, { useState } from "react";
import { Button, Tab, Table, Tabs } from "react-bootstrap";
import { Course } from "../interfaces/Course";
import { Semester } from "../interfaces/Semester";
import { CourseRow } from "./CourseRow";
import { CSVLink } from "react-csv";
import {cloneDeep} from "lodash";
import { CourseList } from "./CourseList";
import { AddSemesterModal } from "./AddSemesterModal";


export const LOCAL_STORAGE_COURSES = "scheduler-courses";

export function getLocalStorageCourses({initialSemesterList}: {initialSemesterList: Semester[]}): Semester[]{
    const rawCourses: string | null = localStorage.getItem(LOCAL_STORAGE_COURSES);
    if (rawCourses == null) {
        return initialSemesterList;
    }else {
        return JSON.parse(rawCourses);
    }
}

export function SemesterTab({initialSemesterList}: {initialSemesterList: Semester[]}): JSX.Element {
    const loadCourses = getLocalStorageCourses({initialSemesterList});
    const [semesterCount, setSemesterCount] = useState(loadCourses.length);
    const [semesterNumber, setSemesterNumber] = useState(loadCourses.length + 1);
    const [semesters, setSemesters] = useState(loadCourses);
    const [visible, setVisible] = useState(false);

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

    function addSemester(newSemester: Semester){
        setSemesters([...semesters, newSemester]);
        setSemesterCount(semesterCount + 1);
        setSemesterNumber(semesterNumber + 1);
    }

    function showAddSemesterModal(){
        setVisible(true);
    }
    

    function save(){
        localStorage.setItem(LOCAL_STORAGE_COURSES, JSON.stringify(semesters));
    }

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

    const addToSemester = (semesterTitle: string, newCourse: Course) => {
        for (let i = 0; i < semesters.length; i++) {
            if (semesters[i].Title === semesterTitle) {
                const newArr = [...semesters];
                newArr[i].Courses = [...newArr[i].Courses, newCourse];
                setSemesters([...newArr]);
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
                                    <tbody>
                                        {semester.Courses.map((course: Course) => {
                                            return(
                                                <div key = {course.Number}>
                                                    <CourseRow  course = {course} removeCourse = {() => removeCourseRow(semester.Title, course.Number) } editCourse={editCourse} semesterTitle={semester.Title}></CourseRow>
                                                </div>
                                            );
                                        })}
                                    </tbody>
                                    <div>
                                        <p></p>
                                    </div>
                                    <Button variant = 'success' onClick = {() => handleAddRow(semester.Title)}>Add Course</Button>
                                </Table>
                                <Button variant = 'danger' onClick = {() => handleClearAll(semester.Title)}>Remove All Courses</Button>
                                <div> 
                                    <p></p>
                                </div>
                            </Tab>
                        );
                    })}
                    <Tab eventKey="add_semester_tab" title={<Button variant = 'success' onClick = {showAddSemesterModal}>+Add Semester+</Button>}></Tab>
                </Tabs>
                <Button variant = 'danger' onClick = {removeAllSemesters}>-Remove all Semesters-</Button>
                <div>
                    <p></p>
                </div>
                <Button variant = 'success' onClick = {save}>Save Courses</Button>
                <div>
                    <p></p>
                </div>
                <div>
                    <Button variant = 'info'>
                        <CSVLink data = {JSON.stringify(semesters,null,2)}>Download to CSV!</CSVLink>
                    </Button>
                    <AddSemesterModal visible={visible} setVisible={setVisible} addSemester={addSemester}></AddSemesterModal>
                    <div>
                        <p></p>
                    </div>
                </div>

                <div>
                    <h2>Course List</h2>
                    <CourseList semesters={semesters} addToSemester={addToSemester}></CourseList>
                </div>
                
            </div> 
        );
    } else{
        return(
            <div>
                <Tabs id="Semester_tabs" className="mb-3">
                    <Tab eventKey="add_semester_tab" title={<Button variant = 'success' onClick = {showAddSemesterModal}>+Add Semester+</Button>}></Tab>

                </Tabs>
                <Button variant = 'danger' onClick = {removeAllSemesters}>-Remove all Semesters-</Button>
                <div>
                    <p></p>
                </div>
                <AddSemesterModal visible={visible} setVisible={setVisible} addSemester={addSemester}></AddSemesterModal>
                <Button variant = 'success' onClick = {save}>Save Courses</Button>

                <div>
                    <h2>Course List</h2>
                    <CourseList semesters={semesters} addToSemester={addToSemester}></CourseList>
                </div>
            </div>
        );
    }
} 

