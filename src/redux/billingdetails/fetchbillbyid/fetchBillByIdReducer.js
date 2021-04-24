import fetchBillByIdConstants from "./fetchBillByIdConstants";

const initialState = {
  progress: false,
  bill: undefined,
  error: "",
};

function fetchBillByIdReducer(state = initialState, action) {
  if (
    action.type === fetchBillByIdConstants.fetchByIdRequest ||
    action.type === fetchBillByIdConstants.fetchByIdSuccess ||
    action.type === fetchBillByIdConstants.fetchByIdFail
  ) {
    let newState = { ...state, ...action };
    return newState;
  }

  return state;
}

export default fetchBillByIdReducer;
