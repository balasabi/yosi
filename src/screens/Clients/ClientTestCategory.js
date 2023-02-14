import React, { useState } from 'react';
import {
    Typography, Grid, TextField, Table, TableRow, TableBody, TableHead, styled, TableCell, tableCellClasses,
    tableRowClasses, Checkbox, TablePagination, Dialog, DialogTitle, DialogContent, TableFooter, RadioGroup, FormControlLabel, Radio,
     TableContainer, Paper,} from '@mui/material';
import { useRouter } from 'next/router';
import CustomizedButtons from '../../components/CustomButton';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import Union from '../../../public/Images/union.png';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CustomSearchInput from '../../components/CustomSearchInput';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#E7E7E7",
        color: theme.palette.common.black,
        fontFamily: 'Avenir-Black',
        padding: "3px"
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
        fontFamily: 'Avenir',
        padding: "2px"
    },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    [`&.${tableRowClasses.root}`]: {
    },
    '&:nth-of-type(odd)': {
        //backgroundColor: theme.palette.action.hover,
    },
}));

function ClientTestCategory(props) {
    const [state, setState] = useState({
        page: 0,
        rowsPerPage: 10,
        addTestOpen: false,
        first_name: "",
        last_name: "",
        signature: null,
        test: [
            {
                test_id: "WEL-000004",
                patient_name: "Kenny sebastin",
                test_type: "Insurance CAB Test - Camelback",
                collection_date: "12/13/2022 01:57:25",
                tube_number: "T5000",
                result: "Negative",
                analysis: "Result available"
            }
        ]
    })

    const router = useRouter();
    const dispatch = useDispatch();

    const handleChangePage = (event, newPage) => {
        setState({ ...state, page: newPage });
    };

    const handleChangeRowsPerPage = (event) => {
        setState({ ...state, rowsPerPage: event.target.value, page: 0 });
    };

    const addTestClose = () => {
        setState({ ...state, addTestOpen: false })
    };

    const submit = async () => {

    };

    const cancel = () => {
        setState({ ...state, addTestOpen: false })
    };

    return (
        <>
            <Grid container>
                <Grid item xs={12} >
                    <Grid container style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <Grid item xs={4}>
                            <CustomizedButtons variant={"text"} onClick={() => setState({ ...state, addTestOpen: true })} style={{ padding: "4px 15px 4px 15px", marginLeft: "10px", backgroundColor: "#FBF7F4", marginTop: "20px" }} >
                                <Image src={Union} alt='union' width={"20vw"} height={"20vh"} />
                                <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#000", marginLeft: "5px" }} >
                                    Add new category
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
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Molina</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <TableContainer component={Paper} >
                            <Table>
                                <TableHead>
                                    <TableRow >
                                        <StyledTableCell align="center">
                                            <Checkbox />
                                        </StyledTableCell>
                                        <StyledTableCell >Code</StyledTableCell>
                                        <StyledTableCell >
                                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                                <Typography style={{ fontSize: "14.5px", fontFamily: "Avenir-Black", color: "#000" }}>Test Name</Typography>
                                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginLeft: -12 }}>
                                                    <ArrowDropUpIcon style={{ color: "#000", height: "20px", width: "50px", marginBottom: -12 }} onClick={() => alert("WIP")} />
                                                    <ArrowDropDownIcon style={{ color: "#000", height: "20px", width: "50px" }} onClick={() => alert("WIP")} />
                                                </div>
                                            </div>
                                        </StyledTableCell>
                                        <StyledTableCell >Short code</StyledTableCell>
                                        <StyledTableCell >Description</StyledTableCell>
                                        <StyledTableCell >Sequence Number</StyledTableCell>
                                        <StyledTableCell >Status</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                {!!state.test && state.test.map((test, index) => (
                                    <TableBody key={index.toString()} style={{ backgroundColor: (index % 2) ? "#FCFCFC" : "#FFFFFF", borderBottom: "1.1px solid #F2F2F2" }}>
                                        <StyledTableRow >
                                            <StyledTableCell align="center">
                                                <Checkbox />
                                            </StyledTableCell>
                                            <StyledTableCell >{test.collection_date}</StyledTableCell>
                                            <StyledTableCell >{test.tube_number}</StyledTableCell>
                                            <StyledTableCell >{test.tube_number}</StyledTableCell>
                                            <StyledTableCell >{test.result}</StyledTableCell>
                                            <StyledTableCell >{test.analysis}</StyledTableCell>
                                            <StyledTableCell >{test.analysis}</StyledTableCell>
                                        </StyledTableRow>
                                    </TableBody>
                                ))}
                                <TableFooter>
                                    <TableRow>
                                        <TablePagination
                                            count={!!state.test && state.test.length}
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
                        </AccordionDetails>
                    </Accordion>
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
                                            onChange={(event) => setState({ first_name: event.target.value })}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField size="small"
                                            placeholder={"Patient last name"}
                                            fullWidth
                                            inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", backgroundColor: "#FBF7F4" } }}
                                            value={state.last_name}
                                            onChange={(event) => setState({ last_name: event.target.value })}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField size="small"
                                            placeholder={"Location"}
                                            fullWidth
                                            inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", backgroundColor: "#FBF7F4" } }}
                                            value={state.location}
                                            onChange={(event) => setState({ location: event.target.value })}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField size="small"
                                            placeholder={"Location test type "}
                                            fullWidth
                                            inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", backgroundColor: "#FBF7F4" } }}
                                            value={state.location_test_type}
                                            onChange={(event) => setState({ location_test_type: event.target.value })}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField size="small"
                                            placeholder={"Ordering provider"}
                                            fullWidth
                                            inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", backgroundColor: "#FBF7F4" } }}
                                            value={state.ordering_provider}
                                            onChange={(event) => setState({ ordering_provider: event.target.value })}
                                        />
                                    </Grid>
                                    <Grid item xs={6} style={{ display: "flex", alignItems: "center" }}>
                                        <Typography style={{ fontWeight: "bold", paddingRight: "7px" }}>Status</Typography>
                                        <RadioGroup defaultValue="Active" row>
                                            <FormControlLabel value="Active" control={<Radio sx={{ color: '#024751', '&.Mui-checked': { color: '#024751' } }} />} label="Active" />
                                            <FormControlLabel value="Inactive" control={<Radio sx={{ color: '#024751', '&.Mui-checked': { color: '#024751' } }} />} label="Inactive" />
                                        </RadioGroup>
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
export default ClientTestCategory;