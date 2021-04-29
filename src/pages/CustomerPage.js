import { Route, Switch } from "react-router";
import AddCustomer from "../components/customer/AddCustomer";
import GetCustomerDetailsOnRequest from "../components/customer/GetCustomerDetailsOnRequest";
import UpdateCustomerDetails from "../components/customer/UpdateCustomerDetails";
import ViewCustomersByLoc from "../components/customer/ViewCustomersByLoc";
import "./page.css";

const CustomerPage = (props) => {
  return (
    <div className="container mt-5 mb-5">
      <div className="page">
        <div className="pageButton">
          <button
            className="btn btn-outline-secondary"
            onClick={() => props.history.push(`${props.match.url}/addcustomer`)}
          >
            Add customer
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() =>
              props.history.push(
                `${props.match.url}/getcustomerdetailsonrequest`)
            }
          >
            View Customer By Id
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() =>
              props.history.push(`${props.match.url}/updatecustomer`)
            }
          >
            Update Customer Details
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() =>
              props.history.push(
                `${props.match.url}/viewcustomerbylocation`
              )
            }
          >
            View List Of Customers By Location
          </button>
        </div>
        <div className="pageLine"></div>
        <div className="pageContainer">
          <Switch>
            <Route
              exact
              path={`${props.match.url}/addcustomer`}
              component={AddCustomer}
            />
            <Route
              exact
              path={`${props.match.url}/getcustomerdetailsonrequest`}
              component={GetCustomerDetailsOnRequest}
            />
            <Route
              exact
              path={`${props.match.url}/updatecustomer`}
              component={UpdateCustomerDetails}
            />
            <Route
              exact
              path={`${props.match.url}/viewcustomerbylocation`}
              component={ViewCustomersByLoc}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default CustomerPage;
