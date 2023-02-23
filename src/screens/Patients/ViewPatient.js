import React, { useState } from 'react';
import { Accordion, AccordionSummary, Grid, Typography } from '@mui/material';
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
            <Grid container rowSpacing={3} justifyContent='center' alignItems='center'>
                <Grid item xs={12}>
                    <Typography className='header'>View Patient</Typography>
                </Grid>
                <Grid item xs={12} style={{ background: "rgba(100, 37, 254, 0.1)", padding: "15px", borderRadius: '5px' }}>
                    <Typography className='subHeading'>Patient information</Typography>
                </Grid>
                <Grid item xs={12} style={{paddingBottom:'20px'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography>Name: {!!patient && patient.name}</Typography>
                        </Grid>
                        {/* <Grid item xs={6}>
                            <Typography>Last Name : {!!patient && patient.last_name}</Typography>
                        </Grid> */}
                        <Grid item xs={6}>
                            <Typography>Email: {!!patient && patient.email}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>Phone number: {!!patient && patient.phone}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>Date of birth: {!!patient && patient.dob}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ background: "rgba(100, 37, 254, 0.1)", padding: "15px", borderRadius: '5px' }}>
                    <Typography className='subHeading'>Test History</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Accordion>
                        <AccordionSummary>
                            Blood Culture
                        </AccordionSummary>
                    </Accordion>
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