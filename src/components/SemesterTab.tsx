import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { ClearSemester } from "./ClearSemester";
import { SemesterTable } from "./SemesterTable";
import CourseData from "../data/courses.json";
import { Course } from "../interfaces/Course";



const courseArray = JSON.parse(JSON.stringify(CourseData));

export function SemesterTab(): JSX.Element {
    return (
        <Tabs defaultActiveKey="semester_1" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="semester_1" title="Semester 1" >
                <SemesterTable course1={courseArray[0] as Course} course2={courseArray[1] as Course} course3={courseArray[2] as Course}></SemesterTable>
            </Tab>
            <Tab eventKey="semester_2" title="Semester 2">
                <SemesterTable course1={courseArray[3] as Course} course2={courseArray[4] as Course} course3={courseArray[5] as Course}></SemesterTable>
            </Tab>
            <Tab eventKey="semester_3" title="Semester 3">
                <SemesterTable course1={courseArray[6] as Course} course2={courseArray[7] as Course} course3={courseArray[8] as Course}></SemesterTable>
            </Tab>
            
        </Tabs>
    );
}

/*<Tab eventKey="semester_2" title="Semester 2">
                <SemesterTable></SemesterTable>
                <ClearSemester></ClearSemester>
            </Tab>
            <Tab eventKey="semester_3" title="Semester 3">
                <SemesterTable></SemesterTable>
                <ClearSemester></ClearSemester>
            </Tab>*/