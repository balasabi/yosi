import React, { useState, useRef } from "react";
import { Typography, Grid, Dialog, DialogTitle, DialogContent, TableRow, tableCellClasses, tableRowClasses, TableCell, MenuItem, Select, FormControl, FormControlLabel, Radio, RadioGroup, styled, FormHelperText } from '@mui/material';
import CustomizedButtons from '../../components/CustomButton';
import plus from "../../../public/Images/plus.png";
import Image from 'next/image';
import Edit from '../../../public/Images/editIcon.png';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import { createCouponAction, updateCouponAction } from "../../store/actions/couponAction";
import { useDispatch, useSelector } from 'react-redux';
import InputBase from "@mui/material/InputBase";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#F2F5F6",
        color: '#2E2E2E',
        fontFamily: 'Avenir-Heavy',
        padding: "12px",
        fontSize: "1.1em",
        lineHeight: '27px'
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: '0.9em',
        fontFamily: 'Avenir-Book',
        padding: "10px",
        color: '#2E2E2E',
        lineHeight: '24px'
    },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    [`&.${tableRowClasses.root}`]: {
    },
    '&:nth-of-type(odd)': {
    },
}));
const CustomInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
        marginTop: theme.spacing(3)
    },
    "& .MuiInputBase-input": {
        position: "relative",
        fontSize: '1em',
        padding: "10px",
        backgroundColor: "#F0E9FF",
        borderRadius: "5px",
        fontFamily: [
            'Avenir-Book'
        ].join(","),
        "&:focus": {
            border: 0,
            backgroundColor: "#F0E9FF",
            border: "2px solid #6425FE",
        },
        "&:active": {
            border: "2px solid #6425FE",
            backgroundColor: "#F0E9FF"
        }
    }
}));

