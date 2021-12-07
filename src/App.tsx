import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SemesterTab } from "./components/SemesterTab";
import { CourseList } from "./components/CourseList";
import {WelcomeModal} from "./components/WelcomeModal";
import CourseData from "./data/courses.json";
import { Semester } from "./interfaces/Semester";
import { Course } from "./interfaces/Course";



const courseArray = JSON.parse(JSON.stringify(CourseData));

function App(): JSX.Element {
    

    const semester1 = {} as Semester;
    semester1.Title = "Fall 2022";
    semester1.Courses = [courseArray[0] as Course, courseArray[1] as Course, courseArray[49] as Course, courseArray[48] as Course, courseArray[56] as Course];

    const semester2 = {} as Semester;
    semester2.Title = "Spring 2023";
    semester2.Courses = [courseArray[2] as Course, courseArray[3] as Course, courseArray[51] as Course, courseArray[56] as Course, courseArray[57] as Course];

    const semester3 = {} as Semester;
    semester3.Title = "Fall 2023";
    semester3.Courses = [courseArray[4] as Course, courseArray[5] as Course, courseArray[50] as Course, courseArray[58] as Course, courseArray[59] as Course];

    const semester4 = {} as Semester;
    semester4.Title = "Spring 2024";
    semester4.Courses = [courseArray[9] as Course, courseArray[8] as Course, courseArray[52] as Course, courseArray[58] as Course, courseArray[56] as Course];
   
    const semester5 = {} as Semester;
    semester5.Title = "Fall 2024";
    semester5.Courses = [courseArray[60] as Course, courseArray[7] as Course, courseArray[13] as Course, courseArray[62] as Course, courseArray[59] as Course];

    const semester6 = {} as Semester;
    semester6.Title = "Spring 2025";
    semester6.Courses = [courseArray[6] as Course, courseArray[15] as Course, courseArray[61] as Course, courseArray[62] as Course, courseArray[59] as Course];

    const semester7 = {} as Semester;
    semester7.Title = "Fall 2025";
    semester7.Courses = [courseArray[46] as Course, courseArray[63] as Course, courseArray[64] as Course, courseArray[59] as Course, courseArray[59] as Course];

    const semester8 = {} as Semester;
    semester8.Title = "Spring 2026";
    semester8.Courses = [courseArray[47] as Course, courseArray[65] as Course, courseArray[64] as Course, courseArray[59] as Course, courseArray[59] as Course];
    return (
        <div className="App">

            <h1>UD CIS Scheduler</h1>
            <WelcomeModal></WelcomeModal>
            <SemesterTab semester1={semester1} semester2={semester2} semester3={semester3} semester4 = {semester4} semester5 = {semester5} semester6 = {semester6} semester7 = {semester7} semester8 = {semester8} ></SemesterTab>
            <div>
                <h2>Course List</h2>
                <CourseList></CourseList>
            </div>
        </div>
    );
}

export default App;
