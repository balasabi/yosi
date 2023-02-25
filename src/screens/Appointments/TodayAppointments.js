import React, { useState, useEffect } from 'react';
import { Typography, Grid, TextField } from '@mui/material';
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useSelector, useDispatch } from 'react-redux';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function TodayAppointments(props) {
    const [state, setState] = useState({
        date: new Date()
    })

    const appointment = useSelector(state => state.appointmentReducer.appointments);

    // const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    // const d = state.date;
    // let day = days[d.getDay()];

    const times = ["12:00 AM", "01:00 AM", "02:00 AM", "03:00 AM", "04:00 AM", "05:00 AM",
        "06:00 AM", "07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
        "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM",
        "09:00 PM", "10:00 PM", "11:00 PM"];

    const appointments = appointment.filter((item, index) => item.start_date === moment(state.date).format("MM/DD/YYYY"))

    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={5} md={6} lg={8} xl={9} style={{ display: "flex", flexDirection: "column", marginTop: "20px", marginLeft: "85px", marginBottom: "10px" }} >
                    {/* <Typography style={{ fontFamily: "Avenir-Black", fontSize: "16px", color: "#5824D6", marginLeft: "10px" }}>{day}</Typography> */}
                    <div style={{ display: "flex", justifyContent: "center", backgroundColor: "#5824D6", width: "4vw", height: "4vw", borderRadius: "50px" }}>
                        <Typography style={{ fontFamily: "Avenir-Black", fontSize: "16px", color: "#fff", textAlign: "center", alignSelf: "center" }}>{moment(state.date).format("DD")}</Typography>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={3} xl={2} style={{ marginTop: "20px", }}>
                    <Typography style={{ fontFamily: "Avenir-Black", fontWeight: 400, fontSize: "14px", lineHeight: "24px", Letter: "0.15px" }}>Date :</Typography>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DatePicker
                            views={['year', 'month', 'day']}
                            disablePast
                            value={state.date}
                            onChange={(date) => setState({ ...state, date: date })}
                            renderInput={(params) =>
                                <TextField {...params}
                                    size='small'
                                    fullWidth
                                    sx={{
                                        backgroundColor: '#F0E9FF', fontFamily: "Avenir", "&.Mui-disabled": {
                                            border: "none"
                                        }
                                    }}
                                    InputLabelProps={{
                                        sx: {
                                            fontFamily: "Avenir",
                                            backgroundColor: "#F0E9FF",
                                            border: "2px solid #5824D6",
                                        }
                                    }}
                                />
                            }
                        />
                    </LocalizationProvider>
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