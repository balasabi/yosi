import React, { useState } from 'react';
import {
    Typography, Grid, Table, TableRow, TableBody, TableHead, styled, TableCell, tableCellClasses,
    tableRowClasses, TablePagination, TableFooter
} from '@mui/material';
import CustomizedButtons from '../../components/CustomButton';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import Send from '../../../public/Images/send.png';
import Union from '../../../public/Images/union.png';
import DownArrow from '../../../public/Images/downArrow.png';
import GreenDownArrow from '../../../public/Images/greenDownArrow.png';
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

function TestKitInventory(props) {
    const [state, setState] = useState({
        page: 0,
        rowsPerPage: 10,
        test_kit_inventory: [
            {
                name: "Molecular",
                code: "internal-play.sonorashield.com",
                quantity: "7",
                price: "Basic Auth",
                status: "MolecularPassword123"
            }
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
                <Grid item xs={12} style={{ display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: "#EBF4F1", borderBottomRightRadius: "50px", marginTop: -15, paddingLeft: "15px" }}  >
                    <Typography style={{ fontSize: "38px", fontStyle: "normal", lineHeight: "72px", fontFamily: "Avenir-Black", color: "#02513B", marginRight: "10px" }}>Molecular lab</Typography>
                    <Image src={GreenDownArrow} alt='greenDownArrow' width={"20vw"} height={"20vh"} />
                </Grid>
                <Grid item xs={12}>
                    <Typography style={{ fontSize: "20px", fontStyle: "normal", lineHeight: "40px", fontFamily: "Avenir-Black", textTransform: "none", color: "#000", marginLeft: "5px", marginTop: "10px" }} >
                        Available test kits
                    </Typography>
                </Grid>
                <Grid item xs={12} >
                    <Grid container >
                        <Grid item xs={12} sm={6} md={5} lg={4} xl={4} >
                            <CustomizedButtons variant={"text"} style={{ padding: "4px 15px 4px 15px", marginLeft: "5px", backgroundColor: "#FBF7F4", marginTop: "5px" }} >
                                <Image src={Send} alt='send' width={"20vw"} height={"20vh"} />
                                <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#000", marginLeft: "5px" }} >
                                    Export
                                </Typography>
                            </CustomizedButtons>
                            <CustomizedButtons variant={"text"} onClick={() => alert("WIP")} style={{ padding: "4px 15px 4px 15px", marginLeft: "10px", backgroundColor: "#FBF7F4", marginTop: "5px" }} >
                                <Image src={Union} alt='union' width={"20vw"} height={"20vh"} />
                                <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#000", marginLeft: "5px" }} >
                                    Add Test Type
                                </Typography>
                            </CustomizedButtons>
                        </Grid>
                        <Grid item xs={12} sm={6} md={7} lg={8} xl={8} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "5px" }}>
                            <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#474747", marginLeft: "5px", alignSelf: "center" }}>Filter by</Typography>
                            <CustomizedButtons variant={"text"} style={{ padding: "4px 15px 4px 15px", marginLeft: "10px", backgroundColor: "#FBF7F4" }} >
                                <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#000", marginLeft: "5px", marginRight: "8px" }} >
                                    All Price
                                </Typography>
                                <Image src={DownArrow} alt='downArrow' width={"20vw"} height={"20vh"} />
                            </CustomizedButtons>
                            <CustomizedButtons variant={"text"} style={{ padding: "4px 15px 4px 15px", marginLeft: "10px", backgroundColor: "#FBF7F4" }} >
                                <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#000", marginLeft: "5px", marginRight: "8px" }} >
                                    All Insurance
                                </Typography>
                                <Image src={DownArrow} alt='downArrow' width={"20vw"} height={"20vh"} />
                            </CustomizedButtons>
                            <CustomizedButtons variant={"text"} style={{ padding: "4px 15px 4px 15px", marginLeft: "10px", backgroundColor: "#FBF7F4" }} >
                                <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#000", marginLeft: "5px", marginRight: "8px" }} >
                                    All Payment
                                </Typography>
                                <Image src={DownArrow} alt='downArrow' width={"20vw"} height={"20vh"} />
                            </CustomizedButtons>
                            <CustomizedButtons variant={"text"} style={{ padding: "4px 15px 4px 15px", marginLeft: "10px", backgroundColor: "#FBF7F4" }} >
                                <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#000", marginLeft: "5px", marginRight: "8px" }} >
                                    Status
                                </Typography>
                                <Image src={DownArrow} alt='downArrow' width={"20vw"} height={"20vh"} />
                            </CustomizedButtons>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ marginTop: "15px" }}>
                    <Table>
                        <TableHead>
                            <TableRow >
                                <StyledTableCell >Name</StyledTableCell>
                                <StyledTableCell >Code</StyledTableCell>
                                <StyledTableCell >Quantity</StyledTableCell>
                                <StyledTableCell >Price</StyledTableCell>
                                <StyledTableCell >Status</StyledTableCell>
                                <StyledTableCell >Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        {!!state.test_kit_inventory && state.test_kit_inventory.map((test_kit_inventory, index) => (
                            <TableBody key={index.toString()} style={{ backgroundColor: (index % 2) ? "#FCFCFC" : "#FFFFFF", borderBottom: "1.1px solid #F2F2F2" }}>
                                <StyledTableRow >
                                    <StyledTableCell >{test_kit_inventory.name}</StyledTableCell>
                                    <StyledTableCell >{test_kit_inventory.code}</StyledTableCell>
                                    <StyledTableCell >{test_kit_inventory.quantity}</StyledTableCell>
                                    <StyledTableCell >{test_kit_inventory.price}</StyledTableCell>
                                    <StyledTableCell style={{ color: "#3FA455" }}>{test_kit_inventory.status}</StyledTableCell>
                                    <StyledTableCell ><div style={{ display: "flex", flexDirection: "row" }}>
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
                                    count={!!state.test_kit_inventory && state.test_kit_inventory.length}
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
export default TestKitInventory;