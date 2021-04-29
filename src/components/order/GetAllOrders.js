import { useEffect, useState } from "react";
import { fetchOrderList } from "../../service1/OrderServiceT";
import DisplayOrderList from "./DisplayOrderList";
const GetAllOrders = () => {
const [orderList,setOrder]=useState({orders:undefined,error: undefined})

  const fetchAllOrder=()=>{
      const promise=fetchOrderList()
      promise.then((response)=>{
        setOrder(
             {orders:response.data,error:undefined}
        )
    }).catch((error)=> {
          setOrder(
              {orders:undefined,error:error.message}
          )

      })

  }


  useEffect(fetchAllOrder,[]);

  return (
    <div className="container w-75">
      <h2>View All Orders</h2>
      {orderList.orders ? (
        <DisplayOrderList orders={orderList.orders} />
      ) : (
        ""
      )}
      {orderList.error ? orderList.error : ""}
    </div>
  );
};

export default GetAllOrders;