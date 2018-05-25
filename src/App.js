//React imports
import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

//Redux
import { actions } from './store/actions'
import store from './store'

//Config
import config from './config'

import {Navbar} from './components';


//Store history of the router for updating the current page
const history = createHistory();

// Listen to URL changes and update the redux currentPage state
history.listen((location) => {
    store.dispatch(actions.updateCurrentPage(location.pathname));
});

class App extends Component {

    //Ensure the redux current page state is correct even after reloading
    componentWillMount() {
        store.dispatch(actions.updateCurrentPage(history.location.pathname));
    }

    render() {
        return (
            <div>
                <Navbar history={history} />
                <div onClick={() => {console.log("Find a way to run a function within the navbar to hide all the dropdowns")}}>
                    <Router history={history}>
                        <Switch>
                            {config.main.pages.map((page, index) =>
                                <Route exact path={page.path} component={page.componentName} key={index} />
                            )}
                        </Switch>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;
