import React, { useState } from 'react';
import {
  Dialog, DialogContent, Grid, Typography, DialogTitle, TableContainer, Table, TableBody, TableCell,
  styled, TableRow, TableHead, tableCellClasses, tableRowClasses, Button
} from '@mui/material';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import { useSelector, useDispatch } from 'react-redux';

const localizer = momentLocalizer(moment)

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#E7E7E7",
    color: '#2E2E2E',
    fontFamily: 'Avenir-Heavy',
    padding: "4px",
    fontSize: '1em',
    lineHeight: '27px'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontFamily: 'Avenir-Book',
    color: '#2E2E2E',
    lineHeight: '24px',
    padding: "3px"
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  [`&.${tableRowClasses.root}`]: {
  },
  '&:nth-of-type(odd)': {
  },
}));

function CalenderAppointments(props) {
  const [today, setDate] = React.useState(new Date());
  const [state, setState] = useState({
    events: [
      {
        id: "PID0001",
        patient_name: "Kavi",
        test_name: "Heart Test",
        start_time: "09:00 AM",
         end_time:"09:00 AM",
        start_date: new Date("03/03/2023"),
       'end': new Date("03/03/2023")
      },
      {
        id: "PID0002",
        patient_name: "Arun",
        test_name: "Full CheckUp",
        start_time: "10:00 AM",
         end_time:"10:00 AM",
        start_date: new Date("03/01/2023"),
        'end': new Date("03/01/2023")
      },
    ],
     patientAppointmentDetailsOpen: false,
    date: null
  })
  const appointments = useSelector(state => state.appointmentReducer.appointments);

   const goToBack = (onNavigate) => {
    onNavigate("PREV");
  };

  const goToNext = (onNavigate) => {
    onNavigate("NEXT");
  };

  const CalendarToolbar = ({ onView, label, views, onNavigate }) => (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "flex-start", marginBottom: "15px" }}>
      <Button style={{ fontSize: "12px", fontStyle: "normal", lineHeight: "15px", fontFamily: "Avenir-Black", color: "#FFF", backgroundColor: "#6425FE" }} onClick={() => goToBack(onNavigate)}>Back</Button>
      <Typography style={{ fontSize: "20px", fontStyle: "normal", lineHeight: "20px", fontFamily: "Avenir-Black", color: "#000", marginTop: "5px" }}>
        {label}
      </Typography>
      <Button style={{ fontSize: "12px", fontStyle: "normal", lineHeight: "15px", fontFamily: "Avenir-Black", color: "#FFF", backgroundColor: "#6425FE" }} onClick={() => goToNext(onNavigate)}>Next</Button>
    </div>
  );

  const handleEventClick = (param) => {
    setState({ ...state, patientAppointmentDetailsOpen: true, date: param.start_date})
  };

  const addTestClose = () => {
    setState({ ...state, patientAppointmentDetailsOpen: false })
  };
 

  const appointmentsLength = (param) => { 
      return appointments.filter((item, index) =>  moment(item.start_date).format("MM/DD/YYYY") === moment(param.start_date).format("MM/DD/YYYY")).length
  };


  return (
    <>
      <Grid item xs={12} style={{ display: "flex", marginTop: "20px" }}>
        <Calendar
          localizer={localizer}
          events={appointments}
          startAccessor="start_date"
          // endAccessor="end"
          views={['month']}
          components={{ toolbar: CalendarToolbar }}
          style={{ height: 500, width: 1200 }}
          onSelectEvent={(event) => handleEventClick(event)}
          titleAccessor={(e) => { 
             let result = appointmentsLength(e)
                   console.log("*******in******"+result)
              return  appointmentsLength(e) > 1 ? `Appointments : ${ appointmentsLength(e)}` : `Appointment : ${"1"}`; }}
          // onSelectSlot={handleEventClick()}
          eventPropGetter={(event) => {
            const backgroundColor = '#5824D6';
            return { style: { backgroundColor } }
          }}
          selectable
        />
        <Dialog open={state.patientAppointmentDetailsOpen} maxWidth={'lg'} >
          <Grid container>
            <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end" }}>
              <DisabledByDefaultRoundedIcon style={{ color: "#5824D6", fontSize: "35px", position: "absolute" }} onClick={() => addTestClose()} />
            </Grid>
          </Grid>
          <DialogTitle style={{ fontSize: "20px", fontStyle: "normal", lineHeight: "32px", fontFamily: "Avenir-Black", color: "#000", borderBottom: "1px solid #E8E8E8", marginTop: 10, marginBottom: 10 }}>
            <Grid container style={{ paddingBottom: "3px", display: "flex", flexDirection: "row", justifyContent: "space-between", borderRadius: "5px", padding: "4px" }}>
              <Grid item xs={6} style={{ display: "flex", flexDirection: "row" }}>
                <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Black", }}> Date : </Typography>
                <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", marginLeft: "5px" }}> {moment(state.events.start_date).format("DD/MM/YYYY")} </Typography>
              </Grid>
              <Grid item xs={6} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
                <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Black", }}>Appointments :  </Typography>
                <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", marginLeft: "5px" }}> {state.events.length} </Typography>
              </Grid>
            </Grid>
          </DialogTitle>
          <DialogContent >
            <TableContainer >
              <Table>
                <TableHead >
                  <TableRow >
                    <StyledTableCell align={"center"} style={{ width: "12vw" }}>Patient Name</StyledTableCell>
                    <StyledTableCell align={"center"} style={{ width: "12vw" }}>Test Name</StyledTableCell>
                    <StyledTableCell align={"center"} style={{ width: "12vw" }}>Timing</StyledTableCell>
                  </TableRow>
                </TableHead>
                {!!state.events && state.events.map((event, index) => (
                  <TableBody key={index.toString()} style={{ backgroundColor: (index % 2) ? "#FCFCFC" : "#FFFFFF", borderBottom: "1.1px solid #F2F2F2" }}>
                    <StyledTableRow >
                      <StyledTableCell align={"center"}>{event.patient_name}</StyledTableCell>
                      <StyledTableCell align={"center"}>{event.test_name}</StyledTableCell>
                      <StyledTableCell align={"center"}>{event.start_time}- {event.end_time}</StyledTableCell>
                    </StyledTableRow>
                  </TableBody>
                ))}
              </Table>
            </TableContainer>
          </DialogContent>
        </Dialog>
      </Grid>
    </>
  )
}
export default CalenderAppointments;