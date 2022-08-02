import { Link, useNavigate} from 'react-router-dom';
import { useRef } from 'react';
import axios from "axios";
import WebsiteNav from "../WebsiteNav";
import classes from "./candidate.module.css";

function CandidateLogin() {
    const redir = useNavigate();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    async function submitHandler(event) {
        event.preventDefault();
        const baseURL = "https://ec2-18-237-25-215.us-west-2.compute.amazonaws.com:80/api/candidate";
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const data = {
            userEmail: enteredEmail,
            userPassword: enteredPassword,
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
                // console.log(response.data['userEmail']);
                alert("Login Success");
                sessionStorage.setItem("CandidateEmail",response.data['userEmail']);
                sessionStorage.setItem("CANDIDATE", response.data['userName']);
                sessionStorage.setItem("loggedInFor", "candidate");
                sessionStorage.setItem("isLoggedIn", true);
                redir("/");
            })
            .catch((error) => {
                // console.log();
                alert(error.response.data);
            });

        emailInputRef.current.value = "";
        passwordInputRef.current.value = "";
    }
    return (
        <>
            <WebsiteNav />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6 my-5">
                        <img src="https://img.freepik.com/free-vector/recruit-agent-analyzing-candidates_74855-4565.jpg?t=st=1656396406~exp=1656397006~hmac=8888ff858996f630d0070b0aba5730d596694179914b88a3061eee5a53206c8f&w=1380" alt="candidate" className={classes.image} />
                    </div>
                    <div className="col-sm-6 my-5">
                        <div className="container my-5 p-5">
                            <form onSubmit={submitHandler}>
                                <div className="mb-3">
                                    <label htmlFor="userEmail" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="userEmail" aria-describedby="emailHelp" ref={emailInputRef} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="userPassword" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="userPassword" ref={passwordInputRef} />
                                </div>
                                <button className="btn btn-warning">Submit</button>
                                <br />
                                <small><span>Need Account <Link className={classes.link} to="/candidate_reg">Candidate</Link></span></small>
                                <br />
                                <small><span><Link className={classes.link} to="/">Forgot password</Link></span></small>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default CandidateLogin;