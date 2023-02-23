import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

function ViewTestType(props) {
    const [state, setState] = useState({

    })

    const test_types = useSelector(state => state.testTypeReducer.test_type);
    const test_type = test_types.find((item) => item.id == props.testTypeId && item)

    return (
        <>
            <Grid container rowSpacing={3} justifyContent='center' alignItems='center' style={{ marginTop: "20px", boxShadow: '0px 1px 1px -4px rgb(0 0 0 / 5%), 0px 1px 3px 4px rgb(0 0 0 / 5%)', borderRadius: "5px" }}>
                <Grid item xs={12} style={{ background: "rgba(100, 37, 254, 0.1)", padding: "15px", borderRadius: '5px' }}>
                    <Typography style={{ color: "#38148E", letterSpacing: "0.4px", fontSize: "20px", lineHeight: "20px", fontFamily: "Avenir-Bold" }}>
                        Test type information
                    </Typography>
                </Grid>
                <Grid item xs={12} style={{ padding: '15px', marginTop: "10px" }}>
                    <Grid container spacing={2} >
                        <Grid item xs={6} style={{ display: "flex", flexDirection: "row", }}>
                            <Grid container style={{ display: "flex", flexDirection: "row" }}>
                                <Grid item xs={4}>
                                    <Typography style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Bold", }}>
                                        Code:
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Book", }}>
                                        {!!test_type && test_type.code}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} style={{ display: "flex", flexDirection: "row" }}>
                            <Grid container style={{ display: "flex", flexDirection: "row" }}>
                                <Grid item xs={4}>
                                    <Typography style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Bold", }}>
                                        Name :
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Book", }}>
                                        {!!test_type && test_type.name}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} style={{ display: "flex", flexDirection: "row" }}>
                            <Grid container style={{ display: "flex", flexDirection: "row" }}>
                                <Grid item xs={4}>
                                    <Typography style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Bold", }}>
                                        Display Name:
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Book", }}>
                                        {!!test_type && test_type.display_name}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} style={{ display: "flex", flexDirection: "row" }}>
                            <Grid container style={{ display: "flex", flexDirection: "row" }}>
                                <Grid item xs={4}>
                                    <Typography style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Bold", }}>
                                        Description:
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Book", }}>
                                        {!!test_type && test_type.description}
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
                                        {!!test_type && test_type.status}
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

ViewTestType.getInitialProps = async (context) => {
    const { testTypeId } = context.query;
    return { testTypeId: testTypeId };
};
export default ViewTestType;