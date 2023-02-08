import React, { useState } from 'react';
import { Grid, Typography, Table, TableBody, TableCell, tableCellClasses, IconButton, TableRow, TableHead, TableContainer, Checkbox, Paper, } from '@mui/material';
import { styled } from '@mui/material';
import Image from 'next/image';
import arrow from '../../../public/Images/arrow.png';
import _ from 'underscore';

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
        { "id": 3, "testId": "WEL-00018", "patientName": "John Smith", "testType": "Insurance CRAB test", "collectionDate": "14/12/2022 11.00 AM ", "tubeNumber": "T00012", "result": "Negative", "analysis": "result available" },
        { "id": 4, "testId": "WEL-00019", "patientName": "Raja", "testType": "Insurance CRAB test", "collectionDate": "15/12/2022 11.00 AM", "tubeNumber": "T00012", "result": "Negative", "analysis": "result available" },
        { "id": 5, "testId": "WEL-00020", "patientName": "Mani ", "testType": "Insurance CRAB test", "collectionDate": "16/12/2022 11.00 AM", "tubeNumber": "T00012", "result": "Negative", "analysis": "result available" }
        ],
        isClickCheckBox: false,
        selectedPatients: []
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
            <Grid container>
                <Grid item xs={12}>
                    <Typography style={{ fontSize: "20px", fontFamily: 'Avenir-Black', fontStyle: "normal", fontWeight: 800, lineHeight: "40px" }}>
                        Dashboard
                    </Typography>
                </Grid>
                <Grid item xs={12} style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Typography style={{ fontSize: "20px", fontFamily: 'Avenir-Black', fontStyle: "normal", fontWeight: 800, lineHeight: "40px", marginRight: 10 }}>
                        Recent patients
                    </Typography>
                    <Typography style={{ fontFamily: 'Avenir', fontSize: "15px", justifyContent: "center", alignItems: "center", borderRadius: 5, paddingRight: 3, paddingLeft: 3, border: "1px solid #474747", }}>
                        See more
                    </Typography>
                </Grid>
                <Grid item xs={12} marginTop={"5px"}>
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





            </Grid>
        </>
    )
}
export default Dashboard;