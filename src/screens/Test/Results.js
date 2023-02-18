import React, { useState, useRef } from 'react';
import {
    Typography, Grid, Table, TableRow, TableBody, TableHead, styled, TableCell, tableCellClasses, TableContainer, Paper,
    tableRowClasses, Checkbox, TablePagination, Dialog, DialogTitle, DialogContent, TableFooter, FormControl, Select, MenuItem, Autocomplete
} from '@mui/material';
import { useRouter } from 'next/router';
import CustomizedButtons from '../../components/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import Send from '../../../public/Images/send.png';
import Union from '../../../public/Images/plus.png';
// import SignatureCanvas from 'react-signature-canvas';
import { addTestResultAction } from "../../store/actions/testResultAction";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import _ from 'underscore';
import InputBase from "@mui/material/InputBase";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#F2F5F6",
        color: '#2E2E2E',
        fontFamily: 'Avenir-Heavy',
        padding: "3px",
        fontSize: '1.1em',
        lineHeight: '27px'
    },
    [`&.${tableCellClasses.body}`]: {
        padding: "7px",
        color: '#2E2E2E',
        fontSize: '0.9em',
        fontFamily: 'Avenir-Book',
        lineHeight: '24px'
    },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    [`&.${tableRowClasses.root}`]: {
    },
    '&:nth-of-type(odd)': {
    },
}));

const CustomInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
        marginTop: theme.spacing(3)
    },
    "& .MuiInputBase-input": {
        position: "relative",
        backgroundColor: theme.palette.background.paper,
        fontSize: 16,
        padding: "4px",
        backgroundColor: "#FBF7F4",
        fontFamily: [
            'Avenir-Book'
        ].join(","),
        "&:focus": {
            border: "2px solid #024751",
            backgroundColor: "#FBF7F4",
            borderRadius: '4px'
        },
        "&:active": {
            border: "2px solid #024751",
            backgroundColor: "#FBF7F4",
            backgroundColor: "#FBF7F4"
        }
    }
}));

