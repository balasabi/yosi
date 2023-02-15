import React, { useState } from 'react';
import { Typography, Grid } from '@mui/material';
import CustomizedButtons from '../../components/CustomButton';
import Results from "./Results";
import Uploads from "./Uploads";

function Test(props) {
    const [state, setState] = useState({
        testMode: 'R',
    })

    const buttonAction = (param) => {
        setState({ testMode: param })
    };

    return (
        <>
            <Grid container>
                <Grid item xs={12} >
                    <Typography className='header' style={{ marginBottom: "10px" }}>
                        Tests
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={10} lg={7} style={{ marginLeft: "12px" }}>
                    <Grid container>
                        <Grid item xs={2} >
                            <CustomizedButtons variant={"text"} className='subText' style={{ textTransform: "none", color: state.testMode === "R" ? "#024751" : "#474747", borderBottom: state.testMode === "R" ? "4px solid #024751" : "none", borderRadius: "0px" }} onClick={() => buttonAction("R")}>Results</CustomizedButtons>
                        </Grid>
                        <Grid item xs={2} >
                            <CustomizedButtons variant={"text"} className='subText' style={{ textTransform: "none", color: state.testMode === "U" ? "#024751" : "#474747", borderBottom: state.testMode === "U" ? "4px solid #024751" : "none", borderRadius: "0px" }} onClick={() => buttonAction("U")}>Uploads</CustomizedButtons>
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
            </Grid>
        </>
    )
}
export default Test;