import React, { useState } from 'react';
import { Dialog, DialogContent, Grid, Typography, DialogTitle, TableContainer, Table, TableBody, TableCell, styled, Paper, TableRow, TableHead, tableCellClasses, tableRowClasses } from '@mui/material';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import Appointments from '.';

const localizer = momentLocalizer(moment)

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#E7E7E7",
    color: theme.palette.common.black,
    fontFamily: 'Avenir-Black',
    padding: "3px",
    fontWeight: 800
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 17,
    fontFamily: 'Avenir',
    padding: "2px"
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
        timing: "09:00 AM",
        'start': new Date("02/02/2023"),
        'end': new Date("02/02/2023")
      },
      {
        id: "PID0002",
        patient_name: "Arun",
        test_name: "Full CheckUp",
        timing: "10:00 AM",
        'start': new Date("02/03/2023"),
        'end': new Date("02/03/2023")
      },
    ],
    patientAppointmentDetailsOpen: false,
  })

  const goToBack = (onNavigate) => {
    onNavigate("PREV");
  };
  const goToNext = (onNavigate) => {
    onNavigate("NEXT");
  };

  const CalendarToolbar = ({ onView, label, views, onNavigate }) => (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "flex-start", marginBottom: "10px" }}>
      <button onClick={() => goToBack(onNavigate)}>Back</button>
      {label}
      <button onClick={() => goToNext(onNavigate)}>Next</button>
    </div>
  );
  const handleEventClick = () => {
    setState({ ...state, patientAppointmentDetailsOpen: true })
    console.log('event clicked!')
  };
  const addTestClose = () => {
    setState({ ...state, patientAppointmentDetailsOpen: false })
  }
  return (
    <>
      <Grid item xs={12} style={{ display: "flex", marginTop: "20px" }}>
        <Calendar
          localizer={localizer}
          events={state.events}
          startAccessor="start"
          endAccessor="end"
          views={['month']}
          components={{ toolbar: CalendarToolbar }}
          style={{ height: 500, width: 1200 }}
          onSelectEvent={event => handleEventClick()}
          titleAccessor={(e) => { return state.events.length > 1 ? `Appointments : ${state.events.length}` : `Appointment : ${state.events.length}`; }}
          // onSelectSlot={handleEventClick()}
          selectable
        />
        <Dialog open={state.patientAppointmentDetailsOpen} maxWidth={'lg'} >
          <Grid container>
            <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end" }}>
              <DisabledByDefaultRoundedIcon style={{ color: "#024751", fontSize: "35px", position: "absolute" }} onClick={() => addTestClose()} />
            </Grid>
          </Grid>
          <DialogTitle style={{ marginTop: "25px" }}>
            <Grid container style={{ paddingBottom: "3px", display: "flex", flexDirection: "row", justifyContent: "space-between", backgroundColor: "#024751", borderRadius: "5px", padding: "8px" }}>
              <Grid item xs={6} style={{ display: "flex", flexDirection: "row" }}>
                <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Black", color: "#fff" }}> Date : </Typography>
                <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", color: "#fff", marginLeft: "5px" }}> {moment(today).format("DD/MM/YYYY")} </Typography>
              </Grid>
              <Grid item xs={6} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
                <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Black", color: "#fff" }}>Appointments :  </Typography>
                <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", color: "#fff", marginLeft: "5px" }}> {state.events.length} </Typography>
              </Grid>
            </Grid>
          </DialogTitle>
          <DialogContent>
            <TableContainer >
              <Table>
                <TableHead>
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
                      <StyledTableCell align={"center"}>{event.timing}</StyledTableCell>
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