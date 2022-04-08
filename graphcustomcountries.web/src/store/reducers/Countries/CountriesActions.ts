import { getCountries, getCountry } from '../../../services/Countries/ServCountries';
import { types } from './Countries';

export function removeAllCountries() {
    return (dispatch:Function) => {
        dispatch({
            type: types.REMOVE_ALL_COUNTRIES,
            payload: []
        });
    }
};

export function addAllCountries() {
    return async (dispatch:Function) => {
        const countries = await getCountries();

        dispatch({
            type: types.ADD_COUNTRIES,
            payload: countries
        });
    }
};

export function addCountry(id: number) {
    return async (dispatch:Function) => {
        const country = await getCountry(id);

        dispatch({
            type: types.ADD_COUNTRY,
            payload: country
        });
    }
}