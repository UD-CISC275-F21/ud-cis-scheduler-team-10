import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SemesterTab } from "./components/SemesterTab";


function App(): JSX.Element {
    return (
        <div className="App">

            <h1>UD CIS Scheduler</h1>
            <SemesterTab></SemesterTab>
        </div>
    );
}

export default App;
