import React from 'react';
import { Container, Nav, Navbar,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" className='p-4' sticky='top' variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/" className='fs-3 fw-bold text-warning '    >FITNESS MANIA</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href=" #blogs" as={Link} to="blogs" className='fw-bold fs-6 ' >BLOGS</Nav.Link>
                        <Nav.Link href=" home#services" className='fw-bold fs-6 '  >CHECKOUT</Nav.Link>
                        <Nav.Link href=" home#trainers" className='fw-bold fs-6 '  >TRAINERS</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="about" className='fw-bold fs-6 '      >ABOUT ME</Nav.Link>
                        <Nav.Link as={Link} to="login" className='fw-bold fs-6 '       >
                            LOGIN
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;