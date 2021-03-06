import { Link } from "react-router-dom";

/**
 * Component to display order list with links.
 * Once the user clicks on the given link it takes the user to DisplayOrderDetails component
*/
function DisplayOrderList({orders}){

    return(
        <div className="container">
            <ul className="list-group">
                {
                    orders.map((order) => <li className="list-group-item" key = {order.orderId} >
                        <Link to = {`/order/orderdetails/${order.orderId}`} >
                            <span>{order.orderId} &emsp; {order.date}</span>
                        </Link>
                    </li>)
                }
            </ul>
        </div>
    );

}

export default DisplayOrderList;