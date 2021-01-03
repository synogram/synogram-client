import * as actionTypes from "../actions/actionTypes"

const initialState = {
    definition: "",
    loading: false,
    error: null
}

const WordDictionaryReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_WORD_DICTIONARY_BEGIN:
            return {...state, loading: true}
        case actionTypes.GET_WORD_DICTIONARY_SUCCESS:
            return {...state, loading: false, definition: action.definition}
        case actionTypes.GET_WORD_DICTIONARY_FAILURE:
            return {...state, loading: false, error: action.err}
        default:
            return state
    }
}

export default WordDictionaryReducer