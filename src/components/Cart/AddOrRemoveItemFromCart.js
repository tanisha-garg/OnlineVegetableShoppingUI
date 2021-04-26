import { useState } from "react";
import { increaseQuantityRequest,decreaseQuantityRequest } from "../../Service/CartService";
import "./addorreplace.css";

const AddOrRemoveItemFromCart = () => {
    const vegList = [
      { vegId: 1, vegName: "Potato",quantity:' 1' },
      { vegId: 2, vegName: "Tomato",quantity:' 5' },
      { vegId: 3, vegName: "cabbage",quantity:' 8'},
    ];
    const cart = {
      name: "Sameer",
      vegetables:[
        {
          id:"4",
          name:"Potato",
          quantity:"10",
          type:"fresh",
          category:"underground",
          price:"20",
        },
      ]
      
    };
    const [state, setState] = useState({
      itemId: "",
      select:false
    });
  
    const response={order:undefined,error:""}
  
    const onHandleChange = (e) => {
      const { name, value ,checked} = e.target;
      console.log(value,checked)
      setState({ ...state, [name]: value ,select:checked });
      
    };

    const onHandleDecrease = (e) =>{
        this.setState(prevState => {
            return {count: prevState.count - 1}
         });
    };

    const onHandleIncrease = () =>{
        this.setState(prevState => {
            return {count: prevState.count+1}
        })
    };

    

    return (
        <div className="cartItem">
        <h2 className="title">Cart</h2>
          {vegList.map((vegetable) => (
            <div key={vegetable.vegId} className="itemCart">
                <h5>{vegetable.vegName}</h5>
                <div className="symbol">-</div>
                <span className="value">{vegetable.quantity}</span>
                <div className="symbol" >+</div>
            </div>
          ))}
          <button type="submit" className="btn btn-primary" onClick={onHandleChange}>
          Place Order
        </button>
        </div>
    );

};

export default AddOrRemoveItemFromCart;