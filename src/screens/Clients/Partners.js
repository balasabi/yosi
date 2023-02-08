import React, { useState } from 'react';
import {
    Typography, Grid, TextField, Table, TableRow, TableBody, TableHead, styled, TableCell, tableCellClasses,
    tableRowClasses, Checkbox, TablePagination, Dialog, DialogTitle, DialogContent, TableFooter
} from '@mui/material';
import CustomizedButtons from '../../components/CustomButton';
import Image from 'next/image';
import CustomSearchInput from '../../components/CustomSearchInput';
import Edit from '../../../public/Images/editIcon.png';
import Union from '../../../public/Images/union.png';


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

function Partners(props) {

    const [state, setState] = useState({
        page: 0,
        rowsPerPage: 10,
        searchText: "",
        addTestOpen:false,
        partnersData: [{  partner_name:"vicky",url:"localhost",port:"2020",auth_type:"2345ty6787",auth_key:"4565rtrhh",
        status: "Active"},
        ]
    })

    const handleChangePage = (event, newPage) => {
        setState({ ...state, page: newPage });
    };

    const handleChangeRowsPerPage = (event) => {
        setState({ ...state, rowsPerPage: event.target.value, page: 0 });
    };
    const cancel = () => {
        setState({ ...state, addTestOpen: false })
    }

    return (
        <>
            <Grid container>
                <Grid item xs={12} >
                    <Grid container style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <Grid item xs={4}>
                            <CustomizedButtons variant={"text"} onClick={() => setState({ ...state, addTestOpen: true })} style={{ padding: "4px 15px 4px 15px", marginLeft: "10px", backgroundColor: "#FBF7F4", marginTop: "20px" }} >
                                <Image src={Union} alt='union' width={"20vw"} height={"20vh"} />
                                <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#000", marginLeft: "5px" }} >
                                    Add client partner
                                </Typography>
                            </CustomizedButtons>
                        </Grid>
                        <Grid item xs={4}>
                            <CustomSearchInput
                                placeholder='Search test upload name, tube number, file name'
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ marginTop: "15px" }}>
                    <Table>
                        <TableHead>
                            <TableRow >
                                <StyledTableCell style={{ width: "210px" }}>Partner Name</StyledTableCell>
                                <StyledTableCell style={{ width: "130px" }}>URL</StyledTableCell>
                                <StyledTableCell >Port</StyledTableCell>
                                <StyledTableCell >Auth type</StyledTableCell>
                                <StyledTableCell >Auth key</StyledTableCell>
                                <StyledTableCell >Action</StyledTableCell>
                               
                            </TableRow>
                        </TableHead>
                        {!!state.partnersData && state.partnersData.map((partners, index) => (
                            <TableBody key={index.toString()} style={{ backgroundColor: (index % 2) ? "#FCFCFC" : "#FFFFFF", borderBottom: "1.1px solid #F2F2F2" }}>
                                <StyledTableRow >
                                    <StyledTableCell >{partners.partner_name}</StyledTableCell>
                                    <StyledTableCell >{partners.url}</StyledTableCell>
                                    <StyledTableCell >{partners.port}</StyledTableCell>
                                    <StyledTableCell >{partners.auth_type}</StyledTableCell>
                                    <StyledTableCell >{partners.auth_key}</StyledTableCell>
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
                                    count={!!state.partnersData && state.partnersData.length}
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
                <Dialog open={state.addTestOpen} onClose={() => addTestClose()} maxWidth={'sm'}>
                    <DialogTitle style={{ fontSize: "20px", fontStyle: "normal", lineHeight: "32px", fontFamily: "Avenir-Black", color: "#000", borderBottom: "1px solid #E8E8E8" }}>Add test result</DialogTitle>
                    <DialogContent>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", color: "#024751", marginTop: "10px", marginBottom: "10px" }}>Test information</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <TextField size="small"
                                            placeholder={"Patient first name"}
                                            fullWidth
                                            inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", backgroundColor: "#FBF7F4" } }}
                                            value={state.first_name}
                                            onChange={(event) => this.setState({ first_name: event.target.value })}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField size="small"
                                            placeholder={"Patient last name"}
                                            fullWidth
                                            inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", backgroundColor: "#FBF7F4" } }}
                                            value={state.last_name}
                                            onChange={(event) => this.setState({ last_name: event.target.value })}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField size="small"
                                            placeholder={"Location"}
                                            fullWidth
                                            inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", backgroundColor: "#FBF7F4" } }}
                                            value={state.location}
                                            onChange={(event) => this.setState({ location: event.target.value })}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField size="small"
                                            placeholder={"Location test type "}
                                            fullWidth
                                            inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", backgroundColor: "#FBF7F4" } }}
                                            value={state.location_test_type}
                                            onChange={(event) => this.setState({ location_test_type: event.target.value })}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField size="small"
                                            placeholder={"Ordering provider"}
                                            fullWidth
                                            inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", backgroundColor: "#FBF7F4" } }}
                                            value={state.ordering_provider}
                                            onChange={(event) => this.setState({ ordering_provider: event.target.value })}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField size="small"
                                            placeholder={"Test lab"}
                                            fullWidth
                                            inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", backgroundColor: "#FBF7F4" } }}
                                            value={state.test_lab}
                                            onChange={(event) => this.setState({ test_lab: event.target.value })}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
                                    <CustomizedButtons variant={"text"} style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#024751", marginLeft: "5px" }} onClick={() => cancel()} >
                                        Cancel
                                    </CustomizedButtons>
                                    <CustomizedButtons variant={"text"} style={{ padding: "4px 10px 4px 10px", backgroundColor: "#024751", fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#fff", marginLeft: "5px", borderRadius: "5px" }} onClick={() => submit()} >
                                        Submit
                                    </CustomizedButtons>
                                </Grid>
                            </Grid>
                        </Grid>
                    </DialogContent>
                </Dialog>
            </Grid>
        </>
    )
}
export default Partners;