import { createAppointment, fetchAppointment, createAppointmentLength } from '../reducers/appointmentReducer';
import moment from 'moment'

export function createAppointmentAction(data, appointment) {
    return async dispatch => {
        if (appointment.filter((item, index) => moment(item.start_date).format("MM/DD/YYYY") === moment(data.start_date).format("MM/DD/YYYY")).length > 0) {
            dispatch(createAppointment(data))
        }
        else {
            dispatch(createAppointment(data))
            dispatch(createAppointmentLength(data))
        }
    }
}
// export function fetchAppointmentAction(data) {
// 	return async dispatch => {
// 		dispatch(fetchAppointment(data))
// 	}
// }