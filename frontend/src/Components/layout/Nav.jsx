
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"
import NavDropdown from 'react-bootstrap/NavDropdown';


function Menu(props) {
    return (

        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">GUITAR SHOP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">

                    <Nav.Link as={Link} to="/galeria">Galeria</Nav.Link>
                    <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
                    <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
                    <Nav.Link as={Link} to="/registro">Registro</Nav.Link>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Menu