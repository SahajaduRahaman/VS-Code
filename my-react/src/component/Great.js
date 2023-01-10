export const Great = (toto) => {
    return (
        <div>
            <h1>
                Hello {toto.name}
            </h1>
            {toto.children}
        </div>
    )
}