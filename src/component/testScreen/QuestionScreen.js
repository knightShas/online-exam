import { Component } from "react";
import classes from "./question.module.css";
import QuestionItem from "./QuestionItem";

class QuestionScreen extends Component{
    state = {
        allQuestion : [],
        isLoaded: false
    };
    async componentDidMount() {
        const testName = localStorage.getItem("Test");
            const response = await fetch("http://localhost:8081/test/question/"+testName);
            const body = await response.json();
            console.log(body);
            this.setState({ allQuestion: body, isLoaded:true });
            }
        // }
       render(){ 
        return(
            <>
                <div className={classes.mr}></div>
                {this.state.isLoaded?<QuestionItem data={this.state.allQuestion}/>:""}

            </>
        );
    }
}
export default QuestionScreen;