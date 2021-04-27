export default function DisplayFeedbackDetails({ feed }) {

    let { feedbackId,custId,vegetableId,rating,comment} = feed;

    return (

        <div>
            Feedback Id is{feedbackId}
            <br/>
            Customer Id is{custId}
            <br/>
            Vegetable Id is {vegetableId}
            <br />
           
            Rating is {rating}
            <br />
            Comment is{comment}
            <br/>
        </div>
    );
}


