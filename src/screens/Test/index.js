import React, { useState } from 'react';
import { Typography, Grid } from '@mui/material';
import CustomizedButtons from '../../components/CustomButton';
import Results from "./Results";
import Uploads from "./Uploads";
import Type from "./Types";
import Category from './Category';
import Classification from './Classification';

function Test(props) {
    const [state, setState] = useState({
        testMode: 'R',
    })

    const buttonAction = (param) => {
        setState({ testMode: param })
    }

    return (
        <>
            <Grid container>
                <Grid item xs={12} >
                    <Typography style={{ fontSize: "24px", fontFamily: 'Avenir-Black', fontStyle: "normal", fontWeight: 800, lineHeight: "40px", marginBottom:"10px" }}>
                        Tests
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={10} lg={7} xl={4} style={{ marginLeft: "12px", borderColor:"1px solid red" }}>
                    <Grid container>
                        <Grid item xs={2} >
                            <CustomizedButtons variant={"text"} style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: state.testMode === "R" ? "#024751" : "#474747", borderBottom: state.testMode === "R" ? "3px solid #024751" : "none", borderRadius: "0px" }} onClick={() => buttonAction("R")}>Results</CustomizedButtons>
                        </Grid>
                        <Grid item xs={2} >
                            <CustomizedButtons variant={"text"} style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: state.testMode === "U" ? "#024751" : "#474747", borderBottom: state.testMode === "U" ? "3px solid #024751" : "none", borderRadius: "0px" }} onClick={() => buttonAction("U")}>Uploads</CustomizedButtons>
                        </Grid>
                        <Grid item xs={2} >
                            <CustomizedButtons variant={"text"} style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: state.testMode === "T" ? "#024751" : "#474747", borderBottom: state.testMode === "T" ? "3px solid #024751" : "none", borderRadius: "0px" }} onClick={() => buttonAction("T")}>Types</CustomizedButtons>
                        </Grid>
                        <Grid item xs={2} >
                            <CustomizedButtons variant={"text"} style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: state.testMode === "G" ? "#024751" : "#474747", borderBottom: state.testMode === "G" ? "3px solid #024751" : "none", borderRadius: "0px", marginLeft: -10 }} onClick={() => buttonAction("G")}>Groups</CustomizedButtons>
                        </Grid>
                        <Grid item xs={2} >
                            <CustomizedButtons variant={"text"} style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: state.testMode === "C" ? "#024751" : "#474747", borderBottom: state.testMode === "C" ? "3px solid #024751" : "none", borderRadius: "0px", marginLeft: -10 }} onClick={() => buttonAction("C")}>Category</CustomizedButtons>
                        </Grid>
                        <Grid item xs={2} >
                            <CustomizedButtons variant={"text"} style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: state.testMode === "CL" ? "#024751" : "#474747", borderBottom: state.testMode === "CL" ? "3px solid #024751" : "none", borderRadius: "0px", marginLeft: "5px" }} onClick={() => buttonAction("CL")}>Classification</CustomizedButtons>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ borderBottom: "2px solid #C8C8C8" }} />
                <Grid item xs={12}>
                    {state.testMode === "R" &&
                        <Results />
                    }
                </Grid>
                <Grid item xs={12}>
                    {state.testMode === "U" &&
                        <Uploads />
                    }
                </Grid>
                <Grid item xs={12}>
                    {state.testMode === "T" &&
                        <Type />
                    }
                </Grid>
                <Grid item xs={12}>
                    {state.testMode === "C" &&
                        <Category />
                    }
                </Grid>
                <Grid item xs={12}>
                    {state.testMode === "CL" &&
                        <Classification />
                    }
                </Grid>
            </Grid>
        </>
    )
}
export default Test;