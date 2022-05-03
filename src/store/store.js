import {legacy_createStore as createStore, compose, applyMiddleware} from 'redux'

/* import {configureStore} from '@reduxjs/toolkit'   
 */
import { rootReducer } from '../reducers/rootReducers'
import thunk from 'redux-thunk'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


 export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);  

/* export const store = configureStore({
    reducer: {
        rootReducer
    }
}) */