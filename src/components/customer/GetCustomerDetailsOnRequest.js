import React, { useState } from "react";
import commonStyle from "./commonStyle.module.css";
import DisplayCustomerDetails from "./DisplayCustomerDetails";
import validationMessage from "./customerValidationMessage";
import { useDispatch, useSelector } from "react-redux";
import { getCustomerThunk } from "../../redux1/getCustomer/getCustomerAction";

const GetCustomerDetailsOnRequest = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => {
    return {
      customer: state.getCustomer.customer,
      error: state.getCustomer.error,
    };
  });
  const idRef = React.createRef();

  const initialState = {
    customerId: undefined,
    errMsg: undefined,
    validations: { id: undefined },
  };

  const [currentState, setNewState] = useState(initialState);

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(getCustomerThunk(currentState));
    if (currentState.validations.customerId) {
      return;
    }
  };

  const setFieldState = (ref) => {
    const idValue = idRef.current.value;

    let validationMsg;
    if (ref == idRef) {
      validationMsg = validateId(idValue);
    }

    const newValidations = {
      ...currentState.validations,
      customerId: validationMsg,
    };
    const newState = {
      ...currentState,
      customerId: idValue,
      errMsg: undefined,
      customer: undefined,
      validations: newValidations,
    };
    setNewState(newState);
  };

  const validateId = (id) => {
    if (id < 0 || id === 0) {
      return validationMessage.idSmallThanOne;
    }
    return undefined;
  };

  return (
    <div>
      <h3> Get Customer details on Request</h3>

      <div>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label>Enter Customer Id</label>

            <input
              name="id"
              type="number"
              ref={idRef}
              onChange={() => setFieldState(idRef)}
              className="form-control"
            />
            {currentState.validations.id ? (
              <div className={commonStyle.error}>
                {currentState.validations.id}
              </div>
            ) : (
              ""
            )}
          </div>

          <button className="btn btn-primary"> Get Customer </button>
        </form>
      </div>

      <div className="mt-5">
        {response.customer ? (
          <DisplayCustomerDetails customer={response.customer} />
        ) : (
          ""
        )}
        {response.error ? response.error : ""}
      </div>
    </div>
  );
};

export default GetCustomerDetailsOnRequest;
