import axios from "axios";
import { SERVER_URL } from '../_config';
import { requestOptions } from "../_utils";

/**
 * @author Chris Okebata
 */

const getListings = () => {
    const latestListingsURL = `${SERVER_URL}/v1/cryptocurrency/listings/latest`;
    const reqOptions = requestOptions();

    return axios.get(latestListingsURL, reqOptions);
};


export const listingsService = {
    getListings,
};