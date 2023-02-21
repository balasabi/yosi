import { testResult, fetchTestResult } from '../reducers/testResultReducer';

export function addTestResultAction(data) {
	return async dispatch => {
		dispatch(testResult(data))
		console.log("******addTestResultAction******"+JSON.stringify(data))
	}
}
// export function fetchTestResultAction(data) {
// 	return async dispatch => {
// 		dispatch(fetchTestResult(data))
// 		console.log("******fetchTestResultAction******"+JSON.stringify(data))
// 	}
// }