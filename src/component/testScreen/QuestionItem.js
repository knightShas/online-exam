import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


function QuestionItem(props) {
    const redir = useNavigate();
    const [index, setIndex] = useState(0);
    const length = props.data.length;
    const data = props.data;
    const [chooseOption, setChooseOption] = useState();
    const chosenAnswerRef = useRef();
    const [score, setScore] = useState(0);

    function handleChange(e){
        let selectOption = e.target.value;
        setChooseOption(selectOption);
        clearOption(e);
        console.log(e);
    }

    function clearOption(e){
        e.target.checked = false;
    }

    function next() {
        // let chosenAnswer = chosenAnswerRef.current.value;
        if (index === length - 1) {

            localStorage.setItem("Length_sa", length);
            localStorage.setItem("Score", score);
            redir("/candidate_report");

        }
        if (chooseOption === data[index].answer) {
            setScore(score + 1);
        }
        setIndex(index + 1);
        // setChooseOption("");
        // chosenAnswerRef.current.value = "Select any one";

    }
    function opt(i) {
        // console.log(i[option1]); 
        return (
            <>
                <div className="container py-5">
                    <div className="col-lg-10">
                        <div className="container-flex py-4">
                            <div className="col-sm-8 card-title">
                                <h3 className="ms-3" style={{ textAling: "center" }}>{i.question}</h3>
                            </div>
                        </div>
                        <div className="col-sm-10 my-4">
                            <div className="card-body">
                                {/* <select className="form-control" ref={chosenAnswerRef}>
                                    <option value="Select any one">Select any one</option>
                                    <option value={i.option.option1}>{i.option.option1}</option>
                                    <option value={i.option.option2}>{i.option.option2}</option>
                                    <option value={i.option.option3}>{i.option.option3}</option>
                                    <option value={i.option.option4}>{i.option.option4}</option>
                                </select> */}
                                <div className="container">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="option" onChange={handleChange} value={i.option.option1} />
                                            <label className="form-check-label" htmlFor="option">
                                                {i.option.option1}
                                            </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="option" onChange={handleChange} value={i.option.option2} />
                                            <label className="form-check-label" htmlFor="option">
                                                {i.option.option2}
                                            </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="option" onChange={handleChange} value={i.option.option3} />
                                            <label className="form-check-label" htmlFor="option">
                                                {i.option.option3}
                                            </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="option" onChange={handleChange} value={i.option.option4} />
                                            <label className="form-check-label" htmlFor="option">
                                                {i.option.option4}
                                            </label>
                                    </div>
                                </div>
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
            </div>
        </>


    );
}
export default QuestionItem;