const { REACT_APP_RAPID_API_HOST='', REACT_APP_RAPID_API_KEY='' } = process.env;
const BASE_URL = `https://${REACT_APP_RAPID_API_HOST}`;


export const getVideosFromAPI = async (path) => {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': REACT_APP_RAPID_API_KEY,
            'x-rapidapi-host': REACT_APP_RAPID_API_HOST
        }
    };
    try {
        const response = await fetch(`${BASE_URL}/${path}`, options);
        const result = await response.json();
        return result;
    } catch(e) {
        console.log("Error occured", e);
        return null;
    }
}