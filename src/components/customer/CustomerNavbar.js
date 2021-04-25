import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default function CustomerNavbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <b>
          <em style={{ textAlign: "centre" }}> Customer Module</em>
        </b>
        
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/addcustomer" className="nav-link">
                Add Customer
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/viewcustomer" className="nav-link">
                View Customer
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/updatecustomerdetails" className="nav-link">
                Update customer Details
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/getcustomerdetailsonrequest" className="nav-link">
                Get Customer Details On Request
              </Link>
              <li className="nav-item">
                <Link to="/getcustomerbyloc" className="nav-link">
                  Get Customers By location
                </Link>
              </li>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
