import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
function TopNav() {
  return (
    <>
      <Navbar
        className="shadow-lg"
        expand="sm"
        bg="light"
        variant="light"
        fixed="top"
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Jacob Nesom</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/">
                <Nav.Link className="ps-3">About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/resume">
                <Nav.Link className="ps-3">Resume</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/work">
                <Nav.Link className="ps-3">Work</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default TopNav;
