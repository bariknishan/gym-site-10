import { signOut } from 'firebase/auth';

import { Container, Nav, Navbar,  } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {

    const [user]=useAuthState(auth);
  
    const handleSignOut=()=>{   //// signout system
        signOut(auth)
    }


 ////////////////// header are/////////////////////////


    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" className='p-4' sticky='top' variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/" className='fs-3 fw-bold text-warning '    >FITNESS MANIA</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href=" #blogs" as={Link} to="blogs" className='fw-bold fs-6 ' >BLOGS</Nav.Link>
                        <Nav.Link href=" home#services" className='fw-bold fs-6 '  >SERVICES</Nav.Link>
                        <Nav.Link href=" home#trainers" className='fw-bold fs-6 '  >TRAINERS</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="about" className='fw-bold fs-6 '      >ABOUT ME</Nav.Link>
                        {
                            user && <>
                            <Nav.Link as={Link} to="addservice" className='fw-bold fs-6 '      >Add Service</Nav.Link>
                            <Nav.Link as={Link} to="manage" className='fw-bold fs-6 '      >Manage  Service</Nav.Link>
                            
                            </>
                        }
                        
                     {
                     
                     user ? 
                     <button  onClick={handleSignOut} className='btn btn-warning ms-4 fw-bold'>Sign Out</button>
                     :
                     <Nav.Link as={Link} to="login" className='fw-bold fs-6 ' > 
                            LOGIN
                        </Nav.Link>  
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;