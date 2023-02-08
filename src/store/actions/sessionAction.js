import { loginSuccess } from '../reducers/sessionReducer';
import { router } from 'next/router';

export function login(data) {
	return async dispatch => {
		dispatch(loginSuccess(data))
		router.push({ pathname: '/patients' })
	}
}
