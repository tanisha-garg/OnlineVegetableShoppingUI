import OrderNavbar from "./OrderNavbar";
import { BrowserRouter as Router, Route,} from "react-router-dom";
import GetOrderDetails from "./GetOrderDetails";
import GetOrderDetailsByCustomerId from "./GetOrderDetailsByCustomerId";
import GetOrderDetailsOfCustomerOnRequest from "./GetOrderDetailsOfCustomerOnRequest";
import GetOrderDetailsByDateOnRequest from "./GetOrderDetailsByDateOnRequest";
import GetOrderDetailsByDate from "./GetOrderDetailsByDate";

function OrderHome() {
  return (
    <div>
      <Router>
        <OrderNavbar />
        <Route exact path="/orderdetails/:id" component={GetOrderDetails} />
        <Route
          exact
          path="/ordersofcustomer/:id"
          component={GetOrderDetailsByCustomerId}
        />
        <Route
          exact
          path="/ordersofcustomeronrequest"
          component={GetOrderDetailsOfCustomerOnRequest}
        />
        <Route
          exact
          path="/ordersbydateonrequest"
          component={GetOrderDetailsByDateOnRequest}
        />
        <Route
          exact
          path="/ordersbydate/:date"
          component={GetOrderDetailsByDate}
        />
      </Router>
    </div>
  );
}

export default OrderHome;
