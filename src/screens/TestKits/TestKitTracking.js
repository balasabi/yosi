import React, { useState, useRef } from 'react';
import {
    Typography, Grid, Table, TableRow, TableBody, TableHead, styled, TableCell, tableCellClasses, TextField,
    tableRowClasses, TablePagination, TableFooter, FormControl, Select, MenuItem, TableContainer, Paper, Dialog, DialogTitle,DialogContent 
} from '@mui/material';
import CustomizedButtons from '../../components/CustomButton';
import Image from 'next/image';
import Union from '../../../public/Images/plus.png';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#E7E7E7",
        color: theme.palette.common.black,
        fontFamily: 'Avenir-Black',
        padding: "12px"
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
        fontFamily: 'Avenir',
        padding: "10px"
    },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    [`&.${tableRowClasses.root}`]: {
    },
    '&:nth-of-type(odd)': {
    },
}));

function TestKitTracking(props) {
    const [state, setState] = useState({
        page: 0,
        rowsPerPage: 10,
        price:"",
        insurance:"",
        payment:"",
        status:"",
        statusFilter:"",
        test_kit_tracking: [
            {
                client_name: "Molina",
                from_location: "Avandale",
                quantity: "12",
                dateandtime: "12/13/2022, 01:57:25",
                status: "Active",
                batch_no: "BAT00001",
                event_date: "12/13/2022, 01:57:25"
            }
        ],
        addTestKitOpen:false
    })

    const handleChangePage = (event, newPage) => {
        setState({ ...state, page: newPage });
    };

    const handleChangeRowsPerPage = (event) => {
        setState({ ...state, rowsPerPage: event.target.value, page: 0 });
    };

    const Placeholder = ({ children }) => {
        return <div style={{color:"#101010", fontWeight:900, fontSize:"14px", fontFamily:"Avenir", fontStyle:"normal"}}>{children}</div>;
      };

    const handleChange = (e, param) => {
        if(param === "PR"){
        setState({ ...state, price: e.target.value })
    }else if(param === "I"){
        setState({ ...state, insurance: e.target.value })
    }else if(param === "P"){
        setState({ ...state, payment: e.target.value })
    }else if(param === "S"){
        setState({ ...state, status: e.target.value })
    }
}
const submit =()=>{
    alert("WIP");
    setState({ ...state, addTestKitOpen: false })
}
const cancel = () => {
    setState({ ...state, addTestKitOpen: false })
}
const addTestKitClose = () => {
    setState({ ...state, addTestKitOpen: false })
}
    return (
        <>
            <Grid container>
                <Grid item xs={12} >
                    <Grid container >
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} >
                            <CustomizedButtons variant={"text"} style={{ padding: "4px 15px 4px 15px", marginLeft: "10px", backgroundColor: "#024751", marginTop: "20px" }} onClick={() => setState({ ...state, addTestKitOpen: true })}>
                                <Image src={Union} alt='union' width={"20vw"} height={"20vh"} />
                                <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#fff", marginLeft: "5px" }} >
                                    Add test kit batch
                                </Typography>
                            </CustomizedButtons>
                        </Grid>
                        <Grid item xs={12} sm={12} md={8} lg={8} xl={8} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "20px" }}>
                            <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#474747", marginLeft: "5px", alignSelf: "center" }}>Filter by</Typography>
                            <FormControl sx={{ m: 1, minWidth: 60, minHeight:10, '.MuiOutlinedInput-notchedOutline': { border: 0, borderRight:"2px solid #E8E8E8", borderRadius:0 } }} size="small">
                            <Select
                                value={state.price}
                                onChange={(e)=>handleChange(e,"PR")}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                renderValue={
                                    state.price !== "" ? undefined : () => <Placeholder>All Price</Placeholder>
                                  }>
                                <MenuItem value={"Dollars"}>Dollars</MenuItem>
                                <MenuItem value={"Rupees"}>Rupees</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 60, minHeight:10, '.MuiOutlinedInput-notchedOutline': { border: 0, borderRight:"2px solid #E8E8E8", borderRadius:0 } }} size="small">
                            <Select
                                value={state.insurance}
                                onChange={(e)=>handleChange(e,"I")}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                renderValue={
                                    state.insurance !== "" ? undefined : () => <Placeholder>All Insurance</Placeholder>
                                  }>
                                <MenuItem value={"Insurance At-Home COVID Kit"}>Insurance At-Home COVID Kit</MenuItem>
                                <MenuItem value={"Rapid Antigen Test"}>Rapid Antigen Test</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 60, minHeight:10, '.MuiOutlinedInput-notchedOutline': { border: 0, borderRight:"2px solid #E8E8E8", borderRadius:0 } }} size="small">
                            <Select
                                value={state.payment}
                                onChange={(e)=>handleChange(e,"P")}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                renderValue={
                                    state.payment !== "" ? undefined : () => <Placeholder>All Payment</Placeholder>
                                  }>
                                <MenuItem value={"Unknown"}>Unknown</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 60, minHeight:10, '.MuiOutlinedInput-notchedOutline': { border: 0 } }} size="small">
                            <Select
                                value={state.statusFilter}
                                onChange={(e)=>handleChange(e,"S")}
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
                <Grid item xs={12} style={{ marginTop: "15px" }}>
                <TableContainer component={Paper} >
                    <Table>
                        <TableHead>
                            <TableRow >
                                <StyledTableCell >
                                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                        <Typography style={{ fontSize: "14.5px", fontFamily: "Avenir-Black", color: "#000" }}>Client Name</Typography>
                                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginLeft: -12 }}>
                                            <ArrowDropUpIcon style={{ color: "#000", height: "20px", width: "50px", marginBottom: -12 }} onClick={() => alert("WIP")} />
                                            <ArrowDropDownIcon style={{ color: "#000", height: "20px", width: "50px" }} onClick={() => alert("WIP")} />
                                        </div>
                                    </div>
                                </StyledTableCell>
                                <StyledTableCell >From location</StyledTableCell>
                                <StyledTableCell >Quantity</StyledTableCell>
                                <StyledTableCell >Date and time</StyledTableCell>
                                <StyledTableCell >Status</StyledTableCell>
                                <StyledTableCell >Batch no</StyledTableCell>
                                <StyledTableCell >Event date</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        {!!state.test_kit_tracking && state.test_kit_tracking.map((test_kit_tracking, index) => (
                            <TableBody key={index.toString()} style={{ backgroundColor: (index % 2) ? "#FCFCFC" : "#FFFFFF", borderBottom: "1.1px solid #F2F2F2" }}>
                                <StyledTableRow >
                                    <StyledTableCell >{test_kit_tracking.client_name}</StyledTableCell>
                                    <StyledTableCell >{test_kit_tracking.from_location}</StyledTableCell>
                                    <StyledTableCell >{test_kit_tracking.quantity}</StyledTableCell>
                                    <StyledTableCell >{test_kit_tracking.dateandtime}</StyledTableCell>
                                    <StyledTableCell >{test_kit_tracking.status}</StyledTableCell>
                                    <StyledTableCell >{test_kit_tracking.batch_no}</StyledTableCell>
                                    <StyledTableCell >{test_kit_tracking.event_date}</StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        ))}
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    count={!!state.test_kit_tracking && state.test_kit_tracking.length}
                                    page={state.page}
                                    onPageChange={handleChangePage}
                                    rowsPerPage={state.rowsPerPage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                    labelRowsPerPage={"No. of items per page : "}
                                    sx={{ borderBottom: "1.43px solid #D5DBE1" }}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                    </TableContainer>
                </Grid>
                <Dialog open={state.addTestKitOpen} onClose={() => addTestKitClose()} maxWidth={'sm'} >
                   <Grid container>
                       <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end" }}>
                           <DisabledByDefaultRoundedIcon style={{ color: "#024751", fontSize: "45px", position: "absolute" }} onClick={() => addTestKitClose()} />
                       </Grid>
                   </Grid>
                   <DialogTitle style={{ fontSize: "20px", fontStyle: "normal", lineHeight: "32px", fontFamily: "Avenir-Black", color: "#000", borderBottom: "1px solid #E8E8E8" }}>Add test result</DialogTitle>
                   <DialogContent>
                       <Grid container>
                           <Grid item xs={12} >
                               <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", color: "#024751", marginTop: "10px", marginBottom: "10px" }}>Test information</Typography>
                           </Grid>
                           <Grid item xs={12}>
                               <Grid container spacing={2}>
                                   <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                       <TextField size="small"
                                           placeholder={"Client name"}
                                           fullWidth
                                           inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", backgroundColor: "#FBF7F4" } }}
                                           value={state.client_name}
                                           onChange={(event) => setState({ ...state, client_name: event.target.value })}
                                       />
                                   </Grid>
                                   <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                       <TextField size="small"
                                           placeholder={"From location"}
                                           fullWidth
                                           inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", backgroundColor: "#FBF7F4" } }}
                                           value={state.from_location}
                                           onChange={(event) => setState({ ...state, from_location: event.target.value })}
                                       />
                                   </Grid>
                                   <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                       <TextField size="small"
                                           placeholder={"Quantity"}
                                           fullWidth
                                           inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", backgroundColor: "#FBF7F4" } }}
                                           value={state.quantity}
                                           onChange={(event) => setState({ ...state, quantity: event.target.value })}
                                       />
                                   </Grid>
                                   <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                       <TextField size="small"
                                           placeholder={"Date and time "}
                                           fullWidth
                                           inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", backgroundColor: "#FBF7F4" } }}
                                           value={state.date_and_time}
                                           onChange={(event) => setState({ ...state, date_and_time: event.target.value })}
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
                                                state.status !== "" ? undefined : () => <Placeholder><Typography style={{ fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", backgroundColor: "#FBF7F4", color:"#998E8A"} }>Status</Typography></Placeholder>
                                            }>
                                            <MenuItem value={"All"}>All</MenuItem>
                                            <MenuItem value={"Active"}>Active</MenuItem>
                                            <MenuItem value={"Inactive"}>Inactive</MenuItem>
                                        </Select>
                                   </Grid>
                                   <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                       <TextField size="small"
                                           placeholder={"Batch no"}
                                           fullWidth
                                           inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", backgroundColor: "#FBF7F4" } }}
                                           value={state.batch_no}
                                           onChange={(event) => setState({ ...state, batch_no: event.target.value })}
                                       />
                                   </Grid>
                                   <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                       <TextField size="small"
                                           placeholder={"Event date"}
                                           fullWidth
                                           inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", backgroundColor: "#FBF7F4" } }}
                                           value={state.event_date}
                                           onChange={(event) => setState({ ...state, event_date: event.target.value })}
                                       />
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
export default TestKitTracking;