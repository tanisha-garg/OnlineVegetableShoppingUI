import FeedbackNavbar from "./FeedbackNavbar";
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
              <Link to="/feedbackhome/feedbackdetails/:id">Click here</Link> &emsp;
                To get feedback details by giving feedback id in the url: 
              </li>
              <li className="list-group-item">
              <Link to="/feedbackhome/feedbacklist/:id">
                  {" "}
                  Click here{" "}
                </Link> &emsp;
                To get feedback list of a customer by passing feedback id in the url:
                
               
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
       {/* <Router>
        <FeedbackNavbar />
        <Switch>
        <Route exact path="/feedbackdetails/:id" component={DisplayFeedbackDetails} />
        <Route exact path="/feedbackhome/feedbacklist/:id" component={DisplayFeedbackList} />
        <Route exact path="/feedbackhome/feedbackbyvegetableid/:id" component={GetFeedbackByVegetableId} />
        </Switch>
        
      </Router> */}
    </div>
  );
}

export default FeedbackHome;