import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbr() {
  return (
    <div>
 
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >
            <Link to='/' className='text-decoration-none text-light' >GramSevak</Link>
          </Navbar.Brand>
          <Nav className="me-auto gap-3">
            <Link to="/" className='text-decoration-none text-light'>Home</Link>
            <Link to="/about-us" className='text-decoration-none text-light'>About us</Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
 
    </>

    </div>
  );
}

export default Navbr