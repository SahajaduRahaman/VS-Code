import { useState } from "react"

const myStyle = {
    color: "red",
    backgroundColor: "aqua",
    padding: "10px",
    height: "30px",
    fontFamily: "Sans-Serif"
};
const btnStyle = {
    color: "white",
    backgroundColor: "green",
    border: "none",
    borderRadius: "5px",
    padding: "10px",
    width: "200px",
    fontFamily: "Sans-Serif",
    boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
};

export const ControlledInput = () => {
    const [inputValue, setValue] = useState("I am a programmer");

    const ChangeValue = () => {
        setValue("");
    }

    const SetValue = (event) => {
        setValue(event.target.value);
    }

    return (
        <>
            <h1 style={myStyle}>{inputValue}</h1>
            <input value={inputValue} onChange={SetValue}/>
            <br/>
            <br/>
            <button onClick={ChangeValue} style={btnStyle}>Change Value</button>
        </>
    )
}