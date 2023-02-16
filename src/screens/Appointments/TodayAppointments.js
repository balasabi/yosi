import React, { useState } from 'react';
import { Typography, Grid } from '@mui/material';
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

function TodayAppointments(props) {
    const [state, setState] = useState({
        patients: [
            {
                id: "PID0001",
                title: "title1",
                patient_name: "Kavi",
                test_name: "Heart Test",
                timing: "2 AM",
                'start': new Date("02/16/2023"),
                'end': new Date("02/16/2023")
            },
            {
                id: "PID0002",
                title: "title2",
                patient_name: "Arun",
                test_name: "Full CheckUp",
                timing: "4 AM",
                'start': new Date("02/16/2023"),
                'end': new Date("02/16/2023")
            },
            {
                id: "PID0003",
                title: "title3",
                patient_name: "Veni",
                test_name: "Blood Test",
                timing: "11 AM",
                'start': new Date("02/17/2023"),
                'end': new Date("02/17/2023")
            },
            {
                id: "PID0004",
                title: "title4",
                patient_name: "Pavi",
                test_name: "Heart Test",
                timing: "2 AM",
                'start': new Date("02/16/2023"),
                'end': new Date("02/16/2023")
            },
            {
                id: "PID0005",
                title: "title5",
                patient_name: "Siva",
                test_name: "Blood Test",
                timing: "3 AM",
                'start': new Date("02/16/2023"),
                'end': new Date("02/16/2023")
            }
        ],
        date: new Date()
    })

    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const d = state.date;
    let day = days[d.getDay()];

    const times = ["12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM",
        "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM"];

    return (
        <>
            <Grid container >
                <Grid item xs={12} style={{ display: "flex", flexDirection: "column", marginTop: "20px", marginLeft: "85px", marginBottom: "10px" }} >
                    <Typography style={{ fontFamily: "Avenir-Black", fontSize: "16px", color: "#024751", marginLeft: "10px" }}>{day}</Typography>
                    <div style={{ display: "flex", justifyContent: "center", backgroundColor: "#024751", width: "4vw", height: "4vw", borderRadius: "50px" }}>
                        <Typography style={{ fontFamily: "Avenir-Black", fontSize: "16px", color: "#fff", textAlign: "center", alignSelf: "center" }}>{moment(state.date).format("DD")}</Typography>
                    </div>
                </Grid>
                <Grid item xs={12}   >
                    {times.map((time, index) => (
                        <Grid container key={index} style={{ display: "flex", flexDirection: "row" }}>
                            <Grid item xs={1} >
                                <Typography style={{ fontFamily: "Avenir", fontSize: "14px", color: "grey",  }}>{time}</Typography>
                            </Grid>
                            <Grid item xs={11} style={{ borderLeft: "1px solid #DADCE0", borderTop: "1px solid #DADCE0", padding: "20px" }}>
                                <Grid container>
                                    {state.patients.filter((i) => i.timing === time).map((value) =>
                                        <Grid item xs={state.patients.filter((i) => i.timing === time).length === 1 ? 12 : 6} key={index}  style={{ borderRadius: "5px", padding: "5px", backgroundColor: "#024751", textAlign:"center" }}>
                                            
                                            <Typography style={{ fontFamily: "Avenir-Black", fontSize: "12px", color: "#fff" }}>{value.test_name} </Typography>
                                            <Typography style={{ fontFamily: "Avenir-Black", fontSize: "12px", color: "#fff" }}> {value.patient_name}</Typography>
                                        </Grid>)}
                                </Grid>
                            </Grid>
                        </Grid>))}
                </Grid>
            </Grid>
        </>
    )
}
export default TodayAppointments;