import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg} from 'reactstrap';
import { Link } from 'react-router-dom';
import restImage3 from "../images/Restaurant Location.jpg";

function Contact(props) {

    return (
      <div className="container">
        <div className="row">
          <div className="col">
              <Breadcrumb>
                  <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                  <BreadcrumbItem active>Location</BreadcrumbItem>
              </Breadcrumb>
              <h2>Location - Queen City Bytes</h2>
              <hr />
          </div>
        </div>
        <div className="row">  
          <div className="col-4 my-1 ml-3 queencolor">
            <br />
            <h5>123 Tremont RD</h5>
            <h5>Charlotte, NC 28203</h5>
            <br />
            <h2>Hours</h2>
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

      </div>
    );
}

export default Contact;