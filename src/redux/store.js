import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools  } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import landingPageReducer from './reducers/landingPageReducer'

const rootReducer = combineReducers({
    landingPage : landingPageReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;