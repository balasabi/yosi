import React, { useState } from 'react';
import { Grid, Typography, Table, TableBody, TableCell, tableCellClasses, IconButton, TableRow, TableHead, TableContainer, Checkbox, Paper, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import { styled } from '@mui/material';
import Image from 'next/image';
import arrow from '../../../public/Images/arrow.png';
import _ from 'underscore';
import Upload from '../../../public/Images/upload.png';
import Barcode from '../../../public/Images/barcode.png';
import CustomizedButtons from '../../components/CustomButton';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: 'rgba(2, 55, 81, 0.05)',
        borderBottom: '1px solid #E7E7E7',
        color: theme.palette.common.black,
        padding: "2px",
        fontFamily: 'Avenir',
        fontSize: '16px',
        fontStyle: "normal"
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: "16px",
        padding: "1px",
        fontFamily: "Avenir",
        fontStyle: "normal",
        fontSize: '16px',
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
        userTest: [
            { "id": 1, "testId": "WEL-00001", "patientName": "Basco", "testType": "Insurance CAB Test", "collectionDate": "12/12/2022 10:12 AM", "tubeNumber": "T00001", "result": "Negative", "analysis": "Result unavailable " },
            { "id": 2, "testId": "WEL-00017", "patientName": "John Williams ", "testType": "Insurance CRAB test", "collectionDate": "13/12/2022 11.00 AM", "tubeNumber": "T00012", "result": "Negative", "analysis": "result available" },
            { "id": 3, "testId": "WEL-00018", "patientName": "John Smith", "testType": "Insurance CAB test", "collectionDate": "14/12/2022 11.00 AM ", "tubeNumber": "T00014", "result": "Negative", "analysis": "result available" },
            { "id": 4, "testId": "WEL-00019", "patientName": "Raja", "testType": "Insurance CRAB test", "collectionDate": "15/12/2022 11.00 AM", "tubeNumber": "T00015", "result": "Negative", "analysis": "result available" },
             ],
        isClickCheckBox: false,
        selectedPatients: [],
        test: null,
        lab: null
    })

    const checkBoxAction = () => {
        setState(
            {
                ...state,
                isClickCheckBox: !state.isClickCheckBox,
                selectedPatients: !state.isClickCheckBox === true ? _.pluck(state.userTest, 'id') : []
            }
        )
    }

    const singleSelectAction = (param) => {
        if (state.selectedPatients.length > 0 && state.selectedPatients.includes(param)) {
            setState({
                ...state,
                selectedPatients: state.selectedPatients.filter((item) => item != param)
            })
        }
        else {
            let result = state.selectedPatients
            result.push(param)
            setState({
                selectedPatients: result
            })
        }
    }

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography style={{ fontSize: "20px", fontFamily: 'Avenir-Black', fontStyle: "normal", fontWeight: 800, lineHeight: "20px" }}>
                        Dashboard
                    </Typography>
                </Grid>
                <Grid item xs={12} style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Typography style={{ fontSize: "20px", fontFamily: 'Avenir-Black', fontStyle: "normal", fontWeight: 800, lineHeight: "20px", marginRight: 10 }}>
                        Recent patients
                    </Typography>
                    <Typography style={{ fontFamily: 'Avenir', fontSize: "15px", justifyContent: "center", alignItems: "center", borderRadius: 5, paddingRight: 3, paddingLeft: 3, border: "1px solid #474747", }}>
                        See more
                    </Typography>
                </Grid>
                <Grid item xs={12} marginTop={"1px"}>
                    <Paper>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <StyledTableRow>
                                        <StyledTableCell>
                                            <Checkbox
                                                checked={state.isClickCheckBox}
                                                onClick={() => checkBoxAction()}
                                            /></StyledTableCell>
                                        <StyledTableCell style={{ fontWeight: "bold" }}>Test ID</StyledTableCell>
                                        <StyledTableCell style={{ fontWeight: "bold" }}><div style={{ display: "flex" }}>Patient Name<IconButton><Image src={arrow} alt={'arrow'} width={10} height={10} /></IconButton></div></StyledTableCell>
                                        <StyledTableCell style={{ fontWeight: "bold" }}>Test Type </StyledTableCell>
                                        <StyledTableCell style={{ fontWeight: "bold" }}>Collection Date </StyledTableCell>
                                        <StyledTableCell style={{ fontWeight: "bold" }}>Tupe Number</StyledTableCell>
                                        <StyledTableCell style={{ fontWeight: "bold" }}>Result</StyledTableCell>
                                        <StyledTableCell style={{ fontWeight: "bold" }}>Analysis</StyledTableCell>
                                    </StyledTableRow>
                                </TableHead>
                                <TableBody>
                                    {state.userTest !== undefined && state.userTest.map((item, index) =>
                                        <StyledTableRow key={index.toString()} style={{ background: (index % 2) == 0 ? "#FFF" : "rgba(240, 240, 240, 0.2)" }}>
                                            <StyledTableCell>
                                                <Checkbox
                                                    checked={state.selectedPatients.includes(item.id)}
                                                    onClick={() => singleSelectAction(item.id)} />
                                            </StyledTableCell>
                                            <StyledTableCell>{item.testId}</StyledTableCell>
                                            <StyledTableCell>{item.patientName}</StyledTableCell>
                                            <StyledTableCell>{item.testType}</StyledTableCell>
                                            <StyledTableCell>{item.collectionDate}</StyledTableCell>
                                            <StyledTableCell> {item.tubeNumber} </StyledTableCell>
                                            <StyledTableCell> {item.result} </StyledTableCell>
                                            <StyledTableCell> {item.analysis} </StyledTableCell>
                                        </StyledTableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
                <Grid item xs={8} style={{ display: "flex", flexDirection: "row", }}>
                    <Grid container style={{ boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)', marginTop: "2px", padding: "10px", borderRadius: "15px" }} >
                        <Grid item xs={12} style={{ border: "2px dashed #D9D9D9", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "25px" }}>
                            <Image src={Upload} alt='upload' width={"20vw"} height={"20vh"} />
                            <Typography style={{ fontSize: "22px", fontFamily: "Avenir-Black", fontStyle: "normal", lineHeight: "40px" }} >Upload test</Typography>
                            <Typography style={{ fontSize: "12px", fontFamily: "Avenir", fontStyle: "normal", lineHeight: "24px", color: "#474747" }} >Supports: .csv, .xl</Typography>
                            <Typography style={{ fontSize: "12px", fontFamily: "Avenir", fontStyle: "normal", lineHeight: "24px", color: "#474747" }} >Maximum size: .10Kb</Typography>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={6} style={{ marginTop: "20px" }}>
                                <TextField size="small"
                                    select
                                    label={<Typography style={{ fontSize: "14px", fontFamily: "Avenir", fontStyle: "normal", lineHeight: "24px", color: "#024751" }} >Select Test</Typography>}
                                    fullWidth
                                    inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", backgroundColor: "#FBF7F4" } }}
                                    value={state.test}
                                    onChange={(event) => this.setState({ test: event.target.value })}
                                />
                            </Grid>
                            <Grid item xs={6} style={{ marginTop: "20px" }}>
                                <TextField size="small"
                                    select
                                    label={<Typography style={{ fontSize: "14px", fontFamily: "Avenir", fontStyle: "normal", lineHeight: "24px", color: "#024751" }} >Select Lab</Typography>}
                                    fullWidth
                                    inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", backgroundColor: "#FBF7F4" } }}
                                    value={state.lab}
                                    onChange={(event) => this.setState({ lab: event.target.value })}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} style={{ marginTop: "20px", display: "flex", flexDirection: "row" }}>
                            <Typography style={{ fontSize: "15px", fontFamily: "Avenir", fontStyle: "normal", lineHeight: "24px", color: "#000", marginRight: "10px", textAlign: "center", marginTop: "8px" }} >Sheet format</Typography>
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
                        <Grid item xs={4}>
                            <CustomizedButtons variant={"text"} style={{ padding: "4px 60px 4px 60px", border: "1px solid #024751", fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#024751", marginLeft: "5px", borderRadius: "3px" }} onClick={() => alert("WIP")} >
                                Upload
                            </CustomizedButtons>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4} style={{ display: "flex", flexDirection: "row", }}>
                    <Grid container style={{ boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)', marginTop: "2px", padding: "10px", borderRadius: "15px" }} >
                        <Grid item xs={12} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Typography style={{ fontSize: "22px", fontFamily: "Avenir-Black", fontStyle: "normal", lineHeight: "40px" }} >Scan patient</Typography>
                            <Typography style={{ fontSize: "12px", fontFamily: "Avenir", fontStyle: "normal", lineHeight: "24px", color: "#474747" }} >Tap to scan a patient</Typography>
                            <div style={{ display:"flex",justifyContent:"center", alignItems:"center", marginTop:10, width:70,height:70,backgroundColor: "#FEC14B",borderRadius:35}}>
                             <Image src={Barcode} alt='Vector' width={"5vw"} height={"5vh"} />
                           </div>
                        </Grid>
                        <Grid container style={{ display: "flex", flexDirection: "row", alignItems: "center", }}>
                            <Grid item xs={5} style={{ border: "1px solid #D9D9D9" }} >
                           
                            </Grid>
                            <Grid item xs={0}>
                                <Typography style={{ marginLeft: "5px", marginRight: "5px", fontSize: "10px", fontFamily: "Avenir", fontStyle: "normal", lineHeight: "24px", color: "#474747" }} >or</Typography>
                            </Grid>
                            <Grid item xs={5} style={{ border: "1px solid #D9D9D9" }} />
                        </Grid>

                        <Grid item xs={12} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <TextField size="small"
                                placeholder='Enter Patient ID'
                                inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir" } }}
                                value={state.lab}
                                onChange={(event) => this.setState({ lab: event.target.value })}
                            />
                            <CustomizedButtons variant={"text"} style={{ padding: "4px 60px 4px 60px", backgroundColor: "#024751", fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#fff", marginLeft: "5px", borderRadius: "3px", marginTop: "10px" }} onClick={() => alert("WIP")} >
                                Find
                            </CustomizedButtons>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>




        </>
    )
}
export default Dashboard;