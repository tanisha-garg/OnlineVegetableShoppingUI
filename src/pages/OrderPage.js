import { Route, Switch } from "react-router";
import GetAllOrders from "../components/order/GetAllOrders";
import GetOrderDetails from "../components/order/GetOrderDetails";
import GetOrderDetailsByCustomerId from "../components/order/GetOrderDetailsByCustomerId";
import GetOrdersPlacedToday from "../components/order/GetOrdersPlacedToday";
import GetOrderDetailsByDateOnRequest from "../components/order/GetOrderDetailsByDateOnRequest";
import GetOrderDetailsOfCustomerOnRequest from "../components/order/GetOrderDetailsOfCustomerOnRequest";
import UpdateOrderDetails from "../components/order/UpdateOrderDetails";
import "./page.css";

/**
 * Component contains all the buttons and routes to different components and acts as a side navbar
*/

const OrderPage = (props) => {
  return (
    <div className="container mt-5 mb-5">
      <div className="page">
        <div className="pageButton">
          <button
            className="btn btn-outline-secondary"
            onClick={() =>
              props.history.push(`${props.match.url}/orderdetails/:id`)
            }
          >
            View By Id
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() =>
              props.history.push(`${props.match.url}/ordersofcustomer/:id`)
            }
          >
            Orders placed by customer
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() =>
              props.history.push(`${props.match.url}/ordersofcustomeronrequest`)
            }
          >
            Orders placed by customer on request
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() =>
              props.history.push(`${props.match.url}/ordersbydateonrequest`)
            }
          >
            Orders placed on a date on request
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() =>
              props.history.push(`${props.match.url}/ordersbydate`)
            }
          >
            Orders placed today
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() =>
              props.history.push(`${props.match.url}/viewallorders`)
            }
          >
            Get All Orders
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() =>
              props.history.push(`${props.match.url}/updateorderstatus`)
            }
          >
            Update Order Status
          </button>
        </div>
        <div className="pageLine"></div>
        <div className="pageContainer">
          <Switch>
            <Route
              exact
              path={`${props.match.url}/orderdetails/:id`}
              component={GetOrderDetails}
            />
            <Route
              exact
              path={`${props.match.url}/ordersofcustomer/:id`}
              component={GetOrderDetailsByCustomerId}
            />
            <Route
              exact
              path={`${props.match.url}/ordersofcustomeronrequest`}
              component={GetOrderDetailsOfCustomerOnRequest}
            />
            <Route
              exact
              path={`${props.match.url}/ordersbydateonrequest`}
              component={GetOrderDetailsByDateOnRequest}
            />
            <Route
              exact
              path={`${props.match.url}/ordersbydate`}
              component={GetOrdersPlacedToday}
            />
            <Route
              exact
              path={`${props.match.url}/viewallorders`}
              component={GetAllOrders}
            />

            <Route
              exact
              path={`${props.match.url}/updateorderstatus`}
              component={UpdateOrderDetails}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
