function Option(props) {
        return (
            <div className="card">
                <h3 className="card-title">{props.i.question}</h3>
            <div className="card-body">
                <input type="radio" value={props.i.option.option1} name="option1" /><label htmlFor="option1">{props.i.option.option1}</label>
                <input type="radio" value={props.i.option.option2} name="option2" /><label htmlFor="option2">{props.i.option.option2}</label>
                <input type="radio" value={props.i.option.option3} name="option3" /><label htmlFor="option3">{props.i.option.option3}</label>
                <input type="radio" value={props.i.option.option4} name="option4" /><label htmlFor="option4">{props.i.option.option4}</label>
            </div>
            </div>
        )
    }
export default Option;