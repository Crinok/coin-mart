import { combineReducers } from 'redux';
import {listingsReducer} from '../_reducers'

/**
 * @author Chris Okebata
 */

const rootReducer = combineReducers({
    listingsData: listingsReducer
});

export default rootReducer;