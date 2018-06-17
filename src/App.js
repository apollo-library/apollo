//React imports
import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ReactGA from 'react-ga';

//Temp, Cameron will remove soon
import Test from './tests/index.js';

//Redux
import { actions } from './store/actions'
import store from './store'

//Config
import config from './config'

import {Navbar} from './components';

//Store history of the router for updating the current page
const history = createHistory();

//Initialise Google Analytics with tracking ID
ReactGA.initialize(config.main.googleAnalyicsTrackingID);

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
                    <Route path="/" render={({location}) => {
                        ReactGA.set({ page: location.pathname });
                        ReactGA.pageview(location.pathname);
                        return null;
                        }
                    } />
                    <Navbar history={history} />
                    <div style={{minHeight: '100vh'}} onClick={() => {this.hideAllPopups()}}>

                            <Switch>
                                {config.main.pages.map((page, index) =>
                                    <Route exact path={page.path} component={page.componentName} key={index} />
                                )}
                                <Route exact path={'/testing'} component={Test}/>
                            </Switch>

                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
