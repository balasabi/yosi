import React, { useState, useRef, useEffect } from 'react';
import {
    Typography, Grid, Table, TableRow, TableBody, TableHead, styled, TableCell, tableCellClasses, TableContainer, Paper,
    tableRowClasses, Checkbox, TablePagination, Dialog, DialogTitle, DialogContent, TableFooter, FormControl, Select, MenuItem, FormHelperText
} from '@mui/material';
import { useRouter } from 'next/router';
import CustomizedButtons from '../../components/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import Send from '../../../public/Images/send.png';
import Union from '../../../public/Images/plus.png';
// import SignatureCanvas from 'react-signature-canvas';
import { addTestResultAction, updateTestResultAction } from "../../store/actions/testResultAction";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import _ from 'underscore';
import InputBase from "@mui/material/InputBase";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#F2F5F6",
        color: '#2E2E2E',
        fontFamily: 'Avenir-Heavy',
        padding: "3px",
        fontSize: '1.0em',
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
        fontSize: '1em',
        padding: "10px",
        backgroundColor: "#F0E9FF",
        borderRadius: "5px",
        fontFamily: [
            'Avenir-Book'
        ].join(","),
        "&:focus": {
            border: 0,
            backgroundColor: "#F0E9FF",
            border: "2px solid #6425FE",
        },
        "&:active": {
            border: "2px solid #6425FE",
            backgroundColor: "#F0E9FF"
        }
    }
}));

