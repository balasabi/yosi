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
        console.log("*************" + param)
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
                <Grid item xs={12} style={{ display: "flex", justifyContent: "center", alignItems: "center", height: 50, borderRadius: "8px", backgroundColor: "#35E5A5" }} >
                    <Grid item xs={6} style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: state.selectedTab === "T" ? "#0D4751" : "#35E5A5", height: 48, borderRadius: "8px" }} onClick={() => buttonAction("T")}>
                        <Typography style={{ color: "#fff", fontFamily:"Avenir-Black", fontSize:"20px" }}  >Today</Typography>
                    </Grid>
                    <Grid item xs={6} style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: state.selectedTab === "C" ? "#0D4751" : "#35E5A5", height: 48, borderRadius: "8px" }} onClick={() => buttonAction("C")}>
                        <Typography style={{ color: "#fff", fontFamily:"Avenir-Black", fontSize:"20px" }} onClick={() => buttonAction("C")}> Calendar </Typography>
                    </Grid>
                </Grid>
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