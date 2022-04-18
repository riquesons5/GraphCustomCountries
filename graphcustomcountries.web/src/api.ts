import axios from "axios";
import { CountryTS } from "./types/Country";

const http = axios.create({
    baseURL: 'http://localhost:5000/'
});

const countryController = '/Country';

export const api = {
    getCountries: async () => {
        let response = await http.get(countryController);
        return response.data;
    },

    getCountry: async (id: number) => {
        let response = await http.get(`${countryController}/${id}`);
        return response.data;
    },

    updateCountry:async (id: number, dto: CountryTS) => {
        let response = await http.put(`${countryController}/${id}`, dto);
        return response.data;
    }
}