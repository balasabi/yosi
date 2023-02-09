import React, { useState } from 'react';
import { Typography, Grid, TableRow, tableCellClasses, styled, TableCell, Table, TableBody, tableRowClasses, FormHelperText, FormControl, Select, MenuItem } from '@mui/material';
import CustomizedButtons from '../../components/CustomButton';
import Image from 'next/image';
import DownArrow from '../../../public/Images/downArrow.png';
import CustomSearchInput from '../../components/CustomSearchInput';
import RightArrow from '../../../public/Images/go.png';

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
        fontFamily: "Avenir",
    },
    [`&.${tableCellClasses.body}`]: {
        color: "#313233",
        border: "none",
        fontFamily: "Avenir"
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
        result: ""
    })

    const handleChange = (event, param) => {
        if (param === "S") {
            setState({ ...state, status: event.target.value });
        } else if (param === "R") {
            setState({ ...state, result: event.target.value });
        }
    };

    return (
        <>
            <Grid container>
                <Grid item xs={12} marginBottom={"20px"} >
                    <Grid container >
                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                            <CustomSearchInput
                                placeholder='Search test upload name, tube number, file name'
                                onChange={(name) => alert("WIP")}
                            />
                        </Grid>
                        <Grid item xs={8} sm={8} md={8} lg={8} xl={8} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "20px" }}>
                            <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#474747", marginLeft: "5px", alignSelf: "center" }}>Filter by</Typography>
                            <FormControl sx={{ m: 1, minWidth: 100, minHeight: 10, '.MuiOutlinedInput-notchedOutline': { border: 0 }, '.Mui-focused fieldset': { border: 0 }, borderRight:"2px solid #E8E8E8" }}>
                                <Select
                                    value={state.result}
                                    onChange={(e) => handleChange(e, "R")}
                                    displayEmpty
                                    renderValue={state.result !== "" ? undefined : () => <Placeholder>All Results</Placeholder>} >
                                    <MenuItem value={"Insurance At-Home COVID Kit"}>Insurance At-Home COVID Kit</MenuItem>
                                    <MenuItem value={"Insurance At-Home COVID Kit 2"}>Insurance At-Home COVID Kit 2</MenuItem>
                                </Select>
                           </FormControl>
                            
                            <FormControl sx={{ m: 1, minWidth: 100, minHeight: 10, '.MuiOutlinedInput-notchedOutline': { border: 0 }, '.Mui-focused fieldset': { border: 0 },borderRight:"2px solid #E8E8E8" }}>
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
                            <CustomizedButtons variant={"text"} style={{ padding: "0px 15px 0px 15px", marginLeft: "10px", backgroundColor: "#FBF7F4" }} >
                                <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#000", marginLeft: "5px", marginRight: "8px" }} >
                                    Date
                                </Typography>
                                <Image src={DownArrow} alt='downArrow' width={"10vw"} height={"20vh"} />
                            </CustomizedButtons>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}  >
                    <Grid container >
                        {!!state.type && state.type.map((type, index) =>
                            <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={index.toString()}>
                                <Table>
                                    <TableBody>
                                        <StyledTableRow>
                                            <StyledTableCell style={{ border: "none" }}>
                                                <Grid container style={{ display: "flex", justifyContent: "center", alignItems: "center", boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)', borderRadius: "8px", padding: "10px" }}>
                                                    <Grid item xs={12} >
                                                        <Typography style={{
                                                            letterSpacing: "0.4px", fontWeight: 800, fontSize: "20px", lineHeight: "32px", fontFamily: "Avenir-Black",
                                                            overflow: 'hidden',
                                                            WebkitBoxOrient: 'vertical',
                                                            WebkitLineClamp: 3,
                                                        }} color={"#000000"}>{type.name} </Typography>
                                                    </Grid>
                                                    <Grid item xs={12} style={{ display: "flex", flexDirection: "row" }} >
                                                        <Typography style={{
                                                            letterSpacing: "0.4px", fontSize: "13px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir", display: '-webkit-box',
                                                            overflow: 'hidden',
                                                            WebkitBoxOrient: 'vertical',
                                                            WebkitLineClamp: 3,
                                                        }} color={"#718797"}>Status: </Typography>
                                                        <Typography style={{
                                                            letterSpacing: "0.4px", fontSize: "13px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir", display: '-webkit-box',
                                                            overflow: 'hidden',
                                                            WebkitBoxOrient: 'vertical',
                                                            WebkitLineClamp: 3,
                                                            backgroundColor: "#EBF4F1", marginLeft: "5px", padding: "2px"
                                                        }} color={"#024751"}> {type.status}</Typography>
                                                    </Grid>
                                                    <Grid item xs={12} style={{ display: "flex", flexDirection: "row" }} >
                                                        <Typography style={{
                                                            letterSpacing: "0.4px", fontWeight: 900, color: "#10101099", fontSize: "14px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir", display: '-webkit-box',
                                                            overflow: 'hidden',
                                                            WebkitBoxOrient: 'vertical',
                                                            WebkitLineClamp: 3,
                                                        }} colo={"rgba(16, 16, 16, 0.6)"} >Display Name: {type.display_name} </Typography>
                                                    </Grid>
                                                    <Grid item xs={12} style={{ marginBottom: "5px" }} >
                                                        <Typography style={{
                                                            letterSpacing: "0.4px", fontWeight: 900, fontSize: "14px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir", display: '-webkit-box',
                                                            overflow: 'hidden',
                                                            WebkitBoxOrient: 'vertical',
                                                            WebkitLineClamp: 3,
                                                        }} color={"#313237"}>Description: </Typography>
                                                        <Typography style={{
                                                            letterSpacing: "0.4px", fontWeight: 400, fontSize: "14px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir", display: '-webkit-box',
                                                            overflow: 'hidden',
                                                            WebkitBoxOrient: 'vertical',
                                                            WebkitLineClamp: 3,
                                                        }} color={"rgba(16, 16, 16, 0.6)"}> {type.description_1}</Typography>
                                                        <Typography style={{
                                                            letterSpacing: "0.4px", fontWeight: 400, fontSize: "14px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir", display: '-webkit-box',
                                                            overflow: 'hidden',
                                                            WebkitBoxOrient: 'vertical',
                                                            WebkitLineClamp: 3,
                                                        }} color={"rgba(16, 16, 16, 0.6)"}> {type.description_2}</Typography>
                                                    </Grid>
                                                    <Grid item xs={12} style={{ borderBottom: "0.5px solid rgba(0, 0, 0, 0.16)" }} />
                                                    <Grid item xs={12} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: "10px", cursor: "pointer" }}>
                                                        <Typography style={{
                                                            letterSpacing: "0.4px", fontWeight: 900, fontSize: "14px", lineHeight: "20px", fontFamily: "Avenir-Black", display: '-webkit-box',
                                                            overflow: 'hidden',
                                                            WebkitBoxOrient: 'vertical',
                                                            WebkitLineClamp: 3,
                                                        }} color={"#313237"}>Show Details</Typography>
                                                        <Image src={RightArrow} alt='rightArrow' width={"20vw"} height={"20vh"} />
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