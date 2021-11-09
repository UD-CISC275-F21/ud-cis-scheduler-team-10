import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

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



/*test("test inline editor", () => {
    render(<App />);
    const result = screen.getAllByText("CISC108");
    result[0].click();
    userEvent.type(result[0], "")
    expect("Hello World").toBeInTheDocument();
});*/

