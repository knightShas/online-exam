import { Component } from "react";
import CandidateTestList from "./testList/CandidateTestList";
import WebsiteNav from "./WebsiteNav";

class CandidateDashboard extends Component {
    state = {
        allTest: [],
    };
    async componentDidMount() {
    localStorage.clear();
    const response = await fetch("https://ec2-35-88-117-254.us-west-2.compute.amazonaws.com:8081/test/all");
    const body = await response.json();
    console.log(body);
    this.setState({ allTest: body });
    }
    render() {
        const { allTest } = this.state;
        return (
            <>
                <WebsiteNav />
                <CandidateTestList tests={allTest}/>
            </>
        );
    }
}
export default CandidateDashboard;