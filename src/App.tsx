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
    semester1.Title = "Semester 1";
    semester1.Courses = [courseArray[0] as Course, courseArray[1] as Course, courseArray[2] as Course];
    //semester1.Course1 = courseArray[0] as Course;
    //semester1.Course2 = courseArray[1] as Course;
    //semester1.Course3 = courseArray[2] as Course;

    const semester2 = {} as Semester;
    semester2.Title = "Semester 2";
    semester2.Courses = [courseArray[3] as Course, courseArray[4] as Course, courseArray[5] as Course];
    //semester2.Course1 = courseArray[4] as Course;
    //semester2.Course2 = courseArray[5] as Course;
    //semester2.Course3 = courseArray[6] as Course;

    const semester3 = {} as Semester;
    semester3.Title = "Semester 3";
    semester3.Courses = [courseArray[6] as Course, courseArray[7] as Course, courseArray[8] as Course];
    //semester3.Course1 = courseArray[7] as Course;
    //semester3.Course2 = courseArray[8] as Course;
    //semester3.Course3 = courseArray[9] as Course;

    return (
        <div className="App">

            <h1>UD CIS Scheduler</h1>
            <WelcomeModal></WelcomeModal>
            <SemesterTab tab1={semester1} tab2={semester2} tab3={semester3}></SemesterTab>
            <div>
                <h2>Course List</h2>
                <CourseList></CourseList>
            </div>
        </div>
    );
}

export default App;
