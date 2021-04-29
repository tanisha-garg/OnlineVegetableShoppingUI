import { Route, Switch } from "react-router";
import AddFeedback from "../components/Feedback/AddFeedback";
import GetFeedbackByVegetableId from "../components/Feedback/GetFeedbackByVegetableId";
import "./page.css";

const FeedbackPage = (props) => {
    return (
      <div className="container mt-5 mb-5">
        <div className="page">
          <div className="pageButton">
            <button
              className="btn btn-outline-secondary"
              onClick={() =>
                props.history.push(`${props.match.url}/addfeedback`)
              }
            >
              Add Feedback
            </button>
            <button
            className="btn btn-outline-secondary"
            onClick={() =>
              props.history.push(`${props.match.url}/feedbackbyvegetableid/:id`)
            }
          >
            View Feedback By Vegetable Id
          </button>
          </div>
        <div className="pageLine"></div>
        <div className="pageContainer">
        <Switch>
            <Route
              exact
              path={`${props.match.url}/addfeedback`}
              component={AddFeedback}
            />
            <Route
              exact
              path={`${props.match.url}/feedbackbyvegetableid/:id`}
              component={GetFeedbackByVegetableId}
            />
             </Switch>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;