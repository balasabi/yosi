import React, { useState } from 'react';
import {
    Typography, Grid, Table, TableRow, TableBody, TableHead, styled, TableCell, tableCellClasses,
    tableRowClasses, TablePagination, TableFooter, FormControl, Select, MenuItem
} from '@mui/material';
import { useRouter } from 'next/router';
import CustomSearchInput from '../../components/CustomSearchInput';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#E7E7E7",
        color: theme.palette.common.black,
        fontFamily: 'Avenir-Black',
        padding: "12px",
        fontWeight:800
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 17,
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

function Uploads(props) {
    const [state, setState] = useState({
        page: 0,
        rowsPerPage: 10,
        searchText: "",
        result:"",
        status:"",
        date:"",
        upload: [
            {
                test_upload_name: "T-00000126",
                tube_number: "NT208255979",
                result: "Negative",
                file_name: "API",
                created_by: "-",
                created_date: "12/21/2022",
                status: "Success",
            },
            {
                test_upload_name: "T-00000126",
                tube_number: "NT208255979",
                result: "Negative",
                file_name: "API",
                created_by: "-",
                created_date: "12/21/2022",
                status: "Success",
            },
            {
                test_upload_name: "T-00000126",
                tube_number: "NT208255979",
                result: "Negative",
                file_name: "API",
                created_by: "-",
                created_date: "12/21/2022",
                status: "Success",
            },
            {
                test_upload_name: "T-00000126",
                tube_number: "NT208255979",
                result: "Negative",
                file_name: "API",
                created_by: "-",
                created_date: "12/21/2022",
                status: "Success",
            },
            {
                test_upload_name: "T-00000126",
                tube_number: "NT208255979",
                result: "Negative",
                file_name: "API",
                created_by: "-",
                created_date: "12/21/2022",
                status: "Success",
            },
            {
                test_upload_name: "T-00000126",
                tube_number: "NT208255979",
                result: "Negative",
                file_name: "API",
                created_by: "-",
                created_date: "12/21/2022",
                status: "Success",
            },
            {
                test_upload_name: "T-00000126",
                tube_number: "NT208255979",
                result: "Negative",
                file_name: "API",
                created_by: "-",
                created_date: "12/21/2022",
                status: "Success",
            },
            {
                test_upload_name: "T-00000126",
                tube_number: "NT208255979",
                result: "Negative",
                file_name: "API",
                created_by: "-",
                created_date: "12/21/2022",
                status: "Success",
            },
            {
                test_upload_name: "T-00000126",
                tube_number: "NT208255979",
                result: "Negative",
                file_name: "API",
                created_by: "-",
                created_date: "12/21/2022",
                status: "Success",
            },
            {
                test_upload_name: "T-00000126",
                tube_number: "NT208255979",
                result: "Negative",
                file_name: "API",
                created_by: "-",
                created_date: "12/21/2022",
                status: "Success",
            },
            {
                test_upload_name: "T-00000126",
                tube_number: "NT208255979",
                result: "Negative",
                file_name: "API",
                created_by: "-",
                created_date: "12/21/2022",
                status: "Success",
            },
            {
                test_upload_name: "T-00000126",
                tube_number: "NT208255979",
                result: "Negative",
                file_name: "API",
                created_by: "-",
                created_date: "12/21/2022",
                status: "Success",
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

    const handleChange = (e,param) => {
        if(param === "R"){
            setState({...state,result:e.target.value})
        }
        else if(param === "S"){
            setState({...state,status:e.target.value})
        }
        else if(param === "D"){
            setState({...state,date:e.target.value})
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
                            <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#474747", marginLeft: "5px", alignSelf: "center" }}>Filter by</Typography>
                            <FormControl sx={{ m: 1, minWidth: 60, minHeight:10, '.MuiOutlinedInput-notchedOutline': { border: 0, borderRight:"2px solid #E8E8E8", borderRadius:0  } }} size="small">
                            <Select
                                value={state.result}
                                onChange={(e)=>handleChange(e,"R")}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                renderValue={
                                    state.result !== "" ? undefined : () => <Placeholder>All Results</Placeholder>
                                  }>
                                <MenuItem value={"All"}>All</MenuItem>
                                <MenuItem value={"Negative"}>Negative</MenuItem>
                                <MenuItem value={"Positive"}>Positive</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 60, minHeight:10, '.MuiOutlinedInput-notchedOutline': { border: 0, borderRight:"2px solid #E8E8E8", borderRadius:0  } }} size="small">
                            <Select
                                value={state.status}
                                onChange={(e)=>handleChange(e,"S")}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                renderValue={
                                    state.status !== "" ? undefined : () => <Placeholder>Status</Placeholder>
                                  }>
                                <MenuItem value={"All"}>All</MenuItem>
                                <MenuItem value={"Success"}>Success</MenuItem>
                                <MenuItem value={"Failure"}>Failure</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 60, minHeight:10, '.MuiOutlinedInput-notchedOutline': { border: 0 } }} size="small">
                            <Select
                                value={state.date}
                                onChange={(e)=>handleChange(e,"D")}
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
                    <Table>
                        <TableHead>
                            <TableRow >
                                <StyledTableCell >Test Upload Name</StyledTableCell>
                                <StyledTableCell >Tube Number</StyledTableCell>
                                <StyledTableCell >Result</StyledTableCell>
                                <StyledTableCell >File Name</StyledTableCell>
                                <StyledTableCell >Created By</StyledTableCell>
                                <StyledTableCell >Created Date</StyledTableCell>
                                <StyledTableCell >Status</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        {!!state.upload && state.upload.slice(state.page * state.rowsPerPage, state.page * state.rowsPerPage + state.rowsPerPage).map((upload, index) => (
                            <TableBody key={index.toString()} style={{ backgroundColor: (index % 2) ? "#FCFCFC" : "#FFFFFF", borderBottom: "1.1px solid #F2F2F2" }}>
                                <StyledTableRow >
                                    <StyledTableCell style={{fontSize:"14px"}}>{upload.test_upload_name}</StyledTableCell>
                                    <StyledTableCell style={{fontSize:"14px"}}>{upload.tube_number}</StyledTableCell>
                                    <StyledTableCell style={{fontSize:"14px"}}>{upload.result}</StyledTableCell>
                                    <StyledTableCell style={{fontSize:"14px"}}>{upload.file_name}</StyledTableCell>
                                    <StyledTableCell style={{fontSize:"14px"}}>{upload.created_by}</StyledTableCell>
                                    <StyledTableCell style={{fontSize:"14px"}}>{upload.created_date}</StyledTableCell>
                                    <StyledTableCell style={{fontSize:"14px"}}>{upload.status}</StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        ))}
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    count={!!state.upload && state.upload.length}
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
export default Uploads;