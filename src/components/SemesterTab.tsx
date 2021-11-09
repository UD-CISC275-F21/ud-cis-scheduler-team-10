import React, { useState } from "react";
import { Button, Tab, Tabs } from "react-bootstrap";
import { Course } from "../interfaces/Course";
import { Semester } from "../interfaces/Semester";
import { SemesterTable } from "./SemesterTable";



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
    if(semesterCount !== 0){
        return (
            <div>
                <Tabs defaultActiveKey={semesters[0].Title} id="Semester_tabs" className="mb-3">
                    {semesters.map(post => {
                        return(
                            <Tab key = {post.Title} eventKey={post.Title} title={[post.Title, " ", <Button key={post.Title} variant = 'danger' onClick = {() => removeSemester(post.Title)}>X</Button>]}>
                                <SemesterTable courses={post.Courses}></SemesterTable>
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