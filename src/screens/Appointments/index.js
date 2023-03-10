import React, { useState } from 'react';
import { Typography, Grid, Dialog, DialogTitle, DialogContent, TextField, Select, MenuItem } from '@mui/material';
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
import { createAppointmentAction } from "../../store/actions/appointmentAction";
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux';

function Appointments(props) {
    const test_type = useSelector(state => state.testTypeReducer.test_type);
    const [state, setState] = useState({
        selectedTab: "T",
        addAppointmentOpen: false,
        id:"",
        patient_name: "",
        test_name: "",
        date: null,
        start_time: null,
        end_time: null,
    })
    const initialState = () => {
        setState({ ...state,
            id:"",
            patient_name: "",
            test_name: "",
            date: new Date(),
            start_time: null,
            end_time: null,
            addAppointmentOpen: false,

        })
    }
    const dispatch = useDispatch();
    const buttonAction = (param) => {
        setState({ ...state, selectedTab: param })
    }
    const addAppointmentClose = () => {
        setState({ ...state, addAppointmentOpen: false })
    };
    const submit = async () => {
        // alert("WIP")
        let { id, patient_name, test_name, date, start_time, end_time } = state;
        let data = {}
        data.id = id;
        data.patient_name = patient_name;
        data.test_name = test_name;
        data.start_date = new Date(moment(date).format("MM/DD/YYYY"));
        data.start_time = moment(start_time).format("hh:mm A");
        data.end_time = moment(end_time).format("hh:mm A");
        data.end = new Date(moment(date).format("MM/DD/YYYY"));
        data.check_data = moment(date).format("MM/DD/YYYY");
        dispatch(createAppointmentAction(data))
        setState({ ...state, addAppointmentOpen: false })
        initialState();
    };

    

    const cancel = () => {
        setState({ ...state, addAppointmentOpen: false })
    };
    const Placeholder = ({ children }) => {
        return <div style={{ color: "#101010", fontWeight: 900, fontSize: "14px", fontFamily: "Avenir-Book", fontStyle: "normal" }}>{children}</div>;
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
                            Add Appointment
                        </Typography>
                    </CustomizedButtons>
                </Grid>
                <Grid item xs={12} style={{ marginLeft: "12px" }}>
                    <Grid container>
                        <Grid item xs={2} >
                            <CustomizedButtons variant={"text"} className='subText' style={{ textTransform: "none", color: state.selectedTab === "T" ? "#5824D6" : "#474747", borderBottom: state.selectedTab === "T" ? "5px solid #5824D6" : "none", borderRadius: "0px" }} onClick={() => buttonAction("T")}>Today</CustomizedButtons>
                        </Grid>
                        <Grid item xs={2} >
                            <CustomizedButtons variant={"text"} className='subText' style={{ textTransform: "none", color: state.selectedTab === "C" ? "#5824D6" : "#474747", borderBottom: state.selectedTab === "C" ? "5px solid #5824D6" : "none", borderRadius: "0px" }} onClick={() => buttonAction("C")}>Months</CustomizedButtons>
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
                <Dialog open={state.addAppointmentOpen} onClose={() => addAppointmentClose()} maxWidth={'sm'} style={{ marginBottom: "180px" }} >
                    <Grid container>
                        <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end" }}>
                            <DisabledByDefaultRoundedIcon style={{ color: "#5824D6", fontSize: "45px", position: "absolute" }} onClick={() => addAppointmentClose()} />
                        </Grid>
                    </Grid>
                    <DialogTitle style={{ fontSize: "20px", fontStyle: "normal", lineHeight: "32px", fontFamily: "Avenir-Black", color: "#000", borderBottom: "1px solid #E8E8E8" }}>Add appointment</DialogTitle>
                    <DialogContent>
                        <Grid item xs={12} style={{ paddingTop: "20px" }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} >
                                    <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Book", color: "#6425FE", }}>Appointment information</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                    <TextField size='small'
                                        fullWidth
                                        placeholder="Patient name"
                                        value={state.patient_name}
                                        sx={{ backgroundColor: '#F0E9FF', }}
                                        onChange={(e) => setState({ ...state, patient_name: e.target.value })} />
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <Select
                                        size="small"
                                        value={state.test_name}
                                        onChange={(event) => setState({ ...state, test_name: event.target.value })}
                                        displayEmpty
                                        fullWidth
                                        style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", backgroundColor: "#F0E9FF", color: "#000" }}
                                        renderValue={
                                            state.test_name !== "" ? undefined : () => <Placeholder><Typography style={{ fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", color: "#998E8A" }}>Test name</Typography></Placeholder>
                                        }>
                                          {!!test_type && test_type.map((item, index) =>
                                                <MenuItem key={index.toString()} value={item.name}>{item.name}</MenuItem>
                                         )}                                       
                                    </Select>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                                    <LocalizationProvider dateAdapter={AdapterMoment}>
                                        <DatePicker
                                            views={['year', 'month', 'day']}
                                            disablePast
                                            value={state.date}
                                            onChange={(date) => setState({ ...state, date: date })}
                                            inputFormat="MM/DD/YYYY"
                                            renderInput={(params) =>
                                                <TextField {...params}
                                                    size='small'
                                                    fullWidth
                                                    sx={{
                                                        backgroundColor: '#F0E9FF', fontFamily: "Avenir", "&.Mui-disabled": {
                                                            border: "none"
                                                        }
                                                    }}
                                                    inputProps={{
                                                        ...params.inputProps,
                                                        placeholder: "Select date"
                                                    }}
                                                    //   className={"input"}
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
                                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                                    <LocalizationProvider dateAdapter={AdapterMoment}>
                                        <TimePicker
                                            value={state.start_time}
                                            onChange={(time) => setState({ ...state, start_time: time })}
                                            inputFormat="hh:mm A"
                                            renderInput={(params) =>
                                                <TextField {...params} size='small'
                                                    fullWidth
                                                    sx={{ backgroundColor: '#F0E9FF', fontFamily: "Avenir", }}
                                                    inputProps={{
                                                        ...params.inputProps,
                                                        placeholder: "Select start time"
                                                    }}
                                                    InputLabelProps={{
                                                        sx: {
                                                            fontFamily: "Avenir",
                                                            border: "2px solid #5824D6",
                                                        }
                                                    }} />
                                            }
                                        />
                                    </LocalizationProvider>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                                    <LocalizationProvider dateAdapter={AdapterMoment}>
                                        <TimePicker
                                            value={state.end_time}
                                            onChange={(time) => setState({ ...state, end_time: time })}
                                            inputFormat="hh:mm A"
                                            renderInput={(params) =>
                                                <TextField {...params} size='small'
                                                    sx={{ backgroundColor: '#F0E9FF', fontFamily: "Avenir", }}
                                                    fullWidth
                                                    inputProps={{
                                                        ...params.inputProps,
                                                        placeholder: "Select end time"
                                                    }}
                                                    InputLabelProps={{
                                                        sx: {
                                                            fontFamily: "Avenir",
                                                            backgroundColor: "#F0E9FF",
                                                            border: "2px solid #5824D6",
                                                        }
                                                    }} />}
                                        />
                                    </LocalizationProvider>
                                </Grid>
                                <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
                                    <CustomizedButtons variant={"text"} onClick={() => cancel()}>
                                        Cancel
                                    </CustomizedButtons>
                                    <CustomizedButtons variant={"contained"} style={{ marginLeft: "5px", borderRadius: "5px", padding: "0px 15px 0px 15px" }} onClick={() => submit()} >
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