import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
function NavbarComponent() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Form className="form d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="search me-2"
                  aria-label="Search"
                />
              </Form>
              <Nav.Link href="#action1" className="Text-Top">
                Home
              </Nav.Link>
              <Nav.Link href="#action2" className="Text-Top">
                Courses
              </Nav.Link>
              <Nav.Link href="#action2" className="Text-Top">
                <ShoppingCartIcon />
              </Nav.Link>
              <Nav.Link href="#action2" className="Text-Top">
                <button className="button-Top">Login </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
