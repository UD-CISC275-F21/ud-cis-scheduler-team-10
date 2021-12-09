import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("renders UD CIS Scheduler text", () => {
    render(<App />);
    const linkElement = screen.getAllByText(/UD CIS Scheduler/i);
    expect(linkElement[0]).toBeInTheDocument();
});

test("renders Course List text", () => {
    render(<App />);
    const linkElement = screen.getAllByText(/Course List/i);
    expect(linkElement[0]).toBeInTheDocument();
});

test("renders help button", () => {
    render(<App />);
    const linkElement = screen.getByText(/Need Help?/i);
    expect(linkElement).toBeInTheDocument();
});

test("renders requirements button", () => {
    render(<App />);
    const linkElement = screen.getAllByText(/Degree Requirements/i);
    expect(linkElement[0]).toBeInTheDocument();
});

test("renders Semester tabs", () => {
    render(<App />);
    const linkElement1 = screen.getByText(/Fall 2022/i);
    const linkElement2 = screen.getByText(/Spring 2023/i);
    const linkElement3 = screen.getByText(/Fall 2023/i);
    const linkElement4 = screen.getByText(/Spring 2024/i);
    const linkElement5 = screen.getByText(/Fall 2024/i);
    const linkElement6 = screen.getByText(/Spring 2025/i);
    const linkElement7 = screen.getByText(/Fall 2025/i);
    const linkElement8 = screen.getByText(/Spring 2026/i);
    expect(linkElement1).toBeInTheDocument();
    expect(linkElement2).toBeInTheDocument();
    expect(linkElement3).toBeInTheDocument();
    expect(linkElement4).toBeInTheDocument();
    expect(linkElement5).toBeInTheDocument();
    expect(linkElement6).toBeInTheDocument();
    expect(linkElement7).toBeInTheDocument();
    expect(linkElement8).toBeInTheDocument();
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
    const linkElement5 = screen.getAllByText(/Prerequisites/i);
    expect(linkElement1[0]).toBeInTheDocument();
    expect(linkElement2[0]).toBeInTheDocument();
    expect(linkElement3[0]).toBeInTheDocument();
    expect(linkElement4[0]).toBeInTheDocument();
    expect(linkElement5[0]).toBeInTheDocument();
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
    const addButton = screen.getAllByText("+Add Semester+");
    addButton[0].click();
    const element1 = screen.getAllByTestId("modal_add_semester_textbox");
    expect(element1[0].textContent).toEqual("Set Title");
    userEvent.type(element1[0], "{selectall}{backspace}Fall 2022");

    const button2 = screen.getAllByTestId("save-Semester-button");
    button2[0].click();

    const newSemesterTitle = screen.getAllByText("Fall 2022");
    expect(newSemesterTitle[0]).toBeInTheDocument();
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
    const oldSemester = screen.queryByText("fall 2022");
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
    const oldSemester1 = screen.queryByText("fall 2022");
    const oldSemester2 = screen.queryByText("spring 2023");
    const oldSemester3 = screen.queryByText("fall 2023");
    const oldSemester4 = screen.queryByText("spring 2024");
    const oldSemester5 = screen.queryByText("fall 2024");
    const oldSemester6 = screen.queryByText("spring 2025");
    const oldSemester7 = screen.queryByText("fall 2025");
    const oldSemester8 = screen.queryByText("spring 2026");
    const removeAllSemestersButton = screen.getAllByText("-Remove all Semesters-");
    removeAllSemestersButton[0].click();
    expect(oldSemester1).toBeNull();
    expect(oldSemester2).toBeNull();
    expect(oldSemester3).toBeNull();
    expect(oldSemester4).toBeNull();
    expect(oldSemester5).toBeNull();
    expect(oldSemester6).toBeNull();
    expect(oldSemester7).toBeNull();
    expect(oldSemester8).toBeNull();
});

test("help modal window", () => {
    render(<App />);
    const helpModalButton = screen.getAllByText("Need help?");
    helpModalButton[0].click();
    const helpText = screen.queryByText("About UD CIS Scheduler");
    expect(helpText).toBeInTheDocument();
});

test("requirements modal window", () => {
    render(<App />);
    const requirementsModalButton = screen.getAllByText("Degree Requirements");
    requirementsModalButton[0].click();
    const requirementsText = screen.queryByText("Courses Needed To Graduate");
    expect(requirementsText).toBeInTheDocument();
});


test("edit course modal", () => {
    render(<App />);
    const editModalButton = screen.getAllByText("Edit Course");
    editModalButton[0].click();
    const saveEdit = screen.queryByText("Save changes");
    const closeModal = screen.queryAllByText("Close");
    expect(saveEdit).toBeInTheDocument();
    expect(closeModal[0]).toBeInTheDocument();
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

test("edit the course by clicking the edit button", () => {
    render(<App />);
    const button = screen.getAllByText("Edit Course");
    button[1].click();
    const element1 = screen.getAllByTestId("modal_course_number_textbox");
    expect(element1[0].textContent).toEqual("CISC181");
    userEvent.type(element1[0], "{selectall}{backspace}Hello");

    const element2 = screen.getAllByTestId("modal_course_credits_textbox");
    expect(element2[0].textContent).toEqual("3");
    userEvent.type(element2[0], "{selectall}{backspace}World");

    const element3 = screen.getAllByTestId("modal_course_name_textbox");
    expect(element3[0].textContent).toEqual("Introduction to Computer Science II");
    userEvent.type(element3[0], "{selectall}{backspace}Nice");

    const element4 = screen.getAllByTestId("modal_course_description_textbox");
    expect(element4[0].textContent).toEqual(`Principles of computer science illustrated and applied through programming in an object
oriented language. Programming projects illustrate computational problems, styles and issues
that arise in computer systems development and in all application areas of computation`);
    userEvent.type(element4[0], "{selectall}{backspace}Day");

    const button2 = screen.getAllByTestId("save-changes-button");
    button2[0].click();

    const newNumber = screen.getAllByText("Hello");
    const newCredit = screen.getAllByText("World");
    const newName = screen.getAllByText("Nice");
    const newDescription = screen.getAllByText("Day");
    expect(newNumber[0]).toBeInTheDocument();
    expect(newCredit[0]).toBeInTheDocument();
    expect(newName[0]).toBeInTheDocument();
    expect(newDescription[0]).toBeInTheDocument();
});

test("add semester modal", () => {
    render(<App />);
    const button = screen.getByTestId("welcome_modal_close_button");
    button.click();
    const addModalButton = screen.getAllByText("+Add Semester+");
    addModalButton[0].click();
    const saveEdit = screen.queryByText("Save changes");
    const closeModal = screen.queryAllByText("Close");
    expect(saveEdit).toBeInTheDocument();
    expect(closeModal[0]).toBeInTheDocument();
});

test("Render add course modal", () => {
    render(<App />);
    const addCourseButton = screen.getAllByTestId("add_course_button_CL");
    addCourseButton[0].click();
    const modalText = screen.getAllByText("Choose which semester you would like to add the course to:");
    expect(modalText[0]).toBeInTheDocument();
});