import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


function QuestionItem(props) {
    const redir = useNavigate();
    const [index, setIndex] = useState(0);
    const length = props.data.length;
    const data = props.data;
    const [feedback, setfeedback] = useState();
    const chosenAnswerRef = useRef();
    const [score, setScore] = useState(0);

    function next() {
        const chosenAnswer = chosenAnswerRef.current.value;
        if (index >= length - 1) {
            redir("/candidate_report");
            
        }
        if (chosenAnswer === data[index].answer) {
            setScore(score + 1);
        }
        setIndex(index + 1);


    }
    function opt(i) {
        // console.log(i[option1]); 
        return (
            <>
                <div className="container py-5">
                    <div className="col-lg-10">
                        <div className="container-flex py-4">
                        <div className="col-sm-8 card-title">
                            <h3 className="ms-3" style={{textAling:"center"}}>{i.question}</h3>
                        </div>
                        </div>
                        <div className="col-sm-10 my-4">
                            <div className="card-body">
                                <select className="form-control" ref={chosenAnswerRef}>
                                    <option>Select any one</option>
                                    <option value={i.option.option1}>{i.option.option1}</option>
                                    <option value={i.option.option2}>{i.option.option2}</option>
                                    <option value={i.option.option3}>{i.option.option3}</option>
                                    <option value={i.option.option4}>{i.option.option4}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="container border border-3 rounded-1 py-5">
                {opt(data[index])}
                <div className="col-sm-3 me-auto d-grid gap-2">
                    <button type="button" className="btn btn-lg btn-success ms-4" onClick={next}>Next</button>
                </div>
                {feedback}
            </div>
        </>


    );
}
export default QuestionItem;