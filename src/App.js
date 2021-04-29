import { Provider } from "react-redux";
import "./App.css";
import AddFeedback from "./components/Feedback/AddFeedback";
import AddVegetable from "./components/vegetable/AddVegetable";
import GetVegetableDetailsOnRequest from "./components/vegetable/GetVegetableDetailsOnRequest";
import UpdateVegetablePrice from "./components/vegetable/UpdateVegetablePrice";
import VegetableHome from "./components/vegetable/VegetableHome";
import GetVegetableDetailsById from "./components/vegetable/GetVegetableDetailsById";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import Home from "./components/Home";
import store from "./redux/store";
import FeedbackHome from "./components/Feedback/FeedbackHome";
import GetFeedbackByVegetableId from "./components/Feedback/GetFeedbackByVegetableId";
import AddCustomer from "./components/customer/AddCustomer";
import GetCustomerDetailsOnRequest from "./components/customer/GetCustomerDetailsOnRequest";
import UpdateCustomerDetails from "./components/customer/UpdateCustomerDetails";
import ViewCustomersByLoc from "./components/customer/ViewCustomersByLoc";
import CustomerHome from "./components/customer/CustomerHome";
import BillDetailsPage from "./pages/BillDetailsPage";
import OrderPage from "./pages/OrderPage";
import CartPage from "./pages/CartPage";

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
                <Route path="/bill" component={BillDetailsPage} />
                <Route path="/order" component={OrderPage} /> 
                <Route cart="/cart" component={CartPage} />

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

                <Route exact path="/feedbackhome" component={FeedbackHome} />

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
               {/*<Route exact path="/viewcustomer" component={ViewCustomer} />*/}
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
