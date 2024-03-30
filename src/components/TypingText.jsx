import React from "react";
import { ReactTyped } from "react-typed";

const TypingText = ({ text }) => {
    return (
        <div>
            <h1 className="text-textcolor-0">
                <ReactTyped
                    strings={[text]}
                    typeSpeed={100}
                    loop
                    backSpeed={20}
                    cursorChar="I"
                    showCursor={true}
                />
            </h1>
        </div>
    );
};

export default TypingText;