import React, { useState } from 'react';
import { Grid, styled, FormControlLabel, RadioGroup, Radio, Typography } from '@mui/material';
import CustomizedButtons from '../../components/CustomButton';
import InputBase from "@mui/material/InputBase";

const CustomInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
        marginTop: theme.spacing(3)
    },
    "& .MuiInputBase-input": {
        position: "relative",
        backgroundColor: theme.palette.background.paper,
        fontSize: 16,
        padding: "4px",
        backgroundColor: "#FBF7F4",
        fontFamily: [
            'Avenir-Book'
        ].join(","),
        "&:focus": {
            border: "2px solid #024751",
            backgroundColor: "#FBF7F4",
            borderRadius: '4px'
        },
        "&:active": {
            border: "2px solid #024751",
            backgroundColor: "#FBF7F4",
            backgroundColor: "#FBF7F4"
        }
    }
}));

function AddLocations(props) {
    const [state, setState] = useState({
        locationCode: "",
        manager: '',
        status: '',
        address: '',
        name: '',
    })

    const handleSubmit = () => {
        let data = {};
        data.location_code = state.locationCode,
            data.manager = state.manager,
            data.status = state.status,
            data.address = state.address,
            data.name = state.name

        // console.log("data"+JSON.stringify(data))
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
                            <RadioGroup defaultValue="Active" row>
                                <FormControlLabel value="Active" control={<Radio sx={{ color: '#024751', '&.Mui-checked': { color: '#024751' } }} />} label="Active" />
                                <FormControlLabel value="Inactive" control={<Radio sx={{ color: '#024751', '&.Mui-checked': { color: '#024751' } }} />} label="Inactive" />
                            </RadioGroup>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justifyContent={'flex-end'}>
                <Grid item xs={6}>
                    <Grid container textAlign={'right'}>
                        <Grid item xs={6}>
                            <CustomizedButtons variant='text' onClick={props.close}>Cancel</CustomizedButtons>
                        </Grid>
                        <Grid item xs={6}>
                            <CustomizedButtons variant='contained' onClick={() => handleSubmit()}>Submit</CustomizedButtons>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>

    )
}

export default AddLocations;