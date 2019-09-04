import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../_store/_reducers/root.reducer';
import { createLogger } from 'redux-logger';
import {composeWithDevTools} from "redux-devtools-extension";

/**
 * @author Chris Okebata
 */

/**
 * Disable react-logger in production environment
 * @type {Store<any, Action<any>> & Store<S & {}, A> & {dispatch: Dispatch<A>}}
 */
let store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
    )
);

/**
 * Enable react-logger in development environment
 */
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    const loggerMiddleware = createLogger();
    store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))
    );
}

export { store }