import {listingsConstants} from "../../_constants";

const getListingsRequest = () => ({
    type: listingsConstants.GET_LISTINGS_REQUEST
});

const getListingsSuccess = (response) => ({
    type: listingsConstants.GET_LISTINGS_SUCCESS,
    payload: {
        ...response
    }
});

const getListingsFailure = (error) => ({
    type: listingsConstants.GET_LISTINGS_FAILURE, error,
    payload: {
        error
    }
});

export const listingsActions = {
    getListingsRequest,
    getListingsSuccess,
    getListingsFailure,
};