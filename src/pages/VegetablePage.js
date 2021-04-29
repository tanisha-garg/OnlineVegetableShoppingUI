import { Route, Switch } from "react-router";
import AddVegetable from "../components/vegetable/AddVegetable";
import GetVegetableByName from "../components/vegetable/GetVegetableByName";
import GetVegetableDetailsById from "../components/vegetable/GetVegetableDetailsById";
import GetVegetableDetailsOnRequest from "../components/vegetable/GetVegetableDetailsOnRequest";
import UpdateVegetablePrice from "../components/vegetable/UpdateVegetablePrice";
import "./page.css";

const VegetablePage = (props) => {
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
          <button
            className="btn btn-outline-secondary"
            onClick={() =>
              props.history.push(`${props.match.url}/byidonrequest`)
            }
          >
            Fetch by id on request
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => props.history.push(`${props.match.url}/byid/:id`)}
          >
            Fetch by id - url
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => props.history.push(`${props.match.url}/changePrice`)}
          >
            Update Price
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => props.history.push(`${props.match.url}/getbyname`)}
          >
            Get Vegetable By Name
          </button>
        </div>
        <div className="pageLine"></div>
        <div className="pageContainer">
          <Switch>
            <Route
              exact
              path={`${props.match.url}/add`}
              component={AddVegetable}
            />
            <Route
              exact
              path={`${props.match.url}/byidonrequest`}
              component={GetVegetableDetailsOnRequest}
            />
            <Route
              exact
              path={`${props.match.url}/byid/:id`}
              component={GetVegetableDetailsById}
            />
             <Route
                  exact
                  path={`${props.match.url}/changePrice`}
                  component={UpdateVegetablePrice}
                />
                 <Route
                  exact
                  path={`${props.match.url}/getbyname`}
                  component={GetVegetableByName}
                />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default VegetablePage;
