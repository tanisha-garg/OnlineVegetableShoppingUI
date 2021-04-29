import { Route, Switch } from "react-router";
import "./page.css"

const CartPage = (props) => {
  return (
    <div className="container mt-5 mb-5">
      <div className="page">
        <div className="pageButton">
        <button
            className="btn btn-outline-secondary"
            onClick={() => props.history.push(`${props.match.url}/add`)}
          >
            Add vegetable
          </button>
         
        </div>
        <div className="pageLine"></div>
        <div className="pageContainer">
          <Switch>
           
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
