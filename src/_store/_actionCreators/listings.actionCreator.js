import {listingsActions} from "../_actions";
import {listingsService} from "../../_service";


const getListings = () => {

    return (dispatch) => {
        dispatch(listingsActions.getListingsRequest());

        listingsService.getListings()
            .then( (response) => {
                dispatch(listingsActions.getListingsSuccess(response));
            }).catch( error => {
            dispatch(listingsActions.getListingsFailure(error));
        })
    }
};

export const listingsActionCreator = {
    getListings,
};