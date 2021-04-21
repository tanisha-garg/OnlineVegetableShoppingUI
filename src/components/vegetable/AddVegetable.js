import React, { useState } from "react";
import DisplayVegetable from "./DisplayVegetables";
import validationMessage from "./validationMessage";
import commonStyle from "./commonStyle.module.css";


/**
 * 
 * Add Vegetable Component
 */
export default function AddVegetable() {
    const veg = {
      id: 1,
      name: "potato",
      category: "underground",
      type: "root",
      quantity: 20,
      price: 30,
    };
  
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
      vegetable: undefined,
      errMsg: undefined,
      formStatus: "",
      validations:{name:undefined,category:undefined,type:undefined,quanity:undefined,price:undefined}
    };
  
    const [currentState, setNewState] = useState(initialState);
  
    const submitHandler = (event) => {
      event.preventDefault();
      setNewState({ ...currentState, formStatus: "form submitted successfully" });
    };
  
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
        <form onSubmit={(event) => submitHandler(event)}>
          <div className="form-group">
            <label>Enter name</label>
            <input
              name="name"
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
            <input
              name="category"
              ref={categoryRef}
              onChange={() => changeHandler(categoryRef)}
            />
            {currentState.validations.category?(
              <div className={commonStyle.error}>
                {currentState.validations.category}
                </div>
            ):('')}
          </div>
          <div>
            <label>Enter type</label>
            <input
              name="type"
              ref={typeRef}
              onChange={() => changeHandler(typeRef)}
            />
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
              type="number"
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
              type="number"
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
        <h2>Details Entered By User</h2>
        name is :{currentState.name} <br />
        category is :{currentState.category} <br />
        type is:{currentState.type} <br />
        quantity is :{currentState.quantity} <br />
        price is :{currentState.price}
        {currentState.vegetable ? (
          <div>
            <h2>Vegetable added successfully</h2>
            <DisplayVegetable veg={currentState.vegetable} />
          </div>
        ) : (
          ""
        )}
        {currentState.errMsg ? (
          <div className={commonStyle.error}>
            Request was not successful <br />
            {currentState.errMsg}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
  