function CouponCode() {
    const ref = useRef();
    const dispatch = useDispatch();
    const coupons = useSelector(state => state.couponReducer.coupons);

    const [state, setState] = useState({
        couponCodeOpen: false,
        id: null,
        code: "",
        name: "",
        price: "",
        status: "Active",
        mode: "ADD",
        isClickFilter: false,
        displayRecord: coupons,
        selectedStatus: "All",
        selectedPrice: "All",
        nameError: false,
        codeError: false,
        priceError: false
    })

    const couponCodeClose = () => {
        setState({ ...state, couponCodeOpen: false })
    };

    const submit = async () => {
        let { name, code, price, status, id } = state;
        let isError = false;

        if (name === "" || name === null || name === undefined) {
            setState(ref => ({ ...ref, nameError: true }))
            isError = true;
        }
        if (code === "" || code === null || code === undefined) {
            setState(ref => ({ ...ref, codeError: true }))
            isError = true;
        }
        if (price === "" || price === null || price === undefined) {
            setState(ref => ({ ...ref, priceError: true }))
            isError = true;
        }
        if (isError === false) {
            let data = {}
            data.id = coupons.length + 1
            data.name = name;
            data.code = code;
            data.price = price;
            data.status = status;
            if (state.mode === "ADD") {
                data.id = coupons.length + 1
                dispatch(createCouponAction(data))
            }
            else {
                data.id = id
                dispatch(updateCouponAction(data))
            }
            setState({ ...state, couponCodeOpen: false })
        };
    };

    const cancel = () => {
        setState({ ...state, couponCodeOpen: false })
    };

    const handleChange = (event, param) => {
        if (param === "S") {
            setState({ ...state, selectedStatus: event.target.value });
        } else {
            setState({ ...state, selectedPrice: event.target.value });
        }
    };

    const Placeholder = ({ children }) => {
        return <div style={{ color: "#101010", fontWeight: 900, fontSize: "14px", fontFamily: "Avenir-Book", fontStyle: "normal" }}>{children}</div>;
    };

    const addAction = () => {
        setState({ ...state, couponCodeOpen: true, mode: "ADD" })
    };

    const editAction = (param) => {
        let result = coupons.filter((item) => item.id === param)[0]
        // console.log("*************" + JSON.stringify(result))
        setState({ ...state, id: result.id, code: result.code, name: result.name, price: result.price, status: result.status, couponCodeOpen: true, mode: "EDIT" })
    };

    let displayRecord = [];

    if (state.selectedStatus === "All" && state.selectedPrice === "All") {
        displayRecord = coupons
    } else if (state.selectedStatus !== "All" && state.selectedPrice === "All") {
        displayRecord = coupons.filter((item) => item.status === state.selectedStatus)
    } else if (state.selectedStatus === "All" && state.selectedPrice !== "All") {
        displayRecord = coupons.filter((item) => item.price === state.selectedPrice)
    } else if (state.selectedStatus !== "All" && state.selectedPrice !== "All") {
        displayRecord = coupons.filter((item) => item.price === state.selectedPrice && item.status === state.selectedStatus)
    }
    // console.log("**************selectedStatus**********"+JSON.stringify(state.selectedStatus))
    // console.log("**************selectedPrice**********"+JSON.stringify(state.selectedPrice))
    // console.log("*********displayRecord************"+JSON.stringify(displayRecord))
    return (
        <>
            <Grid container>
                <Grid item xs={12} style={{ borderBottom: "2px solid #C8C8C8" }} />
                <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row' }}>
                    <Grid container>
                        <Grid item xs={6}>
                            <CustomizedButtons variant={"contained"} style={{ padding: "4px 15px 4px 15px", marginLeft: "10px", marginTop: "20px" }} onClick={() => addAction()}>
                                <Image src={plus} alt='union' width={14} height={15} />
                                <Typography style={{ marginLeft: "5px" }}>
                                    Create new coupon
                                </Typography>
                            </CustomizedButtons>
                        </Grid>
                        <Grid item xs={6} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "20px" }}>
                            <Typography className='miniText' style={{ marginLeft: "5px", alignSelf: "center" }}>Filter by</Typography>
                            <FormControl sx={{ m: 1, minWidth: 60, minHeight: 10, '.MuiOutlinedInput-notchedOutline': { border: 0, borderRight: "2px solid #E8E8E8" } }} size="small">
                                <Select
                                    value={state.selectedPrice}
                                    onChange={(e) => handleChange(e, "P")}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    renderValue={
                                        state.selectedPrice !== "All" ? undefined : () => <Placeholder>All Discount</Placeholder>
                                    }>
                                    <MenuItem value={"All"}>All</MenuItem>
                                    <MenuItem value={"40%"}>40%</MenuItem>
                                    <MenuItem value={"25%"}>25%</MenuItem>
                                    <MenuItem value={"50%"}>50%</MenuItem>
                                    <MenuItem value={"100%"}>100%</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl sx={{ m: 1, minWidth: 60, minHeight: 10, '.MuiOutlinedInput-notchedOutline': { border: 0, borderRadius: 0 } }} size="small">
                                <Select
                                    value={state.selectedStatus}
                                    onChange={(e) => handleChange(e, "S")}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    renderValue={state.selectedStatus !== "All" ? undefined : () => <Placeholder>All Status</Placeholder>}>
                                    <MenuItem value={"All"}>All</MenuItem>
                                    <MenuItem value={"Active"}>Active</MenuItem>
                                    <MenuItem value={"Inactive"}>Inactive</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={12} style={{ marginTop: "15px", padding: "12px", backgroundColor: "#F2F5F6" }}>
                            <Grid container>
                                <Grid item xs={3}>
                                    <Typography align='center' className='tableHeader'>Name</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography align='center' className='tableHeader'>Code</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography align='center' className='tableHeader'>Discount</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography align='center' className='tableHeader'>Status</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography align='center' className='tableHeader'>Action</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {!!displayRecord.length > 0 ? !!displayRecord && displayRecord.map((item, index) => (
                        <Grid container key={index.toString()}>
                            <Grid item xs={12} style={{ marginTop: "30px", border: "2px dashed #D9D9D9", padding: "10px", borderBottom: 0, width: "50vw" }} />
                            <Grid item xs={12} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <div style={{ marginLeft: -20, border: "2px dashed #D9D9D9", borderRadius: "50px", width: 50, height: 50, borderLeft: 0, borderTop: 0, borderBottom: 0 }} />
                                <Grid item xs={12} style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                                    <Grid container>
                                        <Grid item xs={3}>
                                            <Typography className='tableContent' align='center' style={{ marginLeft: "10px" }}>{item.name}</Typography>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography className='tableContent' align='center' style={{ marginLeft: "45px" }} >{item.code}</Typography>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Typography className='tableContent' align='center'>{item.price}</Typography>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Typography className='tableContent' align='center' style={{ marginLeft: "10px" }}>{item.status}</Typography>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginLeft: "25px", cursor: "pointer" }} onClick={() => editAction(item.id)}>
                                                <Image src={Edit} alt='edit' width={18} height={18} />
                                                <Typography className="subText" style={{ marginLeft: "5px" }}>Edit</Typography>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <div style={{ marginRight: -20, border: "2px dashed #D9D9D9", borderRadius: "50px", width: 50, height: 50, borderRight: 0, borderTop: 0, borderBottom: 0 }} />
                            </Grid>
                            <Grid item xs={12} style={{ border: "2px dashed #D9D9D9", padding: "10px", borderTop: 0 }} />
                        </Grid>
                    )) :
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
                            <Typography >There are no coupon available</Typography>
                        </div>
                    }
                </Grid>
                <Dialog open={state.couponCodeOpen} onClose={() => couponCodeClose()} maxWidth={'sm'} >
                    <Grid container>
                        <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end" }}>
                            <DisabledByDefaultRoundedIcon style={{ color: "#5824D6", fontSize: "45px", position: "absolute", cursor: "pointer" }} onClick={() => couponCodeClose()} />
                        </Grid>
                    </Grid>
                    <DialogTitle style={{ fontSize: "20px", fontStyle: "normal", lineHeight: "32px", fontFamily: "Avenir-Black", color: "#000", borderBottom: "1px solid #E8E8E8" }}>{state.mode === "ADD" ? "Add coupon code" : "Edit coupon code"}</DialogTitle>
                    <DialogContent>
                        <Grid container>
                            <Grid item xs={12} >
                                <Typography style={{ color: "#5824D6", marginTop: "10px", marginBottom: "10px" }}>Coupon information</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <CustomInput size="small"
                                            placeholder={"Name"}
                                            fullWidth
                                            // inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Book", backgroundColor: "#F0E9FF" } }}
                                            value={state.name}
                                            onChange={(event) => setState({ ...state, name: event.target.value, nameError: false })}
                                            error={state.nameError}
                                        />
                                        {state.nameError === true &&
                                            <FormHelperText style={{ color: 'red', marginLeft: '10px' }}>Please enter the name</FormHelperText>
                                        }
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <CustomInput size="small"
                                            placeholder={"Code"}
                                            fullWidth
                                            // inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Book", backgroundColor: "#F0E9FF" } }}
                                            value={state.code}
                                            onChange={(event) => setState({ ...state, code: event.target.value, codeError: false })}
                                            error={state.codeError} />
                                        {state.codeError === true &&
                                            <FormHelperText style={{ color: 'red', marginLeft: '5px' }}>Please enter the code</FormHelperText>
                                        }
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <CustomInput size="small"
                                            value={state.price}
                                            placeholder={"Price"}
                                            fullWidth
                                            // inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Book", backgroundColor: "#F0E9FF" } }}
                                            onChange={(event) => setState({ ...state, price: event.target.value, priceError: false })}
                                            error={state.priceError}
                                        />
                                        {state.priceError === true &&
                                            <FormHelperText style={{ color: 'red', marginLeft: '10px' }}>Please enter the price</FormHelperText>
                                        }
                                    </Grid>
                                    <Grid item xs={12} sm={6} style={{ display: "flex", alignItems: "center" }}>
                                        <Typography style={{ fontFamily: 'Avenir-Bold', paddingRight: "7px" }}>Status</Typography>
                                        <RadioGroup defaultValue={state.mode === "ADD" ? "Active" : state.status} row onChange={(event) => setState({ ...state, status: event.target.value })}>
                                            <FormControlLabel value="Active" control={<Radio sx={{ color: '#5824D6', '&.Mui-checked': { color: '#5824D6' } }} />} label="Active" />
                                            <FormControlLabel value="Inactive" control={<Radio sx={{ color: '#5824D6', '&.Mui-checked': { color: '#5824D6' } }} />} label="Inactive" />
                                        </RadioGroup>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
                                    <CustomizedButtons variant={"text"} onClick={() => cancel()} >
                                        Cancel
                                    </CustomizedButtons>
                                    <CustomizedButtons variant={"contained"} style={{ marginLeft: "5px", borderRadius: "5px" }} onClick={() => submit()} >
                                        {state.mode === "ADD" ? "Submit" : "Update"}
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

export default CouponCode;