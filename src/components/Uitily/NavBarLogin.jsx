import React from 'react' ; 
import {Navbar,Container,FormControl,Nav} from 'react-bootstrap' ; 
import logo from '../../images/logo.png';
import cart from '../../images/cart.png';
import login from '../../images/login.png';
import { Link } from 'react-router-dom';

const NavBarr = () => {
  return (
    <div>
       <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
            <Container>
                <Navbar.Brand>
                    <Link to='/'>
                    <img src={logo} alt='Logo' className='logo' />
                    </Link>
                    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <FormControl
                        type="search"
                        placeholder="search..."
                        className="me-2 w-100 text-center"
                        aria-label="Search"
                    />
                    <Nav className="me-auto">
                        <Link to='/login'
                            className="nav-text d-flex mt-4 justify-content-center link-underline-dark">
                            <img src={login} className="login-img" alt="sfvs" />
                            <p style={{ color: "white" }} className='ms-1'>login</p>
                        </Link>
                        <Link to='/cart'
                            className="nav-text d-flex mt-4 ms-1 justify-content-center"
                            style={{ color: "white" }}>
                            <img src={cart} className="login-img" alt="sfvs" />
                            <p style={{ color: "white" }} className='ms-1'>cart</p>
                        </Link>
                    </Nav>  
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBarr ; 
