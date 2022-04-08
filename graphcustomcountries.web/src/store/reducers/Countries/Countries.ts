import IAction from '../../../infra/IAction';

export const types = {
    ADD_COUNTRIES: 'ADD_COUNTRIES',
    REMOVE_ALL_COUNTRIES: 'REMOVE_ALL_COUNTRIES',
    ADD_COUNTRY: 'ADD_COUNTRY'
};

const initialState = {
    countries: []
};

export default (state = initialState, action:IAction) => {
    switch (action.type) {
        case types.ADD_COUNTRIES:
            return {
                ...state,
                countries: [
                    ...state.countries,
                    ...action.payload
                ]
            };
        case types.REMOVE_ALL_COUNTRIES:
            return {
                ...state,
                countries: []
            };
        case types.ADD_COUNTRY:
            return {
                ...state,
                country: action.payload
            }
        default:
            return state
    }
}