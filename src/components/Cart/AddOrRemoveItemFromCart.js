import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemToCartIncreaseThunk , itemToCartDecreaseThunk} from "../../redux/Cart/itemToCartAction";
import { itemToCartConstant } from "../../redux/Cart/itemToCartConstant";
import { addItemToCartRequest } from "../../service/CartService";
import "./addorreplace.css";

const AddOrRemoveItemFromCart = () => {

    const dispatch=useDispatch();

    const response = useSelector((state)=>{
        return{
            vegetables:state.itemToCart.items
        }
    })

    const onHandlePlace = (e) =>{
       
    }


    const onHandleDecrease = (vegId) =>{
        const data =    {
            vegId:vegId,
            custId:"7",
            quantity:1
        };
        dispatch(itemToCartDecreaseThunk(data))
    };

    const onHandleIncrease = (vegId) =>{
        const data =    {
            vegId:vegId,
            custId:"7",
            quantity:1
        };
        dispatch(itemToCartIncreaseThunk(data))
    };


    return (
        <div className="cartItem">
        <h2 className="title">Cart</h2>
          {response.vegetables.map((vegetable) => (
            <div key={vegetable.vegId} className="itemCart">
                <h5>{vegetable.name}</h5>
                <div className="symbol" onClick={()=>onHandleDecrease(vegetable.vegId)}>-</div>
                <span className="value">{vegetable.quantity}</span>
                <div className="symbol" onClick={()=>onHandleIncrease(vegetable.vegId)}>+</div>
            </div>
          ))}
          <button type="submit" className="btn btn-primary" onClick={onHandlePlace}>
          Place Order
        </button>
        {/* {response.order ?(
            <DisplayOrderDeta
        ) */}

        
        </div>
    );

};

export default AddOrRemoveItemFromCart;