import React, { useState } from "react";
import { Typography, Grid } from '@mui/material';
import CustomizedButtons from '../../components/CustomButton';
import CountryCode from "./CountryCode";
import CouponCode from "./CouponCode";


function Configure() {

    const [state, setState] = useState({
        configureDefaultMode: "CountryCode",
    })

    const buttonAction = (param) => {
        setState({ ...state, configureDefaultMode: param })
    };

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Typography className='header'>Country</Typography>
                </Grid>
                <Grid item xs={7} style={{ marginLeft: "12px" }}>
                    <Grid container>
                        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
                            <CustomizedButtons variant={"text"} className='switchHeading' style={{ color: state.configureDefaultMode === "CountryCode" ? "#4D1EC0" : "#474747", borderBottom: state.configureDefaultMode === "CountryCode" ? "5px solid #4D1EC0" : "none", borderRadius: "0px" }} onClick={() => buttonAction("CountryCode")}>Country Code</CustomizedButtons>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
                            <CustomizedButtons variant={"text"} className='switchHeading' style={{ color: state.configureDefaultMode === "CouponCode" ? "#4D1EC0" : "#474747", borderBottom: state.configureDefaultMode === "CouponCode" ? "5px solid #4D1EC0" : "none", borderRadius: "0px" }} onClick={() => buttonAction("CouponCode")}>Coupon Code</CustomizedButtons>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                {state.configureDefaultMode === "CountryCode" &&
                    <CountryCode />
                }
            </Grid>
            <Grid item xs={12}>
                {state.configureDefaultMode === "CouponCode" &&
                    <CouponCode />
                }
            </Grid>
        </>
    )
}

export default Configure;