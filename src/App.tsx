import * as React from 'react';
import './App.css';
import createHistory from 'history/createBrowserHistory';
import store from "./store";
import { Provider } from 'react-redux';

import {withRouter} from 'react-router';
import {Router, Route, Switch} from 'react-router-dom';
import {TransitionGroup ,CSSTransition } from "react-transition-group";
import HomeComponent from "./components/HomeComponent";
import Page1Component from "./components/Page1Component";
import MainComponent from "./components/MainComponent";

const history = createHistory();

class App extends React.Component {
    public render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <MainComponent/>
                </Router>
            </Provider>
        );
    }
}

export default App;
