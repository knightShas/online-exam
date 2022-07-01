import React from "react";
import { useNavigate } from 'react-router-dom';
import WebsiteNav from "../WebsiteNav";

function TestInfo() {
    const redir = useNavigate();
    const testName = localStorage.getItem("Test");

    function handleClick(){
        redir("/test");
    }
    return (
        <>
            <WebsiteNav />
            <div className="container mt-5">
                <div className="col-lg-12">
                    <h1>WelCome to {testName}</h1>
                    <p>Click on Start button to Start Test</p>
                    <div className="col-lg-12 m-5 p-5">
                        <button className="btn btn-lg btn-primary" onClick={handleClick}>Start</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default TestInfo;