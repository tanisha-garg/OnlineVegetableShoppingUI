import { Provider } from "react-redux";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import Home from "./components/Home";
import store from "./redux/store";
import BillDetailsPage from "./pages/BillDetailsPage";
import OrderPage from "./pages/OrderPage";
import CartPage from "./pages/CartPage";
import CustomerPage from "./pages/CustomerPage";
import VegetablePage from "./pages/VegetablePage";
import FeedbackPage from "./pages/FeedbackPage";

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
                <Route  path="/customer" component={CustomerPage} />
                <Route  path="/vegetable" component={VegetablePage} />
                <Route path="/cart" component={CartPage} />
                <Route path="/order" component={OrderPage} /> 
                <Route path="/bill" component={BillDetailsPage} />
                <Route path="/feedback" component={FeedbackPage} />               
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
