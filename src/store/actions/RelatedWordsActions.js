import * as actionType from "./actionTypes"
import {getRelatedWordsAPI} from "../../utilities/apiHandler"

export const getRelatedWords = (payload) => {
    return dispatch => {
        dispatch(getRelatedWordsBegin())
    
        return getRelatedWordsAPI(payload)
            .then(res => {
                dispatch(getRelatedWordsSuccess(res.data)) 
            }).catch(err => {
               dispatch(getRelatedWordsFailure(err)) 
            })
    }
    
}

const getRelatedWordsBegin = () => {
    return {
        type: actionType.GET_RELATED_WORDS_BEGIN,
    }
}

const getRelatedWordsSuccess = (data) => {
    return {
        type: actionType.GET_RELATED_WORDS_SUCCESS,
        res: data
    }
}

const getRelatedWordsFailure = (err) => {
    return {
        type: actionType.GET_RELATED_WORDS_FAILURE,
        err: err
    }
}
