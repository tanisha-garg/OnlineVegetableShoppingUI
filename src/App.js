import "./App.css";
import GetBillingDetails from "./components/billingdetails/GetBillingDetails";
import GetBillingDetailsOnRequest from "./components/billingdetails/GetBillingDetailsOnRequest";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MainNavbar from "./components/MainNavbar";
import Home from "./components/Home";
import OrderHome from "./components/order/OrderHome";
import BillHome from "./components/billingdetails/BillHome";


function App() {
  return (
    <div>

      <Router>
        
          <div className="row">
            <div className="col-md-12">
              <MainNavbar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/orderhome" component={OrderHome} />
                <Route exact path="/billhome" component={BillHome} />
                

              </Switch>
            </div>
          </div>

        
      </Router>
     

    </div>
  );
}

export default App;
