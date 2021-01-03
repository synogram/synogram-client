import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import {BrowserRouter} from "react-router-dom";
import axios from "axios";
import Layout from "./containers/Layouts/Layout";
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import relatedWordsReducer from "./store/reducers/RelatedWordsReducer"
import summaryReducer from "./store/reducers/SummaryReducer"
import generalReducer from "./store/reducers/GeneralReducer"
import wordDictionaryReducer from "./store/reducers/WordDictionaryReducer"
import {Provider} from "react-redux"
import thunk from 'redux-thunk'
import {RESET_REDUX_STATE} from "./store/actions/actionTypes"

// Set base URL Path for Axios requests
axios.defaults.baseURL = "";

const appReducer = combineReducers({
  related: relatedWordsReducer,
  summary: summaryReducer,
  general: generalReducer,
  dictionary: wordDictionaryReducer
});

const rootReducer = (state, action) => {
  if (action.type === RESET_REDUX_STATE) {
    state = undefined;
  }
  return appReducer(state, action);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <Layout></Layout>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
