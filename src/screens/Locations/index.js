import React, { useState } from 'react';
import {
    Typography, Grid, TableRow, tableCellClasses, styled, TableCell, FormControl, Select, MenuItem, IconButton,
    Dialog, DialogContent, DialogTitle, InputBase, FormControlLabel, RadioGroup, Radio
} from '@mui/material';
import Image from 'next/image';
import CustomSearchInput from '../../components/CustomSearchInput';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from 'next/router';
import CustomizedButtons from '../../components/CustomButton';
import Edit from '../../../public/Images/editIcon.png';
import Union from '../../../public/Images/plus.png';
import { useDispatch, useSelector } from 'react-redux';
import AddLocations from './AddLocation';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import { createLocationAction, updateLocationAction } from "../../store/actions/locationAction";

const CustomInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
        marginTop: theme.spacing(3)
    },
    "& .MuiInputBase-input": {
        position: "relative",
        backgroundColor: theme.palette.background.paper,
        fontSize: 16,
        padding: "10px",
        backgroundColor: "#F0E9FF",
        fontFamily: [
            'Avenir-Book'
        ].join(","),
        "&:focus": {
            border: "2px solid #6425FE",
            backgroundColor: "#F0E9FF",
            borderRadius: '4px'
        },
        "&:active": {
            border: "2px solid #6425FE",
            backgroundColor: "#F0E9FF",
            backgroundColor: "#F0E9FF"
        }
    }
}));

