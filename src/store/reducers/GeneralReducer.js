import * as actionTypes from "../actions/actionTypes"

const initialState = {
    searchedWord: "",
    loading: false,
    error: null,
    wordChain: [],
}

const GeneralReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_SEARCH_WORD:
            return {
                ...state,
                searchWord: action.payload.searchWord
            }

        default: 
            return state;
    }
    
}

export default GeneralReducer