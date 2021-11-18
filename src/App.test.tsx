import React from "react";
import { getAllByText, queryByText, render, screen } from "@testing-library/react";
import App from "./App";

test("renders UD CIS Scheduler text", () => {
    render(<App />);
    const linkElement = screen.getByText(/UD CIS Scheduler/i);
    expect(linkElement).toBeInTheDocument();
});

test("renders Course List text", () => {
    render(<App />);
    const linkElement = screen.getByText(/Course List/i);
    expect(linkElement).toBeInTheDocument();
});

test("renders help button", () => {
    render(<App />);
    const linkElement = screen.getByText(/Need Help?/i);
    expect(linkElement).toBeInTheDocument();
});

test("renders Semester tabs", () => {
    render(<App />);
    const linkElement1 = screen.getByText(/Semester 1/i);
    const linkElement2 = screen.getByText(/Semester 2/i);
    const linkElement3 = screen.getByText(/Semester 3/i);
    expect(linkElement1).toBeInTheDocument();
    expect(linkElement2).toBeInTheDocument();
    expect(linkElement3).toBeInTheDocument();
});

test("renders Add Semester button", () => {
    render(<App />);
    const linkElement = screen.getByText("+Add Semester+");
    expect(linkElement).toBeInTheDocument();
});

test("renders add courses button", () => {
    render(<App />);
    const linkElement = screen.getAllByText(/Add Course/i);
    expect(linkElement[0]).toBeInTheDocument();
});

test("renders remove all semesters button", () => {
    render(<App />);
    const linkElement = screen.getByText(/-Remove All Semesters-/i);
    expect(linkElement).toBeInTheDocument();
});

test("renders clear course button", () => {
    render(<App />);
    const linkElement = screen.getAllByText(/Clear Course/i);
    expect(linkElement[0]).toBeInTheDocument();
});

test("renders clear all courses button", () => {
    render(<App />);
    const linkElement = screen.getAllByText(/Remove All Courses/i);
    expect(linkElement[0]).toBeInTheDocument();
});

test("renders semester table titles and course list titles", () => {
    render(<App />);
    const linkElement1 = screen.getAllByText(/Course Number/i);
    const linkElement2 = screen.getAllByText(/Course Name/i);
    const linkElement3 = screen.getAllByText(/Credits/i);
    const linkElement4 = screen.getAllByText(/Description/i);
    expect(linkElement1[0]).toBeInTheDocument();
    expect(linkElement2[0]).toBeInTheDocument();
    expect(linkElement3[0]).toBeInTheDocument();
    expect(linkElement4[0]).toBeInTheDocument();
});

test("renders initial input courses", () => {
    render(<App />);
    // One in course List, one in semester 1
    const linkElement = screen.getAllByText(/CISC108/i);
    expect(linkElement[0]).toBeInTheDocument();
});

test("renders CSV download button", () => {
    render(<App />);
    const linkElement = screen.getAllByText(/Download to CSV/i);
    expect(linkElement[0]).toBeInTheDocument();
});

test("add new course button", () => {
    render(<App />);
    const oldCourse = screen.queryByText("--");
    expect(oldCourse).toBeNull();
    const addButton = screen.getAllByText("Add Course");
    addButton[0].click();
    const newCourse = screen.getAllByText("--");
    expect(newCourse[0]).toBeInTheDocument();
});

test("add new semester button", () => {
    render(<App />);
    const oldSemester = screen.queryByText("Semester 4");
    expect(oldSemester).toBeNull();
    const addButton = screen.getAllByText("+Add Semester+");
    addButton[0].click();
    const newSemester = screen.getAllByText("Semester 4");
    expect(newSemester[0]).toBeInTheDocument();
});

test("remove course button", () => {
    render(<App />);
    const oldCourse = screen.queryByText("CISC 108");
    const removeCourseButton = screen.getAllByText("Clear Course");
    removeCourseButton[0].click();
    expect(oldCourse).toBeNull();
});

test("remove semester button", () => {
    render(<App />);
    const oldSemester = screen.queryByText("semester 1");
    const removeSemesterButton = screen.getAllByText("X");
    removeSemesterButton[0].click();
    expect(oldSemester).toBeNull();
});

test("remove all courses", () => {
    render(<App />);
    const oldCourse1 = screen.queryByText("CISC 108");
    const oldCourse3 = screen.queryByText("EGGG 101");
    const oldCourse2 = screen.queryByText("CISC 181");
    const removeAllCoursesButton = screen.getAllByText("Remove All Courses");
    removeAllCoursesButton[0].click();
    expect(oldCourse1).toBeNull();
    expect(oldCourse2).toBeNull();
    expect(oldCourse3).toBeNull();
});

test("remove all semesters", () => {
    render(<App />);
    const oldSemester1 = screen.queryByText("semester 1");
    const oldSemester2 = screen.queryByText("semester 2");
    const oldSemester3 = screen.queryByText("semester 3");
    const removeAllSemestersButton = screen.getAllByText("-Remove all Semesters-");
    removeAllSemestersButton[0].click();
    expect(oldSemester1).toBeNull();
    expect(oldSemester2).toBeNull();
    expect(oldSemester3).toBeNull();
});

test("help modal window", () => {
    render(<App />);
    const helpModalButton = screen.getAllByText("Need help?");
    helpModalButton[0].click();
    const helpText = screen.queryByText("About UD CIS Scheduler");
    expect(helpText).toBeInTheDocument();
});

test("edit course modal", () => {
    render(<App />);
    const editModalButton = screen.getAllByText("Edit Course");
    editModalButton[0].click();
    const saveEdit = screen.queryByText("Save changes");
    const closeModal = screen.queryByText("Close");
    expect(saveEdit).toBeInTheDocument();
    expect(closeModal).toBeInTheDocument();
});

test("save courses button", () => {
    render(<App />);
    const addButton = screen.getAllByText("Add Course");
    addButton[0].click();
    const savedCourse = screen.getAllByText("--");
    const saveButton = screen.getAllByText("Save Courses");
    saveButton[0].click();
    render(<App />);
    expect(savedCourse[0]).toBeInTheDocument();

});

