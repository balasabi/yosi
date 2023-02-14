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
                <Grid item xs={12} style={{ display: "flex", justifyContent: "center", alignItems: "center", height: 50, borderRadius: "8px", backgroundColor: "#88C2FC" }} >
                    <Grid item xs={6} style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: state.selectedTab === "T" ? "#0283F7" : "#88C2FC", height: 48, borderRadius: "8px" }} onClick={() => buttonAction("T")}>
                        <Typography style={{ color: "#fff" }}  >Today</Typography>
                    </Grid>
                    <Grid item xs={6} style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: state.selectedTab === "C" ? "#0283F7" : "#88C2FC", height: 48, borderRadius: "8px" }} onClick={() => buttonAction("C")}>
                        <Typography style={{ color: "#fff" }} onClick={() => buttonAction("C")}> Calendar </Typography>
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