function Result(props) {
    const [state, setState] = useState({
        page: 0,
        rowsPerPage: 10,
        addTestOpen: false,
        name: "",
        last_name: "",
        location: "",
        location_test_type: "",
        ordering_provider: "",
        test_lab: "",
        signature: null,
        results: "",
        testType: "",
        allLocations: "",
        date: "",
        test: [
            {
                id: 1,
                test_id: "WEL-000001",
                patient_name: "Kenny sebastin",
                test_type: "Insurance CAB Test - Camelback",
                collection_date: "12/13/2022 01:57:25",
                tube_number: "T5000",
                result: "Negative",
                analysis: "Result available"
            },
            {
                id: 2,
                test_id: "WEL-000002",
                patient_name: "Kenny sebastin",
                test_type: "Insurance CAB Test - Camelback",
                collection_date: "12/13/2022 01:57:25",
                tube_number: "T5000",
                result: "Negative",
                analysis: "Result available"
            },
            {
                id: 3,
                test_id: "WEL-000003",
                patient_name: "Kenny sebastin",
                test_type: "Insurance CAB Test - Camelback",
                collection_date: "12/13/2022 01:57:25",
                tube_number: "T5000",
                result: "Negative",
                analysis: "Result available"
            },
            {
                id: 4,
                test_id: "WEL-000004",
                patient_name: "Kenny sebastin",
                test_type: "Insurance CAB Test - Camelback",
                collection_date: "12/13/2022 01:57:25",
                tube_number: "T5000",
                result: "Negative",
                analysis: "Result available"
            },
            {
                id: 5,
                test_id: "WEL-000005",
                patient_name: "Kenny sebastin",
                test_type: "Insurance CAB Test - Camelback",
                collection_date: "12/13/2022 01:57:25",
                tube_number: "T5000",
                result: "Negative",
                analysis: "Result available"
            },
            {
                id: 6,
                test_id: "WEL-000006",
                patient_name: "Kenny sebastin",
                test_type: "Insurance CAB Test - Camelback",
                collection_date: "12/13/2022 01:57:25",
                tube_number: "T5000",
                result: "Negative",
                analysis: "Result available"
            },
            {
                id: 7,
                test_id: "WEL-000007",
                patient_name: "Kenny sebastin",
                test_type: "Insurance CAB Test - Camelback",
                collection_date: "12/13/2022 01:57:25",
                tube_number: "T5000",
                result: "Negative",
                analysis: "Result available"
            },
            {
                id: 8,
                test_id: "WEL-000008",
                patient_name: "Kenny sebastin",
                test_type: "Insurance CAB Test - Camelback",
                collection_date: "12/13/2022 01:57:25",
                tube_number: "T5000",
                result: "Negative",
                analysis: "Result available"
            },
            {
                id: 9,
                test_id: "WEL-000009",
                patient_name: "Kenny sebastin",
                test_type: "Insurance CAB Test - Camelback",
                collection_date: "12/13/2022 01:57:25",
                tube_number: "T5000",
                result: "Negative",
                analysis: "Result available"
            },
            {
                id: 10,
                test_id: "WEL-000010",
                patient_name: "Kenny sebastin",
                test_type: "Insurance CAB Test - Camelback",
                collection_date: "12/13/2022 01:57:25",
                tube_number: "T5000",
                result: "Negative",
                analysis: "Result available"
            },
            {
                id: 11,
                test_id: "WEL-000011",
                patient_name: "Kenny sebastin",
                test_type: "Insurance CAB Test - Camelback",
                collection_date: "12/13/2022 01:57:25",
                tube_number: "T5000",
                result: "Negative",
                analysis: "Result available"
            },
            {
                id: 12,
                test_id: "WEL-000012",
                patient_name: "Kenny sebastin",
                test_type: "Insurance CAB Test - Camelback",
                collection_date: "12/13/2022 01:57:25",
                tube_number: "T5000",
                result: "Negative",
                analysis: "Result available"
            },
        ],
        isClickCheckBox: false,
        selectedResults: []
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
    };

    const checkBoxAction = () => {
        setState(
            {
                ...state,
                isClickCheckBox: !state.isClickCheckBox,
                selectedResults: !state.isClickCheckBox === true ? _.pluck(state.test, 'id') : []
            }
        )
    };

    const singleSelectAction = (param) => {
        if (state.selectedResults.length > 0 && state.selectedResults.includes(param)) {
            setState({
                ...state,
                selectedResults: state.selectedResults.filter((item) => item != param)
            })
        }
        else {
            let result = state.selectedResults
            result.push(param)
            setState({...state,
                selectedResults: result
            })
        }
    };

    const submit = async () => {
        // await setState({
        //     signature: signPad.current.getTrimmedCanvas()
        //         .toDataURL('image/png')
        // })
        let { name, last_name, location, location_test_type, ordering_provider, test_lab, signature } = state;
        let data = {}
        data.name = name;
        // data.last_name = last_name;
        data.location = location;
        data.location_test_type = location_test_type;
        data.ordering_provider = ordering_provider;
        // data.test_lab = test_lab;
        // data.signature = signature;
        dispatch(addTestResultAction(data))
        setState({ ...state, addTestOpen: false })
        console.log("******submit******" + JSON.stringify(data))
    };

    const cancel = () => {
        setState({ ...state, addTestOpen: false })
    };

    const Placeholder = ({ children }) => {
        return <div style={{ color: "#101010", fontWeight: 900, fontSize: "14px", fontFamily: "Avenir-Book", fontStyle: "normal" }}>{children}</div>;
    };

    const handleChange = (e, param) => {
        if (param === "R") {
            setState({ ...state, results: e.target.value })
        } else if (param === "T") {
            setState({ ...state, testType: e.target.value })
        } else if (param === "L") {
            setState({ ...state, allLocations: e.target.value })
        } else if (param === "D") {
            setState({ ...state, date: e.target.value })
        }
    };

    const handleSend = (param) => {
        // let ids = param.find((item) => item)
        // state.test.map((item) => item.id === param.find((ele) => ele))
        // dispatch()
        alert("WIP")
    };

    return (
        <>
            <Grid container>
                <Grid item xs={12} >
                    <Grid container >
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} >
                            <CustomizedButtons variant={"contained"} onClick={() => setState({ ...state, addTestOpen: true })} style={{ padding: "4px 15px 4px 15px", marginLeft: "5px", marginTop: "20px" }}>
                                <Image src={Union} alt='union' width={14} height={15} />
                                <Typography style={{ marginLeft: "5px", }} >
                                    Test Orders
                                </Typography>
                            </CustomizedButtons>
                            <CustomizedButtons variant={"text"} style={{ padding: "4px 15px 4px 15px", marginLeft: "5px", backgroundColor: "#FBF7F4", marginTop: "20px" }} onClick={() => handleSend(state.selectedResults)}>
                                <Image src={Send} alt='send' width={"20vw"} height={"20vh"} />
                                <Typography className='iconButton' style={{ marginLeft: "5px" }} >
                                    Send
                                </Typography>
                            </CustomizedButtons>
                        </Grid>
                        {/* <Grid item xs={12} sm={12} md={8} lg={8} xl={8} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "20px" }}>
                           <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#474747", marginLeft: "5px", alignSelf: "center" }}>Filter by</Typography>
                           <FormControl sx={{ m: 1, minWidth: 60, minHeight: 10, '.MuiOutlinedInput-notchedOutline': { border: 0, borderRight: "2px solid #E8E8E8", borderRadius: 0 } }} size="small">
                               <Select
                                   value={state.results}
                                   onChange={(e) => handleChange(e, "R")}
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
                           <FormControl sx={{ m: 1, minWidth: 60, minHeight: 10, '.MuiOutlinedInput-notchedOutline': { border: 0, borderRight: "2px solid #E8E8E8", borderRadius: 0 } }} size="small">
                               <Select
                                   value={state.testType}
                                   onChange={(e) => handleChange(e, "T")}
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
                           <FormControl sx={{ m: 1, minWidth: 60, minHeight: 10, '.MuiOutlinedInput-notchedOutline': { border: 0, borderRight: "2px solid #E8E8E8", borderRadius: 0 } }} size="small">
                               <Select
                                   value={state.allLocations}
                                   onChange={(e) => handleChange(e, "L")}
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
                           <FormControl sx={{ m: 1, minWidth: 60, minHeight: 10, '.MuiOutlinedInput-notchedOutline': { border: 0 } }} size="small">
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
                       </Grid> */}
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ marginTop: "15px" }}>
                    <TableContainer component={Paper} >
                        <Table>
                            <TableHead>
                                <TableRow >
                                    <StyledTableCell align="center">
                                        <Checkbox inputProps={{ 'aria-label': 'Checkbox' }}
                                            checked={state.isClickCheckBox}
                                            onClick={() => checkBoxAction()}
                                        />
                                    </StyledTableCell>
                                    <StyledTableCell>Test ID</StyledTableCell>
                                    <StyledTableCell>
                                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                            <Typography className='tableHeader'>Patient Name</Typography>
                                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginLeft: -12 }}>
                                                <ArrowDropUpIcon style={{ color: "#000", height: "20px", width: "50px", marginBottom: -12 }} onClick={() => alert("WIP")} />
                                                <ArrowDropDownIcon style={{ color: "#000", height: "20px", width: "50px" }} onClick={() => alert("WIP")} />
                                            </div>
                                        </div>
                                    </StyledTableCell>
                                    <StyledTableCell>Test Type</StyledTableCell>
                                    <StyledTableCell>Collection Date</StyledTableCell>
                                    <StyledTableCell>Tube Number</StyledTableCell>
                                    <StyledTableCell>Result</StyledTableCell>
                                    <StyledTableCell>
                                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                            <Typography className='tableHeader'>Status</Typography>
                                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginLeft: -12 }}>
                                                <ArrowDropUpIcon style={{ color: "#000", height: "20px", width: "50px", marginBottom: -12 }} onClick={() => alert("WIP")} />
                                                <ArrowDropDownIcon style={{ color: "#000", height: "20px", width: "50px" }} onClick={() => alert("WIP")} />
                                            </div>
                                        </div>
                                    </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            {!!state.test && state.test.slice(state.page * state.rowsPerPage, state.page * state.rowsPerPage + state.rowsPerPage).map((test, index) => (
                                <TableBody key={index.toString()} style={{ backgroundColor: (index % 2) ? "#FCFCFC" : "#FFFFFF", borderBottom: "1.1px solid #F2F2F2" }}>
                                    <StyledTableRow >
                                        <StyledTableCell align="center">
                                            <Checkbox inputProps={{ 'aria-label': 'Checkbox' }}
                                                checked={state.selectedResults.includes(test.id)}
                                                onClick={() => singleSelectAction(test.id)}
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell className='tableContent'>{test.test_id}</StyledTableCell>
                                        <StyledTableCell className='tableContent'>{test.patient_name}</StyledTableCell>
                                        <StyledTableCell className='tableContent'>{test.test_type}</StyledTableCell>
                                        <StyledTableCell className='tableContent'>{test.collection_date}</StyledTableCell>
                                        <StyledTableCell className='tableContent'>{test.tube_number}</StyledTableCell>
                                        <StyledTableCell className='tableContent'>{test.result}</StyledTableCell>
                                        <StyledTableCell className='tableContent'>{test.analysis}</StyledTableCell>
                                    </StyledTableRow>
                                </TableBody>
                            ))}
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        rowsPerPageOptions={[10, 25]}
                                        count={!!state.test && state.test.length}
                                        page={state.page}
                                        onPageChange={handleChangePage}
                                        rowsPerPage={state.rowsPerPage}
                                        onRowsPerPageChange={(e) => handleChangeRowsPerPage(e)}
                                        labelRowsPerPage={"No. of items per page : "}
                                        sx={{ borderBottom: "1.43px solid #D5DBE1" }}
                                    />
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </TableContainer>
                </Grid>
                <Dialog open={state.addTestOpen} onClose={() => addTestClose()} maxWidth={'sm'} >
                    <Grid container>
                        <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end" }}>
                            <DisabledByDefaultRoundedIcon style={{ color: "#024751", fontSize: "45px", position: "absolute" }} onClick={() => addTestClose()} />
                        </Grid>
                    </Grid>
                    <DialogTitle style={{ fontSize: "20px", fontStyle: "normal", lineHeight: "32px", fontFamily: "Avenir-Black", color: "#000", borderBottom: "1px solid #E8E8E8" }}>Add test order</DialogTitle>
                    <DialogContent>
                        <Grid container>
                            <Grid item xs={12} >
                                <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Book", color: "#024751", marginTop: "10px", marginBottom: "10px" }}>Test information</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <CustomInput size="small"
                                            placeholder={"Patient name"}
                                            fullWidth
                                            inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Book", backgroundColor: "#FBF7F4" } }}
                                            value={state.name}
                                            onChange={(event) => setState({ ...state, name: event.target.value })}
                                        />
                                    </Grid>
                                    {/* <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                       <CustomInput size="small"
                                           placeholder={"Patient last name"}
                                           fullWidth
                                           inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", backgroundColor: "#FBF7F4" } }}
                                           value={state.last_name}
                                           onChange={(event) => setState({ ...state, last_name: event.target.value })}
                                       />
                                   </Grid> */}
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <CustomInput size="small"
                                            placeholder={"Location"}
                                            fullWidth
                                            inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Book", backgroundColor: "#FBF7F4" } }}
                                            value={state.location}
                                            onChange={(event) => setState({ ...state, location: event.target.value })}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <CustomInput size="small"
                                            placeholder={"Location test type "}
                                            fullWidth
                                            inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Book", backgroundColor: "#FBF7F4", border: 'none' } }}
                                            value={state.location_test_type}
                                            onChange={(event) => setState({ ...state, location_test_type: event.target.value })}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <CustomInput size="small"
                                            placeholder={"Ordering provider(Optional)"}
                                            fullWidth
                                            inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Book", backgroundColor: "#FBF7F4" } }}
                                            value={state.ordering_provider}
                                            onChange={(event) => setState({ ...state, ordering_provider: event.target.value })}
                                        />
                                    </Grid>
                                    {/* <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                       <CustomInput size="small"
                                           placeholder={"Test lab"}
                                           fullWidth
                                           inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", backgroundColor: "#FBF7F4" } }}
                                           value={state.test_lab}
                                           onChange={(event) => setState({ ...state, test_lab: event.target.value })}
                                       />
                                   </Grid> */}
                                    {/* <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                       <Typography style={{ fontFamily: "Montserrat-Bold", letterSpacing: "0.4px", fontSize: "14px", color: "#024751", lineHeight: "20px", }}>Signature</Typography>
                                       <div style={{ width: 350, height: 150, border: "1px solid rgba(203, 205, 209, 1)", margin: '10px 0px', borderRadius: 5, backgroundColor: "#FBF7F4" }}>
                                           <SignatureCanvas penColor='black'
                                               canvasProps={{ width: 350, height: 150 }}
                                               ref={signPad}
                                           />
                                       </div>
                                       <CustomizedButtons style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Black", textTransform: "none", color: "#024751", }} onClick={() => signPad.current.clear()}>CLEAR</CustomizedButtons>
                                   </Grid> */}
                                </Grid>
                                <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
                                    <CustomizedButtons variant={"text"} onClick={() => cancel()}>
                                        Cancel
                                    </CustomizedButtons>
                                    <CustomizedButtons variant={"contained"} style={{ marginLeft: "5px", borderRadius: "5px" }} onClick={() => submit()} >
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
export default Result;