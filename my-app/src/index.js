import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Main from './Main';
import { Router } from "react-router";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();
ReactDOM.render(
    <Router history={history}>
        
            <Main />
       
    </Router>, document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
