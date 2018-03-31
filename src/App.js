//React imports
import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

//Styles
import './App.css';

//Config import
import config from './config';

import { actions } from './store/actions'
import store from './store'

//Font Awesome main imports
import fontawesome from '@fortawesome/fontawesome';

//Individual icons global import
import home from '@fortawesome/fontawesome-free-solid/faHome';
import book from '@fortawesome/fontawesome-free-solid/faBook';
import barcode from '@fortawesome/fontawesome-free-solid/faBarcode';
import users from '@fortawesome/fontawesome-free-solid/faUsers';
import signOutAlt from '@fortawesome/fontawesome-free-solid/faSignOutAlt'
import bug from '@fortawesome/fontawesome-free-solid/faBug'

//Add every icon we import to a global library
fontawesome.library.add(home, book, barcode, users, signOutAlt, bug)

const history = createHistory();

// Listen to URL changes and update the redux currentPage state
history.listen((location) => {
    store.dispatch(actions.updateCurrentPage(location.pathname));
});

class App extends Component {

    componentDidMount() {
        store.dispatch(actions.updateCurrentPage(history.location.pathname));
    }

    render() {
        return (
            <Router history={history}>
                <Switch>
                    {config.main.pages.map((page, index) =>
                        <Route exact path={page.path} component={page.componentName} key={index} />
                    )}
                </Switch>
            </Router>
        );
    }
}

export default App;
