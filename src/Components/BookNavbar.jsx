// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import { Link } from 'react-router-dom'

// function Navbar() {
//     return (
//         <>

//             <Navbar bg="dark" data-bs-theme="dark">
//                 <Container>
//                     <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
//                     <Nav className="me-auto">
//                         <Nav.Link as={Link} to="/">Home</Nav.Link>
//                         <Nav.Link as={Link} to="/books">Books</Nav.Link>
//                     </Nav>
//                 </Container>
//             </Navbar>

//         </>
//     );
// };

// export default Navbar;
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import BootstrapNavbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function BookNavbar() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Book Explorer
                </Navbar.Brand>

                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">
                        Home
                    </Nav.Link>

                    <Nav.Link as={Link} to="/books">
                        Books
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default BookNavbar;