function Locations(props) {
    const [state, setState] = useState({
        statusFilter: "",
        openLocation: false,
        type: [],
        isAdd: false,
        mode: "ADD",
        page: 0,
        rowsPerPage: 10,
        id: "",
        location: '',
        labName: "",
        status: "Active",
        locationCode: "",
        manager: "",
        address: '',
        labCode: ""
    })

    const router = useRouter();
    const dispatch = useDispatch();
    const location = useSelector(state => state.locationReducer.location);
    const Placeholder = ({ children }) => {
        return <div style={{ color: "#101010", fontWeight: 900, fontSize: "14px", fontFamily: "Avenir-Book", fontStyle: "normal" }}>{children}</div>;
    };

    const handleChange = (e) => {
        setState({ ...state, statusFilter: e.target.value })
    };
    const addAction = () => {
        setState({ ...state, isAdd: true, mode: "ADD", id: "", location: '', labName: "", status: "Active", locationCode: "", manager: "", address: '', labCode: "" })
    };
    const editAction = (param) => {
        setState({ ...state, mode: "EDIT", isAdd: true, id: param.id, locationCode: param.location_code, location: param.location, labCode: param.lab_code, labName: param.lab_name, manager: param.manager, address: param.address, status: param.status })
    };
    const handleView = (param) => {
        // router.push('/locations/view-location')
        router.push({ pathname: '/locations/view-location', query: "locationId=" + param })
    };
    const handleSubmit = () => {
        let data = {};
        data.id = state.id;
        data.location_code = state.locationCode;
        data.manager = state.manager;
        data.status = state.status;
        data.address = state.address;
        data.lab_name = state.labName;
        data.lab_code = state.labCode;
        data.location = state.location;

        if (state.mode === "ADD") {
            data.id = location.length + 1
            dispatch(createLocationAction(data))
        }
        else {
            // data.id = id
            dispatch(updateLocationAction(data))
        }
        setState({ ...state, isAdd: false })
    };
    const handleCloseLocation = () => {
        setState({ ...state, isAdd: false })
    };
    const cancel = () => {
        setState({ ...state, isAdd: false })
    };
    let displaylocationRecord = state.statusFilter === "" || state.statusFilter === "All" ? location : location.filter((item) => item.status === state.statusFilter)

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Typography className='header'>Location</Typography>
                </Grid>
                <Grid item xs={12} marginBottom={"20px"}>
                    <Grid container spacing={2}>
                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                            <CustomSearchInput
                                placeholder='Search test upload name, tube number, file name'
                                onChange={(name) => alert("WIP")}
                            />
                        </Grid>
                        <Grid item xs={3} sm={3} md={3} lg={3} xl={3} >
                            <CustomizedButtons variant={"contained"} style={{ padding: "4px 15px 4px 15px", marginLeft: "5px", marginTop: "20px" }} onClick={() => addAction()}>
                                <Image src={Union} alt='union' width={14} height={15} />
                                <Typography style={{ marginLeft: "5px", }} >
                                    Add Location
                                </Typography>
                            </CustomizedButtons>
                        </Grid>
                        <Grid item xs={5} sm={5} md={5} lg={5} xl={5} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "10px" }}>
                            <Typography className='miniLiteText' style={{ marginLeft: "5px", alignSelf: "center" }}>Filter by</Typography>
                            <FormControl sx={{ m: 1, minWidth: 60, minHeight: 10, '.MuiOutlinedInput-notchedOutline': { border: 0 } }} size="small">
                                <Select
                                    value={state.statusFilter}
                                    onChange={(e) => handleChange(e, "S")}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    renderValue={
                                        state.statusFilter !== "" ? undefined : () => <Placeholder>Status</Placeholder>
                                    }>
                                    <MenuItem value={"All"}>All</MenuItem>
                                    <MenuItem value={"Active"}>Active</MenuItem>
                                    <MenuItem value={"Inactive"}>Inactive</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={3} >
                        {!!displaylocationRecord && displaylocationRecord.map((item, index) =>
                            <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={index.toString()}>
                                <Grid container style={{ display: "flex", justifyContent: "center", alignItems: "center", boxShadow: '0px 1px 1px -4px rgb(0 0 0 / 30%), 0px 1px 3px 4px rgb(0 0 0 / 10%)', borderRadius: "8px", padding: "10px", }}>
                                    <Grid item xs={12} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                        <Typography className='subHeading'>{item.location} </Typography>
                                        <Image src={Edit} alt='edit' width={18} height={18} onClick={() => editAction(item)} />
                                    </Grid>
                                    <Grid item xs={12} style={{ display: "flex", flexDirection: "row" }}>
                                        <Typography style={{
                                            letterSpacing: "0.4px", fontSize: "14px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Book"
                                        }} color={"#718797"}>Status: </Typography>
                                        <Typography style={{
                                            letterSpacing: "0.4px", fontSize: "14px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Medium",
                                            backgroundColor: "#F0E9FF", marginLeft: "5px", padding: "2px", borderRadius: "5px"
                                        }} color={"#6425FE"}> {item.status}</Typography>
                                    </Grid>
                                    <Grid item xs={12} style={{ display: "flex", flexDirection: "row" }}>
                                        <Grid item xs={6}>
                                            <Typography style={{
                                                letterSpacing: "0.4px", fontSize: "14px", lineHeight: "20px", marginTop: "5px",
                                                fontFamily: "Avenir-Medium", fontWeight: '900'
                                            }} color={"rgba(16, 16, 16, 0.6)"} >Lab Name: {item.lab_name}</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography style={{
                                                letterSpacing: "0.4px", fontSize: "14px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Book",
                                            }} color={"rgba(16, 16, 16, 0.6)"} >Lab Code: {item.lab_code}</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} style={{ marginBottom: "5px" }} >
                                        <Typography style={{
                                            letterSpacing: "0.4px", fontSize: "14px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Book",
                                            fontWeight: 900
                                        }} color={"#313237"}>Address: </Typography>
                                        <Typography className='miniLiteText' style={{ marginTop: "5px" }} color={"rgba(16, 16, 16, 0.6)"}> {item.address}</Typography>
                                        <Typography style={{
                                            letterSpacing: "0.4px", fontSize: "14px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Book"
                                        }}></Typography>
                                    </Grid>
                                    <Grid item xs={12} style={{ borderBottom: "0.5px solid rgba(0, 0, 0, 0.16)" }} />
                                    <Grid item xs={12} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: "10px", cursor: 'pointer' }}>
                                        <Typography style={{
                                            letterSpacing: "0.4px", fontSize: "14px", lineHeight: "20px", fontFamily: "Avenir-Black", fontWeight: 'bold'
                                        }} color={"#313237"}>Show Details</Typography>
                                        <IconButton onClick={() => handleView(item.id)}>
                                            <ArrowForwardIcon width={"20vw"} height={"20vh"} style={{ color: "#6425FE" }} />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
                <Dialog open={state.isAdd} onClose={() => handleCloseLocation()}>
                    <Grid container>
                        <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end" }}>
                            <DisabledByDefaultRoundedIcon style={{ color: "#5824D6", fontSize: "45px", position: "absolute" }} onClick={() => handleCloseLocation()} />
                        </Grid>
                    </Grid>
                    <DialogTitle>
                        <Typography style={{ fontSize: "20px", paddingBottom: '10px', fontWeight: "bold", fontFamily: 'Avenir-Black' }}>{state.mode === "ADD" ? "Add location" : "Edit location"}</Typography>
                        <div style={{ background: '#E8E8E8', height: 1 }}></div>
                    </DialogTitle>
                    <DialogContent>
                        {/* <AddLocations close={handleCloseLocation} mode={state.mode} data={state.location} /> */}
                        <Grid item xs={12}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Typography style={{ color: '#6425FE' }}>Location information</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <CustomInput value={state.locationCode} placeholder="Location code"
                                        size='small' fullWidth
                                        onChange={(e) => setState({ ...state, locationCode: e.target.value })} />
                                </Grid>
                                <Grid item xs={6}>
                                    <CustomInput value={state.location} size='small'
                                        fullWidth placeholder="Location"
                                        onChange={(e) => setState({ ...state, location: e.target.value })} />
                                </Grid>
                                <Grid item xs={6}>
                                    <CustomInput value={state.manager} fullWidth
                                        size='small' placeholder="Manager"
                                        onChange={(e) => setState({ ...state, manager: e.target.value })} />
                                </Grid>
                                <Grid item xs={6}>
                                    <CustomInput value={state.labName} size='small'
                                        fullWidth placeholder="Lab name"
                                        onChange={(e) => setState({ ...state, labName: e.target.value })} />
                                </Grid>
                                <Grid item xs={6}>
                                    <CustomInput value={state.labCode} placeholder="Lab code"
                                        size='small' fullWidth
                                        onChange={(e) => setState({ ...state, labCode: e.target.value })} />
                                </Grid>
                                <Grid item xs={6}>
                                    <CustomInput value={state.address}
                                        fullWidth size='small' placeholder="Address"
                                        onChange={(e) => setState({ ...state, address: e.target.value })} />
                                </Grid>
                                <Grid item xs={6} style={{ display: "flex", alignItems: "center" }}>
                                    <Typography style={{ fontWeight: "bold", paddingRight: "7px" }}>Status</Typography>
                                    <RadioGroup defaultValue={state.mode === "ADD" ? "Active" : state.status} row onChange={(event) => setState({ ...state, status: event.target.value })}>
                                        <FormControlLabel value="Active" control={<Radio sx={{ color: '#6425FE', '&.Mui-checked': { color: '#6425FE' } }} />} label="Active" />
                                        <FormControlLabel value="Inactive" control={<Radio sx={{ color: '#6425FE', '&.Mui-checked': { color: '#6425FE' } }} />} label="Inactive" />
                                    </RadioGroup>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
                            <CustomizedButtons variant={"text"} onClick={() => cancel()} >
                                Cancel
                            </CustomizedButtons>
                            <CustomizedButtons variant={"contained"} style={{ marginLeft: "5px", borderRadius: "5px" }} onClick={() => handleSubmit()} >
                                {state.mode === "ADD" ? "Submit" : "Update"}
                            </CustomizedButtons>
                        </Grid>
                    </DialogContent>
                </Dialog>
            </Grid>
        </>
    )
}
export default Locations;