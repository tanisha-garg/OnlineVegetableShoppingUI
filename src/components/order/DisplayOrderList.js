import { Link } from "react-router-dom";

function DisplayOrderList({orders}){

    return(
        <div className="container">
            <ul className="list-group">
                {
                    orders.map((order) => <li className="mt-1 list-group-item" key = {order.orderId} >
                        <Link to = {`/orderdetails/:${order.orderId}`} >
                            <span>{order.orderId} &emsp; {order.date}</span>
                        </Link>
                    </li>)
                }
            </ul>
        </div>
    );

}

export default DisplayOrderList;