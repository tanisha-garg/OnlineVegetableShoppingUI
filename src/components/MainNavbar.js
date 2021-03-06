import { Link } from "react-router-dom";

function MainNavbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand display-4">
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
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <span>Home </span>
                <span className="sr-only">(current)</span>
              </Link>
            </li>

            {/* This link is for customer module */}

            <li className="nav-item">
              <Link to="/customer" className="nav-link">
                <span>Customer</span>
              </Link>
            </li>

            {/* This link is for Vegetable Module  */}

            <li className="nav-item">
              <Link to="/vegetable" className="nav-link">
                <span>Vegetable</span>
              </Link>
            </li>

            {/* This link is for Cart Module  */}

            <li className="nav-item">

                            <Link to="/cart" className="nav-link" >
                                <span>Cart</span>
                            </Link>
                        </li>

            {/* This link is for Order Module  */}

            <li className="nav-item">
              <Link to="/order" className="nav-link">
                <span>Order</span>
              </Link>
            </li>

            {/* This link is for Bill Module  */}

            <li className="nav-item">
              <Link to="/bill" className="nav-link">
                <span>Billing Details</span>
              </Link>
            </li>

            {/* This link is for Feedback Module  */}

            <li className="nav-item">
              <Link to="/feedback" className="nav-link">
                <span>Feedback</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default MainNavbar;
