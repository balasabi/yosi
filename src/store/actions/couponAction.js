import { createCoupon, updateCoupon } from '../reducers/couponReducer';

export function createCouponAction(data) {
    return async dispatch => {
        dispatch(createCoupon(data))
    }
}
export function updateCouponAction(data) {
    return async dispatch => {
        dispatch(updateCoupon(data))
    }
}