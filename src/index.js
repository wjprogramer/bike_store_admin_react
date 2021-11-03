import '@babel/polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import './i18n';
import store from './store';

import App from './components/App';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);

registerServiceWorker();