import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import AddFeedback from "./AddFeedback";
import DisplayFeedbackDetails from "./DisplayFeedbackDetails";
import DisplayFeedbackList from "./DisplayFeedbackList";
import GetFeedbackByVegetableId from "./GetFeedbackByVegetableId";

function FeedbackHome() {
    return (
      <div>
  
        <div className="container mt-5 w-75">
          <h2>Feedback Module</h2>
          <div className="col-md-12 mt-4">
            <p className="h5">Links to different features:</p>
            <ul className="list-group mt-4">
            <li className="list-group-item">
              <Link to="/feedbackhome/addfeedback">Click here</Link> &emsp;
              To add feedback : 
              
              </li>
              <li className="list-group-item">
              <Link to="/feedbackhome/feedbackbyvegetableid/:id">
                  {" "}
                  Click here{" "}
                </Link> &emsp;
                To get feedback details of a customer by passing vegetable id in the url:
                
               
              </li>
              
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FeedbackHome;