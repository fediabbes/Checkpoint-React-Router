import React from "react";
import { Navbar, Container, Nav, Form, FormControl, Button } from "react-bootstrap";
import Rating from "./Rating";
import Add from "./Add";
import { Link } from "react-router-dom";

function Navbarr(props) {

  const Toggle = () => {
    props.setLogin(!props.login)
  }

  return (
    <div>
      {props.login ? <>  <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" style={{fontFamily:"serif"}}>Movies By Fedy</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/' href="#home">Home</Nav.Link>
            <Nav.Link as={Link} to='/movies' href="#features" style={{marginRight:'88px'}} >Movies</Nav.Link>
            <Rating setRate={props.setRate} rate={props.rate}  >   </Rating>
            <Add moviedata={props.moviedata} setmoviedata={props.setmoviedata} />
          </Nav>

          <Form style={{ display: 'flex',heigth:'15px' }}>
            <FormControl
            
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => props.setSearch(e.target.value)} value={props.search}
            />
            <Button variant="outline-success" >Search</Button>
            <Nav.Link  href="#pricing" onClick={() => Toggle()} >LogOut </Nav.Link>

          </Form>
        </Container>
      </Navbar>
      </> : <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Movies By Fedy</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>

          <Form style={{ display: 'flex' }}>
            <Nav.Link href="#pricing" onClick={() => Toggle()} >Login</Nav.Link>
          </Form>
        </Container>
      </Navbar>}

    </div>
  );
}

export default Navbarr;
