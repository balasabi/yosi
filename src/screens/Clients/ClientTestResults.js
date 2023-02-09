import React, { useState, useRef } from 'react';
import {
    Typography, Grid, TextField, Table, TableRow, TableBody, TableHead, styled, TableCell, tableCellClasses,
    tableRowClasses, Checkbox, TablePagination, Dialog, DialogTitle, DialogContent, TableFooter, RadioGroup, FormControlLabel,Radio, FormControl, Select, MenuItem
} from '@mui/material';
import { useRouter } from 'next/router';
import CustomizedButtons from '../../components/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import Send from '../../../public/Images/send.png';
import Union from '../../../public/Images/union.png';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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
    },
}));

function ClientTestResult(props) {
    const [state, setState] = useState({
        page: 0,
        rowsPerPage: 10,
        addTestOpen: false,
        first_name: "",
        last_name: "",
        signature: null,
        results:"",
        testType:"",
        allLocations:"",
        date:"",
        test: [
            {id:1,
                test_id: "WEL-000004",
                patient_name: "Kenny sebastin",
                test_type: "Insurance CAB Test - Camelback",
                collection_date: "12/13/2022 01:57:25",
                tube_number: "T5000",
                result: "Negative",
                analysis: "Result available"
            }
        ],
        isClickCheckBox: false,
        selectClientTestResults:[]
    })

    const router = useRouter();
    const dispatch = useDispatch();
    const signPad = useRef({});
    const testResult = useSelector(state => state.testResultReducer.testResult);

    const handleChangePage = (event, newPage) => {
        setState({ ...state, page: newPage });
    };

    const handleChangeRowsPerPage = (event) => {
        setState({ ...state, rowsPerPage: event.target.value, page: 0 });
    };

    const addTestClose = () => {
        setState({ ...state, addTestOpen: false })
    }
    const submit = async () => {
      
    }
    const cancel = () => {
        setState({ ...state, addTestOpen: false })
    }
    const checkBoxAction = () => {
        setState(
            {
                ...state,
                isClickCheckBox: !state.isClickCheckBox,
                selectClientTestResults: !state.selectClientTestResults === true ? _.pluck(state.test, 'id') : []
            }
        )
    }

    const singleSelectAction = (param) => {
        if (state.selectClientTestResults.length > 0 && state.selectClientTestResults.includes(param)) {
            setState({
                ...state,
                selectClientTestResults: state.selectClientTestResults.filter((item) => item != param)
            })
        }
        else {
            let result = state.selectClientTestResults
            result.push(param)
            setState({
                selectClientTestResults: result
            })
        }
    }

    const Placeholder = ({ children }) => {
        return <div style={{color:"#101010", fontWeight:900, fontSize:"14px", fontFamily:"Avenir", fontStyle:"normal"}}>{children}</div>;
      };

    const handleChange = (e, param) => {
        if(param === "R"){
        setState({ ...state, results: e.target.value })
    }else if(param === "T"){
        setState({ ...state, testType: e.target.value })
    }else if(param === "L"){
        setState({ ...state, allLocations: e.target.value })
    }else if(param === "D"){
        setState({ ...state, date: e.target.value })
    }
}

console.log("======selectClientTestResults======"+state.selectClientTestResults)
    return (
        <>
            <Grid container>
                <Grid item xs={12} >
                    <Grid container >
                        <Grid item xs={4} >
                            <CustomizedButtons variant={"text"} style={{ padding: "4px 15px 4px 15px", marginLeft: "5px", backgroundColor: "#FBF7F4", marginTop: "20px" }} >
                                <Image src={Send} alt='send' width={"20vw"} height={"20vh"} />
                                <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#000", marginLeft: "5px" }} >
                                    Export
                                </Typography>
                            </CustomizedButtons>
                            <CustomizedButtons variant={"text"} onClick={() => setState({ ...state, addTestOpen: true })} style={{ padding: "4px 15px 4px 15px", marginLeft: "10px", backgroundColor: "#FBF7F4", marginTop: "20px" }} >
                                <Image src={Union} alt='union' width={"20vw"} height={"20vh"} />
                                <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#000", marginLeft: "5px" }} >
                                    Test Results
                                </Typography>
                            </CustomizedButtons>
                        </Grid>
                        <Grid item xs={8} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "20px" }}>
                            <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#474747", marginLeft: "5px", alignSelf: "center" }}>Filter by</Typography>
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
                                <MenuItem value={"Success"}>Success</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 60, minHeight:10, '.MuiOutlinedInput-notchedOutline': { border: 0, borderRight:"2px solid #E8E8E8", borderRadius:0 } }} size="small">
                            <Select
                                value={state.testType}
                                onChange={(e)=>handleChange(e,"T")}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                renderValue={
                                    state.testType !== "" ? undefined : () => <Placeholder>All Test Types</Placeholder>
                                  }>
                                <MenuItem value={"All"}>All</MenuItem>
                                <MenuItem value={"Negative"}>Negative</MenuItem>
                                <MenuItem value={"Positive"}>Positive</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 60, minHeight:10, '.MuiOutlinedInput-notchedOutline': { border: 0, borderRight:"2px solid #E8E8E8", borderRadius:0 } }} size="small">
                            <Select
                                value={state.allLocations}
                                onChange={(e)=>handleChange(e,"L")}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                renderValue={
                                    state.allLocations !== "" ? undefined : () => <Placeholder>All Locations</Placeholder>
                                  }>
                                <MenuItem value={"All"}>All</MenuItem>
                                <MenuItem value={"Adyar"}>Adyar</MenuItem>
                                <MenuItem value={"Velachery"}>Velachery</MenuItem>
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
                                <StyledTableCell align="center">
                                    <Checkbox 
                                      checked={state.isClickCheckBox}
                                      onClick={() => checkBoxAction()}
                                    />
                                </StyledTableCell>
                                <StyledTableCell >Test ID</StyledTableCell>
                                <StyledTableCell >
                                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                        <Typography style={{ fontSize: "14.5px", fontFamily: "Avenir-Black", color: "#000" }}>Patient Name</Typography>
                                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginLeft: -12 }}>
                                            <ArrowDropUpIcon style={{ color: "#000", height: "20px", width: "50px", marginBottom: -12 }} onClick={() => alert("WIP")} />
                                            <ArrowDropDownIcon style={{ color: "#000", height: "20px", width: "50px" }} onClick={() => alert("WIP")} />
                                        </div>
                                    </div>
                                </StyledTableCell>
                                <StyledTableCell >Test Type</StyledTableCell>
                                <StyledTableCell >Collection Date</StyledTableCell>
                                <StyledTableCell >Tube Number</StyledTableCell>
                                <StyledTableCell >Result</StyledTableCell>
                                <StyledTableCell >Status</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        {!!state.test && state.test.map((test, index) => (
                            <TableBody key={index.toString()} style={{ backgroundColor: (index % 2) ? "#FCFCFC" : "#FFFFFF", borderBottom: "1.1px solid #F2F2F2" }}>
                                <StyledTableRow >
                                    <StyledTableCell align="center">
                                        <Checkbox
                                         checked={state.selectClientTestResults.includes(test.id)}
                                         onClick={() => singleSelectAction(test.id)} 
                                         />
                                    </StyledTableCell>
                                    <StyledTableCell >{test.test_id}</StyledTableCell>
                                    <StyledTableCell >{test.patient_name}</StyledTableCell>
                                    <StyledTableCell >{test.test_type}</StyledTableCell>
                                    <StyledTableCell >{test.collection_date}</StyledTableCell>
                                    <StyledTableCell >{test.tube_number}</StyledTableCell>
                                    <StyledTableCell >{test.result}</StyledTableCell>
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
export default ClientTestResult;