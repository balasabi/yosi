import React, { useState } from 'react';
import { Grid, Typography, Table, TableBody, TableCell, tableCellClasses, IconButton, TableRow, TableHead, TableContainer,
     Paper, TextField, Radio, FormControlLabel, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/material';
import Image from 'next/image';
import arrow from '../../../public/Images/arrow.png';
import _ from 'underscore';
import Barcode from '../../../public/Images/barcode.png';
import CustomizedButtons from '../../components/CustomButton';
import Upload from '../../../public/Images/svg/upload.svg';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: 'rgba(2, 55, 81, 0.05)',
        borderBottom: '1px solid #E7E7E7',
        color: '#2E2E2E',
        padding: "12px",
        fontFamily: 'Avenir-Heavy',
        fontSize: '1.1em',
        lineHeight: '27px'
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: "0.9em",
        padding: "10px",
        fontFamily: "Avenir-Book",
        color: '#2E2E2E',
        lineHeight: '24px'
    },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: "#FFF",
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function Dashboard(props) {
    const [state, setState] = useState({
        isClickCheckBox: false,
        selectedPatients: [],
        test: "",
        lab: "",
        isClick: false,
        useMoreUserTest: [
            { "id": 1, "testId": "WEL-00001", "patientName": "Basco", "testType": "Insurance CAB Test", "collectionDate": "12/12/2022 10:12 AM", "tubeNumber": "T00001", "result": "Negative", "analysis": "Result unavailable " },
            { "id": 2, "testId": "WEL-00017", "patientName": "John Williams ", "testType": "Insurance CRAB test", "collectionDate": "13/12/2022 11.00 AM", "tubeNumber": "T00012", "result": "Negative", "analysis": "result available" },
            { "id": 3, "testId": "WEL-00018", "patientName": "John Smith", "testType": "Insurance CAB test", "collectionDate": "14/12/2022 11.00 AM ", "tubeNumber": "T00014", "result": "Negative", "analysis": "result available" },
            { "id": 4, "testId": "WEL-00019", "patientName": "Raja", "testType": "Insurance CRAB test", "collectionDate": "15/12/2022 11.00 AM", "tubeNumber": "T00015", "result": "Positive", "analysis": "result available" },
            { "id": 5, "testId": "WEL-00020", "patientName": "Smith", "testType": "Insurance CAB Test", "collectionDate": "12/12/2022 10:12 AM", "tubeNumber": "T00001", "result": "Negative", "analysis": "Result unavailable " },
            { "id": 6, "testId": "WEL-00021", "patientName": "Williams ", "testType": "Insurance CRAB test", "collectionDate": "13/12/2022 11.00 AM", "tubeNumber": "T00012", "result": "Negative", "analysis": "result available" },
            { "id": 7, "testId": "WEL-00022", "patientName": "shruthi", "testType": "Insurance CAB test", "collectionDate": "14/12/2022 11.00 AM ", "tubeNumber": "T00014", "result": "Positive", "analysis": "result available" },
            { "id": 8, "testId": "WEL-00023", "patientName": "Rajesh", "testType": "Insurance CRAB test", "collectionDate": "15/12/2022 11.00 AM", "tubeNumber": "T00015", "result": "Negative", "analysis": "result available" },
        ],
    })

    // const checkBoxAction = () => {
    //     setState(
    //         {
    //             ...state,
    //             isClickCheckBox: !state.isClickCheckBox,
    //             selectedPatients: !state.isClickCheckBox === true ? _.pluck(state.userTest, 'id') : []
    //         }
    //     )
    // }

    // const singleSelectAction = (param) => {
    //     if (state.selectedPatients.length > 0 && state.selectedPatients.includes(param)) {
    //         setState({
    //             ...state,
    //             selectedPatients: state.selectedPatients.filter((item) => item != param)
    //         })
    //     }
    //     else {
    //         let result = state.selectedPatients
    //         result.push(param)
    //         setState({
    //             selectedPatients: result
    //         })
    //     }
    // }
    const seeMoreAction = () => {
        setState({ ...state, isClick: !state.isClick })
    };

    const Placeholder = ({ children }) => {
        return <div style={{ color: "#101010", fontWeight: 900, fontSize: "14px", fontFamily: "Avenir-Book", fontStyle: "normal" }}>{children}</div>;
    };

    let testList = state.isClick ? state.useMoreUserTest : state.useMoreUserTest.slice(0, 4)
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography className='header'>Dashboard</Typography>
                </Grid>
                <Grid item xs={8.5}>
                    <Grid container style={{ boxShadow: '1px 2px 5px rgb(0 0 0 / 20%)', marginTop: "2px", padding: "15px", borderRadius: "15px" }} >
                        <Grid item xs={12} style={{ border: "1px dashed #998E8A", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "25px", background: '#F7F7F7' }}>
                            <Image src={Upload} alt='upload' width={30} height={30}  style={{marginTop:"10px"}}/>
                            <Typography className='header'>Upload test</Typography>
                            <Typography className='miniLiteText'>Supports: .csv, .xl</Typography>
                            <Typography className='miniLiteText'>Maximum size: .10Kb</Typography>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={6} style={{ marginTop: "20px" }}>
                                <Select size="small"
                                    fullWidth
                                    style= {{ fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Book", backgroundColor: "#F0E9FF" }}
                                    value={state.test}
                                    onChange={(event) => setState({ ...state, test: event.target.value })}
                                    displayEmpty
                                    renderValue={
                                     state.test !== "" ? undefined : () => <Placeholder><Typography style={{ fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", color: "#998E8A" }}>Select test</Typography></Placeholder>
                                 }>
                                    <MenuItem value={""}></MenuItem>
                                    </Select>
                            </Grid>
                            <Grid item xs={6} style={{ marginTop: "20px" }}>
                                <Select size="small"
                                    fullWidth
                                     style={{ fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Book-Book", backgroundColor: "#F0E9FF" }}
                                    value={state.lab}
                                    onChange={(event) => setState({ ...state, lab: event.target.value })}
                                    displayEmpty
                                       renderValue={
                                        state.lab !== "" ? undefined : () => <Placeholder><Typography style={{ fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", color: "#998E8A" }}>Select lab</Typography></Placeholder>
                                    }>
                                        <MenuItem value={""}></MenuItem>
                                    </Select>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} style={{ marginTop: "20px", display: "flex", flexDirection: "row" }}>
                            <Typography align='center' style={{ fontSize: "15px", fontFamily: "Avenir-Book", fontStyle: "normal", lineHeight: "24px", color: "#000", marginRight: "10px", marginTop: "8px" }} >Sheet format</Typography>
                            <FormControlLabel value="female" control={<Radio sx={{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 20,
                                },
                            }} />} label="New" />
                            <FormControlLabel value="male" control={<Radio sx={{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 20,
                                },
                            }} />} label="Format" />
                        </Grid>
                        <Grid item xs={4} style={{ marginTop: "20px" , marginBottom:10}}>
                            <CustomizedButtons variant={"text"} className='subText' style={{ padding: "4px 60px 4px 60px", border: "1px solid #6425FE", color: "#6425FE", marginLeft: "5px", borderRadius: "5px", fontSize: "18px", fontFamily: "Avenir-Heavy",height:50, width:250}} onClick={() => alert("WIP")} >
                                Upload
                            </CustomizedButtons>
                        </Grid>
                    </Grid>
                </Grid>
              
                <Grid item xs={3.5} style={{ display: "flex", flexDirection: "row" }}>
                    <Grid container style={{ boxShadow: '1px 2px 9px rgb(0 0 0 / 20%)', marginTop: "2px", padding: "10px", borderRadius: "15px" }} >
                        <Grid item xs={12} style={{ display: "flex", flexDirection: "column", alignItems: "center" , marginTop:10}}>
                            <Typography className='header'>Scan patient</Typography>
                            <Typography className='miniLiteText' style={{ color: "rgba(71, 71, 71, 0.6)" }}>Tap to scan a patient</Typography>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 10, width: 70, height: 70, backgroundColor: "#FEC14B", borderRadius: 35 }}>
                                <Image src={Barcode} alt='Vector' width={"5vw"} height={"5vh"} />
                            </div>
                        </Grid>
                        <Grid container style={{ display: "flex", flexDirection: "row", alignItems: "center", }}>
                            <Grid item xs={6} style={{ border: "1px solid #D9D9D9" }} />
                            <Grid item xs={1}>
                                <Typography style={{ marginLeft: "5px", marginRight: "5px", fontSize: "10px", fontFamily: "Avenir-Book-Book", fontStyle: "normal", lineHeight: "24px", color: "#474747" }} >or</Typography>
                            </Grid>
                            <Grid item xs={5} style={{ border: "1px solid #D9D9D9" }} />
                        </Grid>
                        <Grid item xs={12} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <TextField size="small"
                                fullWidth
                                placeholder='Enter Patient ID'
                                inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Book",backgroundColor: "#F0E9FF", } }}
                                value={state.lab}
                                onChange={(event) => setState({ ...state, lab: event.target.value })}
                            />
                            <CustomizedButtons variant={"contained"} fullWidth style={{ marginLeft: "5px", borderRadius: "5px", marginTop: "10px", fontWeight: 800 , height:"6vh", fontSize: "18px", fontFamily: "Avenir-Heavy", }} onClick={() => alert("WIP")} >
                                Find
                            </CustomizedButtons>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ display: "flex", flexDirection: "row", alignItems: "center",marginTop:10 }}>
                    <Typography className='header' style={{ marginRight: 10 }}>
                        Recent Appointments
                    </Typography>
                    <Typography className='miniLiteText' style={{ justifyContent: "center", alignItems: "center", borderRadius: 5, padding: "3px 8px 3px 8px", border: "1px solid rgba(71, 71, 71, 0.6)", cursor: "pointer" }} onClick={() => seeMoreAction()}>
                        {state.isClick ? "Show less" : "Show more"}
                    </Typography>
                </Grid>
                <Grid item xs={12} marginTop={"1px"}>
                    <Paper>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <StyledTableRow>
                                        {/* <StyledTableCell>
                                            <Checkbox
                                                checked={state.isClickCheckBox}
                                                onClick={() => checkBoxAction()}
                                            /></StyledTableCell> */}
                                        <StyledTableCell>Test Type </StyledTableCell>
                                        <StyledTableCell><div style={{ display: "flex" }}>Patient Name<IconButton><Image src={arrow} alt={'arrow'} width={10} height={10} /></IconButton></div></StyledTableCell>
                                        <StyledTableCell>Appointment Date & Time </StyledTableCell>
                                    </StyledTableRow>
                                </TableHead>
                                <TableBody>
                                    {testList !== undefined && testList.map((item, index) =>
                                        <StyledTableRow key={index.toString()} style={{ background: (index % 2) == 0 ? "#FFF" : "rgba(240, 240, 240, 0.2)" }}>
                                            {/* <StyledTableCell>
                                                <Checkbox
                                                    checked={state.selectedPatients.includes(item.id)}
                                                    onClick={() => singleSelectAction(item.id)} />
                                            </StyledTableCell> */}
                                            <StyledTableCell>{item.testId}</StyledTableCell>
                                            <StyledTableCell>{item.patientName}</StyledTableCell>
                                            <StyledTableCell>{item.collectionDate}</StyledTableCell>
                                        </StyledTableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}
export default Dashboard;