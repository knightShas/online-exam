import WebsiteNav from "../WebsiteNav";

function CandidateReport() {
    const length = localStorage.getItem("Length_sa");
    const score = localStorage.getItem("Score");
    return (
        <>
            <WebsiteNav />
            <div className="container p-5">
                <h4>Thank you! Your test Complete</h4>
                <h1>You scored {score}/{length}</h1>
            </div>

        </>
    );
}
export default CandidateReport;