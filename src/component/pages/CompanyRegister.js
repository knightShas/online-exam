import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import axios from "axios";
import WebsiteNav from "../WebsiteNav";
import classes from "./company.module.css";

function CompanyRegister() {
    const redir = useNavigate();
    const userInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const confirmInputRef = useRef();
    const phoneInputRef = useRef();

    async function submitHandler(event) {
        event.preventDefault();
        const baseURL = "http://localhost:8081/api/company/add";
        const enteredName = userInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const enteredPhone = phoneInputRef.current.value;
        if (passwordInputRef.current.value === confirmInputRef.current.value) {
            const data = {
                compName: enteredName,
                compEmail: enteredEmail,
                compPassword: enteredPassword,
                compPhone: enteredPhone
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
                    alert("Company added...");
                    redir("/company");
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
                    <div className="col-lg-6">
                        <img src="https://img.freepik.com/free-vector/company-concept-illustration_114360-2581.jpg?t=st=1656395681~exp=1656396281~hmac=de60f528bccfefcfa0c08cd3abbc06f4caa48ba92ba1e2d33f14ffcecb35a1e9&w=826" alt="candidate" class={classes.image} />
                    </div>
                    <div className="col-sm-6 my-5">
                        <div className="container">
                            <form onSubmit={submitHandler}>
                                <div className="mb-3">
                                    <label htmlFor="Username" className="form-label">Company Name</label>
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
                                    <label for="Phone" className="form-label">Phone No.</label>
                                    <input type="tel" className="form-control" id="Phone" ref={phoneInputRef} />
                                </div>
                                <button className="btn btn-warning">Submit</button>
                            </form>
                                <br />
                                <small><span>Already Have an Account <Link className={classes.link} to="/company">Login</Link></span></small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default CompanyRegister;