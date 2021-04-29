import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrdersByDate } from "../../redux1/order/fetchordersbydate/fetchOrdersByDateActions";
import DisplayOrderList from "./DisplayOrderList";
import dateFormat from 'dateformat';

function GetOrderDetailsByDate(props) {

  const dispatch = useDispatch();

  const response = useSelector( state => {
    return {orders: state.fetchOrdersByDate.orders, error: state.fetchOrdersByDate.error }
  })

  const fetchOrderDetailsOnRender = () => {
    const date = props.match.params.date;
    const finalDate = dateFormat(date, "dd mmmm yyyy");
    console.log(finalDate);
    dispatch(fetchOrdersByDate(finalDate));
  };

  useEffect(fetchOrderDetailsOnRender, []);

  return (
    <div className="container w-75 mt-5">
      <div className="alert alert-info">
        Please provide a date in "dd mmmm yyyy" format in the url path. Eg, 25April2021
      </div>
      <div>
      <h2> List of Orders On {props.match.params.date}</h2> <br />
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
