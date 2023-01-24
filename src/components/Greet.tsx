type greetType = {
    name: string
}

export const Greet = (props:greetType)=>{

    return(
        <>
        <div>
            <h1>Hello from {props.name}</h1>
        </div>
        </>
    )
}