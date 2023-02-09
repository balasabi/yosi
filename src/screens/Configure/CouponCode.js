import React, { useState } from "react";
import { Typography, Grid, Dialog, DialogTitle, DialogContent, TextField, MenuItem, Select, FormControl } from '@mui/material';
import CustomizedButtons from '../../components/CustomButton';
import plus from "../../../public/Images/plus.png";
import Image from 'next/image';
import Edit from '../../../public/Images/editIcon.png';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';

function CouponCode() {

    const [state, setState] = useState({
        rows: [
            { "Name": "YOS150%", "Code": "1st order deal", "Price": "50%", "Status": "Active", "Action": "Edit" },
            { "Name": "YOS150%", "Code": "1st order deal", "Price": "50%", "Status": "Active", "Action": "Edit" },
            { "Name": "YOS150%", "Code": "1st order deal", "Price": "50%", "Status": "Active", "Action": "Edit" },
            { "Name": "YOS150%", "Code": "1st order deal", "Price": "50%", "Status": "Active", "Action": "Edit" },
            { "Name": "YOS150%", "Code": "1st order deal", "Price": "50%", "Status": "Active", "Action": "Edit" },
            { "Name": "YOS150%", "Code": "1st order deal", "Price": "50%", "Status": "Active", "Action": "Edit" },
        ],
        statusFilter: "",
        priceFilter: "",
        couponCodeOpen: false,
        code: "",
        name: "",
        price: "",
        status: ""
    })
    const couponCodeClose = () => {
        setState({ ...state, couponCodeOpen: false })
    }
    const submit = async () => {
        alert("WIP")
        setState({ ...state, couponCodeOpen: false })
    }
    const cancel = () => {
        setState({ ...state, couponCodeOpen: false })
    }
    const handleChange = (event, param) => {
        if (param === "S") {
            setState({ ...state, statusFilter: event.target.value });
        } else if (param === "P") {
            setState({ ...state, priceFilter: event.target.value });
        }
    };
    const Placeholder = ({ children }) => {
        return <div style={{ color: "#101010", fontWeight: 900, fontSize: "14px", fontFamily: "Avenir", fontStyle: "normal" }}>{children}</div>;
    };
    return (
        <>
            <Grid container>
                <Grid item xs={12} style={{ borderBottom: "2px solid #C8C8C8" }} />
                <Grid item xs={12} display={"flex"} flexDirection={'row'}>
                    <Grid container>
                        <Grid item xs={6}>
                            <CustomizedButtons variant={"contained"} style={{ padding: "4px 15px 4px 15px", marginLeft: "10px", marginTop: "20px" }} onClick={() => setState({ ...state, couponCodeOpen: true })}>
                                <Image src={plus} alt='union' width={"20vw"} height={"20vh"} />
                                <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", marginLeft: "5px" }}>
                                    Create Coupon Code
                                </Typography>
                            </CustomizedButtons>
                        </Grid>
                        <Grid item xs={6} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "20px" }}>
                            <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#474747", marginLeft: "5px", alignSelf: "center" }}>Filter by</Typography>
                            <FormControl sx={{ m: 1, minWidth: 60, minHeight: 10, '.MuiOutlinedInput-notchedOutline': { border: 0 } }} size="small">
                                <Select
                                    value={state.priceFilter}
                                    onChange={(e) => handleChange(e, "P")}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    renderValue={
                                        state.priceFilter !== "" ? undefined : () => <Placeholder>All Price</Placeholder>
                                    }>
                                    <MenuItem value={"25%"}>25%</MenuItem>
                                    <MenuItem value={"50%"}>50%</MenuItem>
                                    <MenuItem value={"100%"}>100%</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl sx={{ m: 1, minWidth: 60, minHeight: 10, '.MuiOutlinedInput-notchedOutline': { border: 0 } }} size="small">
                                <Select
                                    value={state.statusFilter}
                                    onChange={(e) => handleChange(e, "S")}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    renderValue={
                                        state.statusFilter !== "" ? undefined : () => <Placeholder>All Status</Placeholder>
                                    }>
                                    <MenuItem value={"All"}>All</MenuItem>
                                    <MenuItem value={"Active"}>Active</MenuItem>
                                    <MenuItem value={"Inactive"}>Inactive</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} >
                    <Grid container>
                        <Grid item xs={12} style={{ marginTop: "15px", padding: "12px", backgroundColor: "#E7E7E7", display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                            <Grid container>
                                <Grid item xs={3}>
                                    <Typography style={{ fontSize: "18px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Black", textAlign: "center" }}>Name</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography style={{ fontSize: "18px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Black", textAlign: "center" }} >Code</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography style={{ fontSize: "18px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Black", textAlign: "center" }}>Price</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography style={{ fontSize: "18px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Black", textAlign: "center" }}>Status</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography style={{ fontSize: "18px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Black", textAlign: "center" }}>Action</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {!!state.rows && state.rows.map((item, index) => (
                        <Grid container  >
                            <Grid item xs={12} style={{ marginTop: "30px", border: "2px dashed #D9D9D9", padding: "10px", borderBottom: 0, width: "50vw" }} />
                            <Grid item xs={12} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
                                <div style={{ marginLeft: -20, border: "2px dashed #D9D9D9", borderRadius: "50px", width: 50, height: 50, borderLeft: 0, borderTop: 0, borderBottom: 0 }} />
                                <Grid item xs={12} style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                                    <Grid container>
                                        <Grid item xs={3}>
                                            <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textAlign: "center", marginLeft: "10px" }}>{item.Name}</Typography>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textAlign: "center", marginLeft: "45px" }} >{item.Code}</Typography>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textAlign: "center" }}>{item.Price}</Typography>
                                        </Grid>
                                        <Grid item xs={2} >
                                            <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textAlign: "center", marginLeft: "10px" }}>{item.Status}</Typography>
                                        </Grid>
                                        <Grid item xs={2} >
                                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginLeft: "25px" }}>
                                                <Image src={Edit} alt='edit' width={18} height={18} />
                                                <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#000", marginLeft: "5px" }}>Edit</Typography>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <div style={{ marginRight: -20, border: "2px dashed #D9D9D9", borderRadius: "50px", width: 50, height: 50, borderRight: 0, borderTop: 0, borderBottom: 0 }} />
                            </Grid>
                            <Grid item xs={12} style={{ border: "2px dashed #D9D9D9", padding: "10px", borderTop: 0 }} />
                        </Grid>))}
                </Grid>
                <Dialog open={state.couponCodeOpen} onClose={() => couponCodeClose()} maxWidth={'sm'} >
                    <Grid container>
                        <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end" }}>
                            <DisabledByDefaultRoundedIcon style={{ color: "#024751", fontSize: "45px", position: "absolute" }} onClick={() => couponCodeClose()} />
                        </Grid>
                    </Grid>
                    <DialogTitle style={{ fontSize: "20px", fontStyle: "normal", lineHeight: "32px", fontFamily: "Avenir-Black", color: "#000", borderBottom: "1px solid #E8E8E8" }}>Add coupon code</DialogTitle>
                    <DialogContent>
                        <Grid container>
                            <Grid item xs={12} >
                                <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", color: "#024751", marginTop: "10px", marginBottom: "10px" }}>Coupon information</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <TextField size="small"
                                            placeholder={"Name"}
                                            fullWidth
                                            inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", backgroundColor: "#FBF7F4" } }}
                                            value={state.name}
                                            onChange={(event) => setState({ ...state, name: event.target.value })}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <TextField size="small"
                                            placeholder={"Code"}
                                            fullWidth
                                            inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", backgroundColor: "#FBF7F4" } }}
                                            value={state.code}
                                            onChange={(event) => setState({ ...state, code: event.target.value })}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <TextField size="small"
                                            placeholder={"Price"}
                                            fullWidth
                                            inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", backgroundColor: "#FBF7F4" } }}
                                            value={state.price}
                                            onChange={(event) => setState({ ...state, price: event.target.value })}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <Select
                                            size="small"
                                            value={state.status}
                                            onChange={(event) => setState({ ...state, status: event.target.value })}
                                            displayEmpty
                                            fullWidth
                                            inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", backgroundColor: "#FBF7F4" } }}
                                            renderValue={
                                                state.status !== "" ? undefined : () => <Placeholder>Status</Placeholder>
                                            }>
                                            <MenuItem value={"All"}>All</MenuItem>
                                            <MenuItem value={"Active"}>Active</MenuItem>
                                            <MenuItem value={"Inactive"}>Inactive</MenuItem>
                                        </Select>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
                                    <CustomizedButtons variant={"text"} style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#024751", marginLeft: "5px" }} onClick={() => cancel()} >
                                        Cancel
                                    </CustomizedButtons>
                                    <CustomizedButtons variant={"text"} style={{ padding: "4px 10px 4px 10px", backgroundColor: "#024751", fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#fff", marginLeft: "5px", borderRadius: "5px" }} onClick={() => submit()} >
                                        Submit
                                    </CustomizedButtons>
                                </Grid>
                            </Grid>
                        </Grid>
                    </DialogContent>
                </Dialog>
            </Grid>
        </>
    )
}

export default CouponCode