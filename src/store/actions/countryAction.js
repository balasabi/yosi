import { createCountry, updateCountry } from '../reducers/countryReducer';

export function createCountryAction(data, state, setState) {
    return async dispatch => {
        dispatch(createCountry(data))
        setState({...state, countryCodeOpen: false})
    }
}
export function updateCountryAction(data, state, setState) {
    return async dispatch => {
        dispatch(updateCountry(data))
        setState({...state, countryCodeOpen: false})
    }
}