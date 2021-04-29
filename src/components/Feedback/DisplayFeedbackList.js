import DisplayFeedbackDetails from "./DisplayFeedbackDetails";

export default function DisplayFeedbackList({ feeds }) {

    return (

        <div>
            <ul className="list-group">
                {feeds.map((feed) => <li className="" key={feed.feedbackId}><DisplayFeedbackDetails feed={feed} /></li>)}
            </ul>
        </div>
    );



}