import React, {useState} from "react";
import { Typography, Grid, Table, TableHead, TableRow, styled, TableCell, tableCellClasses,
    tableRowClasses, TableBody, TablePagination, TableFooter } from '@mui/material';
import DownArrow from "../../../public/Images/downArrow.png";
import CustomizedButtons from '../../components/CustomButton';
import plus from "../../../public/Images/plus.png";
import Edit from '../../../public/Images/editIcon.png';
import Image from 'next/image';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#E7E7E7",
        color: theme.palette.common.black,
        fontFamily: 'Avenir-Black',
        padding: "12px",
        fontWeight:900,
        fontSize:"18px",
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

function CountryCode(){

    const [state,setState]=useState({
        page: 0,
        rowsPerPage: 10,
        countryCode: [
            { 'Code': '+91', 'Name': 'India', 'ISO': 'IND', 'Status': 'Active', 'Action': '' },
            { 'Code': '+1', 'Name': 'United States of America', 'ISO': 'USA', 'Status': 'Active', 'Action': '' },
            { 'Code': '+4', 'Name': 'Colombia', 'ISO': 'COL', 'Status': 'Active', 'Action': '' },
            { 'Code': '+5', 'Name': 'Pakistan', 'ISO': 'PAK', 'Status': 'Active', 'Action': '' },
            { 'Code': '+34', 'Name': 'Africa', 'ISO': 'AFR', 'Status': 'Active', 'Action': '' },
        ]
    },
    )

    const handleChangePage = (event, newPage) => {
        setState({ ...state, page: newPage });
    };

    const handleChangeRowsPerPage = (event) => {
        setState({ ...state, rowsPerPage: event.target.value, page: 0 });
    };

    return(
        <>
        <Grid item xs={12} style={{ borderBottom: "2px solid #C8C8C8" }} />
            <Grid item xs={12} display={"flex"} flexDirection={'row'}>
                <Grid container>
                    <Grid item xs={6}>
                        <CustomizedButtons variant={"contained"} style={{ padding: "4px 15px 4px 15px", marginLeft: "10px", marginTop: "20px" }}>
                            <Image src={plus} alt='union' width={"20vw"} height={"20vh"} />
                            <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", marginLeft: "5px" }}>
                                Add Country Code
                            </Typography>
                        </CustomizedButtons>
                    </Grid>
                    <Grid item xs={6} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "20px" }}>
                        <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#474747", marginLeft: "5px", alignSelf: "center" }}>Filter by</Typography>
                        <CustomizedButtons variant={"text"} style={{ padding: "0px 15px 0px 15px", marginLeft: "10px", backgroundColor: "#FBF7F4" }} >
                            <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#000", marginLeft: "5px", marginRight: '10px', fontWeight: 900 }}>
                                All Status
                            </Typography>
                            <Image src={DownArrow} alt='downArrow' width={"20vw"} height={"20vh"} />
                        </CustomizedButtons>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} style={{ marginTop: "15px" }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell style={{ width: "210px" }}>Code</StyledTableCell>
                            <StyledTableCell style={{ width: "300px" }}>Name</StyledTableCell>
                            <StyledTableCell style={{ width: "200px" }}>ISO</StyledTableCell>
                            <StyledTableCell style={{ width: "200px" }}>Status</StyledTableCell>
                            <StyledTableCell style={{ width: "100px" }}>Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    {!!state.countryCode && state.countryCode.map((code, index) => (
                        <TableBody key={index.toString()} style={{ backgroundColor: (index % 2) ? "#FCFCFC" : "#FFFFFF", borderBottom: "1.1px solid #F2F2F2" }}>
                            <StyledTableRow >
                                <StyledTableCell style={{fontSize: "14px"}}>{code.Code}</StyledTableCell>
                                <StyledTableCell style={{fontSize: "14px"}}>{code.Name}</StyledTableCell>
                                <StyledTableCell style={{fontSize: "14px"}}>{code.ISO}</StyledTableCell>
                                <StyledTableCell style={{fontSize: "14px"}}>{code.Status}</StyledTableCell>
                                <StyledTableCell >
                                    <div style={{ display: "flex", flexDirection: "row" }}>
                                        <Image src={Edit} alt='edit' width={18} height={18} />
                                        <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#000", marginLeft: "5px" }}>Edit</Typography>
                                    </div>
                                </StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                    ))}
                    <TableFooter>
                        <TableRow>
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
            </Grid>
        </>
    )
}

export default CountryCode