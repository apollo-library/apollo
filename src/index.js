import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import {ThemeProvider} from 'styled-components';

//Config import
import config from './config';

import { Provider } from 'react-redux'
import store from './store'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <ThemeProvider theme={config}>
        <Provider store={store}>
            <App />
        </Provider>
    </ThemeProvider>,
    document.getElementById('root')
);
registerServiceWorker();
