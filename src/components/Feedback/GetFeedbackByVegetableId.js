import React, { useEffect, useState } from "react"
import DisplayFeedbackDetails from "./DisplayFeedbackDetails"
import commonStyle from "./commonStyle.module.css"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

export default function GetFeedbackByVegetableId({vegetableId}) {

    const currentState=useSelector(state=>{
        return({
            feedback:state.fetchFeedbackById.feedback,
            error:state.fetchFeedbackById.error

        })
    })

    const dispatch=useDispatch();

    const fetchFeedbackOnRender=()=>{
        const id=props.match.params.id;
        dispatch(fetchFeedbackById(id));
    }
    
    useEffect(fetchFeedbackOnRender(),[]);

    return (
        <div>
            {
                currentState.feedback ? (
                    <div>
                        <DisplayFeedbackDetails feedback={currentState.feedback} />
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