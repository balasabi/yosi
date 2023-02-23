import React, { useState, useEffect, useRef } from "react";
import { Grid, Typography, Select, FormControl, RadioGroup, FormControlLabel, Radio, MenuItem } from '@mui/material';
import InputBase from "@mui/material/InputBase";
import { styled } from '@mui/material';
import CustomizedButtons from '../../components/CustomButton';
import { useDispatch } from 'react-redux';
import { createUserAction, updateUserAction } from '../../store/actions/userManagementAction';

const CustomInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
        marginTop: theme.spacing(3)
    },
    "& .MuiInputBase-input": {
        position: "relative",
        backgroundColor: "#F0E9FF",
        fontSize: 16,
        padding: "10px",
        borderRadius: "5px",
        fontFamily: [
            'Avenir-Book'
        ].join(","),
        "&:focus": {
            border: 0,
            backgroundColor: "#F0E9FF",
            border: "2px solid #4D1EC0",
        },
        "&:active": {
            border: "2px solid #4D1EC0",
            backgroundColor: "#F0E9FF"
        }
    }
}));

function AddUser(props) {
    const [state, setState] = useState({
        role: "",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        status: "",
        firstNameError: false,
        emailError: false,
        phoneNumberError: false,
        invalidEmailError: false,
        id:null
    })
    const dispatch = useDispatch();
    const ref = useRef();
    const roles = ["Admin", "Consumer", "Lab Techician", "Location Manager", "System Admin", "Lab Executive", "PSR Tech", "Logistics", "Client Manager", "Client Physician", "DB"]

    // useEffect(() => {
    //     setState({ ...state, id:props.param.id, role: props.param.role, email: props.param.email, firstName: props.param.first_name, lastName: props.param.last_name, phoneNumber: props.param.phone_number })
    // }, [])

    const handleSubmit = () => {
        const { email, id, phoneNumber, firstName, status, role, lastName } = state;
        let isError = false;
        if (email === "" || email === undefined || email === null) {
            setState(ref => ({ ...ref, emailError: true }))
            isError = true;
        }
        if (firstName === "" || firstName === undefined || firstName === null) {
            setState(ref => ({ ...ref, firstNameError: true }))
            isError = true;
        }
        if (phoneNumber === "" || phoneNumber === undefined || phoneNumber === null) {
            setState(ref => ({ ...ref, phoneNumberError: true }))
            isError = true;
        }
        if (isError === false && props.mode === "ADD") {
            let data = {};
            data.email = email;
            data.first_name = firstName;
            data.last_name = lastName;
            data.phone_number = phoneNumber;
            data.status = status;
            data.role = role;
            dispatch(createUserAction(data, props.close))
        }
        if (isError === false && props.mode !== "ADD") {
            let data = {};
            data.email = email;
            data.id = id;
            data.first_name = firstName;
            data.last_name = lastName;
            data.phone_number = phoneNumber;
            data.status = status;
            data.role = role;
            dispatch(updateUserAction(data, props.close))
        }
    };
    
    const Placeholder = ({ children }) => {
        return <div style={{ color: "#101010", fontWeight: 900, fontSize: "14px", fontFamily: "Avenir-Book", fontStyle: "normal" }}>{children}</div>;
    };

    return (
        <>
            <Grid container justifyContent="center">
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography style={{ color: '#6425FE' }}>User information</Typography>
                        </Grid>
                        <Grid item xs={6}>
                           <Select size='small'
                                fullWidth
                                    value={!!state.role && state.role}
                                    input={<CustomInput />}
                                    onChange={(e) => setState({ ...state, role: e.target.value })}
                                    displayEmpty
                                    renderValue={
                                        state.role !== "" ? undefined : () => <Placeholder><Typography style={{ fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", color: "#998E8A" }}>Role</Typography></Placeholder>
                                    }  >
                                    {!!roles && roles.map((item, index) =>
                                        <MenuItem key={index.toString()} value={item}>{item}</MenuItem>
                                    )}
                                </Select>
                        </Grid>
                        <Grid item xs={6}>
                            <CustomInput size='small'
                                fullWidth
                                placeholder="Email ID"
                                value={state.email}
                                onChange={(e) => setState({ ...state, email: e.target.value, emailError: false })}
                                error={state.emailError === true ? state.invalidEmailError : false}
                                helperText={state.emailError === true ? "Please enter email" : state.invalidEmailError ? "please enter valid email" : ""}
                                 />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomInput size='small'
                                fullWidth
                                placeholder="First Name"
                                value={state.firstName}
                                onChange={(e) => setState({ ...state, firstName: e.target.value, firstNameError: false })}
                                error={state.firstNameError}
                                helperText={state.firstNameError === true ? "Please enter first name" : ""} 
                                />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomInput size='small'
                                fullWidth
                                placeholder="Last Name"
                                value={state.lastName}
                                onChange={(e) => setState({ ...state, lastName: e.target.value })} />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomInput size='small'
                                fullWidth
                                placeholder="Phone Number"
                                value={state.phoneNumber}
                                onChange={(e) => setState({ ...state, phoneNumber: e.target.value, phoneNumberError: false })}
                                error={state.phoneNumberError}
                                helperText={state.phoneNumberError === true ? "Please enter phone number" : ""} 
                                />
                        </Grid>
                        <Grid item xs={6} style={{ display: "flex", alignItems: "center" }}>
                            <Typography style={{ fontWeight: "bold", paddingRight: "7px" }}>Status</Typography>
                            <RadioGroup defaultValue="Active" row>
                                <FormControlLabel value="Active" control={<Radio sx={{ color: '#4D1EC0', '&.Mui-checked': { color: '#4D1EC0' } }} />} label="Active" />
                                <FormControlLabel value="Inactive" control={<Radio sx={{ color: '#4D1EC0', '&.Mui-checked': { color: '#4D1EC0' } }} />} label="Inactive" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justifyContent={"flex-end"} >
                                <Grid item xs={6}>
                                    <Grid container textAlign='right'>
                                        <Grid item xs={9}>
                                            <CustomizedButtons variant="text" onClick={props.close}>
                                                Cancel
                                            </CustomizedButtons>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <CustomizedButtons variant="contained" onClick={() => handleSubmit(props.mode === "ADD" ? "S" : "U")}>
                                                {props.mode === "ADD" ? "Submit" : "Update"}
                                            </CustomizedButtons>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default AddUser;