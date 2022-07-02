import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function CandidateTestItem(props) {
    const redir = useNavigate();
    const tagRef = useRef(null);
    const timeRef = useRef(null);
    function handleClick() {
        if (localStorage.getItem("Test") != null) {
            localStorage.removeItem("Test");
            localStorage.removeItem("Time");
        }
        localStorage.setItem("Test", tagRef.current.value);
        localStorage.setItem("Time", timeRef.current.value);
        redir("/start");
    }

    return (
        <div className="col-lg-12 mt-3">
            <div className="card text-center">
                <div className="card-header">
                    <h3 className="card-title">{props.tag}</h3>
                </div>
                <div className="card-body">
                    <input type="hidden" id="tag" value={props.tag} ref={tagRef} />
                    <input type="hidden" id="time" value={props.time} ref={timeRef} />
                    <p className="card-text">Subject: {props.subject}</p>
                    {/* <p className="card-text">No of Questions: {props.noQuestion}</p> */}
                    {props.valid ? (
                        <button className="btn btn-primary" onClick={handleClick}>Select</button>
                    ) : (
                        <button className="btn btn-danger disabled">Expired</button>
                    )}
                </div>
            </div>
        </div>
    );
}
export default CandidateTestItem;