import './ButtonGrid.css';

const ButtonGrid = (props) => {
    console.log(props);

    const clickHandler = (click) => {
        console.log(click.target.innerText)
        props.onSubmit(click.target.innerText)
    }
    return ( 
    <div className="grid">
        <button onClick={clickHandler}>{props.option1}</button>
        <button onClick={clickHandler}>{props.option2}</button>
        <button onClick={clickHandler}>{props.option3}</button>
        <button onClick={clickHandler}>{props.option4}</button>    
    </div>)
}

export default ButtonGrid;