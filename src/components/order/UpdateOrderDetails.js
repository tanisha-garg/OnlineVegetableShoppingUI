import { useState } from "react";
import { updateOrderDetails } from "../../service1/OrderServiceT";
import DisplayOrderDetails from "./DisplayOrderDetails";

const UpdateOrderDetail = () => {
  
  const [state, setState] = useState({
    status: "",
    orderId: "",orderDetail: undefined, error: ""
  });


  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    const promise =updateOrderDetails(state)
    promise.then((response)=>{
      setState({...state,orderDetail:response.data,error:""})

    }).catch((error)=>{setState({...state,orderDetail:undefined,error:error.message})})

  };
  return (
    <div className="container">
      <h2>Update Order Request</h2>
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label>Order Id</label>
          <input type="text" name="orderId" className="form-control" onChange={onHandleChange}/>
        </div>
        <div className="form-group">
          <label>Status</label>
          <input type="text" name="status" className="form-control" onChange={onHandleChange}/>
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
      {state.orderDetail ? (
        <DisplayOrderDetails order={state.orderDetail} />
      ) : (
        ""
      )}
      {state.error ? state.error : ""}
    </div>
  );
};

export default UpdateOrderDetail;