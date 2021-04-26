import { useState } from "react";
import { addItemToCartRequest } from "../../Service/CartService";
import "./addorreplace.css";
const AddToCart = () => {
    const vegList = [
      { vegId: 1, vegName: "Potato",quantity:'1' },
      { vegId: 2, vegName: "Tomato",select:false },
      { vegId: 3, vegName: "cabbage",select:false },
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
    const onHandleSubmit = (e) => {
      e.preventDefault();
      setState({ ...state});
    };
    return (
      <div className="container">
        <h2 className='heading'>Add Item To Cart</h2>
       
          {vegList.map((vegetable) => (
            <div key={vegetable.vegId} className="cartItem">
              <h5> {vegetable.vegName}</h5>
              <div className="symbol">-</div>
              <span className="value">{vegetable.quantity}</span>
              <div className="symbol">+</div>
            </div>
          ))}
  
          <button type="submit" className="btn btn-primary">Create Order</button>
        
      </div>
    );
  };
  export default AddToCart;