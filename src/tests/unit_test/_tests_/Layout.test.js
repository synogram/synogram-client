import React from "react";
import {shallow} from "enzyme";
import Layout from "../../../containers/Layouts/Layout";
import Bootstrap from "../../../containers/Bootstrap/Bootstrap";
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import relatedWordsReducer from "../../../store/reducers/RelatedWordsReducer";
import summaryReducer from "../../../store/reducers/SummaryReducer";
import generalReducer from "../../../store/reducers/GeneralReducer";
import wordDictionaryReducer from "../../../store/reducers/WordDictionaryReducer";
import serverReducer from "../../../store/reducers/ServerReducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {RESET_REDUX_STATE} from "../../../store/actions/actionTypes";

const appReducer = combineReducers({
  related: relatedWordsReducer,
  summary: summaryReducer,
  general: generalReducer,
  dictionary: wordDictionaryReducer,
  server: serverReducer,
});

const rootReducer = (state, action) => {
  if (action.type === RESET_REDUX_STATE) {
    state = {
      related: undefined,
      summary: undefined,
      general: undefined,
      dictionary: undefined,
      server: state.server,
    };
  }
  return appReducer(state, action);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

describe("Test basic Layout component", () => {
  it("renders without crashing", () => {
    shallow(
      <Provider store={store}>
        <Bootstrap>
          <Layout></Layout>
        </Bootstrap>
      </Provider>
    );
  });
});
