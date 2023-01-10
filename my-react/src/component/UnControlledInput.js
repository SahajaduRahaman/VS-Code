export const UnControlledInput = () => {

    const ChangeValue = () => {
        document.getElementById("input").value = "";
        document.getElementById("dum").innerHTML = "";
    }

    const PrintValue = () => {
        const val = document.getElementById("input").value;
        document.getElementById("dum").innerHTML = val;
    }

    return (
        <>
            <h1 id="dum">Hello</h1>
            <input id="input"/>
            <br/>
            <br/>
            <button onClick={ChangeValue}>Change Value</button>
            <button onClick={PrintValue}>Print Value</button>
        </>
    )
}