import React, { useState } from 'react';
import {
    Typography, Grid, Table, TableRow, TableBody, TableHead, styled, TableCell, tableCellClasses,
    tableRowClasses, TablePagination, TableFooter
} from '@mui/material';
import CustomizedButtons from '../../components/CustomButton';
import Image from 'next/image';
import DownArrow from '../../../public/Images/downArrow.png';
import CustomSearchInput from '../../components/CustomSearchInput';
import Edit from '../../../public/Images/editIcon.png';


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
        //backgroundColor: theme.palette.action.hover,
    },
}));

function ClientDb(props) {

    const [state, setState] = useState({
        page: 0,
        rowsPerPage: 10,
        searchText: "",
        clientDbData: [
            {
                client_name: "Molina",
                phone_number: "+919876545678",
                email: "molina@gmail.com",
                address: "12/34,abz complex,west ,chennai 78",
                status: "Active",
            },
            {
                client_name: "Molina",
                phone_number: "+919876545678",
                email: "molina@gmail.com",
                address: "12/34,abz complex,west ,chennai 78",
                status: "Active",
            },
        ]
    })

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
                        <Grid item xs={4} >
                            <CustomSearchInput
                                placeholder='Search test upload name, tube number, file name'
                            />
                        </Grid>
                        <Grid item xs={8} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "20px" }}>
                            <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#474747", marginLeft: "5px", alignSelf: "center" }}>Filter by</Typography>
                            <CustomizedButtons variant={"text"} style={{ padding: "0px 15px 0px 15px", marginLeft: "10px", backgroundColor: "#FBF7F4" }} >
                                <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#000", marginLeft: "5px" }} >
                                    All Results
                                </Typography>
                                <Image src={DownArrow} alt='downArrow' width={"20vw"} height={"20vh"} />
                            </CustomizedButtons>
                        </Grid>
                        <Grid item xs={12} style={{ marginTop: "15px" }}>
                            <Table>
                                <TableHead>
                                    <TableRow >
                                        <StyledTableCell style={{ width: "210px" }}>Client Name</StyledTableCell>
                                        <StyledTableCell style={{ width: "130px" }}>Phone Number</StyledTableCell>
                                        <StyledTableCell >Email</StyledTableCell>
                                        <StyledTableCell >Address</StyledTableCell>
                                        <StyledTableCell >Status</StyledTableCell>
                                        <StyledTableCell >Action</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                {!!state.clientDbData && state.clientDbData.map((clients, index) => (
                                    <TableBody key={index.toString()} style={{ backgroundColor: (index % 2) ? "#FCFCFC" : "#FFFFFF", borderBottom: "1.1px solid #F2F2F2" }}>
                                        <StyledTableRow >
                                            <StyledTableCell >{clients.client_name}</StyledTableCell>
                                            <StyledTableCell >{clients.phone_number}</StyledTableCell>
                                            <StyledTableCell >{clients.email}</StyledTableCell>
                                            <StyledTableCell >{clients.address}</StyledTableCell>
                                            <StyledTableCell style={{ color: "#024751" }}>{clients.status}</StyledTableCell>
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
                                            count={!!state.clientDbData && state.clientDbData.length}
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
                </Grid>
            </Grid>
        </>
    )
}
export default ClientDb;