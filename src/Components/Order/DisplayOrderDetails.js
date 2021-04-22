function DisplayOrderDetails({order}){

    let {orderId, customerName, totalAmount, date, status} = order;

    return(
        <div>
            <ul>
                <li>
                Order Id: {orderId} <br />
                Customer Name: {customerName} <br />
                Total Amount: {totalAmount} <br />
                Order Date: {date} <br />
                Status : {status}
                </li>
            </ul>
        </div>
    );
}

export default DisplayOrderDetails;