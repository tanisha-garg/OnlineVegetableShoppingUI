import { Link } from "react-router-dom";
import commonStyle from "./commonStyle.module.css";

export default function VegetableHome() {
  return (
    <div>
      <h1> Vegetable Module </h1>

      <div className={commonStyle.content}>
        <div>
          Welcome to Vegetable Module
          <br /> various features availble are :
          <ul className="list-group">
            <li className="list-group-item">
              <Link to="/vegetables/add">Click here to </Link>Add Vegetable
            </li>
            <li className="list-group-item">
              <Link to="/vegetables/byidonrequest"> Click here to </Link>View Vegetable
              On request
            </li>
            <li className="list-group-item">
              <Link to="/vegetables/changePrice">Click here to </Link>Update
              Vegetable Price
            </li>

            <li className="list-group-item">
              <Link to="/vegetables/byid/:id">Click here to </Link> Get Vegetable Details By passing id in url
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
