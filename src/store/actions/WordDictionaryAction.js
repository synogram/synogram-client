import * as actionsTypes from "./actionTypes"
import {getDictionaryDefinitionAPI} from "../../utilities/apiHandler"

export const getWordDictionary = (payload) => {
    return dispatch => {
        dispatch(getWordDictionaryBegin())

        return getDictionaryDefinitionAPI(payload)
            .then(res => {
                dispatch(getWordDictionarySuccess(res.data))
            })
            .catch(err => {
                dispatch(getWordDictionaryFailure(err))
            })
    }
}

const getWordDictionaryBegin = () => {
    return {
        type: actionsTypes.GET_WORD_DICTIONARY_BEGIN
    }
}

const getWordDictionarySuccess = (data) => {
    return {
        type: actionsTypes.GET_WORD_DICTIONARY_SUCCESS,
        definition: data[0].meanings[0].definitions[0].definition
    }
}

const getWordDictionaryFailure = (err) => {
    return {
        type: actionsTypes.GET_WORD_DICTIONARY_FAILURE,
        err: err
    }
}