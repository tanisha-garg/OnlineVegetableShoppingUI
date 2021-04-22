import "./App.css";
import GetBillingDetails from "./components/billingdetails/GetBillingDetails";
import GetBillingDetailsOnRequest from "./components/billingdetails/GetBillingDetailsOnRequest";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import GetOrderDetails from "./components/order/GetOrderDetails";
import DisplayOrderList from "./components/order/DisplayOrderList";
import GetOrderDetailsOfCustomer from "./components/order/GetOrderDetailsOfCustomer";
import GetOrderDetailsOfCustomerOnRequest from "./components/order/GetOrderDetailsOfCustomerOnRequest";


function App() {
  return (
    <div>

      <Router>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <Switch>
                <Route exact path="/billdetails/:id" component={GetBillingDetails} />
                <Route exact path="/billdetailsonrequest" component={GetBillingDetailsOnRequest} />
                <Route exact path="/orderdetails/:id" component={GetOrderDetails} />
                <Route exact path="/ordersofcustomer/:id" component={GetOrderDetailsOfCustomer} />
                <Route exact path="/ordersofcustomeronrequest" component={GetOrderDetailsOfCustomerOnRequest} />

              </Switch>
            </div>
          </div>

        </div>
      </Router>
     

    </div>
  );
}

export default App;
