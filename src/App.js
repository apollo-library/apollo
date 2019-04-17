//React imports
import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

//Redux
import { actions } from './store/actions'
import store from './store'

//Config
import config from './config'

import {Navbar, Scan} from './components';
import {Book, Report} from './containers';

//Store history of the router for updating the current page
const history = createHistory();

// Listen to URL changes and update the redux currentPage state
history.listen((location) => {
    store.dispatch(actions.updateCurrentPage(location.pathname));
});


class App extends Component {
    constructor() {
        super()
        this.hideAllPopups = this.hideAllPopups.bind(this);
    }

    //Ensure the redux current page state is correct even after reloading
    componentWillMount() {
        store.dispatch(actions.updateCurrentPage(history.location.pathname));
    }

    hideAllPopups() {
        store.dispatch(actions.hideNotifications());
        store.dispatch(actions.hideAccount());
    }

    render() {
        return (
            <Router history={history}>
                <div>
                    
                    <Navbar history={history} />
                    <Scan />
                    <div onClick={() => {this.hideAllPopups()}}>
                        <Switch>
                            {config.main.pages.map((page, index) =>
                                <Route exact path={page.path} component={page.componentName} key={index} />
                            )}
                            <Route exact path={'/report/:report'} component={Report}/>
                            <Route exact path={'/book/:book'} component={Book}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
