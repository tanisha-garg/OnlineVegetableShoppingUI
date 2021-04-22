import React, { useState } from "react";
import DisplayFeedbackDetails from "./DisplayFeedbackDetails";
import commonStyle from "./commonStyle.module.css"

export default function AddFeedback() {


    const feedbackRef = React.createRef();
    const ratingRef = React.createRef();
    const customerIdRef = React.createRef();
    const vegetableIdRef = React.createRef();

      const response={   feed:undefined,errMsg: undefined};
    const initialState = {
        feedback: undefined,
        rating: undefined,
        customerId:undefined,
        vegetableId:undefined,
        formStatus: "",
    };

     const [currentState, setNewState] = useState(initialState);

    const submitHandler = (event) => {

        event.preventDefault();
        //setNewState({ ...currentState, formStatus: "form submitted successfully" });

        let formData = { ...currentState };
        console.log("form data that has to be sent to service", formData)
    
    
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

      <div>
          <form onSubmit={(event) => submitHandler(event)}>
              <div>
                  <label>Enter Feedback</label>
                  <select
                      name="feedback"
                      type="text"
                      ref={feedbackRef}
                      onChange={() => setFieldState(feedbackRef)}>
                      <option value="Good">Good</option>
                      <option value="Average">Average</option>
                      <option value="Bad">Bad</option>
                      </select>
                  
              </div>
              <div>
                  <label>Enter Customer Id</label>
                  <select
                      name="customerId"
                      type="number"
                      ref={customerIdRef}
                      onChange={() => setFieldState(customerIdRef)}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      </select>
                  
              </div>
              <div>
                  <label>Enter Rating</label>
                  <select
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
                  <button type="submit">Add Feedback</button>
              </div>
          </form>
          <h2>{currentState.formStatus}</h2>

          {
              currentState.feed ? (

                  <div>
                      <h2>Feedback Added Successfully</h2>
                      <DisplayFeedbackDetails feed={currentState.feed} />
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

