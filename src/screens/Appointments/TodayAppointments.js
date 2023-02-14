import React, { useState } from 'react';
import { Typography, Grid, styled, TableCell, TableRow, tableRowClasses, tableCellClasses, Table, TableHead, TableContainer, Paper, TableBody } from '@mui/material';
import CustomizedButtons from '../../components/CustomButton';
import moment from 'moment'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#FBF7F4",
        color: theme.palette.common.black,
        fontFamily: 'Avenir-Black',
        padding: "12px",
        fontWeight: 800,
        fontSize: 18,
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

    },
}));
function TodayAppointments(props) {
    const [today, setDate] = React.useState(new Date());
    const [state, setState] = useState({
        patients: [
            {
                id: "PID0001",
                patient_name: "Kavi",
                test_name: "Heart Test",
                timing: "09.00 AM"
            },
            {
                id: "PID0002",
                patient_name: "Arun",
                test_name: "Full CheckUp",
                timing: "10.00 AM"
            },
            {
                id: "PID0003",
                patient_name: "Veni",
                test_name: "Blood Test",
                timing: "11.00 AM"
            },
            {
                id: "PID0004",
                patient_name: "Pavi",
                test_name: "Heart Test",
                timing: "12.00 PM"
            },
            {
                id: "PID0005",
                patient_name: "Siva",
                test_name: "Blood Test",
                timing: "14.00 PM"
            }
        ]
    })


    React.useEffect(() => {
        const timer = setInterval(() => { // Creates an interval which will update the current data every minute
            // This will trigger a rerender every component that uses the useDate hook.
            setDate(new Date());
        }, 60 * 1000);
        return () => {
            clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
        }
    }, []);


    return (
        <>
            <Grid container>
                <Grid item xs={12} >
                    <Grid container style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "20px" }}>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} >
                            <Grid container style={{ display: "flex", flexDirection: "column", backgroundColor: "#024751", padding: "5px", borderRadius: "5px", justifyContent: "center" }}>
                                <Grid item xs={12} style={{ display: "flex", flexDirection: "row", backgroundColor: "#024751", borderRadius: "5px", justifyContent: "center" }}>
                                    <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", color: "#fff" }}> Date : </Typography>
                                    <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", color: "#fff", marginLeft: "5px" }}> {moment(today).format("DD/MM/YYYY hh:mm a")} </Typography>
                                </Grid>
                                <Grid item xs={12} style={{ display: "flex", flexDirection: "row", backgroundColor: "#024751", borderRadius: "5px", justifyContent: "center" }}>
                                    <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", color: "#fff" }}>Appointments :  </Typography>
                                    <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", color: "#fff", marginLeft: "5px" }}> {state.patients.length} </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <TableContainer component={Paper} style={{ marginTop: "20px" }}>
                        <Table>
                            <TableHead>
                                <TableRow >
                                    <StyledTableCell >Patient ID</StyledTableCell>
                                    <StyledTableCell >Patient Name</StyledTableCell>
                                    <StyledTableCell >Test Name</StyledTableCell>
                                    <StyledTableCell >Timing</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            {!!state.patients && state.patients.map((patient, index) => (
                                <TableBody key={index.toString()} style={{ backgroundColor: (index % 2) ? "#FCFCFC" : "#FFFFFF", borderBottom: "1.1px solid #F2F2F2" }}>
                                    <StyledTableRow >
                                        <StyledTableCell>{patient.id}</StyledTableCell>
                                        <StyledTableCell>{patient.patient_name}</StyledTableCell>
                                        <StyledTableCell>{patient.test_name}</StyledTableCell>
                                        <StyledTableCell>{patient.timing}</StyledTableCell>
                                    </StyledTableRow>
                                </TableBody>
                            ))}
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </>
    )
}
export default TodayAppointments;