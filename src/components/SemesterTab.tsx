import React, { useState } from "react";
import { Button, Tab, Table, Tabs } from "react-bootstrap";
import { Course } from "../interfaces/Course";
import { Semester } from "../interfaces/Semester";
import { CourseRow } from "./CourseRow";




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
        //newSemester.Course1 = newCourse;
        //newSemester.Course2 = newCourse;
        //newSemester.Course3 = newCourse;
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
                    {semesters.map(post => {
                        return(
                            <Tab key = {post.Title} eventKey={post.Title} title={[post.Title, " ", <Button key={post.Title} variant = 'danger' onClick = {() => removeSemester(post.Title)}>X</Button>]}>
                                <Table striped bordered hover variant="dark">
                                    <thead>
                                        <tr>
                                            <th>Course Number</th>
                                            <th>Course Name</th>
                                            <th>Credits</th>
                                            <th>Description</th>
                                            <th><Button variant = 'danger' onClick = {() => handleClearAll(post.Title)}>Remove All Courses</Button></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {post.Courses.map((row: Course) => {
                                            return(
                                                <CourseRow key = {row.Number} course1 = {row} removeCourse = {() => removeCourseRow(post.Title, row.Number) }></CourseRow>
                                            );
                                        })}
                                    </tbody>
                                    <Button variant = 'success' onClick = {() => handleAddRow(post.Title)}>Add Course</Button>
                                </Table>
                            </Tab>
                        );
                    })}
                    <Tab eventKey="add_semester_tab" title={<Button variant = 'success' onClick = {handleAddSemester}>+Add Semester+</Button>}></Tab>
                </Tabs>
                <Button variant = 'danger' onClick = {removeAllSemesters}>-Remove all Semesters-</Button>
                <Button variant = 'success' onClick = {save}>Save Courses</Button>
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

/*<Tabs defaultActiveKey="semester_1" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="semester_1" title="Semester 1" >
                <SemesterTable courses={[courseArray[0] as Course, courseArray[1] as Course, courseArray[2] as Course]}></SemesterTable>
            </Tab>
            <Tab eventKey="semester_2" title="Semester 2">
                <SemesterTable courses={[courseArray[3] as Course, courseArray[4] as Course, courseArray[5] as Course]}></SemesterTable>
            </Tab>
            <Tab eventKey="semester_3" title="Semester 3">
                <SemesterTable courses={[courseArray[6] as Course, courseArray[7] as Course, courseArray[8] as Course]}></SemesterTable>
            </Tab>
        </Tabs>

            {tab1, tab2, tab3}: {tab1: Semester, tab2: Semester, tab3: Semester}

            <Tabs defaultActiveKey={semesters[0].Title} id="Semester_tabs" className="mb-3">
            {semesters.map(post => {
                return(
                    <SingleSemesterTab key = {post.Title} semester = {post}></SingleSemesterTab>
                );
            })}
        </Tabs>
     */