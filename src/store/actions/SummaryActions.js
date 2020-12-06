import * as actionsTypes from "../actions/actionTypes"
import {getSummaryAPI} from "../../utilities/apiHandler"

export const getSummary = (payload) => {
    return dispatch => {
        dispatch(getSummaryBegin())

        return getSummaryAPI(payload)
            .then(res => {
                dispatch(getSummarySuccess(res.data))
            })
            .catch(err => {
                dispatch(getSummaryFailure(err))
            })
    }
}

const getSummaryBegin = () => {
    return {
        type: actionsTypes.GET_WORD_SUMMARY_BEGIN
    }
}

const getSummarySuccess = (data) => {
    return {
        type: actionsTypes.GET_WORD_SUMMARY_SUCCESS,
        summary: data

    }
}

const getSummaryFailure = (err) => {
    return {
        type: actionsTypes.GET_WORD_SUMMARY_FAILURE,
        err: err
    }
}