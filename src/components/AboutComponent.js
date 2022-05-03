import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg} from 'reactstrap';
import { Link } from 'react-router-dom';
import restImage5 from "../images/Our Story.jpg";

function About(props) {

    return (
      <div className="container">
        <div className="row">
          <div className="col">
              <Breadcrumb>
                  <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                  <BreadcrumbItem active>Our Story</BreadcrumbItem>
              </Breadcrumb>
              <h2>Queen City Bytes</h2>
              <hr />
          </div>
        </div>
        <div className="row">  
          <div className="col-4 m-1">
            <br />
            <h2>Our Story</h2>
            <br />
            <h5>Queen City Bytes is a</h5>
            <h5>unique and high quality ..</h5>
          </div>   
          <div className="col-lg m-1">
            <Card>
               <CardImg src={restImage5} alt={"Location"} />
            </Card>
          </div>
        </div>

      </div>
    );
}

export default About;