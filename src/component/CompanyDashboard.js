import { Component } from "react";
import { Link } from "react-router-dom";
import CompanyTestList from "./testList/CompanyTestList";
import WebsiteNav from "./WebsiteNav";

class CompanyDashboard extends Component {
    state = {
        allTest: [],
    };
    async componentDidMount() {
        const response = await fetch("https://spring-online-exam.herokuapp.com/test/company/" + sessionStorage.getItem("CompanyEmail"));
        const body = await response.json();
        // console.log(body);
        this.setState({ allTest: body });
    }
    render() {
        const { allTest } = this.state;
        return (
            <>
                <WebsiteNav />
                <div className="container mt-2">
                    <ul class="nav justify-content-end">
                        <li class="nav-item">
                            <Link class="nav-link btn btn-lg btn-primary" style={{color:'white'}} to="/newtest">Add New Test</Link>
                        </li>
                    </ul>
                </div>
                <CompanyTestList tests={allTest} />
            </>
        );
    }
}
export default CompanyDashboard;