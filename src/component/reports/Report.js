import { Component } from "react";
import WebsiteNav from "../WebsiteNav";
import ReportList from "./ReportList";

class Report extends Component{
    state = {
        allReport : [],
        isLoaded : false
    }
    async componentDidMount(){
        const loggedInFor = sessionStorage.getItem("loggedInFor");
        if(loggedInFor === "company"){
            const email = sessionStorage.getItem("CompanyEmail");
            const response = await fetch("https://spring-online-exam.herokuapp.com/api/company/report/"+email);
            const body = await response.json();
            console.log(body);
            this.setState({ allQuestion: body, isLoaded:true });
        }
        if(loggedInFor === "candidate"){
            const email = sessionStorage.getItem("CandidateEmail");
            const response = await fetch("https://spring-online-exam.herokuapp.com/api/candidate/report/"+email);
            const body = await response.json();
            console.log(body);
            this.setState({ allQuestion: body, isLoaded:true });
        }

    }
    render(){
        return(
            <>
            <WebsiteNav />
            {this.state.isLoaded?<ReportList data={this.state.allQuestion}/>:""}
            </>
        )
    }
}
export default Report
