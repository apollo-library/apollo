//React imports
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Styles
import './App.css';

//Config import
import config from './config.js';

//Container imports
import Home from './containers/home/home';
import Catalogue from './containers/catalogue/catalogue';
import Scan from './containers/scan/scan';
import Students from './containers/students/students';

//Font Awesome main imports
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

//Individual icons global import
import home from '@fortawesome/fontawesome-free-solid/faHome';
import book from '@fortawesome/fontawesome-free-solid/faBook';
import barcode from '@fortawesome/fontawesome-free-solid/faBarcode';
import users from '@fortawesome/fontawesome-free-solid/faUsers';

//Add every icon we import to a global library
fontawesome.library.add(home, book, barcode, users)

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    {config.main.pages.map((page, index) =>
                        <Route exact path={page.path} component={page.componentName} key={index} />
                    )};
                </Switch>
            </Router>
        );
    }
}

export default App;
