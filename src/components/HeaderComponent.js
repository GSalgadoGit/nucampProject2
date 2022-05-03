import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, 
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isNav2Open: false,
      isModalOpen: false
    };

    this.toggleNav   = this.toggleNav.bind(this);
    this.toggleNav2   = this.toggleNav2.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleReservation = this.handleReservation.bind(this);
  }

  toggleNav() {
    this.setState({
        isNavOpen: !this.state.isNavOpen
    });
  }

  toggleNav2() {
    this.setState({
        isNav2Open: !this.state.isNav2Open
    });
  }

  toggleModal() {
    this.setState({
        isModalOpen: !this.state.isModalOpen
    });
  }

  handleReservation(event) {
    this.toggleModal();
    event.preventDefault();
  }

    render() {
        return (
            <React.Fragment>
              <Navbar sticky="top" color="dark" dark>
                <NavbarBrand href="/">Queen City Bytes</NavbarBrand>
                <NavbarToggler onClick={this.toggleNav2} />
                <Collapse isOpen={this.state.isNav2Open} navbar>
                            <Nav  navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>                            
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <i className="fa fa-info fa-lg" /> Our Story
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/viewmenu">
                                        <i className="fa fa-cutlery fa-lg" /> View Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/location">
                                        <i className="fa fa-map-marker fa-lg" /> Location
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <span className="navbar-text mr-auto">
                                <Button outline onClick={this.toggleModal}>
                                    <i className="fa fa-calendar fa-lg" /> Reservation
                                </Button>
                            </span>
                         </Collapse>                    
              </Navbar>

              <Navbar dark  expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/Queen logo2.jpg" height="30" width="30" alt="NuCamp Logo" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>                            
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <i className="fa fa-info fa-lg" /> Our Story
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/viewmenu">
                                        <i className="fa fa-cutlery fa-lg" /> View Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/location">
                                        <i className="fa fa-map-marker fa-lg" /> Location
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <span className="navbar-text mr-auto">
                                <Button outline onClick={this.toggleModal}>
                                    <i className="fa fa-calendar fa-lg" /> Reservation
                                </Button>
                            </span>
                         </Collapse>
                    </div>
                </Navbar>
                
                {/* Reservation Modal Form */}
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Reserve a Table</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleReservation}>
                            <FormGroup>
                                <Label htmlFor="rname">Reservation Name </Label>
                                <Input type="text" id="rname" name="rname" placeholder="Reservation name"
                                    innerRef={input => this.rname = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="numguest">Number of Guests </Label>
                                <Input type="select" id="numguest" name="numguest"
                                    innerRef={input => this.numguest = input} >
                                      <option value="">Select ..</option> 
                                      <option value="1">1</option> 
                                      <option value="2">2</option> 
                                      <option value="3">3</option> 
                                      <option value="4">4</option> 
                                      <option value="5">5</option> 
                                      <option value="6">6</option> 
                                </Input>      
                            </FormGroup>
                            <FormGroup >
                            <Label htmlFor="date">Date </Label>
                                <Input type="date" id="date" name="date" placeholder="mm/dd/yyyy"
                                    innerRef={input => this.date = input} />
                            </FormGroup>
                            <FormGroup tag="fieldset">
                              <p>Table Location</p>
                              <FormGroup check>
                                  <Label check>
                                      <Input type="radio" name="inside"
                                          innerRef={input => this.inside = input} />
                                      Inside
                                  </Label>
                              </FormGroup>
                              <FormGroup check>
                                  <Label check>
                                      <Input type="radio" name="outside"
                                          innerRef={input => this.outside = input} />
                                      Outside
                                  </Label>
                              </FormGroup>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Confirm</Button>
                        </Form>
                    
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;