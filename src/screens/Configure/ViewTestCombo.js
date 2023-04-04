import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

function ViewTestCombo(props) {
    const testCombo = useSelector(state => state.testComboReducer.testCombo);
    const testComboData = testCombo.find((item) => item.id == props.testComboId)


    return (
        <>
            <Grid container rowSpacing={3} justifyContent='center' alignItems='center' style={{ marginTop: "20px", boxShadow: '0px 1px 1px -4px rgb(0 0 0 / 5%), 0px 1px 3px 4px rgb(0 0 0 / 5%)', borderRadius: "5px" }}>
                <Grid item xs={12} style={{ background: "rgba(100, 37, 254, 0.1)", padding: "15px", borderRadius: '5px' }}>
                    <Typography style={{ color: "#38148E", letterSpacing: "0.4px", fontSize: "20px", lineHeight: "20px", fontFamily: "Avenir-Bold" }}>
                        Test Combo information
                    </Typography>
                </Grid>
                <Grid item xs={12} style={{ padding: '15px', marginTop: "10px" }}>
                    <Grid container spacing={2} >
                        <Grid item xs={6} style={{ display: "flex", flexDirection: "row", }}>
                            <Grid container style={{ display: "flex", flexDirection: "row" }}>
                                <Grid item xs={4}>
                                    <Typography style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Bold", }}>
                                    Test Combo Name :
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Book", }}>
                                        {!!testComboData && testComboData.testComboName}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} style={{ display: "flex", flexDirection: "row", }}>
                            <Grid container style={{ display: "flex", flexDirection: "row" }}>
                                <Grid item xs={4}>
                                    <Typography style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Bold", }}>
                                    Test Combo Price :
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Book", }}>
                                    {!!testComboData && testComboData.price}
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
                                    {!!testComboData && testComboData.status}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} style={{ display: "flex", flexDirection: "row" }}>
                            <Grid container style={{ display: "flex", flexDirection: "row" }}>
                                <Grid item xs={4}>
                                    <Typography style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Bold", }}>
                                    Tests Included :
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    {testComboData && testComboData.testComboTestTypes.map((item, index) =>
                                     <Typography key={index} style={{ letterSpacing: "0.4px", fontSize: "16px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Book",marginTop:index >0?10:0 }}>
                                    {item}
                                    </Typography>
                                )}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

ViewTestCombo.getInitialProps = async (context) => {
    const { testComboId } = context.query;
    return { testComboId: testComboId };
};
export default ViewTestCombo;