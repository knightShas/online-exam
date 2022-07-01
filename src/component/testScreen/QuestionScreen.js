import { Component } from "react";
// import {useNavigate} from 'react-router-dom';
import Question from "./Question";
import classes from "./question.module.css";

class QuestionScreen extends Component{
    state = {
        allQuestion : [],
    };
    async componentDidMount() {
        // const redir = useNavigate();
        // const isLoggedIn = sessionStorage.getItem("isLoggedIn");
        // const candiName = sessionStorage.getItem("CANDIDATE");
        const testName = localStorage.getItem("Test");
        // if(isLoggedIn!=null || candiName!=null){
        //     redir("/");
        // }
        // else{
            const response = await fetch("http://localhost:8081/test/question/"+testName);
            const body = await response.json();
            // console.log(body);
            this.setState({ allQuestion: body });
            }
        // }
       render(){ 
        const { allQuestion } = this.state;
        return(
            <>
                <div className={classes.mr}></div>
                <Question question={allQuestion}/>
            </>
        );
    }
}
export default QuestionScreen;