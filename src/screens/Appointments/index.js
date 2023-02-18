import React, { useState } from 'react';
import { Typography, Grid, styled, InputBase, Dialog, DialogTitle, DialogContent, TextField } from '@mui/material';
import CustomizedButtons from '../../components/CustomButton';
import TodayAppointments from './TodayAppointments';
import CalenderAppointments from './CalenderAppointments'
import Image from 'next/image';
import plus from "../../../public/Images/plus.png";
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const CustomInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
        marginTop: theme.spacing(3)
    },
    "& .MuiInputBase-input": {
        position: "relative",
        backgroundColor: "#FBF7F4",
        fontSize: 16,
        padding: "10px",
        borderRadius: "4px",
        fontFamily: [
            ' Sen-Regular'
        ].join(","),
        "&:focus": {
            border: 0,
            backgroundColor: "#FBF7F4",
            border: "2px solid #024751",
        },
        "&:active": {
            border: "2px solid #024751",
            backgroundColor: "#FBF7F4"
        }
    }
}));

function Appointments(props) {

    const [state, setState] = useState({
        selectedTab: "T",
        addAppointmentOpen: false,
        patient_name: "",
        test_name: "",
        date: new Date(),
        start_time: null,
        end_time: null
    })

    const buttonAction = (param) => {
        setState({ ...state, selectedTab: param })
    }
    const addAppointmentClose = () => {
        setState({ ...state, addAppointmentOpen: false })
    };
    const submit = async () => {
        let { patient_name, test_name, date, time } = state;
        let data = {}
        data.patient_name = patient_name;
        data.test_name = test_name;
        data.date = date;
        data.time = time;
        dispatch(addAppointmentResultAction(data))
        setState({ ...state, addAppointmentOpen: false })
    };

    const cancel = () => {
        setState({ ...state, addAppointmentOpen: false })
    };
    
    return (
        <>
            <Grid container >
                <Grid item xs={6} style={{ marginBottom: "10px" }}>
                    <Typography style={{ fontSize: "24px", fontFamily: 'Avenir-Black', fontStyle: "normal", fontWeight: 800, }}>
                        Appointments
                    </Typography>
                </Grid>
                <Grid item xs={6} style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
                    <CustomizedButtons variant={"contained"} style={{ padding: "2px 12px 2px 12px", marginLeft: "10px" }} onClick={() => setState({ ...state, addAppointmentOpen: true })}>
                        <Image src={plus} alt='union' width={14} height={15} />
                        <Typography style={{ marginLeft: "5px" }}>
                            Add Appointments
                        </Typography>
                    </CustomizedButtons>
                </Grid>
                <Grid item xs={12} style={{ marginLeft: "12px" }}>
                    <Grid container>
                        <Grid item xs={2} >
                            <CustomizedButtons variant={"text"} className='subText' style={{ textTransform: "none", color: state.selectedTab === "T" ? "#024751" : "#474747", borderBottom: state.selectedTab === "T" ? "5px solid #024751" : "none", borderRadius: "0px" }} onClick={() => buttonAction("T")}>Today</CustomizedButtons>
                        </Grid>
                        <Grid item xs={2} >
                            <CustomizedButtons variant={"text"} className='subText' style={{ textTransform: "none", color: state.selectedTab === "C" ? "#024751" : "#474747", borderBottom: state.selectedTab === "C" ? "5px solid #024751" : "none", borderRadius: "0px" }} onClick={() => buttonAction("C")}>Months</CustomizedButtons>
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
                <Dialog open={state.addAppointmentOpen} onClose={() => addAppointmentClose()} maxWidth={'sm'} style={{marginBottom:"180px"}} >
                    <Grid container>
                        <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end" }}>
                            <DisabledByDefaultRoundedIcon style={{ color: "#024751", fontSize: "45px", position: "absolute" }} onClick={() => addAppointmentClose()} />
                        </Grid>
                    </Grid>
                    <DialogTitle style={{ fontSize: "20px", fontStyle: "normal", lineHeight: "32px", fontFamily: "Avenir-Black", color: "#000", }}>Add appointments</DialogTitle>
                    <DialogContent>
                        <Grid item xs={12} style={{ borderTop: "1px solid #E8E8E8", paddingTop: "20px" }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                    <TextField size='small'
                                        fullWidth
                                        placeholder="Patient name"
                                        value={state.patient_name}
                                        onChange={(e) => setState({ ...state, patient_name: e.target.value })} />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                    <TextField size='small'
                                    select
                                        fullWidth
                                       // placeholder="Test name"
                                        value={state.test_name}
                                        onChange={(e) => setState({ ...state, test_name: e.target.value })}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        renderValue={
                                            state.test_name !== "" ? undefined : () => <Placeholder>Test name</Placeholder>
                                        } />
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                                <Typography style={{ fontFamily: "Avenir-Black", fontWeight: 400, fontSize: "14px", lineHeight: "24px", Letter: "0.15px" }}>Date :</Typography>
                                 <LocalizationProvider dateAdapter={AdapterMoment}>
                                        <DatePicker
                                            views={['year', 'month', 'day']}
                                            disablePast
                                            value={state.date}
                                            onChange={(date) => setState({ ...state, date: date })}
                                            // popperProps={{ strategy: 'fixed' }}
                                            renderInput={(params) =>
                                                <TextField {...params}
                                                    size='small'
                                                    fullWidth
                                                    // className='input'
                                                    InputLabelProps={{
                                                        sx: {
                                                            fontFamily: "Avenir",
                                                            backgroundColor: "#FBF7F4",
                                                            border: "2px solid #024751",
                                                             }
 }}
                                                />
                                            }
                                        />
                                    </LocalizationProvider>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                                <Typography style={{ fontFamily: "Avenir-Black", fontWeight: 400, fontSize: "14px", lineHeight: "24px", Letter: "0.15px" }}>Start Time :</Typography>
                                    <LocalizationProvider dateAdapter={AdapterMoment}>
                                        <TimePicker
                                            value={state.start_time}
                                            onChange={(time) => setState({ ...state, start_time: time })}
                                            renderInput={(params) =>
                                                <TextField {...params} size='small'
                                                    fullWidth
                                                    InputLabelProps={{
                                                        sx: {
                                                            fontFamily: "Avenir",
                                                            backgroundColor: "#FBF7F4",
                                                            border: "2px solid #024751",
                                                        }
                                                    }} />}
                                        />
                                    </LocalizationProvider>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                                <Typography style={{ fontFamily: "Avenir-Black", fontWeight: 400, fontSize: "14px", lineHeight: "24px", Letter: "0.15px" }}>End Time :</Typography>
                                  <LocalizationProvider dateAdapter={AdapterMoment}>
                                        <TimePicker
                                            value={state.end_time}
                                            onChange={(time) => setState({ ...state, end_time: time })}
                                            renderInput={(params) =>
                                                <TextField {...params} size='small'
                                                    fullWidth
                                                    InputLabelProps={{
                                                        sx: {
                                                            fontFamily: "Avenir",
                                                            backgroundColor: "#FBF7F4",
                                                            border: "2px solid #024751",
                                                        }
                                                    }} />}
                                        />
                                    </LocalizationProvider>
                                </Grid>
                                <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
                                    <CustomizedButtons variant={"text"} onClick={() => cancel()}>
                                        Cancel
                                    </CustomizedButtons>
                                    <CustomizedButtons variant={"contained"} style={{ marginLeft: "5px", borderRadius: "5px", padding: "0px 15px 0px 15px" }} onClick={() => alert("WIP")} >
                                        Submit
                                    </CustomizedButtons>
                                </Grid>
                            </Grid>
                        </Grid>
                    </DialogContent>
                </Dialog>
            </Grid>
        </>
    )
}
export default Appointments;