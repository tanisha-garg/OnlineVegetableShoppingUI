export default function DisplayFeedbackDetails({ feed }) {

    let { feedbackId,customerId,vegetableId,feedback,rating} = feed;

    return (

        <div>
            Feedback Id is {feedbackId}
            <br />
            Customer Id is {customerId}
            <br />
            Vegetable Id is {vegetableId}
            <br />
            Feedback is {feedback}
            <br />
            Rating is {rating}
            <br />
        </div>
    );
}


