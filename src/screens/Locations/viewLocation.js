
import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

function ViewLocation(props) {
    const [state, setState] = useState({

    })

    const locations = useSelector(state => state.locationReducer.location);
    const location = locations.find((item) => item.id == props.locationId && item)

    return (
        <>
            <Grid container rowSpacing={3} justifyContent='center' alignItems='center' style={{ marginTop: "20px", boxShadow: '0px 1px 1px -4px rgb(0 0 0 / 5%), 0px 1px 3px 4px rgb(0 0 0 / 5%)', borderRadius: "5px" }}>
                <Grid item xs={12} style={{ background: "rgba(100, 37, 254, 0.1)", padding: "15px", borderRadius: '5px' }}>
                    <Typography style={{ color: "#38148E", letterSpacing: "0.4px", fontSize: "20px", lineHeight: "20px", fontFamily: "Avenir-Bold" }}>
                        Location information
                    </Typography>
                </Grid>
                <Grid item xs={12} style={{ padding: '15px', marginTop: "10px" }}>
                    <Grid container spacing={2} >
                        <Grid item xs={6} style={{ display: "flex", flexDirection: "row", }}>
                            <Grid container style={{ display: "flex", flexDirection: "row" }}>
                                <Grid item xs={4}>
                                    <Typography style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Bold", }}>
                                        Location Code:
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Book", }}>
                                        {!!location && location.location_code}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} style={{ display: "flex", flexDirection: "row", }}>
                            <Grid container style={{ display: "flex", flexDirection: "row" }}>
                                <Grid item xs={4}>
                                    <Typography style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Bold", }}>
                                        Location :
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Book", }}>
                                        {!!location && location.location}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} style={{ display: "flex", flexDirection: "row", }}>
                            <Grid container style={{ display: "flex", flexDirection: "row" }}>
                                <Grid item xs={4}>
                                    <Typography style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Bold", }}>
                                        Lab Code:
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Book", }}>
                                        {!!location && location.lab_code}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} style={{ display: "flex", flexDirection: "row" }}>
                            <Grid container style={{ display: "flex", flexDirection: "row" }}>
                                <Grid item xs={4}>
                                    <Typography style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Bold", }}>
                                        Lab Name :
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Book", }}>
                                        {!!location && location.lab_name}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} style={{ display: "flex", flexDirection: "row" }}>
                            <Grid container style={{ display: "flex", flexDirection: "row" }}>
                                <Grid item xs={4}>
                                    <Typography style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Bold", }}>
                                        Manager:
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Book", }}>
                                        {!!location && location.manager}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} style={{ display: "flex", flexDirection: "row" }}>
                            <Grid container style={{ display: "flex", flexDirection: "row" }}>
                                <Grid item xs={4}>
                                    <Typography style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Bold", }}>
                                        Address:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Book", }}>
                                        {!!location && location.address}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} style={{ display: "flex", flexDirection: "row" }}>
                            <Grid container style={{ display: "flex", flexDirection: "row" }}>
                                <Grid item xs={4}>
                                    <Typography style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Bold", }}>
                                        Status:
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Book", }}>
                                        {!!location && location.status}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

ViewLocation.getInitialProps = async (context) => {
    const { locationId } = context.query;
    return { locationId: locationId };
};
export default ViewLocation;