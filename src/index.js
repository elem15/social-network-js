import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

// let rerenderEntireTree = () => {

    ReactDOM.render(
        // <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                <App />
                </Provider>
            </BrowserRouter>,
        // </React.StrictMode>,
        document.getElementById('root')
    );
// }

reportWebVitals();
// rerenderEntireTree(store.getState());
// rerenderEntireTree()
// store.subscribe( () => {
//     // let state = store.getState();
//     rerenderEntireTree();
//     // rerenderEntireTree(state);
// } );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

