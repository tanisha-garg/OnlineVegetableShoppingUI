import React, { useState } from "react";
import { fetchVegetablesByName } from "../../service/VegetableService";
import DisplayVegetables from "./DisplayVegetables";

function GetVegetableByCategory(){

    const nameRef = React.createRef();

    const initialState = {category: undefined, vegetables: undefined, error:undefined};

    const[currentState, setNewState] = useState(initialState);

    const submitHandler = (event) => {
        event.preventDefault();
        const name = {...currentState};
        const promise = fetchVegetablesByName(name);
        promise.then((response) => {
            setNewState({...currentState, vegetables: response.data, error: undefined});
        })
        .catch((error) => {
            setNewState({...currentState, vegetables: undefined, error: error.message});
        })
    }

    const changeHandler = () => {
        let field = nameRef.current;
        let fieldValue = field.value;
        let newState = {...currentState, category: fieldValue};
        setNewState(newState);
    }

    return(
        <div className="container mt-4 w-75">
      <h3>Get Vegetable By Category</h3>
      <div>
        <form onSubmit={(event) => submitHandler(event)}>
          <div className="form-group">
            <label>Enter vegetable Category </label>
            <input
              type="text"
              name="vegname"
              ref={nameRef}
              onChange={() => changeHandler()}
              className="form-control"
              
            />
          </div>
          <button className="btn btn-primary">Get Vegetables</button>
        </form>
      </div>
      <div className="mt-5">
        <div>
          <ul>
            {currentState.vegetables ? (
              <div>
                <div className="alert alert-success">
                  Vegetables fetched successfully
                </div>
                <DisplayVegetables vegetables={currentState.vegetables} />
              </div>
            ) : (
              ""
            )}
          </ul>
        </div>
        {currentState.error ? (
          <div className="text-danger h6 mt-3">
            Request cannot be successful
            {currentState.error}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
    );

}

export default GetVegetableByCategory;