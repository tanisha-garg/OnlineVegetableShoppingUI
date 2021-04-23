import "./App.css";
import GetBillingDetails from "./components/billingdetails/GetBillingDetails";
import GetBillingDetailsOnRequest from "./components/billingdetails/GetBillingDetailsOnRequest";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import Home from "./components/Home";
import OrderHome from "./components/order/OrderHome";
import BillHome from "./components/billingdetails/BillHome";
import GetOrderDetails from "./components/order/GetOrderDetails";
import GetOrderDetailsByCustomerId from "./components/order/GetOrderDetailsByCustomerId";
import GetOrderDetailsOfCustomerOnRequest from "./components/order/GetOrderDetailsOfCustomerOnRequest";
import GetOrderDetailsByDateOnRequest from "./components/order/GetOrderDetailsByDateOnRequest";
import GetOrderDetailsByDate from "./components/order/GetOrderDetailsByDate";

function App() {
  return (
    <div>
      <Router>
        <div className="row">
          <div className="col-md-12">
            <MainNavbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/orderhome/orderdetails/:id"
                component={GetOrderDetails}
              />
              <Route exact path="/orderhome" component={OrderHome} />
              <Route exact path="/billhome" component={BillHome} />
              <Route
                exact
                path="/orderhome/ordersofcustomer/:id"
                component={GetOrderDetailsByCustomerId}
              />
              <Route
                exact
                path="/orderhome/ordersofcustomeronrequest"
                component={GetOrderDetailsOfCustomerOnRequest}
              />
              <Route
                exact
                path="/orderhome/ordersbydateonrequest"
                component={GetOrderDetailsByDateOnRequest}
              />
              <Route
                exact
                path="/orderhome/ordersbydate/:date"
                component={GetOrderDetailsByDate}
              />
              <Route
                exact
                path="/billhome/billdetails/:id"
                component={GetBillingDetails}
              />
              <Route
                exact
                path="/billhome/billdetailsonrequest"
                component={GetBillingDetailsOnRequest}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
