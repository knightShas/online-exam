import CandidateTestItem from "./CandidateTestItems";


function CandidateTestList(props) {
    // console.log(props);
    return (
        <>
            <div className="container my-5">
                {props.tests.map((test) => (
                    <CandidateTestItem 
                    key = {test.id}
                    time = {test.allotTime}
                    tag = {test.tag}
                    email = {test.compEmail}
                    noQuestion = {test.noQuestion}
                    subject = {test.subject}
                    valid={test.valid}
                    /> 
                ))}
            </div>
        </>
    );
}
export default CandidateTestList;