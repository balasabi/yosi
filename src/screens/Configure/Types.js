import React, { useState } from 'react';
import { Typography, Grid, TableRow, tableCellClasses, styled, TableCell, Table, TableBody, tableRowClasses, FormControl, Select, MenuItem } from '@mui/material';
import Image from 'next/image';
import CustomSearchInput from '../../components/CustomSearchInput';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Placeholder = ({ children }) => {
    return <div styles={{ color: "#aaa" }}>{children}</div>;
};
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    [`&.${tableRowClasses.root}`]: {
        height: "14px"
    }
}));
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        border: "none",
        color: "#848991",
        fontFamily: "Avenir-Heavy",
    },
    [`&.${tableCellClasses.body}`]: {
        color: "#313233",
        border: "none",
        fontFamily: "Avenir-Book"
    }
}));

function Type(props) {
    const [state, setState] = useState({
        type: [
            {
                name: "Insurance At-Home COVID Kit",
                status: "Active",
                display_name: "Rapid antigen test",
                description_1: "-Results in about 1 hour",
                description_2: "-Tests for active infections"
            },
            {
                name: "Insurance At-Home COVID Kit",
                status: "Active",
                display_name: "Rapid antigen test",
                description_1: "-Results in about 1 hour",
                description_2: "-Tests for active infections"
            },
            {
                name: "Insurance At-Home COVID Kit",
                status: "Active",
                display_name: "Rapid antigen test",
                description_1: "-Results in about 1 hour",
                description_2: "-Tests for active infections"
            },
            {
                name: "Insurance At-Home COVID Kit",
                status: "Active",
                display_name: "Rapid antigen test",
                description_1: "-Results in about 1 hour",
                description_2: "-Tests for active infections"
            },
            {
                name: "Insurance At-Home COVID Kit",
                status: "Active",
                display_name: "Rapid antigen test",
                description_1: "-Results in about 1 hour",
                description_2: "-Tests for active infections"
            },
            {
                name: "Insurance At-Home COVID Kit",
                status: "Active",
                display_name: "Rapid antigen test",
                description_1: "-Results in about 1 hour",
                description_2: "-Tests for active infections"
            }
        ],
        status: "",
        result: "",
        date: ""
    })

    const Placeholder = ({ children }) => {
        return <div style={{ color: "#101010", fontWeight: 800, fontSize: "14px", fontFamily: "Avenir-Book", fontStyle: "normal" }}>{children}</div>;
    };

    const handleChange = (event, param) => {
        if (param === "S") {
            setState({ ...state, status: event.target.value });
        } else if (param === "R") {
            setState({ ...state, result: event.target.value });
        } else if (param === "D") {
            setState({ ...state, date: e.target.value });
        }
    };

    return (
        <>
            <Grid container>
                <Grid item xs={12}  >
                    <Grid container >
                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                            <CustomSearchInput
                                placeholder='Search test upload name, tube number, file name'
                                onChange={(name) => alert("WIP")}
                            />
                        </Grid>
                        <Grid item xs={8} sm={8} md={8} lg={8} xl={8} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "20px" }}>
                            <Typography className='miniLiteText' style={{ marginLeft: "5px", alignSelf: "center" }}>Filter by</Typography>
                            <FormControl sx={{ m: 1, minWidth: 60, minHeight: 10, '.MuiOutlinedInput-notchedOutline': { border: 0 }, '.Mui-focused fieldset': { border: 0 }, borderRight: "2px solid #E8E8E8", borderRadius: 0 }} size="small">
                                <Select
                                    value={state.result}
                                    onChange={(e) => handleChange(e, "R")}
                                    displayEmpty
                                    renderValue={state.result !== "" ? undefined : () => <Placeholder>All Results</Placeholder>} >
                                    <MenuItem value={"All"}>All</MenuItem>
                                    <MenuItem value={"Negative"}>Negative</MenuItem>
                                    <MenuItem value={"Positive"}>Positive</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl sx={{ m: 1, minWidth: 60, minHeight: 10, '.MuiOutlinedInput-notchedOutline': { border: 0 }, '.Mui-focused fieldset': { border: 0 }, borderRight: "2px solid #E8E8E8", borderRadius: 0 }} size="small">
                                <Select
                                    value={state.status}
                                    onChange={(e) => handleChange(e, "S")}
                                    displayEmpty
                                    renderValue={state.status !== "" ? undefined : () => <Placeholder>Status</Placeholder>}
                                >
                                    <MenuItem value={"All"}>All</MenuItem>
                                    <MenuItem value={"Active"}>Active</MenuItem>
                                    <MenuItem value={"Inactive"}>Inactive</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl sx={{ m: 1, minWidth: 60, minHeight: 10, '.MuiOutlinedInput-notchedOutline': { border: 0 }, borderRadius: 0 }} size="small">
                                <Select
                                    value={state.date}
                                    onChange={(e) => handleChange(e, "D")}
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
                <Grid item xs={12}>
                    <Grid container>
                        {!!state.type && state.type.map((type, index) =>
                            <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={index.toString()}>
                                <Table>
                                    <TableBody>
                                        <StyledTableRow>
                                            <StyledTableCell style={{ border: "none" }}>
                                                <Grid container style={{ display: "flex", justifyContent: "center", alignItems: "center", boxShadow: '0px 1px 1px -4px rgb(0 0 0 / 30%), 0px 1px 3px 4px rgb(0 0 0 / 10%)', borderRadius: "8px", padding: "10px" }}>
                                                    <Grid item xs={12} >
                                                        <Typography className='subHeading'>{type.name} </Typography>
                                                    </Grid>
                                                    <Grid item xs={12} style={{ display: "flex", flexDirection: "row" }} >
                                                        <Typography style={{
                                                            letterSpacing: "0.4px", fontSize: "13px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Book",
                                                        }} color={"#718797"}>Status: </Typography>
                                                        <Typography style={{
                                                            letterSpacing: "0.4px", fontSize: "13px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Book",
                                                            backgroundColor: "#F0E9FF", marginLeft: "5px", padding: "2px"
                                                        }} color={"#6425FE"}> {type.status}</Typography>
                                                    </Grid>
                                                    <Grid item xs={12} style={{ display: "flex", flexDirection: "row" }} >
                                                        <Typography className='miniText' color='"rgba(16, 16, 16, 0.6)"'>Display Name: {type.display_name} </Typography>
                                                    </Grid>
                                                    <Grid item xs={12} style={{ marginBottom: "5px" }} >
                                                        <Typography style={{
                                                            letterSpacing: "0.4px", fontWeight: 700, fontSize: "14px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Book"
                                                        }} color={"#313237"}>
                                                            Description: </Typography>
                                                        <Typography className='miniLiteText'>{type.description_1}</Typography>
                                                        <Typography className='miniLiteText'>{type.description_2}</Typography>
                                                    </Grid>
                                                    <Grid item xs={12} style={{ borderBottom: "0.5px solid rgba(0, 0, 0, 0.16)" }} />
                                                    <Grid item xs={12} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: "10px", cursor: "pointer" }}>
                                                        <Typography className='miniHeading'>Show Details</Typography>
                                                        <ArrowForwardIcon width={"20vw"} height={"20vh"} style={{color:"#6425FE"}} onClick={() => alert("WIP")}/>
                                                    </Grid>
                                                </Grid>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    </TableBody>
                                </Table>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
export default Type;