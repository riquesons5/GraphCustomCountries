import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:5000/'
});

const countryController = '/Country';

export const api = {
    getCountries: async () => {
        let response = await http.get(countryController)
        return response.data
    },
    getCountry: async (id: number) => {
        let response = await http.get(`${countryController}/${id}`)
        return response.data
    },
}