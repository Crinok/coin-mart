/**
 * @author Chris Okebata
 */

/**
 * Takes an object and generates a url query string from its entries.
 * @param params
 * @returns {string}
 */
export const objectToQueryString = (params) => {
    return params && params !== 'undefined' ?
        Object.keys(params).map(key => key + '=' + params[key]).join('&') : ''
};