import { getCountries } from '../../../services/Countries/ServCountries';
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

        debugger;

        dispatch({
            type: types.ADD_COUNTRIES,
            payload: countries
        });
    }
};