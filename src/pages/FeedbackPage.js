import { Route, Switch } from "react-router";
import AddFeedback from "../components/Feedback/AddFeedback";
import GetfeedbackByVegetableId from "../components/Feedback/GetFeedbackByVegetableId";
import "./page.css";

const FeedbackPage = (props) => {
    return (
      <div className="container mt-5 mb-5">
        <div className="page">
          <div className="pageButton">
            <button
              className="btn btn-outline-secondary"
              onClick={() =>
                props.history.push(`${props.match.url}/feedbackhome/addfeedback`)
              }
            >
              Add Feedback
            </button>
            <button
            className="btn btn-outline-secondary"
            onClick={() =>
              props.history.push(`${props.match.url}/feedbackhome/feedbackbyvegetableid/:id`)
            }
          >
            View Feedback by Vegetable Id
          </button>
          </div>
        <div className="pageLine"></div>
        <div className="pageContainer">
        <Switch>
            <Route
              exact
              path={`${props.match.url}/feedbackhome/addfeedback`}
              component={AddFeedback}
            />
            <Route
              exact
              path={`${props.match.url}/feedbackhome/feedbackbyvegetableid/:id`}
              component={AddFeedback}
            />
             </Switch>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;