import { Link } from "react-router-dom";

function Navbar(){

    return(
        <div className="container navbar mt-3">

            <Link to="/ordersofcustomer/:id"> All Orders placed by a customer </Link>
            <Link to="/ordersofcustomeronrequest"> Get Customer Orders on request</Link>
            <Link to="ordersbydate/:date"> All orders placed on a particular date</Link>
            <Link to="/ordersbydateonrequest"> Get Orders By Date on request</Link>

        </div>
    );

}

export default Navbar;