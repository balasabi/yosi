import React, { useState } from 'react';
import { Accordion, AccordionSummary, Grid, Typography, AccordionDetails, } from '@mui/material';
import { useSelector } from 'react-redux';


function ViewPatient(props) {
    const [state, setState] = useState({

    })

    const patients = useSelector((state) => state.patientReducer.patients);
    const patient = patients.find((item) => item.id == props.patientId && item)

    // console.log("*********" + props.patientId)
    // console.log("patients===>" + JSON.stringify(patient))

    return (
        <>
            <Grid container rowSpacing={3} justifyContent='center' alignItems='center' style={{ marginTop: "20px", boxShadow: '0px 1px 1px -4px rgb(0 0 0 / 5%), 0px 1px 3px 4px rgb(0 0 0 / 5%)', borderRadius: "5px" }}>
                <Grid item xs={12} style={{ background: "rgba(100, 37, 254, 0.1)", padding: "15px", borderRadius: '5px' }}>
                    <Typography style={{ color: "#38148E", letterSpacing: "0.4px", fontSize: "20px", lineHeight: "20px", fontFamily: "Avenir-Bold" }}>
                        Patient information
                    </Typography>
                </Grid>
                <Grid item xs={12} style={{ padding: '15px', marginTop: "10px" }}>
                    <Grid container spacing={2} >
                        <Grid item xs={6} style={{ display: "flex", flexDirection: "row" }}>
                            <Grid container style={{ display: "flex", flexDirection: "row" }}>
                                <Grid item xs={4}>
                                    <Typography style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Bold", }}>
                                        Name:
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Book", }}>
                                        {!!patient && patient.name}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} style={{ display: "flex", flexDirection: "row", }}>
                            <Grid container style={{ display: "flex", flexDirection: "row" }}>
                                <Grid item xs={4}>
                                    <Typography style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Bold", }}>
                                        Email:
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Book", }}>
                                        {!!patient && patient.email}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} style={{ display: "flex", flexDirection: "row" }}>
                            <Grid container style={{ display: "flex", flexDirection: "row" }}>
                                <Grid item xs={4}>
                                    <Typography style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Bold", }}>
                                        Phone Number:
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Book", }}>
                                        {!!patient && patient.phone_number}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} style={{ display: "flex", flexDirection: "row" }}>
                            <Grid container style={{ display: "flex", flexDirection: "row" }}>
                                <Grid item xs={4}>
                                    <Typography style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Bold", }}>
                                        DOB:
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Book", }}>
                                        {!!patient && patient.dob}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container rowSpacing={3} justifyContent='center' alignItems='center' style={{ marginTop: "20px", boxShadow: '0px 1px 1px -4px rgb(0 0 0 / 5%), 0px 1px 3px 4px rgb(0 0 0 / 5%)', borderRadius: "5px" }}>
                <Grid item xs={12} style={{ background: "rgba(100, 37, 254, 0.1)", padding: "15px", borderRadius: '5px' }}>
                    <Typography style={{ color: "#38148E", letterSpacing: "0.4px", fontSize: "20px", lineHeight: "20px", fontFamily: "Avenir-Bold" }}>
                    Test History
                    </Typography>
                </Grid>
                <Grid item xs={12} style={{ padding: '15px', marginTop: "10px" }}>
                    <Grid container spacing={2} >
                        <Grid item xs={6} style={{ display: "flex", flexDirection: "row" }}>
                            <Grid container style={{ display: "flex", flexDirection: "row" }}>
                                <Grid item xs={4}>
                                    <Typography style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Bold", }}>
                                    Blood Culture
                                    </Typography>
                                </Grid>
                                {/* <Grid item xs={8}>
                                    <Typography style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Book", }}>
                                        {!!patient && patient.name}
                                    </Typography>
                                </Grid> */}
                            </Grid>
                        </Grid>
                      </Grid>
                </Grid>
            </Grid>
           </>
    )
}

ViewPatient.getInitialProps = async (context) => {
    const { patientId } = context.query;
    return { patientId: patientId };
};
export default ViewPatient;