import React, { useState } from "react";
import DisplayVegetable from "./DisplayVegetable";
import validationMessage from "./validationMessage";
import commonStyle from "./commonStyle.module.css";
import VegetableService from "../../service/vegetable/VegetableService";


/**
 * 
 * Add Vegetable Component
 */
export default function AddVegetable() {
    /*const veg = {
      id: 1,
      name: "potato",
      category: "underground",
      type: "root",
      quantity: 20,
      price: 30,
    };*/
  
    const nameRef = React.createRef();
    const categoryRef = React.createRef();
    const typeRef = React.createRef();
    const quantityRef = React.createRef();
    const priceRef = React.createRef();
  
    const initialState = {        
      name: undefined,
      category: undefined,
      type: undefined,
      quantity: undefined,
      price: undefined,
      formStatus: "",
      validations:{name:undefined,category:undefined,type:undefined,quanity:undefined,price:undefined}
    };

    const response={vegetable: undefined, errMsg: undefined};
  
    const [currentState, setNewState] = useState(initialState);
  /**
   * 
   * submit Handler Function
   */
    const submitHandler = (event) => {
      event.preventDefault();
      if(currentState.validations.name || currentState.validations.type ||currentState.validations.category ||
        currentState.validations.price ||currentState.validations.quanity){
          return;
        }
        let data={...currentState};
        const promise = VegetableService.addVegetable(data);
        promise.then((response)=>
          setNewState({...currentState,formStatus: "form submitted successfully",vegetable:response.data})
        )
        .catch((error)=>
        setNewState({...currentState,errMsg:error.message}));
        };

  /**
   * 
   * change Handler Function
   */
  
    const changeHandler = (ref) => {
      const fieldName = ref.current.name;
      const fieldValue = ref.current.value;
      let validationMsg;
      if(ref===nameRef){
        validationMsg=validateName(fieldValue);
      }
      if(ref===categoryRef){
        validationMsg=validateCategory(fieldValue);
      }
      if(ref===typeRef){
        validationMsg=validateType(fieldValue);
      }
      if(ref===priceRef){
        validationMsg=validatePrice(fieldValue);
      }
      if(ref===quantityRef){
        validationMsg=validateQuantity(fieldValue);
      }
      const newValidations={...currentState.validations,[fieldName]:validationMsg};
      const newState = {
        ...currentState,
        [fieldName]: fieldValue,
        vegetable: undefined,
        errMsg: undefined,
        validations:newValidations
      };
      setNewState(newState);
    };
  
    /*
     * validation method for name
     */
  
    const validateName=(name)=>{
      if(name.length<3){
        return validationMessage.nameSmallthanLengthThree;
      }
      return undefined;
    }
    /*
     * validation method for category
     */
  
    const validateCategory=(category)=>{
      if(category.length<3){
        return validationMessage.categorySmallthanLengthThree;
      }
      return undefined;
    }
    /*
     * validation method for type
     */
  
    const validateType=(type)=>{
      if(type.length<3){
        return validationMessage.typeSmallthanLengthThree;
      }
      return undefined;
    }
     /**
     * validating price is +ve
     */
      const validatePrice = (price) => {
        if (price < 0) {
          return validationMessage.priceSmallThanZero
        }
        return undefined;
      };
       /**
     * validating quantity is +ve
     */
    const validateQuantity = (quantity) => {
      if (quantity < 0) {
        return validationMessage.quantityLessThanZero;
      }
      return undefined;
    };
    
    return (
      <div>
       <h2>Add Vegetable</h2> 
        <form onSubmit={submitHandler} className={commonStyle.content}>
          <div className="form-group">
            <label>Enter name</label>
            <input
              name="name" placeholder="Enter veg name" required
              ref={nameRef}
              onChange={() => changeHandler(nameRef)}
            />
            {currentState.validations.name?(
              <div className={commonStyle.error}>
                {currentState.validations.name}
                </div>
            ):('')}
          </div>
          <div>
            <label>Enter category</label>
            <select
              name="category" placeholder="Enter category" required
              ref={categoryRef}
              onChange={() => changeHandler(categoryRef)}>
                <option disabled selected>Select Category</option>
                <option value="underground">Underground</option>
                <option value="aboveground">Aboveground</option>
              </select>
           
            {currentState.validations.category?(
              <div className={commonStyle.error}>
                {currentState.validations.category}
                </div>
            ):('')}
          </div>
          <div>
            <label>Enter type</label>
            <select
              name="type" placeholder="Enter type" required
              ref={typeRef}
              onChange={() => changeHandler(typeRef)}>
                <option disabled selected>Select Type</option>
                <option value="root">Root</option>
                <option value="cruciferous">Cruciferous</option>
                <option value="allium">Allium</option>
                <option value="leafygreen">Leafy Green</option>
                <option value="marrow">Marrow</option>
                </select>
            {currentState.validations.type?(
              <div className={commonStyle.error}>
                {currentState.validations.type}
                </div>
            ):('')}
          </div>
          <div>
            <label>Enter price</label>
            <input
              name="price"
              type="number" placeholder="Enter price" required
              ref={priceRef}
              onChange={() => changeHandler(priceRef)}
            />
            {currentState.validations.price?(
              <div className={commonStyle.error}>
                {currentState.validations.price}
                </div>
            ):('')}
          </div>
          <div>
            <label>Enter Quantity</label>
            <input
              name="quantity"
              type="number"  placeholder="Enter quantity" required
              ref={quantityRef}
              onChange={() => changeHandler(quantityRef)}
            />
            {currentState.validations.quantity?(
              <div className={commonStyle.error}>
                {currentState.validations.quantity}
                </div>
            ):('')}
            <br />
            <button className="btn btn-primary">Add vegetable</button>
          </div>
        </form>
        <h2>{currentState.formStatus}</h2>
        {response.vegetable ? (
          <div>
            <h2>Vegetable added successfully</h2>
            <DisplayVegetable veg={response.vegetable} />
          </div>
        ) : (
          ""
        )}
        {response.error ? (
          <div className={commonStyle.error}>
            Request was not successful <br />
            {response.errMsg}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
