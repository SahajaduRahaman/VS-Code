import { useState } from "react";

export const ArrayAsState = () => {
    const [element, setElement] = useState([1, 2, 3, 4, 5]);

    const addNumber = () => {
        if (element.length == 0) {
            const newElement = [1];
            setElement(newElement);
        }
        else {
            const lastElement = element[element.length - 1];
            const addElem = [...element, lastElement + 1];

            setElement(addElem);
        }
    }

    const delNumber = () => {
        if (element.length == 0) {
            setElement([]);
        }
        else {
            const newElement = [...element];
            newElement.pop();

            setElement(newElement);
        }
    }

    return (
        <>
            <ul>
                {element.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <button onClick={addNumber}>Add Number</button>
            <button onClick={delNumber}>Delete Number</button>
        </>
    )
}