import React, { useState } from "react";
import { Button, Tab, Table, Tabs } from "react-bootstrap";
import { Course } from "../interfaces/Course";
import { Semester } from "../interfaces/Semester";
import { CourseRow } from "./CourseRow";
import { CSVLink } from "react-csv";
import { EditCourseModal } from "./EditCourseModal";



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
    const [visible, setVisible] = useState(false);

    function editCourse(course: Course, title: string) {
        for (let i = 0; i < semesters.length; i++) {
            if (semesters[i].Title === title) {
                const newArr = [...semesters];
                for (let j = 0; j<newArr[i].Courses.length; j++) {
                    if (newArr[i].Courses[j].Number === course.Number) {
                        newArr[i].Courses[j] = course;
                        setSemesters([...newArr]);
                    }
                }    
            }
        }
        setVisible(true);
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
                                                <div key = {row.Number}>
                                                    <CourseRow  course1 = {row} removeCourse = {() => removeCourseRow(post.Title, row.Number) } editCourse={() => editCourse(row, post.Title)} semesterTitle={post.Title}></CourseRow>
                                                    <EditCourseModal visible={visible} setVisible={setVisible} editCourse={() => editCourse(row, post.Title)}  course={row} semesterTitle = {post.Title}></EditCourseModal>
                                                </div>
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
