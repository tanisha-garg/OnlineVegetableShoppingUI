import { Link } from "react-router-dom";

function MainNavbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          Online Vegetable Shopping
        </Link>

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
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                <span>Home </span>
                <span className="sr-only">(current)</span>
              </Link>
            </li>

            {/* This link is for customer module */}

            {/* <li className="nav-item">

                            <Link to="/addcustomer" className="nav-link" >
                                <span>Add Customer</span>

                            </Link>
                        </li> */}

            {/* This link is for Vegetable Module  */}

            {/* <li className="nav-item">

                            <Link to="/all" className="nav-link" >
                                <span>Get All customers</span>
                            </Link>
                        </li> */}

            {/* This link is for Cart Module  */}

            {/* <li className="nav-item">

                            <Link to="/customerdetailsonrequest" className="nav-link" >
                                <span>Get customer details</span>
                            </Link>
                        </li> */}

            {/* This link is for Order Module  */}

            <li className="nav-item">
              <Link to="/orderhome" className="nav-link">
                <span>Order</span>
              </Link>
            </li>

              {/* This link is for Bill Module  */}

              <li className="nav-item">
              <Link to="/billhome" className="nav-link">
                <span>Billing Details</span>
              </Link>
            </li>

          

          </ul>
        </div>
      </nav>
    </div>
  );
}

export default MainNavbar;
