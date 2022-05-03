import React from 'react';
import { Card, CardImg, CardTitle, Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label } from 'reactstrap';
import restImage1 from "../images/madie-hamilton-m.jpg";
import restImage2 from "../images/Reservation.jpg";
import restImage3 from "../images/Restaurant Location.jpg";
import restImage4 from "../images/Restaurant-Menu.jpg";
import restImage5 from "../images/Our Story.jpg";


function Home(props) {
   
  // Modal open state
  const [modal, setModal] = React.useState(false);

  // Toggle for Modal
  const toggleModal = () => setModal(!modal);

  const handleReservation = () => {
    toggleModal();
  }

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg m-1 ml-2">
            <Card>
               <CardImg src={restImage1} alt={"Hamilton"} />
            </Card>
          </div>
        </div>  
        <div className="row"> 
          <div className="col-3 my-1 ml-4 queencolor">
                <br /> <br /> <br />
                <h2 > Reservation</h2>
                <Button size="lg"  onClick={toggleModal}>
                  Book Now
                </Button>
                {/* Reservation Modal Form */}
                <Modal isOpen={modal} toggle={toggleModal}>
                    <ModalHeader toggle={toggleModal}>Reserve a Table</ModalHeader>
                    <ModalBody>
                      <Form onSubmit={handleReservation}>
                            <FormGroup>
                                <Label htmlFor="rname">Reservation Name </Label>
                                <Input type="text" id="rname" name="rname" 
                                       placeholder="Reservation name"/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="numguest">Number of Guests </Label>
                                <Input type="select" id="numguest" name="numguest" >
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
                                <Input type="date" id="date" name="date" 
                                       placeholder="mm/dd/yyyy" />
                            </FormGroup>
                            <FormGroup tag="fieldset">
                              <p>Table Location</p>
                              <FormGroup check>
                                  <Label check>
                                      <Input type="radio" name="inside" />
                                      Inside
                                  </Label>
                              </FormGroup>
                              <FormGroup check>
                                  <Label check>
                                      <Input type="radio" name="outside" />
                                      Outside
                                  </Label>
                              </FormGroup>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Confirm</Button>
                      </Form>
                   </ModalBody>
                </Modal>
              
          </div>   
          <div className="col-lg my-1 mr-1 pl-1">
            <Card>
               <CardImg src={restImage2} alt={"Reservation"} />
            </Card>
          </div>
        </div>  
       {/* Menu */}
        <div className="row">  
          <div className="col-lg m-1 ml-2">
            <Card>
              <CardTitle className="text-center bg-dark " >
                <h2 className="bg-dark text-white">Queen City Bytes Menu</h2>
              </CardTitle>
              <CardImg src={restImage4} alt={"Menu"} />
            </Card>
          </div>
        </div>
        {/* Location - Contact      */}
        <div className="row">  
          <div className="col-4 my-1 ml-4 queencolor">
            <br />
            <h2>Location & Hours</h2>
            <h5>123 Tremont RD</h5>
            <h5>Charlotte, NC 28203</h5>
            <br />
            <h5><b>Monday - Thursday </b>   4pm - 10pm</h5>
            <h5><b>Friday/Saturday </b>     4pm - 11pm</h5>
            <h5><b>Sunday</b> Closed</h5>
            <br />
            <h5><b>Tel:</b> 704-123-5555</h5>
            <h5><b>Email:</b> bokingnow@fast.com</h5>
          </div>   
          <div className="col-lg my-1 pl-1">
            <Card>
               <CardImg src={restImage3} alt={"Location"} />
            </Card>
          </div>
       </div>
       <div className="row">  
          <div className="col-4 my-1 ml-4 queencolor">
            <br />
            <h2>Our Story</h2>
            <br />
            <h5>Queen City Bytes is a</h5>
            <h5>unique and high quality ..</h5>
            
          </div>   
          <div className="col-lg my-1 pl-1">
            <Card>
               <CardImg src={restImage5} alt={"Location"} />
            </Card>
          </div>
       </div>
  </div>
);
}

export default Home;   