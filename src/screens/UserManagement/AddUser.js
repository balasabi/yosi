import React, { useState, useRef } from "react";
import { Grid, Typography, Select, FormControl, RadioGroup, FormControlLabel, Radio, MenuItem } from '@mui/material';
import InputBase from "@mui/material/InputBase";
import { styled } from '@mui/material';
import CustomizedButtons from '../../components/CustomButton';
import { useDispatch } from 'react-redux';

const CustomInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
        marginTop: theme.spacing(3)
    },
    "& .MuiInputBase-input": {
        position: "relative",
        backgroundColor: "#FBF7F4",
        fontSize: 16,
        padding: "10px",
        borderRadius: "8px",
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
        invalidEmailError: false
    })
    const dispatch = useDispatch();
    const ref = useRef();
    const roles = ["Admin", "system Manager", "Text", "Location manager"]

    const handleRoles = (e) => {
        setState({ ...state, role: e.target.value })
    };

    const handleSubmit = () => {
        const { email, phoneNumber, firstName, status, role, lastName } = state;
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
        if (email === "" || email === undefined || email === null) {
            setState(ref => ({ ...ref, emailError: true }))
            isError = true;
        }
        if (isError === false && props.mode==="ADD" ) {
            let data = {};
            data.email = email;
            data.first_name = firstName;
            data.last_name = lastName;
            data.phone_number = phoneNumber;
            data.status = status;
            data.role = role;
            dispatch(data)
        }
    };

    return (
        <>
            <Grid container justifyContent="center">
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography style={{ color: '#024751' }}>Test information</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl sx={{ width: 260 }}>
                                <Select size='small'
                                    value={state.role}
                                    input={<CustomInput />}
                                    onChange={handleRoles}>
                                    {roles.map((item, index) =>
                                        <MenuItem key={index} value={item}>{item}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <CustomInput size='small'
                                fullWidth
                                placeholder="Email ID"
                                value={state.email}
                                onChange={(e) => setState({ email: e.target.value, emailError: false })}
                                error={state.emailError === true ? state.invalidEmailError : false}
                                helperText={state.emailError === true ? "Please enter email" : state.invalidEmailError ? "please enter valid email" : ""} />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomInput size='small'
                                fullWidth
                                placeholder="First Name"
                                value={state.firstName}
                                onChange={(e) => setState({ firstName: e.target.value, firstNameError: false })}
                                error={state.firstNameError}
                                helperText={state.firstNameError === true ? "Please enter first name" : ""} />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomInput size='small'
                                fullWidth
                                placeholder="Last Name"
                                value={state.lastName}
                                onChange={(e) => setState({ lastName: e.target.value })} />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomInput size='small'
                                fullWidth
                                placeholder="Phone Number"
                                value={state.phoneNumber}
                                onChange={(e) => setState({ phoneNumber: e.target.value, phoneNumberError: false })}
                                error={state.phoneNumberError}
                                helperText={state.phoneNumberError === true ? "Please enter phone number" : ""} />
                        </Grid>
                        <Grid item xs={6} style={{ display: "flex", alignItems: "center" }}>
                            <Typography style={{ fontWeight: "bold", paddingRight: "7px" }}>Status</Typography>
                            <RadioGroup defaultValue="Active" row>
                                <FormControlLabel value="Active" control={<Radio sx={{ color: '#024751', '&.Mui-checked': { color: '#024751' } }} />} label="Active" />
                                <FormControlLabel value="Inactive" control={<Radio sx={{ color: '#024751', '&.Mui-checked': { color: '#024751' } }} />} label="Inactive" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justifyContent={"flex-end"} >
                                <Grid item xs={6}>
                                    <Grid container textAlign={"right"}>
                                        <Grid item xs={6} >
                                            <CustomizedButtons variant="contained" onClick={props.close}>
                                                Cancel
                                            </CustomizedButtons>
                                        </Grid>
                                        <Grid item xs={6} textAlign='center'>
                                            <CustomizedButtons variant="contained" onClick={() => handleSubmit()}>
                                               {props.mode==="ADD" ? "Submit" : "Update"}
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