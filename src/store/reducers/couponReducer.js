import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    coupons: [
        { "id": "1", "name": "YOS151%", "code": "1st order deal", "price": "40%", "status": "Active" },
        { "id": "2", "name": "YOS152%", "code": "2st order deal", "price": "20%", "status": "Active" },
        { "id": "3", "name": "YOS153%", "code": "3st order deal", "price": "20%", "status": "Active" },
        { "id": "4", "name": "YOS154%", "code": "4st order deal", "price": "10%", "status": "Active" },
        { "id": "5", "name": "YOS155%", "code": "5st order deal", "price": "10%", "status": "Active" },
        { "id": "6", "name": "YOS158%", "code": "6st order deal", "price": "10%", "status": "Active" },
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