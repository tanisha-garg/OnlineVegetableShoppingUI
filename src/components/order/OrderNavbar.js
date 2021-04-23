import { Link } from "react-router-dom";

function OrderNavbar(){

    return(
        <div className="container navbar mt-3">

<Link to="/orderhome/orderdetails/:id">Order Details by id</Link>

            <Link to="/orderhome/ordersofcustomer/:id"> Orders placed by a customer </Link>
            <Link to="/orderhome/ordersofcustomeronrequest"> Customer Orders on request</Link>
            <Link to="/orderhome/ordersbydate/:date"> Orders placed on a particular date</Link>
            <Link to="/orderhome/ordersbydateonrequest"> Orders By Date on request</Link>

        </div>
    );

}

export default OrderNavbar;