import { createCountry, updateCountry } from '../reducers/countryReducer';

export function createCountryAction(data) {
    return async dispatch => {
        dispatch(createCountry(data))
    }
}
export function updateCountryAction(data) {
    return async dispatch => {
        dispatch(updateCountry(data))
    }
}