import commonStyle from "./commonStyle.module.css";

export default function DisplayFeedbackDetails({ feed }) {

   // let { feedbackId,custId,vegetableId,rating,comment} = feed;

    return (
        <div>
        <ul className="list-group mt-5">
          <li className="list-group-item"> Feedback Id: {feed.feedbackId} </li>
          <li className="list-group-item"> Customer Id: {feed.custId}</li>
          <li className="list-group-item">Vegetable Id: {feed.vegetableId} </li>
          <li className="list-group-item">Rating: {feed.rating} </li>
          <li className="list-group-item">Comment: {feed.comment} </li>
        </ul>
      </div>

       
    );
}