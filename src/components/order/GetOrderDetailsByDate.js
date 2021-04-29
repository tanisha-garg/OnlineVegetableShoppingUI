import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrdersByDate } from "../../redux/order/fetchordersbydate/fetchOrdersByDateActions";
import DisplayOrderList from "./DisplayOrderList";
import dateFormat from 'dateformat';
import {ordersPlacedToday} from "../../service/OrderService"

function GetOrderDetailsByDate() {

  const today = ordersPlacedToday();

  const dispatch = useDispatch();

  const response = useSelector( state => {
    return {orders: state.fetchOrdersByDate.orders, error: state.fetchOrdersByDate.error }
  })

  const fetchOrderDetailsOnRender = () => {
    const finalDate = dateFormat(today, "dd mmmm yyyy");
    console.log(finalDate);
    dispatch(fetchOrdersByDate(finalDate));
  };

  useEffect(fetchOrderDetailsOnRender, []);

  return (
    <div className="container w-75 mt-5">
      <div>
      <h2> List of Orders Placed Today</h2> <br />
      {response.orders ? (
        <div>
          <DisplayOrderList orders={response.orders} />
        </div>
      ) : (
        ""
      )}
      {response.error ? (
        <div className="text-danger h6">
          Request processing unsuccessful
          <br />
          {response.error}
        </div>
      ) : (
        ""
      )}
      </div>
      
    </div>
  );
}

export default GetOrderDetailsByDate;
