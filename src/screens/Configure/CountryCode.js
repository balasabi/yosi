import React, { useState } from "react";
import {
    Typography, Grid, Table, TableHead, TableRow, styled, TableCell, tableCellClasses, FormControlLabel, RadioGroup, Radio,
    tableRowClasses, TableBody, TablePagination, TableFooter, Select, MenuItem, FormControl, Dialog, DialogTitle, DialogContent, TextField,
    TableContainer, Paper
} from '@mui/material';
import CustomizedButtons from '../../components/CustomButton';
import plus from "../../../public/Images/plus.png";
import Edit from '../../../public/Images/editIcon.png';
import Image from 'next/image';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';

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

function CountryCode() {

    const [state, setState] = useState({
        page: 0,
        rowsPerPage: 10,
        statusFilter: "",
        countryCode: [
            { 'Code': '+91', 'Name': 'India', 'ISO': 'IND', 'Status': 'Active', 'Action': '' },
            { 'Code': '+1', 'Name': 'United States of America', 'ISO': 'USA', 'Status': 'Active', 'Action': '' },
            { 'Code': '+4', 'Name': 'Colombia', 'ISO': 'COL', 'Status': 'Active', 'Action': '' },
            { 'Code': '+5', 'Name': 'Pakistan', 'ISO': 'PAK', 'Status': 'Active', 'Action': '' },
            { 'Code': '+34', 'Name': 'Africa', 'ISO': 'AFR', 'Status': 'Active', 'Action': '' },
        ],
        countryCodeOpen: false,
        code: "",
        name: "",
        iso: "",
        status: "",
        mode: "ADD"
    },
    )
    const Placeholder = ({ children }) => {
        return <div style={{ color: "#101010", fontWeight: 900, fontSize: "14px", fontFamily: "Avenir", fontStyle: "normal" }}>{children}</div>;
    };

    const handleChange = (e) => {
        setState({ ...state, statusFilter: e.target.value })
    };

    const handleChangePage = (event, newPage) => {
        setState({ ...state, page: newPage });
    };

    const handleChangeRowsPerPage = (event) => {
        setState({ ...state, rowsPerPage: event.target.value, page: 0 });
    };

    const countryCodeClose = () => {
        setState({ ...state, countryCodeOpen: false })
    };

    const submit = async () => {
        alert("WIP")
        setState({ ...state, countryCodeOpen: false })
    };

    const cancel = () => {
        setState({ ...state, countryCodeOpen: false })
    };

    const addAction = () => {
        setState({ ...state, countryCodeOpen: true, mode: "ADD" })
    };

    const editAction = () => {
        setState({ ...state, countryCodeOpen: true, mode: "EDIT" })
    };

    return (
        <>
            <Grid container>
                <Grid item xs={12} style={{ borderBottom: "2px solid #C8C8C8" }} />
                <Grid item xs={12} display={"flex"} flexDirection={'row'}>
                    <Grid container>
                        <Grid item xs={6}>
                            <CustomizedButtons variant={"contained"} style={{ padding: "4px 15px 4px 15px", marginLeft: "10px", marginTop: "20px" }} onClick={() => addAction()}>
                                <Image src={plus} alt='union' width={14} height={15} />
                                <Typography style={{ marginLeft: "5px" }}>
                                    Add country code
                                </Typography>
                            </CustomizedButtons>
                        </Grid>
                        <Grid item xs={6} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "20px" }}>
                            <Typography className='miniLiteText' style={{ marginLeft: "5px", alignSelf: "center" }}>Filter by</Typography>
                            <FormControl sx={{ m: 1, minWidth: 60, minHeight: 10, '.MuiOutlinedInput-notchedOutline': { border: 0 } }} size="small">
                                <Select
                                    value={state.statusFilter}
                                    onChange={handleChange}
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
                        <Table >
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Code</StyledTableCell>
                                    <StyledTableCell>Name</StyledTableCell>
                                    <StyledTableCell>ISO</StyledTableCell>
                                    <StyledTableCell>Status</StyledTableCell>
                                    <StyledTableCell>Action</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            {!!state.countryCode && state.countryCode.map((code, index) => (
                                <TableBody key={index.toString()} style={{ backgroundColor: (index % 2) ? "#FCFCFC" : "#FFFFFF", borderBottom: "1.1px solid #F2F2F2" }}>
                                    <StyledTableRow>
                                        <StyledTableCell>{code.Code}</StyledTableCell>
                                        <StyledTableCell>{code.Name}</StyledTableCell>
                                        <StyledTableCell>{code.ISO}</StyledTableCell>
                                        <StyledTableCell>{code.Status}</StyledTableCell>
                                        <StyledTableCell>
                                            <div style={{ display: "flex", flexDirection: "row" }} onClick={() => editAction()}>
                                                <Image src={Edit} alt='edit' width={18} height={18} />
                                                <Typography className="subText" style={{ marginLeft: "5px" }}>Edit</Typography>
                                            </div>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                </TableBody>
                            ))}
                            <TableFooter>
                                <TableRow align='left'>
                                    <TablePagination
                                        count={!!state.countryCode && state.countryCode.length}
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
                    <Dialog open={state.countryCodeOpen} onClose={() => countryCodeClose()} maxWidth={'sm'} >
                        <Grid container>
                            <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end" }}>
                                <DisabledByDefaultRoundedIcon style={{ color: "#024751", fontSize: "45px", position: "absolute" }} onClick={() => countryCodeClose()} />
                            </Grid>
                        </Grid>
                        <DialogTitle style={{ fontSize: "20px", fontStyle: "normal", lineHeight: "32px", fontFamily: "Avenir-Black", color: "#000", borderBottom: "1px solid #E8E8E8" }}>{state.mode === "ADD" ? "Add country code" : "Edit country code"}</DialogTitle>
                        <DialogContent>
                            <Grid container>
                                <Grid item xs={12} >
                                    <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Book", color: "#024751", marginTop: "10px", marginBottom: "10px" }}>Country information</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                            <TextField size="small"
                                                placeholder={"Code"}
                                                fullWidth
                                                inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Book", backgroundColor: "#FBF7F4" } }}
                                                value={state.code}
                                                onChange={(event) => setState({ ...state, code: event.target.value })}
                                            />
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                            <TextField size="small"
                                                placeholder={"Name"}
                                                fullWidth
                                                inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Book", backgroundColor: "#FBF7F4" } }}
                                                value={state.name}
                                                onChange={(event) => setState({ ...state, name: event.target.value })}
                                            />
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                            <TextField size="small"
                                                placeholder={"ISO"}
                                                fullWidth
                                                inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Book", backgroundColor: "#FBF7F4" } }}
                                                value={state.iso}
                                                onChange={(event) => setState({ ...state, iso: event.target.value })}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6} style={{ display: "flex", alignItems: "center" }}>
                                            <Typography style={{ fontFamily:'Avenir-Bold', paddingRight: "7px" }}>Status</Typography>
                                            <RadioGroup defaultValue="Active" row>
                                                <FormControlLabel value="Active" control={<Radio sx={{ color: '#024751', '&.Mui-checked': { color: '#024751' } }} />} label="Active" />
                                                <FormControlLabel value="Inactive" control={<Radio sx={{ color: '#024751', '&.Mui-checked': { color: '#024751' } }} />} label="Inactive" />
                                            </RadioGroup>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
                                        <CustomizedButtons variant={"text"} onClick={() => cancel()} >
                                            Cancel
                                        </CustomizedButtons>
                                        <CustomizedButtons variant={"contained"} style={{ marginLeft: "5px", borderRadius: "5px" }} onClick={() => submit()} >
                                            Submit
                                        </CustomizedButtons>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </DialogContent>
                    </Dialog>
                </Grid>
            </Grid>
        </>
    )
}

export default CountryCode;