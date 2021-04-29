import React, { useEffect, useState } from "react";
import commonStyle from "./commonStyle.module.css";
import { useDispatch } from "react-redux";
import { fetchFeedbackByVegetableId } from "../../service/FeedbackService";
import DisplayFeedbackList from "./DisplayFeedbackList";

export default function GetFeedbackByVegetableId(props) {

   const initialState={feedback:undefined, errMsg:undefined};
   const [currentState,setNewState]=useState(initialState);
 

    const fetchFeedbackOnRender=()=>{
        const id=props.match.params.id;
    const promise=fetchFeedbackByVegetableId(id);
    promise.then((response)=>{
        const newState={...currentState, feedback:response.data};
        console.log("insideComponent",response.data)
        setNewState(newState);

    })
    .catch((error)=>{
        const newState={...currentState, errMsg:error.message};
        setNewState(newState);
    })
    }
    
    useEffect(fetchFeedbackOnRender,[]);

    return (
        <div>
            {
                currentState.feedback ? (
                    <div>
                        <DisplayFeedbackList feeds={currentState.feedback} />
                    </div>

                ) : ""}

            {
                currentState.errMsg ? (
                    <div className={commonStyle.error}>
                        Feedback Request Processing Unsuccessful
                        <br />
                        {currentState.errMsg}
                    </div>
                ) : ""}
        </div>
    
    )

}