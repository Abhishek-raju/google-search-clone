import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key:'AIzaSyC2lSaekNDj3R8mwlfvP2y8aCmW-_0yHPA',
    cx:'e36d95834ac1b4b95',
};

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload},
    })
    console.log(data);
    return data;
};
