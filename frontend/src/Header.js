import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import "./Header.css"

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className='asd'>
                <Navbar.Brand href="#home"><Link className='router' to="/">Vjti Hostel</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link  ><Link className='router' to="/Admission_Process">Admission Process</Link></Nav.Link>
                        <Nav.Link  ><Link className='router' to="/Hostel">Hostel</Link></Nav.Link>
                        <Nav.Link  ><Link className='router' to="/Mess">Mess</Link></Nav.Link>
                        <NavDropdown title="Facilities" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Complaint Box</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Scholarship's
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Guest Room</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Map
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link ><Link className='router' to="/Sign">Sign IN</Link></Nav.Link>
                        <Nav.Link eventKey={2} >
                            <Link className='router' to="/Log">Log IN</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;