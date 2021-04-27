import OrderNavbar from "./OrderNavbar";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import GetOrderDetails from "./GetOrderDetails";
import GetOrderDetailsByCustomerId from "./GetOrderDetailsByCustomerId";
import GetOrderDetailsOfCustomerOnRequest from "./GetOrderDetailsOfCustomerOnRequest";
import GetOrderDetailsByDateOnRequest from "./GetOrderDetailsByDateOnRequest";
import GetOrderDetailsByDate from "./GetOrderDetailsByDate";

function OrderHome() {
  return (
    <div>

      <div className="container mt-5 w-75">
        <h2>Order Module</h2>
        <div className="col-md-12 mt-4">
          <p className="h5">Links to different features:</p>
          <ul className="list-group mt-4">
            <li className="list-group-item">              
            <Link to="/orderhome/orderdetails/:id">Click here</Link> &emsp;
              To get order details by giving order id in the url: 
            </li>
            <li className="list-group-item">
            <Link to="/orderhome/ordersofcustomer/:id">
                {" "}
                Click here{" "}
              </Link> &emsp;
              To get order list of a customer by passing customer id in the url:
              
             
            </li>
            <li className="list-group-item">
            <Link to="/orderhome/ordersofcustomeronrequest">
                {" "}
                Click here 
              </Link>  &emsp;
              To get order list of a customer on request:
            
            </li>
            <li className="list-group-item">
            <Link to="/orderhome/ordersbydate/:date">
                {" "}
                Click here
              </Link> &emsp;
              To get all order placed on a date by passing date in the url: 
              
            </li>
            <li className="list-group-item">
            <Link to="/orderhome/ordersbydateonrequest">
                {" "}
                Click here
              </Link> &emsp;
              To get all orders placed on a date on request: 
              
            </li>
            <li className="list-group-item">
            <Link to="/orderhome/viewalldetails">
                {" "}
                Click here
              </Link> &emsp;
              To get all orders : 
              
            </li>
            <li className="list-group-item">
            <Link to="/orderhome/updateorderstatus">
                {" "}
                Click here
              </Link> &emsp;
              To update order details : 
              
            </li>
          </ul>
        </div>
      </div>

      {/* <Router>
        <OrderNavbar />
        <Switch>
        <Route exact path="/orderdetails/:id" component={GetOrderDetails} />
        <Route exact path="/orderhome/ordersofcustomer/:id" component={GetOrderDetailsByCustomerId} />
        <Route exact path="/orderhome/ordersofcustomeronrequest" component={GetOrderDetailsOfCustomerOnRequest} />
        <Route exact path="/orderhome/ordersbydateonrequest" component={GetOrderDetailsByDateOnRequest} />
        <Route exact path="/orderhome/ordersbydate/:date" component={GetOrderDetailsByDate} />
        </Switch>
        
      </Router> */}
    </div>
  );
}

export default OrderHome;
