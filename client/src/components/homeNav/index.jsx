import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./homeNav.css";

function HomeNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar-expand-sm">
      <Container>
        <Navbar.Brand href="#home">Attendance App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              target="_blank"
              href="https://www.buymeacoffee.com/stevecalla"
            >
              <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a pizza&emoji=🍕&slug=stevecalla&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeNav;
