import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from 'redux-devtools-extension';

import landingPageReducer from './reducers/landingPageReducer'

const rootReducer = combineReducers({
    landingPage : landingPageReducer
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;