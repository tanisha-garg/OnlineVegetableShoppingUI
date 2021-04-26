import { addFeedback } from "../../../service/FeedbackService";
import store from "../store";
import addFeedbackConstants from "./addFeedbackConstants.js";

function addFeedbackSuccess() {

    return ({

        feed: feed,
        error: '',
        type: addFeedbackConstants.success
    });

}

function addFeedbackFail(error) {

    return (

        {
            pack: undefined,
            error: error,
            type: addFeedbackConstants.fail
        });
}

function addFeedbackAction(data) {

    return () => {

        const promise = addFeedback(data);
        promise.then(

            response => {

                const feed = response.data;
                let actionObj = addFeedbackSuccess(feed);
                store.dispatch(actionObj);
            }

        ).catch(error => {

            let actionObj = addFeedbackFail(error.message);
            store.dispatch(actionObj);
        })

    }


}

export { addFeedbackAction, addFeedbackSuccess, addFeedbackFail };