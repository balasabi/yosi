import React, { useState } from 'react';
import { Typography, Grid } from '@mui/material';
import CustomizedButtons from '../../components/CustomButton';
import TestKitSources from "./TestKitSources";
import TestKitTracking from "./TestKitTracking";

function TestKit(props) {
    const [state, setState] = useState({
        testKitMode: 'TKS',
    })

    const buttonAction = (param) => {
        setState({...state, testKitMode: param })
    }

    return (
        <>
            <Grid container>
                <Grid item xs={12} >
                    <Typography style={{ fontSize: "24px", fontFamily: 'Avenir-Black', fontStyle: "normal", fontWeight: 800, lineHeight: "40px", marginBottom: "10px" }}>
                        Test Kit
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={10} lg={7} xl={4} style={{ marginLeft: "12px" }}>
                    <Grid container>
                        <Grid item xs={3} sm={4} md={3} lg={3} xl={4}>
                            <CustomizedButtons variant={"text"} style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: state.testKitMode === "TKS" ? "#024751" : "#474747", borderBottom: state.testKitMode === "TKS" ? "4px solid #024751" : "none", borderRadius: "0px" }} onClick={() => buttonAction("TKS")}>Test kit sources</CustomizedButtons>
                        </Grid>
                        <Grid item xs={3} sm={4} md={3} lg={3} xl={4}>
                            <CustomizedButtons variant={"text"} style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: state.testKitMode === "TKT" ? "#024751" : "#474747", borderBottom: state.testKitMode === "TKT" ? "4px solid #024751" : "none", borderRadius: "0px" }} onClick={() => buttonAction("TKT")}>Test kit tracking</CustomizedButtons>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ borderBottom: "2px solid #C8C8C8" }} />
                <Grid item xs={12}>
                    {state.testKitMode === "TKS" &&
                        <TestKitSources />
                    }
                </Grid>
                <Grid item xs={12}>
                    {state.testKitMode === "TKT" &&
                        <TestKitTracking />
                    }
                </Grid>
            </Grid>
        </>
    )
}
export default TestKit;