import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import { Provider, connect } from 'react-redux';

import togglePreloader from './redux/actions/togglePreloader';

window.onload = store.dispatch(togglePreloader());

const mapStateToProps = state => ({
  isLoaded: state.landingPage.isLoaded
})

const AppContainer = connect(mapStateToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <AppContainer />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
