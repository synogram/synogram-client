import * as actionTypes from "../actions/actionTypes";
import {searchTree} from "../../utilities/helperFunctions";

const initialState = {
  relatedWordsTree: [],
  relatedWords: [],
  loading: false,
  error: null,
};

const RelatedWordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_RELATED_WORDS_BEGIN:
      const rootNode = [
        {
          name: action.searchWord,
        },
      ];
      return {...state, loading: true, error: null, relatedWordsTree: rootNode};
    case actionTypes.GET_RELATED_WORDS_SUCCESS:
      const words = action.res.map((element) => {
        return {
          name: element,
        };
      });
      const relatedWordsTree = state.relatedWordsTree;
      relatedWordsTree[0].children = words.slice(2, 6);
      return {
        ...state,
        loading: false,
        relatedWordsTree: relatedWordsTree,
        relatedWords: action.res,
      };

    case actionTypes.GET_RELATED_WORDS_FAILURE:
      return {...state, loading: false, error: action.err};

    case actionTypes.ADD_RELATED_WORDS_BEGIN:
      return {...state, loading: true, error: null};

    case actionTypes.ADD_RELATED_WORDS_SUCCESS:
      const childrenWords = action.res.map((element) => {
        return {
          name: element,
        };
      });
      // Add Element to Tree
      const relatedWordsCopy = state.relatedWordsTree;
      const parentNode = searchTree(relatedWordsCopy[0], action.searchWord);
      parentNode.children = childrenWords.slice(2, 6);

      // Add Element to related list
      return {
        ...state,
        loading: false,
        relatedWordsTree: relatedWordsCopy,
        relatedWords: action.res,
      };

    case actionTypes.ADD_RELATED_WORDS_FAILURE:
      return {...state, loading: false, error: action.err};

    default:
      return state;
  }
};

export default RelatedWordsReducer;
