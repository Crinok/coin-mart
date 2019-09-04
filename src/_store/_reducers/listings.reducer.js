import {listingsConstants} from "../../_constants";

/**
 * @author Chris Okebata
 */

const INITIAL_STATE = {
    listings: {},
    loading: true,
    error: '',
};

export const listingsReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case listingsConstants.GET_LISTINGS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case listingsConstants.GET_LISTINGS_SUCCESS:
            return {
                ...state,
                loading: false,
                listings: action.payload,
            };
        case listingsConstants.GET_LISTINGS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        default:
            return state
    }
}