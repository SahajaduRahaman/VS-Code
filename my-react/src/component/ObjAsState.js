import { useState } from "react";

export const ObjAsState = () => {
    const [obj, setObj] = useState({name: "Raja", age: 30});

    const AddKeyValue = () => {
        const newObj = {...obj, address: "Dinhata"};
        setObj(newObj);
    }

    return (
        <>
            <h1>{JSON.stringify(obj)}</h1>
            <h1>{obj.name}</h1>
            <h1>{obj.address}</h1>
            <button onClick={AddKeyValue}>Add Value</button>
        </>
    )
}