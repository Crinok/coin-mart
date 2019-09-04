
/**
 * @author Chris Okebata
 */


export const requestOptions = () => {
    const API_KEY = KEY;

    return {
        headers: {
            'Content-Type': 'application/json',
            'X-CMC_PRO_API_KEY': `${API_KEY}`
        },
        qs: {
            'start': '1',
            'limit': '1',
            'convert': 'USD,BTC'
        },
        json: true,
        gzip: true
    };
};