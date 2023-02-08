import React, { useState } from 'react';
import {
    Typography, Grid, Table, TableRow, TableBody, TableHead, styled, TableCell, tableCellClasses,
    tableRowClasses, TablePagination, TableFooter
} from '@mui/material';
import { useRouter } from 'next/router';
import CustomizedButtons from '../../components/CustomButton';
import Image from 'next/image';
import DownArrow from '../../../public/Images/downArrow.png';
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

function Category(props) {
    const [state, setState] = useState({
        page: 0,
        rowsPerPage: 10,
        searchText: "",
        category: [
            {
                name: "Respiratory Panels",
                code: "BRP",
                short_code: "BRP",
                sequence_number: "1",
                status: "Active",
                description: "*Respiratory Panels tests for SAR-CoV-2 (COVID-19), FLU-A, FLU-B, and Respiratory Syncytial Virus(RSV)",
            }
        ]
    })

    const router = useRouter();

    const handleChangePage = (event, newPage) => {
        setState({ ...state, page: newPage });
    };

    const handleChangeRowsPerPage = (event) => {
        setState({ ...state, rowsPerPage: event.target.value, page: 0 });
    };

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
                            <CustomizedButtons variant={"text"} style={{ padding: "0px 15px 0px 15px", marginLeft: "10px", backgroundColor: "#FBF7F4" }} >
                                <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#000", marginLeft: "5px", marginRight:"8px" }} >
                                    All Results
                                </Typography>
                                <Image src={DownArrow} alt='downArrow' width={"20vw"} height={"20vh"} />
                            </CustomizedButtons>
                            <CustomizedButtons variant={"text"} style={{ padding: "0px 15px 0px 15px", marginLeft: "10px", backgroundColor: "#FBF7F4" }} >
                                <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#000", marginLeft: "5px", marginRight:"8px" }} >
                                    All Status
                                </Typography>
                                <Image src={DownArrow} alt='downArrow' width={"20vw"} height={"20vh"} />
                            </CustomizedButtons>
                            <CustomizedButtons variant={"text"} style={{ padding: "0px 15px 0px 15px", marginLeft: "10px", backgroundColor: "#FBF7F4" }} >
                                <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#000", marginLeft: "5px", marginRight:"8px" }} >
                                    Date
                                </Typography>
                                <Image src={DownArrow} alt='downArrow' width={"10vw"} height={"20vh"} />
                            </CustomizedButtons>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ marginTop: "15px" }}>
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
                        {!!state.category && state.category.map((category, index) => (
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
                </Grid>
            </Grid>
        </>
    )
}
export default Category;