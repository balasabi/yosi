import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    coupons: [
        { "id": "1", "name": "YOS150%", "code": "1st order deal", "price": "50%", "status": "Active" },
        { "id": "2", "name": "YOS150%", "code": "1st order deal", "price": "50%", "status": "Active" },
        { "id": "3", "name": "YOS150%", "code": "1st order deal", "price": "50%", "status": "Active" },
        { "id": "4", "name": "YOS150%", "code": "1st order deal", "price": "50%", "status": "Active" },
        { "id": "5", "name": "YOS150%", "code": "1st order deal", "price": "50%", "status": "Active" },
        { "id": "6", "name": "YOS150%", "code": "1st order deal", "price": "50%", "status": "Active" },
    ]
}

export const couponReducer = createSlice({
    name: "couponReducer",
    initialState,
    reducers: {
        fetchCoupon: (state, { payload }) => {
            state.coupons = payload
        },
        createCoupon: (state, { payload }) => {
            state.coupons.push(payload)
        },
        updateCoupon: (state, { payload }) => {
            state.coupons = state.coupons.map((item) => item.id === payload.id ? payload : item)
        },
    }
})

export const { fetchCoupon, createCoupon, updateCoupon } = couponReducer.actions
export default couponReducer.reducer