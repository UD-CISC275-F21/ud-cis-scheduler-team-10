import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { ClearSemester } from "./ClearSemester";
import { SemesterTable } from "./SemesterTable";


export function SemesterTab(): JSX.Element {
    return (
        <Tabs defaultActiveKey="semester_1" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="semester_1" title="Semester 1" >
                <SemesterTable></SemesterTable>
                <ClearSemester></ClearSemester>
            </Tab>
            <Tab eventKey="semester_2" title="Semester 2">
                <SemesterTable></SemesterTable>
                <ClearSemester></ClearSemester>
            </Tab>
            <Tab eventKey="semester_3" title="Semester 3">
                <SemesterTable></SemesterTable>
                <ClearSemester></ClearSemester>
            </Tab>
        </Tabs>
    );
}