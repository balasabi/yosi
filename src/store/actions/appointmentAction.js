import { createAppointment, fetchAppointment } from '../reducers/appointmentReducer';

export function createAppointmentAction(data) {
    return async dispatch => {
        dispatch(createAppointment(data))
    }
}
// export function fetchAppointmentAction(data) {
// 	return async dispatch => {
// 		dispatch(fetchAppointment(data))
// 	}
// }