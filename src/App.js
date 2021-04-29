import React from 'react';
import './App.css';
import AddToCart from './components/Cart/AddToCart';
import CartHome from './Pages/CartHome';
import {addItemToCartRequest,increaseQuantityRequest} from './Service/CartService';
import DisplayCart from './components/Cart/DisplayCart';
import decreasequantity from './components/Cart/DecreaseQuantity';
import increasequantity from './components/Cart/DecreaseQuantity';
import AddOrRemoveItemFromCart from './components/Cart/AddOrRemoveItemFromCart';


const veg = {
  id: 1,
  name: "potato",
  category: "underground",
  type: "root",
  quantity: 10,
  price: 50,
};
const data = {
  vegId:10,
  custId:4,
  quantity:"23"
};
const veg1=[veg];

function App() {
  const promise=increaseQuantityRequest(data);
  promise.then((response)=>{console.log(response.data);})
  .catch((error)=>{console.log(error.response.data);})

  // const promise=decreaseQuantityRequest(data);
  // promise.then((response)=>{console.log(response.data);})
  // .catch((error)=>{console.log(error.response.data);})
  

    
  return (
    <div>
      
      <AddToCart />
      <AddOrRemoveItemFromCart />
      {/*<DisplayCart />*/}
      {/* <CartHome /> */}
      {/* <AddOrRemoveItemFromCart /> */}
      
    </div>
  );
}

export default App;
