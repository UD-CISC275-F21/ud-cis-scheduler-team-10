import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SemesterTab } from "./components/SemesterTab";
import { CourseList } from "./components/CourseList";
import {WelcomeModal} from "./components/WelcomeModal";



function App(): JSX.Element {
    return (
        <div className="App">

            <h1>UD CIS Scheduler</h1>
            <WelcomeModal></WelcomeModal>
            <SemesterTab></SemesterTab>
            <div>
                <h2>Course List</h2>
                <CourseList></CourseList>
            </div>
        </div>
    );
}

export default App;
