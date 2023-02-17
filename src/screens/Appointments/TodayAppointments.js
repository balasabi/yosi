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
                patient_name: "Kavi M",
                test_name: "Heart Test",
                timing_start: "9:00 AM",
                timing_end: "9:00 AM",
                'start': new Date("02/16/2023"),
                'end': new Date("02/16/2023")
            },
            {
                id: "PID0002",
                title: "title2",
                patient_name: "Arun S",
                test_name: "Full CheckUp",
                timing_start: "9:00 AM",
                timing_end: "9:00 AM",
                'start': new Date("02/16/2023"),
                'end': new Date("02/16/2023")
            },
            {
                id: "PID0002",
                title: "title2",
                patient_name: "Senthil R",
                test_name: "Full CheckUp",
                timing_start: "9:00 AM",
                timing_end: "9:00 AM",
                'start': new Date("02/16/2023"),
                'end': new Date("02/16/2023")
            },
            {
                id: "PID0003",
                title: "title3",
                patient_name: "Veni G" ,
                test_name: "Blood Test",
                timing_start: "12:00 PM",
                timing_end: "12:00 PM",
                'start': new Date("02/17/2023"),
                'end': new Date("02/17/2023")
            },
            {
                id: "PID000",
                title: "title3",
                patient_name: "Kumar S",
                test_name: "Blood Test",
                timing_start: "12:00 PM",
                timing_end: "12:00 PM",
                'start': new Date("02/17/2023"),
                'end': new Date("02/17/2023")
            },
            {
                id: "PID0004",
                title: "title4",
                patient_name: "Pavi S",
                test_name: "Heart Test",
                timing_start: "2:00 PM",
                timing_end: "3:00 PM",
                'start': new Date("02/16/2023"),
                'end': new Date("02/16/2023")
            },
            {
                id: "PID0004",
                title: "title4",
                patient_name: "Pavi R",
                test_name: "Heart Test",
                timing_start: "2:00 PM",
                timing_end: "3:00 PM",
                'start': new Date("02/16/2023"),
                'end': new Date("02/16/2023")
            },
            {
                id: "PID0004",
                title: "title4",
                patient_name: "Raja R",
                test_name: "Heart Test",
                timing_start: "2:00 PM",
                timing_end: "3:00 PM",
                'start': new Date("02/16/2023"),
                'end': new Date("02/16/2023")
            },
            {
                id: "PID0004",
                title: "title4",
                patient_name: "Mani S",
                test_name: "Heart Test",
                timing_start: "2:00 PM",
                timing_end: "3:00 PM",
                'start': new Date("02/16/2023"),
                'end': new Date("02/16/2023")
            },
            {
                id: "PID0004",
                title: "title4",
                patient_name: "Palani S",
                test_name: "Heart Test",
                timing_start: "2:00 PM",
                timing_end: "3:00 PM",
                'start': new Date("02/16/2023"),
                'end': new Date("02/16/2023")
            },
            {
                id: "PID0005",
                title: "title5",
                patient_name: "Siva R",
                test_name: "Blood Test",
                timing_start: "2:00 PM",
                timing_end: "2:00 PM",
                'start': new Date("02/16/2023"),
                'end': new Date("02/16/2023")
            },
            
        ],
        date: new Date()
    })

    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const d = state.date;
    let day = days[d.getDay()];

    const times = ["12:00 AM", "1:00 AM", "2:00 AM", "3:00 AM", "4:00 AM", "5:00 AM",
     "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
        "1:00 PM", "2:00 PM", "3:00 PM",  "4:00 PM", "5:00 PM","6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM"];
// const seconds =[ ,    "6:30 PM", "7:30 PM", "8:30 PM", "9:30 PM", "10:30 PM", "11:30 PM"]
    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={12} style={{ display: "flex", flexDirection: "column", marginTop: "20px", marginLeft: "85px", marginBottom: "10px" }} >
                    <Typography style={{ fontFamily: "Avenir-Black", fontSize: "16px", color: "#024751", marginLeft: "10px" }}>{day}</Typography>
                    <div style={{ display: "flex", justifyContent: "center", backgroundColor: "#024751", width: "4vw", height: "4vw", borderRadius: "50px" }}>
                        <Typography style={{ fontFamily: "Avenir-Black", fontSize: "16px", color: "#fff", textAlign: "center", alignSelf: "center" }}>{moment(state.date).format("DD")}</Typography>
                    </div>
                </Grid>
                <Grid item xs={12} style={{marginBottom:"10px"}}>
                    {times.map((time, index) => (
                        <Grid container key={index} style={{ display: "flex", flexDirection: "row" }}>
                            <Grid item xs={1} >
                                <Typography style={{ fontFamily: "Avenir", fontSize: "14px", color: "grey", marginTop: -8 }}>{time}</Typography>
                            </Grid>
                            <Grid item xs={11} style={{ borderLeft: "1px solid #DADCE0", borderTop: "1px solid #DADCE0", padding: state.patients.filter((i) => i.timing_start && i.timing_end === time).length>0 ? "5px" : "20px" }}>
                                <Grid container  >
                                    {state.patients.filter((i) => i.timing_start && i.timing_end === time).map((value) =>
                                        <Grid item key={index} xs={state.patients.filter((i) => i.timing_start && i.timing_end === time).length === 1 ? 12 : (12/state.patients.filter((i) => i.timing_start && i.timing_end === time).length)}  style={{ display: "flex", flexDirection: "column", borderRadius: "5px", padding:"5px", backgroundColor: "#024751"}}>
                                            <Typography style={{ fontFamily: "Avenir-Black", fontSize: "14px", color: "#fff", textAlign:"center" }}> {value.patient_name}</Typography>
                                            <Typography style={{ fontFamily: "Avenir-Black", fontSize: "14px", color: "#fff", textAlign:"center" }}>{value.test_name} </Typography>
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