import React, { useState, useEffect } from 'react';
import { Grid, styled, FormControlLabel, RadioGroup, Radio, Typography } from '@mui/material';
import CustomizedButtons from '../../components/CustomButton';
import InputBase from "@mui/material/InputBase";
import { createLocationAction, updateLocationAction } from "../../store/actions/locationAction";
import { useDispatch, useSelector } from 'react-redux';
const CustomInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
        marginTop: theme.spacing(3)
    },
    "& .MuiInputBase-input": {
        position: "relative",
        backgroundColor: theme.palette.background.paper,
        fontSize: 16,
        padding: "10px",
        backgroundColor: "#F0E9FF",
        fontFamily: [
            'Avenir-Book'
        ].join(","),
        "&:focus": {
            border: "2px solid #6425FE",
            backgroundColor: "#F0E9FF",
            borderRadius: '4px'
        },
        "&:active": {
            border: "2px solid #6425FE",
            backgroundColor: "#F0E9FF",
            backgroundColor: "#F0E9FF"
        }
    }
}));

function AddLocations(props) {
    const [state, setState] = useState({
        id: null,
        locationCode: "",
        manager: '',
        status: 'Active',
        address: '',
        name: '',
        closeDialog: null
    })
    const dispatch = useDispatch();

    useEffect(() => {
        setState({ ...state, manager: props.data.manager, address: props.data.address, locationCode:props.data.location_code, name:props.data.name, id:props.data.id, status:props.data.status })
    }, [])

    const handleSubmit = () => {
        let data = {};
        data.id = state.id;
        data.location_code = state.locationCode;
        data.manager = state.manager;
        data.status = state.status;
        data.address = state.address;
        data.name = state.name;

        if (props.mode === "ADD") {
            dispatch(createLocationAction(data))
            // console.log("****submit******" + JSON.stringify(data))
        }
        else {
            dispatch(updateLocationAction(data))
            // console.log("****update******" + JSON.stringify(data))
        }
        setState({ ...state })
        props.close()
    };

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <CustomInput value={state.locationCode} placeholder="Location code"
                                size='small' fullWidth
                                onChange={(e) => setState({ ...state, locationCode: e.target.value })} />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomInput value={state.name} size='small'
                                fullWidth placeholder="Name"
                                onChange={(e) => setState({ ...state, name: e.target.value })} />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomInput value={state.manager} fullWidth
                                size='small' placeholder="Manager"
                                onChange={(e) => setState({ ...state, manager: e.target.value })} />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomInput value={state.address}
                                fullWidth size='small' placeholder="Address"
                                onChange={(e) => setState({ ...state, address: e.target.value })} />
                        </Grid>
                        <Grid item xs={6} style={{ display: "flex", alignItems: "center" }}>
                            <Typography style={{ fontWeight: "bold", paddingRight: "7px" }}>Status</Typography>
                            <RadioGroup defaultValue="Active" row onChange={(e) => setState({ ...state, status: e.target.value })}>
                                <FormControlLabel value="Active" control={<Radio sx={{ color: '#6425FE', '&.Mui-checked': { color: '#6425FE' } }} />} label="Active" />
                                <FormControlLabel value="Inactive" control={<Radio sx={{ color: '#6425FE', '&.Mui-checked': { color: '#6425FE' } }} />} label="Inactive" />
                            </RadioGroup>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justifyContent={'flex-end'}>
                <Grid item xs={6}>
                    <Grid container textAlign={'right'}>
                        <Grid item xs={9}>
                            <CustomizedButtons variant='text' onClick={props.close}>Cancel</CustomizedButtons>
                        </Grid>
                        <Grid item xs={3}>
                            <CustomizedButtons variant='contained' onClick={() => handleSubmit()}>Submit</CustomizedButtons>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>

    )
}

export default AddLocations;