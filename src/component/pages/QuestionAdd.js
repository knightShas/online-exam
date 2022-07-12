import { useRef } from 'react';
import axios from "axios";
import WebsiteNav from "../WebsiteNav";
import classes from "./company.module.css";

function QuestionAdd() {
    const tag = localStorage.getItem("TEST_TAG");
    const questionInputRef = useRef();
    const opt1InputRef = useRef();
    const opt2InputRef = useRef();
    const opt3InputRef = useRef();
    const opt4InputRef = useRef();
    const answerInputRef = useRef();

    async function submitHandler(event) {
        event.preventDefault();
        const baseURL = "https://spring-online-exam.herokuapp.com/test/question/newquestion";
        const enteredQuestion = questionInputRef.current.value;
        const enteredOption1 = opt1InputRef.current.value;
        const enteredOption2 = opt2InputRef.current.value;
        const enteredOption3 = opt3InputRef.current.value;
        const enteredOption4 = opt4InputRef.current.value;
        const enteredAnswer = answerInputRef.current.value;
        if (enteredAnswer === enteredOption1 || enteredAnswer === enteredOption2 || enteredAnswer === enteredOption3 || enteredAnswer === enteredOption4) {
            const option = {
                option1: enteredOption1,
                option2: enteredOption2,
                option3: enteredOption3,
                option4: enteredOption4
            }
            const data = {
                tag: tag,
                question: enteredQuestion,
                option:option,
                answer:enteredAnswer
            };
            axios({
                url: baseURL,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                data: data,
            })

                .then((response) => {
                    // console.log(response);
                    alert("Question added...");
                })
                .catch((error) => {
                    alert("Error");
                });

            questionInputRef.current.value = "";
            opt1InputRef.current.value = "";
            opt2InputRef.current.value = "";
            opt3InputRef.current.value = "";
            opt4InputRef.current.value = "";
            answerInputRef.current.value = "";

        }
        else {
            alert("Answer doesn't match with options");
        }

    }
    return (
        <>
            <WebsiteNav />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6">
                        <img src="https://img.freepik.com/free-vector/flat-people-asking-questions-illustration_23-2148910850.jpg?t=st=1656555911~exp=1656556511~hmac=dfd5b468e23f2f9ac3d10123a460ff70153869065ad5e6857be8bcf81c97c7a7&w=826" alt="candidate" className={classes.image} />
                    </div>
                    <div className="col-sm-6 mt-5">
                        <div className="container">
                            <form onSubmit={submitHandler}>
                                <div className="mb-3">
                                    <label htmlFor="Question" className="form-label">Question</label>
                                    <textarea className="form-control" id="Question" rows="3" ref={questionInputRef} />
                                </div>
                                <div className='row'>
                                    <div className="col-sm-6">
                                        <label htmlFor="option1" className="form-label">Option 1</label>
                                        <input type="text" className="form-control" id="option1" ref={opt1InputRef}/>
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="option2" className="form-label">Option 2</label>
                                        <input type="text" className="form-control" id="option2" ref={opt2InputRef}/>
                                    </div>
                                </div>
                                <div className='row my-4'> 
                                    <div className="col-sm-6">
                                        <label htmlFor="option3" className="form-label">Option 3</label>
                                        <input type="text" className="form-control" id="option3" ref={opt3InputRef}/>
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="option4" className="form-label">Option 4</label>
                                        <input type="text" className="form-control" id="option4" ref={opt4InputRef} />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Answer" className="form-label">Answer</label>
                                    <textarea className="form-control" id="Answer" rows="3" placeholder='Paste exact Answer written in option' ref={answerInputRef} />
                                </div>
                                <br />
                                <button className="btn btn-warning">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default QuestionAdd;