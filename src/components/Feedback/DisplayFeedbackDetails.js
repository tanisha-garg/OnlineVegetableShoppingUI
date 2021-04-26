export default function DisplayFeedbackDetails({ feed }) {

    let { feedbackId,customerId,vegetableId,feedback,rating} = feed;

    return (

        <div>
            Vegetable Id is {vegetableId}
            <br />
            Feedback is {feedback}
            <br />
            Rating is {rating}
            <br />
        </div>
    );
}


