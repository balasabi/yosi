import React, { useState } from 'react';
import { Typography, Grid, Dialog, DialogTitle, DialogContent, TextField, Select, MenuItem, FormHelperText } from '@mui/material';
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
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';

function Appointments(props) {

    const test_type = useSelector(state => state.testTypeReducer.test_type);

    const [state, setState] = useState({
        selectedTab: "C",
        addAppointmentOpen: false,
        id: "",
        patient_name: "",
        test_name: "",
        date: null,
        patientNameError: false,
        dateError: false,
        testNameError: false
    })

    const initialState = () => {
        setState({
            ...state,
            id: "",
            patient_name: "",
            test_name: "",
            date: null,
            addAppointmentOpen: false,
            patientNameError: false,
            dateError: false,
            testNameError: false
        })
    }
    const dispatch = useDispatch();

    const appointment = useSelector(state => state.appointmentReducer.appointments);

    const buttonAction = (param) => {
        setState({ ...state, selectedTab: param })
    }

    const handleAdd = () => {
        setState({ ...state, addAppointmentOpen: true, patientNameError: false, dateError: false, testNameError: false })
    }

    const addAppointmentClose = () => {
        setState({ ...state, addAppointmentOpen: false })
    };

    const submit = async () => {
        let { id, patient_name, test_name, date } = state;
        let isError = false;

        if (patient_name === "" || patient_name === null || patient_name === undefined) {
            setState(ref => ({ ...ref, patientNameError: true }))
            isError = true
        }
        if (date === "" || date === null || date === undefined) {
            setState(ref => ({ ...ref, dateError: true }))
            isError = true
        }
        if (test_name === "" || test_name === null || test_name === undefined) {
            setState(ref => ({ ...ref, testNameError: true }))
            isError = true
        }

        if (isError === false) {
            let data = {}
            data.id = appointment.length + 1;
            data.patient_name = patient_name;
            data.test_name = test_name;
            data.start_date = moment(date).format("MM/DD/YYYY");
            data.end_date = moment(date).format("MM/DD/YYYY");
            dispatch(createAppointmentAction(data, appointment));
            setState({ ...state, addAppointmentOpen: false });
            initialState();
        }
    };

    const cancel = () => {
        setState({ ...state, addAppointmentOpen: false })
        initialState()
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
                    <CustomizedButtons variant={"contained"} style={{ padding: "2px 12px 2px 12px", marginLeft: "10px" }} onClick={() => handleAdd()}>
                        <Image src={plus} alt='union' width={14} height={15} />
                        <Typography style={{ marginLeft: "5px" }}>
                            Add Appointment
                        </Typography>
                    </CustomizedButtons>
                </Grid>                
                <Grid item xs={12} style={{ marginTop: "30px" }}>
                    {state.selectedTab === "C" &&
                        <CalenderAppointments />
                    }
                </Grid>
                <Dialog open={state.addAppointmentOpen} maxWidth={'sm'} style={{ marginBottom: "180px" }} >
                    <Grid container>
                        <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end" }}>
                            <DisabledByDefaultRoundedIcon style={{ color: "#5824D6", fontSize: "45px", position: "absolute", cursor: "pointer" }} onClick={() => addAppointmentClose()} />
                        </Grid>
                    </Grid>
                    <DialogTitle style={{ fontSize: "20px", fontStyle: "normal", lineHeight: "32px", fontFamily: "Avenir-Black", color: "#000", borderBottom: "1px solid #E8E8E8" }}>Add Appointment</DialogTitle>
                    <DialogContent>
                        <Grid item xs={12} style={{ paddingTop: "20px" }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} >
                                    <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Book", color: "#6425FE", }}>Appointment Information</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                    <TextField size='small'
                                        fullWidth
                                        placeholder="Patient name"
                                        value={state.patient_name}
                                        sx={{ backgroundColor: '#F0E9FF', }}
                                        onChange={(e) => setState({ ...state, patient_name: e.target.value, patientNameError: false })}
                                        error={state.patientNameError} />
                                    {state.patientNameError === true &&
                                        <FormHelperText style={{ color: "red", marginLeft: "5px" }}>Please enter the patient name</FormHelperText>
                                    }
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <Select
                                        size="small"
                                        value={state.test_name}
                                        onChange={(event) => setState({ ...state, test_name: event.target.value })}
                                        displayEmpty
                                        fullWidth
                                        error={state.testNameError}
                                        style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", backgroundColor: "#F0E9FF", color: "#000" }}
                                        renderValue={
                                            state.test_name !== "" ? undefined : () => <Placeholder><Typography style={{ fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", color: "#998E8A" }}>Test name</Typography></Placeholder>
                                        }>
                                        {!!test_type && test_type.map((item, index) =>
                                            <MenuItem key={index.toString()} value={item.name}>{item.name}</MenuItem>
                                        )}
                                    </Select>
                                    {state.testNameError === true &&
                                        <FormHelperText style={{ color: "red", marginLeft: "5px" }}>Please select the test name</FormHelperText>}
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
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
                                                        placeholder: "Appointment date"
                                                    }}
                                                    InputLabelProps={{
                                                        sx: {
                                                            fontFamily: "Avenir",
                                                            backgroundColor: "#F0E9FF",
                                                            border: "2px solid #5824D6",
                                                        }
                                                    }}
                                                    error={state.dateError}
                                                />
                                            }
                                        />
                                        {state.dateError === true &&
                                            <FormHelperText style={{ color: "Red", marginLeft: "5px" }}>Please enter the date</FormHelperText>}
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