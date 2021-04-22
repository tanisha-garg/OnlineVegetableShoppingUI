import { Link } from "react-router-dom";

function DisplayOrderList({orders}){

    return(
        <div className="container">
            <ul>
                {
                    orders.map((order) => <li className="mt-1" key = {order.orderId} >
                        <Link to = {`/orderdetails/:${order.orderId}`} >
                            <span>{order.orderId} {order.customerName}</span>
                        </Link>
                    </li>)
                }
            </ul>
        </div>
    );

}

export default DisplayOrderList;