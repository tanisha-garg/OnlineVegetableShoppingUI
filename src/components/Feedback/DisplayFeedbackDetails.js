export default function DisplayFeedbackDetails({ feed }) {

   // let { feedbackId,custId,vegetableId,rating,comment} = feed;

    return (

        <div>
            Feedback Id is{feed.feedbackId}
            <br/>
            Customer Id is{feed.custId}
            <br/>
            Vegetable Id is {feed.vegetableId}
            <br />
           
            Rating is {feed.rating}
            <br />
            Comment is{feed.comment}
            <br/>
        </div>
    );
}


