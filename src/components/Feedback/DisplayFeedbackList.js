import DisplayFeedbackDetails from "./DisplayFeedbackDetails";

export default function DisplayFeedbackList({ feeds }) {

    return (

        <div>
            <ul>
                {feeds.map((feed) => <li key={feed.feedbackId}><DisplayFeedbackDetails feed={feed} /></li>)}
            </ul>
        </div>
    );



}