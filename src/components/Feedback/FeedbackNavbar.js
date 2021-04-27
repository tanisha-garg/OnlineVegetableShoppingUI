import { Link } from "react-router-dom";

function OrderNavbar() {
  return (
    <div className="container navbar mt-3">
      <Link to="/feedbackhome/feedbackdetails/:id">Feedback Details by Feedback id</Link>

      <Link to="/feedbackhome/feedbacklist/:id"> List of Feedbacks by Feedback id</Link>

      <Link to="/feedbackhome/feedbackbyvegetableid/:id">Feedback Details by Vegetable id</Link>
    </div>
  );
}

export default FeedbackNavbar;