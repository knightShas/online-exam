import { Link } from "react-router-dom";
// import classNamees from './WebsiteNav.module.css';

function WebsiteNav() {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    let candiName = sessionStorage.getItem("CANDIDATE");
    let compName = sessionStorage.getItem("COMPANY");
    if (isLoggedIn && compName === null) {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">Online Exam</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item" id="com_link">
                                <Link className="nav-link" to="/Udashboard">Dashboard</Link>
                            </li>
                        </ul>
                        <ul class="navbar-nav ms-auto">
                            <li className="nav-item" id="com_link">
                                <b><Link className="nav-link" style={{ color: "green" }} to="#">{candiName}</Link></b>
                            </li>
                            <li className="nav-item">
                                <b><Link className="nav-link" style={{ color: "red" }} to="/logout">Logout</Link></b>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
    if (isLoggedIn && candiName === null) {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">Online Exam</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item" id="com_link">
                                <Link className="nav-link" to="/Cdashboard">Dashboard</Link>
                            </li>
                        </ul>
                        <ul class="navbar-nav ms-auto">
                            <li className="nav-item" id="com_link">
                                <b><Link className="nav-link" style={{ color: "green" }} to="#">{compName}</Link></b>
                            </li>
                            <li className="nav-item">
                                <b><Link className="nav-link" style={{ color: "red" }} to="/logout">Logout</Link></b>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
    else {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">Online Exam</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item" id="com_link">
                                <Link className="nav-link" to="/company">Company</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/candidate">Candidate</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
export default WebsiteNav;