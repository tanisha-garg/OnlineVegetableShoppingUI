import React, { useState } from "react";
import DisplayFeedbackDetails from "./DisplayFeedbackDetails";
import commonStyle from "./commonStyle.module.css"
import "bootstrap/dist/css/bootstrap.min.css"
import {addFeedback} from "../../service/FeedbackService"

export default function AddFeedback() {


    const ratingRef = React.createRef();
    const customerIdRef = React.createRef();
    const vegetableIdRef = React.createRef();
    const commentRef= React.createRef();

      const response={   feed:undefined,errMsg: undefined};
    const initialState = {
        rating: undefined,
        customerId:undefined,
        vegetableId:undefined,
        comment:undefined,
        
    };

     const [currentState, setNewState] = useState(initialState);

    const submitHandler = (event) => {

        event.preventDefault();
        //setNewState({ ...currentState, formStatus: "form submitted successfully" });

        let formData = { ...currentState };
        const promise = addFeedback(formData);
    promise
      .then((response) =>
        setNewState({ ...currentState, feedback: response.data })
      )
      .catch((error) =>
        setNewState({ ...currentState, errMsg: error.message})
        );
    
    
      };  
      

      const setFieldState = (ref) => {

        const fieldName = ref.current.name;
        const fieldValue = ref.current.value;
        const newState = {

            ...currentState,
            [fieldName]: fieldValue,
            errMsg: undefined,
        };

        setNewState(newState);
       

    };

    return (

      <div className="container">
          <form onSubmit={(event) => submitHandler(event)}>
          <div className="form-group">
          <label>Enter CustomerId</label>
                <input className="form-control" type="text"  name="customerId" ref={customerIdRef} onChange={()=>setFieldState(customerIdRef)} /> 
                
              </div> 
              <div className="form-group">
              <label>Enter VegetableId</label>
                <input type="text" className="form-control"  name="vegetableId" ref={vegetableIdRef} onChange={()=>setFieldState(vegetableIdRef)} /> 
            
              </div> 
        
              <div className="form-group"> 
                  <label>Enter Rating</label>
                  <select
                  className="form-control"
                      name="rating"
                      type="number"
                      ref={ratingRef}
                      onChange={() => setFieldState(ratingRef)}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      </select>
                  <br /> 
              </div>
              <div className="form-group">
                <label>Comments</label>
                <textarea  className="form-control" placeholder="add comments" name="comment" ref={commentRef} onChange={()=>setFieldState(commentRef)} /> 
        
              </div>
              <button type="submit" className="form-control" className="btn btn-primary">Add Feedback</button>
          </form>
          <h2>{currentState.formStatus}</h2>

          {
              currentState.feedback ? (

                  <div>
                      <h2>Feedback Added Successfully</h2>
                      <DisplayFeedbackDetails feed={currentState.feedback} />
                  </div>

              ) : ""}

          {
              currentState.errMsg ? (

                  <div className={commonStyle.error}>
                      Feedback Request Was Not Successful <br />
                      {currentState.errMsg}
                  </div>

              ) : ""}
      </div>
  );

}

