import React, { useState, useRef } from 'react';
import {
    Typography, Grid, Table, TableRow, TableBody, TableHead, styled, TableCell, tableCellClasses,
    tableRowClasses, TablePagination, TableFooter, FormControl, Select, MenuItem
} from '@mui/material';
import CustomizedButtons from '../../components/CustomButton';
import Image from 'next/image';
import Union from '../../../public/Images/union.png';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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
        ]
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

    return (
        <>
            <Grid container>
                <Grid item xs={12} >
                    <Grid container >
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} >
                            <CustomizedButtons variant={"text"} onClick={() => alert("WIP")} style={{ padding: "4px 15px 4px 15px", marginLeft: "10px", backgroundColor: "#FBF7F4", marginTop: "20px" }} >
                                <Image src={Union} alt='union' width={"20vw"} height={"20vh"} />
                                <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#000", marginLeft: "5px" }} >
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
                                value={state.status}
                                onChange={(e)=>handleChange(e,"S")}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                renderValue={
                                    state.status !== "" ? undefined : () => <Placeholder>Status</Placeholder>
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
                </Grid>
            </Grid>
        </>
    )
}
export default TestKitTracking;