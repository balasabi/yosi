import React, { useState, useEffect } from 'react';
import { Typography, Grid, TextField } from '@mui/material';
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useSelector, useDispatch } from 'react-redux';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {fetchAppointment} from '../../store/reducers/appointmentReducer'

function TodayAppointments(props) {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        date: new Date()
    })

    const appointment = useSelector(state => state.appointmentReducer.appointments);


    useEffect(() => {    
        let result = appointment.map(
          (content, i) => i <= 5 ? { ...content, start_date: new Date(),end_date:new Date() } : { ...content, start_date: new Date().setDate(new Date().getDate() + 1),end_date:new Date().setDate(new Date().getDate() + 1) })
           dispatch(fetchAppointment(result))
    }, []);
      


    const times = ["12:00 AM", "01:00 AM", "02:00 AM", "03:00 AM", "04:00 AM", "05:00 AM",
        "06:00 AM", "07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
        "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM",
        "09:00 PM", "10:00 PM", "11:00 PM"];

    const appointments = appointment.filter((item, index) => moment(new Date(item.start_date)).format("MM/DD/YYYY") === moment(state.date).format("MM/DD/YYYY"))
    console.log("****appointments****" + JSON.stringify(appointments))



    const checkTime = (param, param1) => {
        var startTime = moment(param.start_time, 'hh:mm A').format('HH:mm')
        var endTime = moment(param.end_time, 'hh:mm A').format('HH:mm')
        var currentTime = moment(param1, 'hh:mm A').format('HH:mm')
        let currentDate = new Date(param.start_date);
        currentDate.setHours(currentTime.split(":")[0]);
        currentDate.setMinutes(currentTime.split(":")[1]);
        let startDate = new Date(currentDate.getTime());
        startDate.setHours(startTime.split(":")[0]);
        startDate.setMinutes(startTime.split(":")[1]);
        let endDate = new Date(currentDate.getTime());
        endDate.setHours(endTime.split(":")[0]);
        endDate.setMinutes(endTime.split(":")[1]);
        let result = startDate <= currentDate && endDate > currentDate
        return result
    }

 const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const d = new Date(state.date);
    let day = days[d.getDay()];

    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={5} md={6} lg={8} xl={9} style={{ display: "flex", flexDirection: "column", marginTop: "20px", marginLeft: "85px", marginBottom: "10px" }} >
                    <Typography style={{ fontFamily: "Avenir-Black", fontSize: "16px", color: "#5824D6", marginLeft: "10px" }}>{day}</Typography>
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
                                <Grid container>
                                    {appointments.filter((i) => checkTime(i, time)).map((value, indexValues) =>
                                        <Grid item key={indexValues} xs={appointments.filter((v) => checkTime(v, time)).length === 1 ? 12 : (12 / appointments.filter((r) => checkTime(r, time)).length)} style={{ display: "flex", flexDirection: "column", borderRadius: "5px", padding: "5px", backgroundColor: "#5824D6" }}>
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