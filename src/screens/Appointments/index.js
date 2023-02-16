import React, { useState } from 'react';
import { Typography, Grid } from '@mui/material';
import CustomizedButtons from '../../components/CustomButton';
import TodayAppointments from './TodayAppointments';
import CalenderAppointments from'./CalenderAppointments'
function Appointments(props) {

    const [state, setState] = useState({
        selectedTab: "T"
    })

    const buttonAction = (param) => {
        setState({ ...state, selectedTab: param })
    }

    return (
        <>
            <Grid container>
                <Grid item xs={12} style={{ marginBottom: "10px" }}>
                    <Typography style={{ fontSize: "24px", fontFamily: 'Avenir-Black', fontStyle: "normal", fontWeight: 800, }}>
                        Appointments
                    </Typography>
                </Grid>
                <Grid item xs={7} style={{ marginLeft: "12px" }}>
                    <Grid container>
                        <Grid item xs={3}>
                            <CustomizedButtons variant={"text"} className='subText' style={{ textTransform: "none", color: state.selectedTab === "T" ? "#024751" : "#474747", borderBottom: state.selectedTab === "T" ? "5px solid #024751" : "none", borderRadius: "0px" }}  onClick={() => buttonAction("T")}>Today</CustomizedButtons>
                        </Grid>
                        <Grid item xs={4}>
                            <CustomizedButtons variant={"text"} className='subText' style={{ textTransform: "none", color: state.selectedTab === "C" ? "#024751" : "#474747", borderBottom: state.selectedTab === "C" ? "5px solid #024751" : "none", borderRadius: "0px" }}  onClick={() => buttonAction("C")}>Months</CustomizedButtons>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ borderBottom: "2px solid #C8C8C8" }} />
                <Grid item xs={12}>
                    {state.selectedTab === "T" &&
                        <TodayAppointments />
                    }
                    {state.selectedTab === "C" &&
                        <CalenderAppointments />
                    }
                </Grid>
            </Grid>
        </>
    )
}
export default Appointments;