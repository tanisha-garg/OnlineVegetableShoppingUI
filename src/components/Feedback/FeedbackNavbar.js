import { Link } from "react-router-dom";

function OrderNavbar() {
  return (
    <div className="container navbar mt-3">
      <Link to="/feedbackhome/feedbackdetails/:id">Feedback Details by Feedbackid</Link>

      <Link to="/feedbackhome/feedbacklist/">
        {" "}
        List of Feedbacks {" "}
      </Link>
      
      <Link to="/feedbackhome/feedbackbyvegetableid/:id">Feedback Details by Vegetable id</Link>
    </div>
  );
}

export default FeedbackNavbar;