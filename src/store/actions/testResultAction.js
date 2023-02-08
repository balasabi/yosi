import { testResult } from '../reducers/testResultReducer';

export function addTestResultAction(data) {
	return async dispatch => {
		dispatch(testResult(data))
		console.log("******addTestResultAction******"+JSON.stringify(data))
	}
}
