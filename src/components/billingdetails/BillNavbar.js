import { Link } from "react-router-dom";
import GetBillingDetails from "./GetBillingDetails";
import GetBillingDetailsOnRequest from "./GetBillingDetailsOnRequest";

function Navbar() {
  return (
    <div className="container navbar mt-3">
      <Link to="/billdetails/:id"> Get bill details by id </Link>
      <Link to="/billdetailsonrequest"> Get bill details by id on request</Link>
    </div>
  );
}

export default Navbar;
