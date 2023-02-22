import React, { useState, useEffect } from 'react';
import { Typography, Grid } from '@mui/material';
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useSelector, useDispatch } from 'react-redux';

function TodayAppointments(props) {
    const [state, setState] = useState({
        // patients: [
        //     {
        //         id: "PID0001",
        //         title: "title1",
        //         patient_name: "Kavi M",
        //         test_name: "Heart Test",
        //         timing_start: "9:00 AM",
        //         timing_end: "9:00 AM",
        //         'start': new Date("02/16/2023"),
        //         'end': new Date("02/16/2023")
        //     },
        //     {
        //         id: "PID0002",
        //         title: "title2",
        //         patient_name: "Arun S",
        //         test_name: "Full CheckUp",
        //         timing_start: "9:00 AM",
        //         timing_end: "9:00 AM",
        //         'start': new Date("02/16/2023"),
        //         'end': new Date("02/16/2023")
        //     },
        //     {
        //         id: "PID0003",
        //         title: "title2",
        //         patient_name: "Senthil R",
        //         test_name: "Full CheckUp",
        //         timing_start: "9:00 AM",
        //         timing_end: "9:00 AM",
        //         'start': new Date("02/16/2023"),
        //         'end': new Date("02/16/2023")
        //     },
        //     {
        //         id: "PID0004",
        //         title: "title3",
        //         patient_name: "Veni G" ,
        //         test_name: "Blood Test",
        //         timing_start: "12:00 PM",
        //         timing_end: "12:00 PM",
        //         'start': new Date("02/17/2023"),
        //         'end': new Date("02/17/2023")
        //     },
        //     {
        //         id: "PID0005",
        //         title: "title3",
        //         patient_name: "Kumar S",
        //         test_name: "Blood Test",
        //         timing_start: "12:00 PM",
        //         timing_end: "12:00 PM",
        //         'start': new Date("02/17/2023"),
        //         'end': new Date("02/17/2023")
        //     },
        //     {
        //         id: "PID0006",
        //         title: "title4",
        //         patient_name: "Pavi S",
        //         test_name: "Heart Test",
        //         timing_start: "2:00 PM",
        //         timing_end: "3:00 PM",
        //         'start': new Date("02/16/2023"),
        //         'end': new Date("02/16/2023")
        //     },
        //     {
        //         id: "PID0007",
        //         title: "title4",
        //         patient_name: "Pavi R",
        //         test_name: "Heart Test",
        //         timing_start: "2:00 PM",
        //         timing_end: "3:00 PM",
        //         'start': new Date("02/16/2023"),
        //         'end': new Date("02/16/2023")
        //     },
        //     {
        //         id: "PID0008",
        //         title: "title4",
        //         patient_name: "Raja R",
        //         test_name: "Heart Test",
        //         timing_start: "2:00 PM",
        //         timing_end: "3:00 PM",
        //         'start': new Date("02/16/2023"),
        //         'end': new Date("02/16/2023")
        //     },
        //     {
        //         id: "PID0009",
        //         title: "title4",
        //         patient_name: "Mani S",
        //         test_name: "Heart Test",
        //         timing_start: "2:00 PM",
        //         timing_end: "3:00 PM",
        //         'start': new Date("02/16/2023"),
        //         'end': new Date("02/16/2023")
        //     },
        //     {
        //         id: "PID0010",
        //         title: "title4",
        //         patient_name: "Palani S",
        //         test_name: "Heart Test",
        //         timing_start: "2:00 PM",
        //         timing_end: "3:00 PM",
        //         'start': new Date("02/16/2023"),
        //         'end': new Date("02/16/2023")
        //     },
        //     {
        //         id: "PID0011",
        //         title: "title5",
        //         patient_name: "Siva R",
        //         test_name: "Blood Test",
        //         timing_start: "2:00 PM",
        //         timing_end: "2:00 PM",
        //         'start': new Date("02/16/2023"),
        //         'end': new Date("02/16/2023")
        //     },

        // ],
        date: new Date()
    })

    const appointments = useSelector(state => state.appointmentReducer.appointments);

    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const d = state.date;
    let day = days[d.getDay()];

    const times = ["12:00 AM", "01:00 AM", "02:00 AM", "03:00 AM", "04:00 AM", "05:00 AM",
        "06:00 AM", "07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
        "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM",
        "09:00 PM", "10:00 PM", "11:00 PM"];

    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={12} style={{ display: "flex", flexDirection: "column", marginTop: "20px", marginLeft: "85px", marginBottom: "10px" }} >
                    <Typography style={{ fontFamily: "Avenir-Black", fontSize: "16px", color: "#5824D6", marginLeft: "10px" }}>{day}</Typography>
                    <div style={{ display: "flex", justifyContent: "center", backgroundColor: "#5824D6", width: "4vw", height: "4vw", borderRadius: "50px" }}>
                        <Typography style={{ fontFamily: "Avenir-Black", fontSize: "16px", color: "#fff", textAlign: "center", alignSelf: "center" }}>{moment(state.date).format("DD")}</Typography>
                    </div>
                </Grid>
                <Grid item xs={12} style={{ marginBottom: "10px" }}>
                    {times.map((time, index) => (
                        <Grid container key={index} style={{ display: "flex", flexDirection: "row" }}>
                            <Grid item xs={1} >
                                <Typography style={{ fontFamily: "Avenir", fontSize: "14px", color: "grey", marginTop: -8 }}>{time}</Typography>
                            </Grid>
                            <Grid item xs={11} style={{ borderLeft: "1px solid #DADCE0", borderTop: "1px solid #DADCE0", padding: appointments.filter((i) => i.start_time && i.end_time === time).length > 0 ? "5px" : "20px" }}>
                                <Grid container  >
                                    {appointments.filter((i) => i.start_time && i.end_time === time).map((value) =>
                                        <Grid item key={index} xs={appointments.filter((i) => i.start_time && i.end_time === time).length === 1 ? 12 : (12 / appointments.filter((i) => i.start_time && i.end_time === time).length)} style={{ display: "flex", flexDirection: "column", borderRadius: "5px", padding: "5px", backgroundColor: "#5824D6" }}>
                                            <Typography style={{ fontFamily: "Avenir-Black", fontSize: "14px", color: "#fff", textAlign: "center" }}> {value.patient_name}</Typography>
                                            <Typography style={{ fontFamily: "Avenir-Black", fontSize: "14px", color: "#fff", textAlign: "center" }}>{value.test_name} </Typography>
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