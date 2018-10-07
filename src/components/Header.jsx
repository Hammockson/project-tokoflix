import React from 'react';
import logo from '../assets/img/logo.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
 } from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {

    super(props);

    
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="fixed-top">
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/"><img src={logo} alt="logo" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <p>John Doe</p>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}