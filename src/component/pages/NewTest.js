import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import WebsiteNav from "../WebsiteNav";
import classes from "./company.module.css";

function NewTest() {
    const redir = useNavigate();
    const email = sessionStorage.getItem("CompanyEmail")
    const tagInputRef = useRef();
    const subjectInputRef = useRef();
    const timeInputRef = useRef();
    const questInputRef = useRef();

    async function submitHandler(event) {
        event.preventDefault();
        const baseURL = "http://localhost:8081/test/add";
        const enteredTag = tagInputRef.current.value;
        const enteredSubject = subjectInputRef.current.value;
        const enteredTime = timeInputRef.current.value;
        const enteredQuestion = questInputRef.current.value;
        const data = {
            compEmail: email,
            type:"public",
            tag: enteredTag,
            subject: enteredSubject,
            allotTime: enteredTime,
            noQuestion: enteredQuestion,
            valid:false
        }
        axios({
            url: baseURL,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        })

            .then((response) => {
                console.log(response);
                alert("Test added...");
                redir("/Cdashboard");
            })
            .catch((error) => {
                alert("Error");
            });

    }
    return (
        <>
            <WebsiteNav />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6">
                        <img src="https://img.freepik.com/free-vector/exams-concept-illustration_114360-2173.jpg?t=st=1656644145~exp=1656644745~hmac=17a2f6874c5a532c78a06d2a86932018d5ea4c9db9b4c2dd77344d685894a445&w=826" alt="candidate" className={classes.image} />
                    </div>
                    <div className="col-sm-6 mt-5">
                        <div className="container">
                            <form onSubmit={submitHandler}>
                                <div className="mb-3">
                                    <label htmlFor="Tag" className="form-label">Test Name</label>
                                    <input type="text" className="form-control" id="Tag" ref={tagInputRef} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Subject" className="form-label">Subject</label>
                                    <input type="text" className="form-control" id="Subject" ref={subjectInputRef} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="allotTime" className="form-label">Time to Allot</label>
                                    <input type="number" className="form-control" id="allotTime" ref={timeInputRef} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="noQuestion" className="form-label">No. of Question</label>
                                    <input type="number" className="form-control" id="noQuestion" ref={questInputRef} />
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
export default NewTest;