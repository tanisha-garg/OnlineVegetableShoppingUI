import { BrowserRouter as Router, Link, Route} from "react-router-dom";

export default function CustomerHome(){
  return (
    <div>

        <div className="container mt-5 w-75" >
          <h2>Customer Module</h2>
          <div className="col-md-12 mt-4">
            <p className="h5">Links to various features available:</p>
            <ul className="list-group mt-4">
              <li className="list-group-item">
              <Link to="/addcustomer"> Click here </Link> &emsp;
              To Add New Customer : 
              </li>
              <li className="list-group-item">
              <Link to="/getcustomerdetailsonrequest"> Click here </Link> &emsp;
              To Get Customer Details On Request Using Customer Id :               
              </li>
              <li className="list-group-item">
              <Link to="/updatecustomerdetails"> Click here </Link> &emsp;
              To Update Details Of Existing Customer Using Customer Id :  
              </li>
              <li className="list-group-item">
              <Link to="/getcustomerbyloc"> Click here </Link> &emsp;
              To Get Customers List By location : 
              </li>
              
            </ul>
           
          </div>
        </div>
    </div>
  );
}