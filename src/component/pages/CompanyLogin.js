import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import axios from "axios";
import WebsiteNav from '../WebsiteNav';
import classes from "./company.module.css";

function CompanyLogin() {
    const redir = useNavigate();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    async function submitHandler(event) {
        event.preventDefault();
        const baseURL = "http://localhost:8081/api/company";
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const data = {
            compEmail: enteredEmail,
            compPassword: enteredPassword,
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
                // console.log(response.data['userEmail']);
                alert("Login Success");
                sessionStorage.setItem("CompanyEmail",response.data['compEmail']);
                sessionStorage.setItem("COMPANY", response.data['compName']);
                sessionStorage.setItem("loggedInFor","company");
                sessionStorage.setItem("isLoggedIn", true);
                redir("/");
            })
            .catch((error) => {
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
                    <div className="col-lg-6">
                        <img className={classes.image} src="https://img.freepik.com/free-vector/company-concept-illustration_114360-2581.jpg?t=st=1656395681~exp=1656396281~hmac=de60f528bccfefcfa0c08cd3abbc06f4caa48ba92ba1e2d33f14ffcecb35a1e9&w=826" alt="company" />
                    </div>
                    <div className="col-sm-6 my-5">
                        <div className="container my-5 p-5">
                            <form onSubmit={submitHandler}>
                                <div className="mb-3">
                                    <label htmlFor="CompanyEmail" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="CompanyEmail" aria-describedby="emailHelp" ref={emailInputRef} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="CompanyPassword" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="CompanyPassword" ref={passwordInputRef} />
                                </div>
                                <button className="btn btn-warning">Submit</button>
                            </form>
                            <br />
                            <small><span>Need Account <Link className={classes.link} to="/company_reg">Company</Link></span></small>
                            <br />
                            <small><span><a className={classes.link} href="forgot_comp.html">Forgot password</a></span></small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default CompanyLogin;
