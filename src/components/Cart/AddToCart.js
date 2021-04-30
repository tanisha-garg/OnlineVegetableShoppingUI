import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemToCartIncreaseThunk } from "../../redux/Cart/itemToCartAction";
import { itemToVegThunk } from "../../redux/vegItem/itemToVegAction";
import "./addorreplace.css";
const AddToCart = ({history}) => {

  const dispatch=useDispatch();

  const response=useSelector((state)=>{
      return{
        vegDetail:state.itemToCart.vegDetail,
        error:state.itemToCart.error,
        vegList:state.itemToVeg.items
      }
  })

    const onHandleAdd=(vegId)=>{
      const data ={
        vegId:vegId,
        custId:'4',
        quantity:1
      }
      dispatch(itemToCartIncreaseThunk(data))
    }
    
   const fetchAll = () => {
     dispatch(itemToVegThunk())
   }
   useEffect(fetchAll,[])

    return (
      <div className="container">
        <h2 className='title'>Add Item To Cart</h2>
        <div className="heading">
          <h5>Name</h5>
          <div className="">
          <h5>Price</h5>
          <h6>ClickToAdd &#8595;</h6>
        </div>
      </div>
          
          
          {response.vegList.map((vegetable) => (
            <div key={vegetable.vegId} className="itemCart">
              
              <h5 className="vegName"> {vegetable.name}</h5>
              <div>
                <h6> &#8377; {vegetable.price}</h6>
                <button type='submit' onClick={()=>onHandleAdd(vegetable.vegId)} className="btn btn-primary" >
                  Add To Cart
                </button>
              {/* <span className="value">{vegetable.quantity}</span>
              <div className="symbol">+</div> */}
              </div>
            </div>
          ))}
           
  
          
        
      </div>
    );
  };
  export default AddToCart;