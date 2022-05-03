import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg} from 'reactstrap';
import { Link } from 'react-router-dom';
import restImage4 from "../images/Restaurant-Menu.jpg";

function ViewMenu(props) {

    return (
      <div className="container">
        <div className="row">
            <div className="col">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>View Menu</BreadcrumbItem>
                </Breadcrumb>
                <h2>Menu - Queen City Bytes</h2>
              <hr />
            </div>
        </div>
        <div className="row">  
          <div className="col-lg m-1">
            <Card>
              {/* <CardTitle className="text-center bg-dark " >
                <h2 className="bg-dark text-white">Queen City Bytes Menu</h2>
              </CardTitle> */}
              <CardImg src={restImage4} alt={"Menu"} />
            </Card>
          </div>
        </div>     
      </div>
    );
}

export default ViewMenu;