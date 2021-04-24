import React, { useState } from "react";
import DisplayVegetable from "./DisplayVegetable";
import validationMessage from "./validationMessage";
import commonStyle from "./commonStyle.module.css";
import VegetableService from "../../service/vegetable/VegetableService";

/**
 * 
 * Get Vegetable Component
 */

export default function GetVegetableDetailsOnRequest() {
    const veg = {
      id: 1,
      name: "potato",
      category: "underground",
      type: "root",
      quantity: 20,
      price: 30,
    };
  
    const idRef = React.createRef();
  
    let [state, setFormState] = useState({
      id: undefined,
      validations:{id:undefined}
    });

    const response={ vegetable: undefined,error: undefined,}

/**
 * 
 * Set ID Handler Function
 */
  
    const setIdHandler = () => {
      const idValue=idRef.current.value;
      let ValidationsMsg=validateId(idValue);
      const newValidations={...state.validations,id:idValue,validations:ValidationsMsg};
      let newState = {
        ...state,
        id: idValue,
        vegetable: undefined,
        errMsg: undefined,
        validations:newValidations
      };
      setFormState(newState);
    };
    
/**
 * 
 * Submit Handler Function
 */
  
    const submitHandler = (event) => {
      event.preDefault();
      console.log("inside submit handler " , state);
      if(state.validations.id){
          return;
        }
        let data={...state};
        const promise = VegetableService.fetchVegetableById(state.id);
        promise.then((response)=>
          setFormState({...state,formStatus: "vegetable fetched successfully",vegetable:response.data})
        )
        .catch((error)=>
        setFormState({...state,errMsg:error.message}));
    };
  
    /**
   *  validating id is positive
   */
     const validateId = (id) => {
      if (id<0) {
        return validationMessage.idSmallerThanZero;
      }
      return undefined;
    }
  
    return (
      <div>
        <h2>Get Vegetable Details</h2>
        <form onSubmit={(event) => submitHandler(event)}>
            <div className="form-group">
          <div>
            <label>Enter Veg Id</label>
            <input
              name="id"
              type="number" placeholder="Enter veg Id"
              ref={idRef}
              onChange={() => setIdHandler()}
            />
            {state.validations.id ? (
              <div className={commonStyle.error}>
                {state.validations.id}
              </div>
            ) : (
              ""
            )}
            </div>
          </div>
          <button>Get Vegetable </button>
        </form>
        {state.vegetable ? (
          <div>
            <h2>
              <i>Vegetable Details</i>
            </h2>
            <DisplayVegetable veg={state.vegetable} />
          </div>
        ) : (
          ""
        )}
        {state.errMsg ? (
          <div>
            Request was not successful
            <br />
            {state.errMsg}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
  