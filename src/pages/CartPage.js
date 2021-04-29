import { Route, Switch } from "react-router";
import AddOrRemoveItemFromCart from "../components/Cart/AddOrRemoveItemFromCart";
import AddToCart from "../components/Cart/AddToCart"
import "./page.css"

const CartPage = (props) => {
  return (
    <div className="container mt-5 mb-5">
      <div className="page">
        <div className="pageButton">
        <button
            className="btn btn-outline-secondary"
            onClick={() => props.history.push(`${props.match.url}/addtocart`)}
          >
            Add vegetable
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => props.history.push(`${props.match.url}/addorremoveitem`)}
          >
            Cart
          </button>
         
        </div>
        <div className="pageLine"></div>
        <div className="pageContainer">
          <Switch>
          <Route
              exact
              path={`${props.match.url}/addtocart`}
              component={AddToCart}
            />
            <Route
              exact
              path={`${props.match.url}/addorremoveitem`}
              component={AddOrRemoveItemFromCart}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
