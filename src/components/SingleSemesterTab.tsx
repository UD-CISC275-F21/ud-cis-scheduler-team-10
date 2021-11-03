import React from "react";
import { Tab } from "react-bootstrap";
import { Semester } from "../interfaces/Semester";
import { SemesterTable } from "./SemesterTable";


export function SingleSemesterTab({semester}: {semester: Semester}): JSX.Element {
    

    return(
        <Tab eventKey={semester.Title} title={semester.Title}>
           
        </Tab>
    );
}