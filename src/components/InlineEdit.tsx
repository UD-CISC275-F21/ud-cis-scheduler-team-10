// Source: https://dev.to/joelmturner/build-an-inline-edit-text-input-with-react-hooks-4nah
// Creates an inline text editing funcitonal component

import React, { useState, useEffect, useRef, RefObject } from "react";
import "./InlineEdit.css";


// Source: https://usehooks.com/useKeyPress/
// Creates a hook that can handle key presses
function useKeyPress(targetKey: string): boolean {
    // State for keeping track of whether key is pressed
    const [keyPressed, setKeyPressed] = useState(false);
    // If pressed key is our target key then set to true
    function downHandler({ key }: {key: string}): void {
        if (key === targetKey) {
            setKeyPressed(true);
        }
    }
    // If released key is our target key then set to false
    const upHandler = ({ key }: {key: string}): void => {
        if (key === targetKey) {
            setKeyPressed(false);
        }
    };
    // Add event listeners
    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", upHandler);
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener("keydown", downHandler);
            window.removeEventListener("keyup", upHandler);
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount
    return keyPressed;
}

// Source: https://usehooks-typescript.com/react-hook/use-on-click-outside
// Creates a hook that handles clicking outside of the editable text area
type AnyEvent = MouseEvent | TouchEvent

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    handler: (event: AnyEvent) => void,): void {
    useEffect(() => {
        const listener = (event: AnyEvent) => {
            const el = ref?.current;

            // Do nothing if clicking ref's element or descendent elements
            if (!el || el.contains(event.target as Node)) {
                return;
            }

            handler(event);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };

        // Reload only if ref or handler changes
    }, [ref, handler]);
}

// Source: https://dev.to/joelmturner/build-an-inline-edit-text-input-with-react-hooks-4nah
// Returns a functional component that allows text to be edited inline
function InlineEdit({text, onSetText}: {text: string, onSetText: (t: string) => void}): JSX.Element {
    const [isInputActive, setIsInputActive] = useState(false);
    const [inputValue, setInputValue] = useState(text);

    const wrapperRef = useRef(null);
    const textRef = useRef(null);
    const inputRef  = useRef<HTMLInputElement>(null);

    const enter = useKeyPress("Enter");
    const esc = useKeyPress("Escape");

    // check to see if the user clicked outside of this component
    useOnClickOutside(wrapperRef, () => {
        if (isInputActive) {
            onSetText(inputValue);
            setIsInputActive(false);
        }
    });

    // focus the cursor in the input field on edit start
    useEffect(() => {
        if (isInputActive) {
            inputRef?.current?.focus();
        }
    }, [isInputActive]);

    useEffect(() => {
        if (isInputActive) {
        // if Enter is pressed, save the text and case the editor
            if (enter) {
                onSetText(inputValue);
                setIsInputActive(false);
            }
            // if Escape is pressed, revert the text and close the editor
            if (esc) {
                setInputValue(text);
                setIsInputActive(false);
            }
        }
    }, [enter, esc]); // watch the Enter and Escape key presses

    return (
        <span className="inline-text" ref={wrapperRef}>
            <span
                ref={textRef}
                onClick={() => setIsInputActive(true)}
                className={`inline-text_copy inline-text_copy--${
                    !isInputActive ? "active" : "hidden"
                }`}
            >
                {text}
            </span>
            <input
                ref={inputRef}
                // set the width to the input length multiplied by the x height
                // it's not quite right but gets it close
                style={{ width: Math.ceil(inputValue.length * 0.9) + "ex" }}
                value={inputValue}
                onChange={e => {
                    setInputValue(e.target.value);
                }}
                className={`inline-text_input inline-text_input--${
                    isInputActive ? "active" : "hidden"
                }`}
            />
        </span>
    );
}

export default InlineEdit;