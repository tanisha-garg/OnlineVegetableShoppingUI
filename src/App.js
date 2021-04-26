import { Provider } from 'react-redux';
import './App.css';
import AddVegetable from './components/vegetable/AddVegetable';
import DisplayVegetable from './components/vegetable/DisplayVegetable';
import DisplayVegetables from './components/vegetable/DisplayVegetables';
import GetVegetableDetailsOnRequest from './components/vegetable/GetVegetableDetailsOnRequest';
import UpdateVegetablePrice from './components/vegetable/UpdateVegetablePrice';
import VegetableHome from './components/vegetable/VegetableHome';
import { fetchVegetableById } from './service/VegetableService';
import store from "./redux/vegetable/store"
import GetVegetableDetailsById from './components/vegetable/GetVegetableDetailsById';
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
import { fetchBillDetails } from "./service/BillingDetailsService";
import {
  addOrderDetails,
  fetchOrderById,
  fetchOrdersByCustomerId,
  fetchOrdersByDate,
} from "./service/OrderServiceT";



function App() {

  return (
    <div>
      <Provider store={store} >
      <Router>
        <div className="row">
          <div className="col-md-12">
            <MainNavbar />

            <Switch>
    
              <Route exact path="/" component={Home} />
              <Route exact path="/vegetablehome" component={VegetableHome} />
              <Route
                exact
                path="/vegetables/add"
                component={AddVegetable}
              />
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
      </Provider>
      
    </div>
  );
}

export default App;
