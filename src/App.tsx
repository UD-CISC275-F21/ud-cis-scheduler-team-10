import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SemesterTab } from "./components/SemesterTab";
import {WelcomeModal} from "./components/WelcomeModal";
import { DegreeRequirementsModal } from "./components/DegreeRequirements";
import { initialSemesters } from "./data/initialSemesters";






function App(): JSX.Element {
    
    return (
        <div className="App">

            <h1>UD CIS Scheduler</h1>
            <WelcomeModal></WelcomeModal>
            <DegreeRequirementsModal></DegreeRequirementsModal>
            <SemesterTab initialSemesterList={initialSemesters} ></SemesterTab>
        </div>
    );
}

export default App;
