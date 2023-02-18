import React, { useState } from 'react';
import { Typography, Grid } from '@mui/material';
import CustomizedButtons from '../../components/CustomButton';
import Type from "./Types";
import Category from './Category';
import Classification from './Classification';

function Test(props) {
    const [state, setState] = useState({
        testMode: 'T',
    })

    const buttonAction = (param) => {
        setState({ testMode: param })
    }

    return (
        <>
            <Grid container>
                <Grid item xs={12} >
                    <Typography className='header' style={{ marginBottom: "10px" }}>
                        Test
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={10} lg={7} style={{ marginLeft: "12px" }}>
                    <Grid container>
                        <Grid item xs={2} >
                            <CustomizedButtons variant={"text"} className='subText' style={{ fontWeight: '700', color: state.testMode === "T" ? "#024751" : "#474747", borderBottom: state.testMode === "T" ? "4px solid #024751" : "none", borderRadius: "0px" }} onClick={() => buttonAction("T")}>Types</CustomizedButtons>
                        </Grid>
                        <Grid item xs={2} >
                            <CustomizedButtons variant={"text"} className='subText' style={{ fontWeight: '700', color: state.testMode === "G" ? "#024751" : "#474747", borderBottom: state.testMode === "G" ? "4px solid #024751" : "none", borderRadius: "0px", marginLeft: -10 }} onClick={() => buttonAction("G")}>Groups</CustomizedButtons>
                        </Grid>
                        <Grid item xs={2} >
                            <CustomizedButtons variant={"text"} className='subText' style={{ fontWeight: '700', color: state.testMode === "C" ? "#024751" : "#474747", borderBottom: state.testMode === "C" ? "4px solid #024751" : "none", borderRadius: "0px", marginLeft: -10 }} onClick={() => buttonAction("C")}>Category</CustomizedButtons>
                        </Grid>
                        <Grid item xs={2} >
                            <CustomizedButtons variant={"text"} className='subText' style={{ fontWeight: '700', color: state.testMode === "CL" ? "#024751" : "#474747", borderBottom: state.testMode === "CL" ? "4px solid #024751" : "none", borderRadius: "0px", marginLeft: "5px" }} onClick={() => buttonAction("CL")}>Classification</CustomizedButtons>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ borderBottom: "2px solid #C8C8C8" }} />
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