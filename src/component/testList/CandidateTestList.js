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
                    noQuestion = {test.noQuestion}
                    subject = {test.subject}
                    /> 
                ))}
            </div>
        </>
    );
}
export default CandidateTestList;