export default function DisplayFeedbackDetails({ feed }) {

    let { feedbackId,vegetableId,feedback,rating,comments} = feed;

    return (

        <div>
            Feedback Id is{feedbackId}
            <br/>
            Vegetable Id is {vegetableId}
            <br />
            Feedback is {feedback}
            <br />
            Rating is {rating}
            <br />
            Comments is{comments}
            <br/>
        </div>
    );
}


