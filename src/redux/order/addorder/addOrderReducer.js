import addOrderConstants from "./addOrderConstants";

const initialState = {
  progress: false,
  order: undefined,
  error: "",
};

function addOrderReducer(state = initialState, action) {
  if (
    action.type === addOrderConstants.addOrderSuccess ||
    action.type === addOrderConstants.addOrderFail
  ) {
    const newState = { ...state, ...action };
    return newState;
  }
  return state;
}

export default addOrderReducer;
