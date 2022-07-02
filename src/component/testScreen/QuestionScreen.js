import { Component } from "react";
// import {useNavigate} from 'react-router-dom';
import Question from "./Question";
import classes from "./question.module.css";
import QuestionItem from "./QuestionItem";

class QuestionScreen extends Component{
    state = {
        allQuestion : [],
        isLoaded: false
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
            console.log(body);
            this.setState({ allQuestion: body, isLoaded:true });
            }
        // }
       render(){ 
        const { allQuestion } = this.state;
        return(
            <>
                <div className={classes.mr}></div>
                {this.state.isLoaded?<QuestionItem data={this.state.allQuestion}/>:""}

            </>
        );
    }
}
export default QuestionScreen;