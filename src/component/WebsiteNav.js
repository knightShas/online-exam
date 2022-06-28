import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import classes from './WebsiteNav.module.css';

function WebsiteNav() {
    return (
        <Navbar expand="lg" className={classes.nav}>
            <Container className='py-3'>
                <Navbar.Brand href="#home">Online-Exam</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">Company</Nav.Link>
                        <Nav.Link href="#">Candidate</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default WebsiteNav;