import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Nav className="container-fluid">
          <Nav.Item>
            <Navbar.Brand>Brandon Lee</Navbar.Brand>
          </Nav.Item>
          <Nav.Item className="ml-auto">
            <Nav.Link>About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Experience</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;
