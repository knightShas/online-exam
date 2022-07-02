import { useEffect, useRef, useState } from "react";
import classes from "./question.module.css";

function QuestionItem(props) {
    const [index, setIndex] = useState(0);
    const length = props.data.length;
    const data = props.data;
    const [feedback, setfeedback] = useState();
    const chosenAnswerRef = useRef();
    const [score, setScore] = useState(0);
    
    function next(){
        const chosenAnswer = chosenAnswerRef.current.value;
        if(index >= length-1){
            return setfeedback("Thank you for attending the test! you scored"+score+"/"+length)
        }
        if(chosenAnswer === data[index].answer){
            setScore(score+1);
        }
        setIndex(index+1);


    }
    function opt(i) {
        // console.log(i[option1]); 
        return (
            <div className="card">
                <h3 className="card-title">{i.question}</h3>
            <div className="card-body">
                <select  className="form-control" ref={chosenAnswerRef}>
                    <option  value={i.option.option1}>{i.option.option1}</option>
                    <option  value={i.option.option2}>{i.option.option2}</option>
                    <option  value={i.option.option3}>{i.option.option3}</option>
                    <option  value={i.option.option4}>{i.option.option4}</option>
                </select>
            </div>
            </div>
        )
    }
    return (
        <>
            <div className="col">
                {opt(data[index])}
                <button type="button" onClick={next}>Next</button>
                {feedback}
            </div>
       <br /></>

        
    );
}
export default QuestionItem;