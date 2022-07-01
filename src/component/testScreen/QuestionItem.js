import classes from "./question.module.css";

function QuestionItem(props) {
    return (
        <>
            <div className={classes.border}>
                <div className="Col-lg-12">
                    <div className={classes.ques}>
                        <h5>{props.question}</h5>
                    </div>
                </div>
                <br />
                <div className="col-sm-6 m-4">                    
                    <div className="form-check my-3">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Default radio
                        </label>
                    </div>
                    <div className="form-check my-3">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Default radio
                        </label>
                    </div>
                    <div className="form-check my-3">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Default radio
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
}
export default QuestionItem;