import { createUser, updateUser } from '../reducers/userManagementReducer';

export function createUserAction(data, close) {
	return async dispatch => {
		dispatch(createUser(data))
		close()
	}
}

export function updateUserAction(data, close) {
	return async dispatch => {
		dispatch(updateUser(data))
		close()
	}
}