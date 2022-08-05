import WebsiteNav from "../WebsiteNav";
import axios from "axios";

function CandidateReport() {
    const length = localStorage.getItem("Length_sa");
    const score = localStorage.getItem("Score");
    if (length != null && score != null) {
        localStorage.setItem("page", "report");
    }
    const baseURL = "https://ec2-35-88-117-254.us-west-2.compute.amazonaws.com:8081/api/report";
    const data = {
        compEmail: localStorage.getItem("comp_email"),
        userEmail: sessionStorage.getItem("CandidateEmail"),
        tag: localStorage.getItem("Test"),
        score: score,
        total: length
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
        })
        .catch((error) => {
            alert("Error");
        });

    return (
        <>
            <WebsiteNav />
                <>
                    <div className="container p-5">
                        <h4>Thank you! Your test Complete</h4>
                        <h1>You scored {score}/{length}</h1>
                    </div>
                </>
        </>
    );
}
export default CandidateReport;