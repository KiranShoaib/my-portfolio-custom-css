interface typeOfProp{
    text: string
 }

function Button(props:typeOfProp){
    return(
        <button className="btn">{ props.text}</button>
    )
}

export default Button