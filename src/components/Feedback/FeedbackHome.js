import commonStyle from "./commonStyle.module.css";

export default function FeedbackHome() {

  return (

    <div>
      <h1> Feedback App </h1>

      <div className={commonStyle.content}>
        <div>
          This is Feedback app
          <br />
          please use the available features
        </div>
      </div>
    </div>
  );
}