import React from 'react';
import { render } from 'react-dom';
import App from './app';
import { AppContainer } from 'react-hot-loader';

render(
    <App />
    , document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./app', () => {
        const NextApp = require('./app').default;
        render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            document.getElementById('app')
        );
    });
}
