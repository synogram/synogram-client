import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import {HashRouter} from "react-router-dom";
import Layout from "./containers/Layouts/Layout";
import Bootstrap from "./containers/Bootstrap/Bootstrap";
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import relatedWordsReducer from "./store/reducers/RelatedWordsReducer";
import summaryReducer from "./store/reducers/SummaryReducer";
import generalReducer from "./store/reducers/GeneralReducer";
import wordDictionaryReducer from "./store/reducers/WordDictionaryReducer";
import serverReducer from "./store/reducers/ServerReducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {RESET_REDUX_STATE} from "./store/actions/actionTypes";

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

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <Bootstrap>
          <Layout></Layout>
        </Bootstrap>
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
