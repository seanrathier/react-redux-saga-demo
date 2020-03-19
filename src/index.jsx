import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from '@material-ui/core/styles';
import store, { history } from './store';
import defaultTheme from './themes/default';
import App from './containers/App';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ThemeProvider theme={defaultTheme}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>,
  target,
);
