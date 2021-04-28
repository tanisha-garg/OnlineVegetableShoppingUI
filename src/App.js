import "./App.css";
import { Provider } from "react-redux";
import AddCustomer from "./components/customer/AddCustomer";
//import DisplayCustomerDetails from "./components/customer/DisplayCustomerDetails";
import GetCustomerDetailsOnRequest from "./components/customer/GetCustomerDetailsOnRequest";
import UpdateCustomerDetails from "./components/customer/UpdateCustomerDetails";
import ViewCustomer from "./components/customer/ViewCustomer";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ViewCustomersByLoc from "./components/customer/ViewCustomersByLoc";
import CustomerHome from "./components/customer/CustomerHome";
import CustomerNavbar from "./components/customer/CustomerNavbar";
// import {
//   getCustomerDetailsOnRequest,
//   updateCustomerDetails,
//   addCustomer,
//   viewCustomersByLoc,
// } from "./service/CustomerService";
import store from "./redux/store";

function App() {
  return (
    <div className=" container mt-7">
      <Provider store={store}>
        <Router>
          <CustomerNavbar />

          <Switch>
            <Route exact path="/customerhome" component={CustomerHome} />
            <Route exact path="/addcustomer" component={AddCustomer} />
            <Route exact path="/viewcustomer" component={ViewCustomer} />
            <Route
              exact
              path="/updatecustomerdetails"
              component={UpdateCustomerDetails}
            />
            <Route
              exact
              path="/getcustomerdetailsonrequest"
              component={GetCustomerDetailsOnRequest}
            />
            <Route
              exact
              path="/getcustomerbyloc"
              component={ViewCustomersByLoc}
            />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
