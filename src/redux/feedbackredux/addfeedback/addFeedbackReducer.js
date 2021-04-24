import addFeedbackConstants from "./addFeedbackConstants";

const intialState = {

    feed: undefined,
    error: ''

};

function addFeedbackReducer(state = intialState, action) {

    if (action.type === addFeedbackConstants.fail || action.type === addFeedbackConstants.success) {

        let newState = { ...state, ...action };
        return newState;
    }

    return state;

}

export default addFeedbackReducer;