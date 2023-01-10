import {useState} from 'react';
export const ParentChild = () => {
    return (
        <>
            <h1>Hello Parent</h1>
            <Child/>
        </>
    )
}

const Child = () => {
    const [count, setValue] = useState(0)

    const Increase = () => {
        setValue(count + 1);
    }

    const Decrease = () => {
        setValue(count - 1 > 0 ? count - 1 : 0);
    }

    return (
        <>
            <div>{count}</div>
            <button onClick={Increase}>Button</button>
            <button onClick={Decrease}>Button</button>
        </>
    )
}