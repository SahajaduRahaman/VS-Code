export const Dimag = (props) => {
    const { name, age } = props;

    return (
        <h1>
            My name is {name} and age is {age}
        </h1>
    );
};

export const Practice = () => {
    return (
        <>
            <h1>My name is name and age is age</h1>
            <Dimag name="Raja" age="30"/>
        </>
    );
};