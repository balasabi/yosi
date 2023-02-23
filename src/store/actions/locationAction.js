import { createLocation, updateLocation } from '../reducers/locationReducer';

export function createLocationAction(data) {
    return async dispatch => {
        dispatch(createLocation(data))
        // console.log("****createLocationAction******"+JSON.stringify(data))
    }
}
export function updateLocationAction(data) {
    return async dispatch => {
        dispatch(updateLocation(data))
        // console.log("****updateLocationAction******"+JSON.stringify(data))
    }
}