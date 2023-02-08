import React, { useState, useRef } from 'react';
import {
    Typography, Grid, TextField, Table, TableRow, TableBody, TableHead, styled, TableCell, tableCellClasses,
    tableRowClasses, Checkbox, TablePagination, Dialog, DialogTitle, DialogContent, TableFooter
} from '@mui/material';
import { useRouter } from 'next/router';
import CustomizedButtons from '../../components/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import Send from '../../../public/Images/send.png';
import Union from '../../../public/Images/union.png';
import DownArrow from '../../../public/Images/downArrow.png';
import SignatureCanvas from 'react-signature-canvas';
import { addTestResultAction } from "../../store/actions/testResultAction";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import _ from 'underscore';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#E7E7E7",
        color: theme.palette.common.black,
        fontFamily: 'Avenir-Black',
        padding: "3px",
        fontWeight:800
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 17,
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

function Result(props) {
    const [state, setState] = useState({
        page: 0,
        rowsPerPage: 10,
        addTestOpen: false,
        first_name: "",
        last_name: "",
        location: "",
        location_test_type: "",
        ordering_provider: "",
        test_lab: "",
        signature: null,
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
        selectedresults: []
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
    const checkBoxAction = () => {
        setState(
            {
                ...state,
                isClickCheckBox: !state.isClickCheckBox,
                selectedresults: !state.isClickCheckBox === true ? _.pluck(state.test, 'id') : []
            }
        )
    }

    const singleSelectAction = (param) => {
        if (state.selectedresults.length > 0 && state.selectedresults.includes(param)) {
            setState({
                ...state,
                selectedresults: state.selectedresults.filter((item) => item != param)
            })
        }
        else {
            let result = state.selectedresults
            result.push(param)
            setState({
                selectedresults: result
            })
        }
    }

    const submit = async () => {
        await setState({
            signature: signPad.current.getTrimmedCanvas()
                .toDataURL('image/png')
        })
        let { first_name, last_name, location, location_test_type, ordering_provider, test_lab, signature } = state;
        let data = {}
        data.first_name = first_name;
        data.last_name = last_name;
        data.location = location;
        data.location_test_type = location_test_type;
        data.ordering_provider = ordering_provider;
        data.test_lab = test_lab;
        data.signature = signature;
        dispatch(addTestResultAction(data))
        setState({ ...state, addTestOpen: false })
        console.log("******submit******" + JSON.stringify(data))
    }
    const cancel = () => {
        setState({ ...state, addTestOpen: false })
    }

   

   
    return (
        <>
            <Grid container>
                <Grid item xs={12} >
                    <Grid container >
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} >
                            <CustomizedButtons variant={"text"} style={{ padding: "4px 15px 4px 15px", marginLeft: "5px", backgroundColor: "#FBF7F4", marginTop: "20px" }}>
                                <Image src={Send} alt='send' width={"20vw"} height={"20vh"} />
                                <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#000", marginLeft: "5px" }} >
                                    Export
                                </Typography>
                            </CustomizedButtons>
                            <CustomizedButtons variant={"text"} onClick={() => setState({ ...state, addTestOpen: true })} style={{ padding: "4px 15px 4px 15px", marginLeft: "5px", backgroundColor: "#FBF7F4", marginTop: "20px" }}>
                                <Image src={Union} alt='union' width={"20vw"} height={"20vh"} />
                                <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#000", marginLeft: "5px" }} >
                                    Test Results
                                </Typography>
                            </CustomizedButtons>
                        </Grid>
                        <Grid item xs={12} sm={12} md={8} lg={8} xl={8} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "20px" }}>
                            <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#474747", marginLeft: "5px", alignSelf: "center" }}>Filter by</Typography>
                            <CustomizedButtons variant={"text"} style={{ padding: "4px 15px 4px 15px", marginLeft: "10px", backgroundColor: "#FBF7F4" }}>
                                <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#000", marginLeft: "5px", marginRight:"8px" }} >
                                    All Results
                                </Typography>
                                <Image src={DownArrow} alt='downArrow' width={"20vw"} height={"20vh"} />
                            </CustomizedButtons>
                            <CustomizedButtons variant={"text"} style={{ padding: "4px 15px 4px 15px", marginLeft: "10px", backgroundColor: "#FBF7F4" }}>
                                <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#000", marginLeft: "5px", marginRight:"8px" }} >
                                    All Test Type
                                </Typography>
                                <Image src={DownArrow} alt='downArrow' width={"20vw"} height={"20vh"} />
                            </CustomizedButtons>
                            <CustomizedButtons variant={"text"} style={{ padding: "4px 15px 4px 15px", marginLeft: "10px", backgroundColor: "#FBF7F4" }}>
                                <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#000", marginLeft: "5px", marginRight:"8px" }} >
                                    All Locations
                                </Typography>
                                <Image src={DownArrow} alt='downArrow' width={"20vw"} height={"20vh"} />
                            </CustomizedButtons>
                            <CustomizedButtons variant={"text"} style={{ padding: "4px 15px 4px 15px", marginLeft: "10px", backgroundColor: "#FBF7F4" }}>
                                <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#000", marginLeft: "5px", marginRight:"8px" }} >
                                    Date
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
                                <StyledTableCell align="center">
                                    <Checkbox
                                      checked={state.isClickCheckBox}
                                      onClick={() => checkBoxAction()}
                                     />
                                </StyledTableCell>
                                <StyledTableCell >Test ID</StyledTableCell>
                                <StyledTableCell >
                                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                        <Typography style={{ fontSize: "14.5px", fontFamily: "Avenir-Black", color: "#000", fontWeight:800 }}>Patient Name</Typography>
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
                                <StyledTableCell >Analysis</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        {!!state.test && state.test.map((test, index) => (
                            <TableBody key={index.toString()} style={{ backgroundColor: (index % 2) ? "#FCFCFC" : "#FFFFFF", borderBottom: "1.1px solid #F2F2F2" }}>
                                <StyledTableRow >
                                    <StyledTableCell align="center">
                                        <Checkbox
                                          checked={state.selectedresults.includes(test.id)}
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
                <Dialog open={state.addTestOpen} onClose={() => addTestClose()} maxWidth={'sm'} >
                <Grid container>
                    <Grid item xs={12} style={{display:"flex", justifyContent:"flex-end"}}>
                    <DisabledByDefaultRoundedIcon style={{ color: "#024751", fontSize:"45px", marginRight:-5, marginTop:-5, position:"absolute"}} onClick={() => addTestClose()} />
                       </Grid>
                      </Grid>
                    <DialogTitle style={{ fontSize: "20px", fontStyle: "normal", lineHeight: "32px", fontFamily: "Avenir-Black", color: "#000", borderBottom: "1px solid #E8E8E8" }}>Add test result</DialogTitle>
                    <DialogContent>
                        <Grid container>
                            <Grid item xs={12} >
                                <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", color: "#024751", marginTop: "10px", marginBottom: "10px" }}>Test information</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <TextField size="small"
                                          placeholder={"Patient first name"}
                                            fullWidth
                                            inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", backgroundColor: "#FBF7F4" } }}
                                            value={state.first_name}
                                            onChange={(event) => this.setState({ first_name: event.target.value })}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <TextField size="small"
                                            placeholder={"Patient last name"}
                                            fullWidth
                                            inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", backgroundColor: "#FBF7F4" } }}
                                            value={state.last_name}
                                            onChange={(event) => this.setState({ last_name: event.target.value })}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <TextField size="small"
                                            placeholder={"Location"}
                                            fullWidth
                                            inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", backgroundColor: "#FBF7F4" } }}
                                            value={state.location}
                                            onChange={(event) => this.setState({ location: event.target.value })}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <TextField size="small"
                                            placeholder={"Location test type "}
                                            fullWidth
                                            inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", backgroundColor: "#FBF7F4" } }}
                                            value={state.location_test_type}
                                            onChange={(event) => this.setState({ location_test_type: event.target.value })}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <TextField size="small"
                                            placeholder={"Ordering provider"}
                                            fullWidth
                                            inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", backgroundColor: "#FBF7F4" } }}
                                            value={state.ordering_provider}
                                            onChange={(event) => this.setState({ ordering_provider: event.target.value })}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <TextField size="small"
                                            placeholder={"Test lab"}
                                            fullWidth
                                            inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", backgroundColor: "#FBF7F4" } }}
                                            value={state.test_lab}
                                            onChange={(event) => this.setState({ test_lab: event.target.value })}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <Typography style={{ fontFamily: "Montserrat-Bold", letterSpacing: "0.4px", fontSize: "14px", color: "#024751", lineHeight: "20px", }}>Signature</Typography>
                                        <div style={{ width: 350, height: 150, border: "1px solid rgba(203, 205, 209, 1)", margin: '10px 0px', borderRadius: 5, backgroundColor: "#FBF7F4" }}>
                                            <SignatureCanvas penColor='black'
                                                canvasProps={{ width: 350, height: 150 }}
                                                ref={signPad}
                                            />
                                        </div>
                                        <CustomizedButtons style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Black", textTransform: "none", color: "#024751", }} onClick={() => signPad.current.clear()}>CLEAR</CustomizedButtons>
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
export default Result;