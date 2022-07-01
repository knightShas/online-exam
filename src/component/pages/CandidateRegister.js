import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import WebsiteNav from "../WebsiteNav";
import classes from "./candidate.module.css";

function CandidateRegister() {
    const redir = useNavigate();
    const userInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const confirmInputRef = useRef();
    const phoneInputRef = useRef();

    async function submitHandler(event) {
        event.preventDefault();
        const baseURL = "http://localhost:8081/api/candidate/add";
        const enteredName = userInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const enteredPhone = phoneInputRef.current.value;
        if (passwordInputRef.current.value === confirmInputRef.current.value) {
            const data = {
                userName: enteredName,
                userEmail: enteredEmail,
                userPassword: enteredPassword,
                userPhone: enteredPhone
            };
            axios({
                url: baseURL,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                data: data,
            })
            // fetch(baseURL, {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify(data),
            // })

                .then((response) => {
                    console.log(response);
                    alert("Candidate added...");
                    redir("/candidate");
                })
                .catch((error) => {
                    alert("Error");
                });


            userInputRef.current.value = "";
            emailInputRef.current.value = "";
            passwordInputRef.current.value = "";
            confirmInputRef.current.value = "";
            phoneInputRef.current.value = "";
        }
        else {
            alert("Password not match");
            userInputRef.current.value = "";
            emailInputRef.current.value = "";
            passwordInputRef.current.value = "";
            confirmInputRef.current.value = "";
            phoneInputRef.current.value = "";
        }

    }
    return (
        <>
            <WebsiteNav />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6 mt-5">
                        <img src="https://img.freepik.com/free-vector/recruit-agent-analyzing-candidates_74855-4565.jpg?t=st=1656396406~exp=1656397006~hmac=8888ff858996f630d0070b0aba5730d596694179914b88a3061eee5a53206c8f&w=1380" alt="candidate" className={classes.image} />
                    </div>
                    <div className="col-sm-6 mt-5">
                        <div className="container">
                            <form onSubmit={submitHandler}>
                                <div className="mb-3">
                                    <label htmlFor="Username" className="form-label">Candiate Name</label>
                                    <input type="text" className="form-control" id="Username" ref={userInputRef} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="UserEmail" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="UserEmail" aria-describedby="emailHelp" ref={emailInputRef} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="Password" ref={passwordInputRef} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" id="confirmPassword" ref={confirmInputRef} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Phone" className="form-label">Phone No.</label>
                                    <input type="tel" className="form-control" id="Phone" ref={phoneInputRef} />
                                </div>
                                <button className="btn btn-warning">Submit</button>
                            </form>
                            <br />
                            <small><span>Already Have an Account <Link className={classes.link} to="/candidate">Login</Link></span></small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default CandidateRegister;