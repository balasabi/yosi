import React, { useState } from 'react';
import {
    Typography, Grid, Table, TableRow, TableBody, TableHead, styled, TableCell, tableCellClasses,
    tableRowClasses, TablePagination, TableFooter, FormControl, Select, MenuItem, TableContainer, Paper,
} from '@mui/material';
import { useRouter } from 'next/router';
import CustomSearchInput from '../../components/CustomSearchInput';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#E7E7E7",
        color: theme.palette.common.black,
        fontFamily: 'Avenir-Bold',
        padding: "12px",
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: '1em',
        fontFamily: 'Avenir-Book',
        padding: "10px"
    },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    [`&.${tableRowClasses.root}`]: {
    },
    '&:nth-of-type(odd)': {

    },
}));

function Category(props) {
    const [state, setState] = useState({
        page: 0,
        rowsPerPage: 10,
        searchText: "",
        results:"",
        status:"",
        date:"",
        category: [
            {
                name: "Respiratory Panels",
                code: "BRP",
                short_code: "BRP",
                sequence_number: "1",
                status: "Active",
                description: "*Respiratory Panels tests for SAR-CoV-2 (COVID-19), FLU-A, FLU-B, and Respiratory Syncytial Virus(RSV)",
            },
            {
                name: "Respiratory Panels",
                code: "BRP",
                short_code: "BRP",
                sequence_number: "1",
                status: "Active",
                description: "*Respiratory Panels tests for SAR-CoV-2 (COVID-19), FLU-A, FLU-B, and Respiratory Syncytial Virus(RSV)",
            },
            {
                name: "Respiratory Panels",
                code: "BRP",
                short_code: "BRP",
                sequence_number: "1",
                status: "Active",
                description: "*Respiratory Panels tests for SAR-CoV-2 (COVID-19), FLU-A, FLU-B, and Respiratory Syncytial Virus(RSV)",
            },
            {
                name: "Respiratory Panels",
                code: "BRP",
                short_code: "BRP",
                sequence_number: "1",
                status: "Active",
                description: "*Respiratory Panels tests for SAR-CoV-2 (COVID-19), FLU-A, FLU-B, and Respiratory Syncytial Virus(RSV)",
            },
            {
                name: "Respiratory Panels",
                code: "BRP",
                short_code: "BRP",
                sequence_number: "1",
                status: "Active",
                description: "*Respiratory Panels tests for SAR-CoV-2 (COVID-19), FLU-A, FLU-B, and Respiratory Syncytial Virus(RSV)",
            },
            {
                name: "Respiratory Panels",
                code: "BRP",
                short_code: "BRP",
                sequence_number: "1",
                status: "Active",
                description: "*Respiratory Panels tests for SAR-CoV-2 (COVID-19), FLU-A, FLU-B, and Respiratory Syncytial Virus(RSV)",
            },
            {
                name: "Respiratory Panels",
                code: "BRP",
                short_code: "BRP",
                sequence_number: "1",
                status: "Active",
                description: "*Respiratory Panels tests for SAR-CoV-2 (COVID-19), FLU-A, FLU-B, and Respiratory Syncytial Virus(RSV)",
            },
            {
                name: "Respiratory Panels",
                code: "BRP",
                short_code: "BRP",
                sequence_number: "1",
                status: "Active",
                description: "*Respiratory Panels tests for SAR-CoV-2 (COVID-19), FLU-A, FLU-B, and Respiratory Syncytial Virus(RSV)",
            },
            {
                name: "Respiratory Panels",
                code: "BRP",
                short_code: "BRP",
                sequence_number: "1",
                status: "Active",
                description: "*Respiratory Panels tests for SAR-CoV-2 (COVID-19), FLU-A, FLU-B, and Respiratory Syncytial Virus(RSV)",
            },
            {
                name: "Respiratory Panels",
                code: "BRP",
                short_code: "BRP",
                sequence_number: "1",
                status: "Active",
                description: "*Respiratory Panels tests for SAR-CoV-2 (COVID-19), FLU-A, FLU-B, and Respiratory Syncytial Virus(RSV)",
            },
            {
                name: "Respiratory Panels",
                code: "BRP",
                short_code: "BRP",
                sequence_number: "1",
                status: "Active",
                description: "*Respiratory Panels tests for SAR-CoV-2 (COVID-19), FLU-A, FLU-B, and Respiratory Syncytial Virus(RSV)",
            },
            {
                name: "Respiratory Panels",
                code: "BRP",
                short_code: "BRP",
                sequence_number: "1",
                status: "Active",
                description: "*Respiratory Panels tests for SAR-CoV-2 (COVID-19), FLU-A, FLU-B, and Respiratory Syncytial Virus(RSV)",
            },
        ]
    })

    const router = useRouter();

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
        if(param === "R"){
        setState({ ...state, results: e.target.value })
    }else if(param === "S"){
        setState({ ...state, status: e.target.value })
    }else if(param === "D"){
        setState({ ...state, date: e.target.value })
    }
}

    return (
        <>
            <Grid container>
                <Grid item xs={12} >
                    <Grid container >
                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                            <CustomSearchInput
                                placeholder='Search test upload name, tube number, file name'
                                onChange={(name) => alert("WIP")}
                            />
                        </Grid>
                        <Grid item xs={8} sm={8} md={8} lg={8} xl={8} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "20px" }}>
                            <Typography className='miniText' style={{ marginLeft: "5px", alignSelf: "center" }}>Filter by</Typography>
                            <FormControl sx={{ m: 1, minWidth: 60, minHeight:10, '.MuiOutlinedInput-notchedOutline': { border: 0, borderRight:"2px solid #E8E8E8", borderRadius:0 } }} size="small">
                            <Select
                                value={state.results}
                                onChange={(e)=>handleChange(e,"R")}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                renderValue={
                                    state.results !== "" ? undefined : () => <Placeholder>All Results</Placeholder>
                                  }>
                                <MenuItem value={"All"}>All</MenuItem>
                                <MenuItem value={"Negative"}>Negative</MenuItem>
                                <MenuItem value={"Positive"}>Positive</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 60, minHeight:10, '.MuiOutlinedInput-notchedOutline': { border: 0, borderRight:"2px solid #E8E8E8", borderRadius:0 } }} size="small">
                            <Select
                                value={state.status}
                                onChange={(e)=>handleChange(e,"T")}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                renderValue={
                                    state.status !== "" ? undefined : () => <Placeholder>All Status</Placeholder>
                                  }>
                                <MenuItem value={"All"}>All</MenuItem>
                                <MenuItem value={"Active"}>Active</MenuItem>
                                <MenuItem value={"Inactive"}>Inactive</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 60, minHeight:10, '.MuiOutlinedInput-notchedOutline': { border: 0 } }} size="small">
                            <Select
                                value={state.date}
                                onChange={(e)=>handleChange(e,"L")}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                renderValue={
                                    state.date !== "" ? undefined : () => <Placeholder>Date</Placeholder>
                                  }>
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
                                <StyledTableCell style={{ width: "150px" }}>Name</StyledTableCell>
                                <StyledTableCell style={{ width: "80px" }}>Code</StyledTableCell>
                                <StyledTableCell style={{ width: "80px" }}>Short Code</StyledTableCell>
                                <StyledTableCell style={{ width: "130px" }}>Sequence Number</StyledTableCell>
                                <StyledTableCell style={{ width: "70px" }}>Status</StyledTableCell>
                                <StyledTableCell >Description</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        {!!state.category && state.category.slice(state.page * state.rowsPerPage, state.page * state.rowsPerPage + state.rowsPerPage).map((category, index) => (
                            <TableBody key={index.toString()} style={{ backgroundColor: (index % 2) ? "#FCFCFC" : "#FFFFFF", borderBottom: "1.1px solid #F2F2F2" }}>
                                <StyledTableRow >
                                    <StyledTableCell style={{fontSize:"14px"}}>{category.name}</StyledTableCell>
                                    <StyledTableCell style={{fontSize:"14px"}}>{category.code}</StyledTableCell>
                                    <StyledTableCell style={{fontSize:"14px"}}>{category.short_code}</StyledTableCell>
                                    <StyledTableCell style={{fontSize:"14px"}}>{category.sequence_number}</StyledTableCell>
                                    <StyledTableCell style={{ color: "#3FA455",fontSize:"14px" }}>{category.status}</StyledTableCell>
                                    <StyledTableCell style={{ wordBreak: "break-word",fontSize:"14px"}}>{category.description}</StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        ))}
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    count={!!state.category && state.category.length}
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
            </Grid>
        </>
    )
}
export default Category;