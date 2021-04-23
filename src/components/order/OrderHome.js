import OrderNavbar from "./OrderNavbar";
import { BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import GetOrderDetails from "./GetOrderDetails";
import GetOrderDetailsByCustomerId from "./GetOrderDetailsByCustomerId";
import GetOrderDetailsOfCustomerOnRequest from "./GetOrderDetailsOfCustomerOnRequest";
import GetOrderDetailsByDateOnRequest from "./GetOrderDetailsByDateOnRequest";
import GetOrderDetailsByDate from "./GetOrderDetailsByDate";

function OrderHome() {
  return (
    <div>
        <OrderNavbar />

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
