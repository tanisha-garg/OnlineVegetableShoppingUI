import { Provider } from "react-redux";
import "./App.css";
import AddFeedback from "./components/Feedback/AddFeedback";
import AddVegetable from "./components/vegetable/AddVegetable";
import GetVegetableDetailsOnRequest from "./components/vegetable/GetVegetableDetailsOnRequest";
import UpdateVegetablePrice from "./components/vegetable/UpdateVegetablePrice";
import VegetableHome from "./components/vegetable/VegetableHome";
import GetVegetableDetailsById from "./components/vegetable/GetVegetableDetailsById";
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
import GetAllOrders from "./components/order/GetAllOrders";
import UpdateOrderDetail from "./components/order/UpdateOrderDetails";
import store from "./redux/store";
import FeedbackHome from "./components/Feedback/FeedbackHome";
import DisplayFeedbackDetails from "./components/Feedback/DisplayFeedbackDetails";
import DisplayFeedbackList from "./components/Feedback/DisplayFeedbackList";
import GetFeedbackByVegetableId from "./components/Feedback/GetFeedbackByVegetableId";
import AddCustomer from "./components/customer/AddCustomer";
import GetCustomerDetailsOnRequest from "./components/customer/GetCustomerDetailsOnRequest";
import UpdateCustomerDetails from "./components/customer/UpdateCustomerDetails";
import ViewCustomer from "./components/customer/ViewCustomer";
import ViewCustomersByLoc from "./components/customer/ViewCustomersByLoc";
import CustomerHome from "./components/customer/CustomerHome";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <div className="row">
            <div className="col-md-12">
              <MainNavbar />

              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/vegetablehome" component={VegetableHome} />
                <Route exact path="/vegetables/add" component={AddVegetable} />
                <Route
                  exact
                  path="/vegetables/byidonrequest"
                  component={GetVegetableDetailsOnRequest}
                />
                <Route
                  exact
                  path="/vegetables/changePrice"
                  component={UpdateVegetablePrice}
                />
                <Route
                  exact
                  path="/vegetables/byid/:id"
                  component={GetVegetableDetailsById}
                />

                <Route
                  exact
                  path="/orderhome/orderdetails/:id"
                  component={GetOrderDetails}
                />
                <Route exact path="/orderhome" component={OrderHome} />
                <Route exact path="/billhome" component={BillHome} />
                <Route exact path="/feedbackhome" component={FeedbackHome} />

                <Route
                  exact
                  path="/orderhome/viewalldetails"
                  component={GetAllOrders}
                />
                <Route
                  exact
                  path="/orderhome/updateorderstatus"
                  component={UpdateOrderDetail}
                />

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
                <Route
                  exact
                  path="/feedbackhome/addfeedback"
                  component={AddFeedback}
                />
                <Route
                  exact
                  path="/feedbackhome/feedbackbyvegetableid/:id"
                  component={GetFeedbackByVegetableId}
                />
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
            </div>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
