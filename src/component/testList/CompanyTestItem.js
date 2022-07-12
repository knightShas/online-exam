import {  useRef } from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";

function CompanyTestItem(props) {
    const redir = useNavigate();
    let valid = props.valid;
    const tagRef = useRef();

    function handleClick(){
        const tag=tagRef.current.value;
        if(valid){
            valid = !valid;
        }
        else{
            valid = !valid;
        }
        // console.log("click",valid);
        const data = {
            tag: tag,
            valid: valid
        }
            const url="https://spring-online-exam.herokuapp.com/test/company_test";
            axios({
                url: url,
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                data: data,
            })
            .then((response) => {
                // console.log(response.data);
                window.location.reload();
            })
            .catch((error) => {
                alert("Error");
            });
    }
    function newHandle(){
        if(localStorage.getItem("TEST_TAG")!=null){
            localStorage.removeItem("TEST_TAG");
        }
        localStorage.setItem("TEST_TAG", tagRef.current.value);
        redir("/question");
        // console.log(tag);
    }
    return (
        <tr>
            <td>{props.tag}</td>
            <td>{props.subject}</td>
            <td>{props.type}</td>
            {/* <td>{props.question}</td>
            <td>{props.passmark}</td>
            <td>{props.time} min</td> */}
            <td>{valid ? (
                <><input type="hidden" value={props.tag} ref={tagRef} /><button className="btn btn-success mx-1" onClick={handleClick}>Disable</button></>
            ):(
                <><input type="hidden" value={props.tag} ref={tagRef} /><button className="btn btn-danger mx-1" onClick={handleClick}>Enable</button></>
            )
            }
            <input type="hidden" value={props.tag} ref={tagRef}/><button className="btn btn-primary mx-1" onClick={newHandle}>Add Question</button>
            </td>
        </tr>
    );
}
export default CompanyTestItem;