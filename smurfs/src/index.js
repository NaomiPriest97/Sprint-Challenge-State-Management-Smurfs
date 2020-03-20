import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import { createStore, applyMiddleware } from 'redux';
import { appReducer } from './reducers/appReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(appReducer, applyMiddleware(thunk));


ReactDOM.render(
<Provider store={store}>
    <App />
    </Provider>, 
    document.getElementById("root"));
