import fetchBillByIdOnRequestConstants from "./fetchBillByIdOnRequestConstants";

const initialState = {
  progress: false,
  bill: undefined,
  error: "",
};

function fetchBillByIdOnRequestReducer(state = initialState, action) {
  if (
    action.type === fetchBillByIdOnRequestConstants.success ||
    action.type === fetchBillByIdOnRequestConstants.fail
  ) {
    let newState = { ...state, ...action };
    return newState;
  }

  return state;
}

export default fetchBillByIdOnRequestReducer;