function Result(props) {
    const router = useRouter();
    const dispatch = useDispatch();
    const signPad = useRef({});
    const testResult = useSelector(state => state.testResultReducer.test_result);
    const test_type = useSelector(state => state.testTypeReducer.test_type);
    const [state, setState] = useState({
        page: 0,
        rowsPerPage: 10,
        addTestOpen: false,
        id: "",
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
        isClickCheckBox: false,
        selectedResults: [],
        sortOrder: false,
        testResult: testResult,
        nameError: false,
        locationTestTypeError: false,
        locationError: false
    })


    useEffect(() => {
        setState({ ...state, testResult: testResult })
    }, [testResult])

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
        setState({ ...state, isClickCheckBox: !state.isClickCheckBox, selectedResults: !state.isClickCheckBox === true ? _.pluck(testResult, 'id') : [] })
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
            setState({
                ...state,
                selectedResults: result
            })
        }
    };

    const submit = async () => {
        // await setState({
        //     signature: signPad.current.getTrimmedCanvas()
        //         .toDataURL('image/png')
        // })
        let { id, name, last_name, location, location_test_type, ordering_provider, test_lab, signature } = state;
        let isError = false;
        if (state.name === null || state.name === "" || state.name === undefined) {
            setState(ref => ({ ...ref, nameError: true }))
            isError = true;
        }
        if (state.location_test_type === null || state.location_test_type === "" || state.location_test_type === undefined) {
            setState(ref => ({ ...ref, locationTestTypeError: true }))
            isError = true;
        }
        if (state.location === null || state.location === "" || state.location === undefined) {
            setState(ref => ({ ...ref, locationError: true }))
            isError = true;
        }
        if (isError === false) {
            let data = {}
            data.id = testResult.length + 1;
            data.patient_name = name;
            // data.last_name = last_name;
            data.location = location;
            data.test_type = location_test_type;
            data.ordering_provider = ordering_provider;
            // data.test_lab = test_lab;
            // data.signature = signature;
            dispatch(addTestResultAction(data))
            setState({ ...state, addTestOpen: false })
        }
    };

    const cancel = () => {
        setState({ ...state, addTestOpen: false })
    };

    const Placeholder = ({ children }) => {
        return <div style={{ color: "#101010", fontWeight: 900, fontSize: "14px", fontFamily: "Avenir-Book", fontStyle: "normal" }}>{children}</div>;
    };

    // const handleChange = (e, param) => {
    //     if (param === "R") {
    //         setState({ ...state, results: e.target.value })
    //     } else if (param === "T") {
    //         setState({ ...state, testType: e.target.value })
    //     } else if (param === "L") {
    //         setState({ ...state, allLocations: e.target.value })
    //     } else if (param === "D") {
    //         setState({ ...state, date: e.target.value })
    //     }
    // };

    const handleSend = (param) => {
        let result = testResult.map((content, i) => state.selectedResults.includes(content.id) ? { ...content, status: "Result Sent" } : content)
        setState({ ...state, selectedResults: state.selectedResults.filter((item) => item === param.map((ele) => ele)), isClickCheckBox: false, testResult: result });
        dispatch(updateTestResultAction(result, state));
    };

    const addAction = () => {
        setState({
            ...state, addTestOpen: true, id: "", name: "",
            location: "",
            location_test_type: "",
            test_type: "",
            result: "",
            isClickCheckBox: false,
            selectedResults: []
        })
    };

    const sortByOrder = (param) => {
        let records = [...state.testResult]
        if (!state.sortOrder) {
            let result = records.sort((a, b) => (a[param] > b[param]) ? 1 : -1);
            setState({ ...state, testResult: result, sortOrder: true })
        } else {
            let result = records.sort((a, b) => (b[param] > a[param]) ? 1 : -1);
            setState({ ...state, testResult: result, sortOrder: false })
        }
    };

    return (
        <>
            <Grid container>
                <Grid item xs={12} >
                    <Grid container >
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} >
                            <CustomizedButtons variant={"contained"} onClick={() => addAction()} style={{ padding: "4px 15px 4px 15px", marginLeft: "5px", marginTop: "20px" }}>
                                <Image src={Union} alt='union' width={14} height={15} />
                                <Typography style={{ marginLeft: "5px", }} >
                                    Test Order
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
                                            <Typography className='tableHeader1'>Patient Name</Typography>
                                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginLeft: -12 }}>
                                                <ArrowDropUpIcon style={{ color: "#000", height: "20px", width: "50px", marginBottom: -12 }} onClick={() => sortByOrder("patient_name")} />
                                                <ArrowDropDownIcon style={{ color: "#000", height: "20px", width: "50px" }} onClick={() => sortByOrder("patient_name")} />
                                            </div>
                                        </div>
                                    </StyledTableCell>
                                    <StyledTableCell>Test Type</StyledTableCell>
                                    <StyledTableCell>Collection Date</StyledTableCell>
                                    <StyledTableCell>Tube Number</StyledTableCell>
                                    <StyledTableCell>Result</StyledTableCell>
                                    <StyledTableCell>
                                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                            <Typography className='tableHeader1'>Status</Typography>
                                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginLeft: -12 }}>
                                                <ArrowDropUpIcon style={{ color: "#000", height: "20px", width: "50px", marginBottom: -12 }} onClick={() => sortByOrder("status")} />
                                                <ArrowDropDownIcon style={{ color: "#000", height: "20px", width: "50px" }} onClick={() => sortByOrder("status")} />
                                            </div>
                                        </div>
                                    </StyledTableCell>
                                    <StyledTableCell>View</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            {!!state.testResult && state.testResult.length > 0 ?
                                state.testResult.slice(state.page * state.rowsPerPage, state.page * state.rowsPerPage + state.rowsPerPage).map((test, index) =>
                                    <TableBody key={index.toString()} style={{ backgroundColor: (index % 2) ? "#FCFCFC" : "#FFFFFF", borderBottom: "1.1px solid #F2F2F2" }}>
                                        <StyledTableRow>
                                            <StyledTableCell align="center">
                                                <Checkbox inputProps={{ 'aria-label': 'Checkbox' }}
                                                    checked={state.selectedResults.includes(test.id)}
                                                    onClick={() => singleSelectAction(test.id)}
                                                    disabled={test.status === "Result Sent" ? true : false}
                                                />
                                            </StyledTableCell>
                                            {/* <StyledTableCell className='tableContent'>{test.test_id}</StyledTableCell> */}
                                            <StyledTableCell className='tableContent'>000{index + 1}</StyledTableCell>
                                            <StyledTableCell className='tableContent'>{test.patient_name}</StyledTableCell>
                                            <StyledTableCell className='tableContent'>{test.test_type}</StyledTableCell>
                                            <StyledTableCell className='tableContent'>{test.collection_date}</StyledTableCell>
                                            <StyledTableCell className='tableContent'>{test.tube_number}</StyledTableCell>
                                            <StyledTableCell className='tableContent'>{test.result}</StyledTableCell>
                                            <StyledTableCell className='tableContent'>{test.status}</StyledTableCell>
                                            <StyledTableCell className='tableContent'>
                                                {!!test.status &&
                                                    <PictureAsPdfIcon style={{ color: "red" }} onClick={() => router.push({ pathname: '/test/test-result-pdf' })} />
                                                }
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    </TableBody>)
                                :
                                <TableBody>
                                    <StyledTableRow>
                                        <StyledTableCell align='center' colSpan={7}><Typography >There are no test results available</Typography></StyledTableCell>
                                    </StyledTableRow>
                                </TableBody>
                            }
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        rowsPerPageOptions={[10, 25]}
                                        count={!!state.testResult && state.testResult.length}
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
                <Dialog open={state.addTestOpen} maxWidth={'sm'}>
                    <Grid container>
                        <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end" }}>
                            <DisabledByDefaultRoundedIcon style={{ color: "#6425FE", fontSize: "45px", position: "absolute" }} onClick={() => addTestClose()} />
                        </Grid>
                    </Grid>
                    <DialogTitle style={{ fontSize: "20px", fontStyle: "normal", lineHeight: "32px", fontFamily: "Avenir-Black", color: "#000", borderBottom: "1px solid #E8E8E8" }}>Add test order</DialogTitle>
                    <DialogContent>
                        <Grid container style={{ paddingTop: '10px' }}>
                            <Grid item xs={12} >
                                <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Book", color: "#6425FE", marginTop: "10px", marginBottom: "10px" }}>Test order information</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={3}>
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <CustomInput size="small"
                                            placeholder={"Patient name"}
                                            fullWidth
                                            value={state.name}
                                            onChange={(event) => setState({ ...state, name: event.target.value, nameError: false })}
                                            error={state.nameError}
                                        />
                                        {state.nameError === true &&
                                            <FormHelperText style={{ color: 'red', marginLeft: '10px' }}>Please enter name</FormHelperText>
                                        }
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
                                            value={state.location}
                                            onChange={(event) => setState({ ...state, location: event.target.value, locationError: false })}
                                            error={state.locationError ? true : false}
                                        />
                                        {state.locationError === true &&
                                            <FormHelperText style={{ color: 'red', marginLeft: '10px' }}>Please enter location</FormHelperText>
                                        }
                                    </Grid>
                                    {/* <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <CustomInput size="small"
                                            placeholder={"Test type "}
                                            fullWidth
                                            // inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Book", backgroundColor: "#FBF7F4" } }}
                                            value={state.location_test_type}
                                            onChange={(event) => setState({ ...state, location_test_type: event.target.value })}
                                        />
                                    </Grid> */}
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <Select size='small'
                                            fullWidth
                                            value={!!state.location_test_type && state.location_test_type}
                                            input={<CustomInput />}
                                            onChange={(e) => setState({ ...state, location_test_type: e.target.value, locationTestTypeError: false })}
                                            displayEmpty
                                            error={state.locationTestTypeError}
                                            renderValue={
                                                state.location_test_type !== "" ? undefined : () => <Placeholder><Typography style={{ fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", color: "#998E8A" }}>Test type</Typography></Placeholder>
                                            }  >
                                            {!!test_type && test_type.filter((item)=>item.status==="Active").map((item, index) =>
                                                <MenuItem key={index.toString()} value={item.name}>{item.name}</MenuItem>
                                            )}
                                        </Select>
                                        {state.locationTestTypeError === true &&
                                            <FormHelperText style={{ color: 'red', marginLeft: '10px' }}>Please enter location test type</FormHelperText>
                                        }
                                    </Grid>
                                    {/* <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <CustomInput size="small"
                                            placeholder={"Ordering provider(Optional)"}
                                            fullWidth
                                            value={state.ordering_provider}
                                            onChange={(event) => setState({ ...state, ordering_provider: event.target.value })}
                                        />
                                    </Grid> */}
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
                                       <Typography style={{ fontFamily: "Montserrat-Bold", letterSpacing: "0.4px", fontSize: "14px", color: "#6425FE", lineHeight: "20px", }}>Signature</Typography>
                                       <div style={{ width: 350, height: 150, border: "1px solid rgba(203, 205, 209, 1)", margin: '10px 0px', borderRadius: 5, backgroundColor: "#FBF7F4" }}>
                                           <SignatureCanvas penColor='black'
                                               canvasProps={{ width: 350, height: 150 }}
                                               ref={signPad}
                                           />
                                       </div>
                                       <CustomizedButtons style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Black", textTransform: "none", color: "#6425FE", }} onClick={() => signPad.current.clear()}>CLEAR</CustomizedButtons>
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