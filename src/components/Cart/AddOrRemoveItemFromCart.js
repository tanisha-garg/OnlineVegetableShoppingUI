import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemToCartIncreaseThunk , itemToCartDecreaseThunk} from "../../redux/Cart/itemToCartAction";
import { itemToCartConstant } from "../../redux/Cart/itemToCartConstant";
import { addOrderAction } from "../../redux/order/addorder/addOrderActions";
import { addItemToCartRequest } from "../../service/CartService";
import DisplayOrderDetails from "../order/DisplayOrderDetails";
import "./addorreplace.css";

const AddOrRemoveItemFromCart = () => {

    const dispatch=useDispatch();

    const response = useSelector((state)=>{
        return{
            vegetables:state.itemToCart.items,
            order: state.addOrder.order,
            error: state.addOrder.error
        }
    })

    const onHandlePlace = (e) =>{

        e.preventDefault();
        dispatch(addOrderAction(4));
       
    }


    const onHandleDecrease = (vegId) =>{
        const data =    {
            vegId:vegId,
            custId:"4",
            quantity:1
        };
        dispatch(itemToCartDecreaseThunk(data))
    };

    const onHandleIncrease = (vegId) =>{
        const data =    {
            vegId:vegId,
            custId:"4",
            quantity:1
        };
        dispatch(itemToCartIncreaseThunk(data))
    };


    return (
        <div className="cartItem">
        <h2 className="title">Cart</h2>
          {response.vegetables.map((vegetable) => (
            <div key={vegetable.vegId} className="itemCart mx-auto">
                <h5>{vegetable.name}</h5>
                <div className="symbol" onClick={()=>onHandleDecrease(vegetable.vegId)}>-</div>
                <span className="value">{vegetable.quantity}</span>
                <div className="symbol" onClick={()=>onHandleIncrease(vegetable.vegId)}>+</div>
            </div>
          ))}
          <div className="text-center">
          <button type="submit" className="btn btn-primary" onClick={onHandlePlace}>
          Place Order
        </button>
          </div>
          
        
        {response.order ? (
        <div>
          <DisplayOrderDetails order={response.order} />
        </div>
      ) : (
        ""
      )}

      {response.error ? (
        <div className="text-danger h6 mt-3">
          Request was not successsful <br /> {response.error}
        </div>
      ) : (
        ""
      )}

        
        </div>
    );

};

export default AddOrRemoveItemFromCart;