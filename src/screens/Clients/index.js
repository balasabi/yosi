import React, { useState } from 'react';
import { Typography, Grid } from '@mui/material';
import CustomizedButtons from '../../components/CustomButton';
import ClientDb from './ClientDb';
import ClientTestResults from './ClientTestResults';
import ClientTestCategory from './ClientTestCategory';
import Partners from './Partners';

function Clients(props) {

    const [state, setState] = useState({
        clienteDefaultMode: "CDB"
    })

    const buttonAction = (param) => {
        setState({ clienteDefaultMode: param })
    }

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Typography style={{ fontSize: "24px", fontFamily: 'Avenir-Black', fontStyle: "normal", fontWeight: 800, lineHeight: "40px" }}>
                        Clients
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={7} style={{ marginLeft: "12px" }}>
                    <Grid container>
                        <Grid item xs={3}>
                            <CustomizedButtons variant={"text"} style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: state.clienteDefaultMode === "CDB" ? "#024751" : "#474747", borderBottom: state.clienteDefaultMode === "CDB" ? "3px solid #024751" : "none", borderRadius: "0px" }} onClick={() => buttonAction("CDB")} >Client DB</CustomizedButtons>
                        </Grid>
                        <Grid item xs={4} >
                            <CustomizedButtons variant={"text"} style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: state.clienteDefaultMode === "U" ? "#024751" : "#474747", borderBottom: state.clienteDefaultMode === "CTR" ? "3px solid #024751" : "none", borderRadius: "0px" }} onClick={() => buttonAction("CTR")}>Client test results</CustomizedButtons>
                        </Grid>
                        <Grid item xs={4} >
                            <CustomizedButtons variant={"text"} style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: state.clienteDefaultMode === "T" ? "#024751" : "#474747", borderBottom: state.clienteDefaultMode === "CTC" ? "3px solid #024751" : "none", borderRadius: "0px" }} onClick={() => buttonAction("CTC")}>Client test category</CustomizedButtons>
                        </Grid>
                        <Grid item xs={1} >
                            <CustomizedButtons variant={"text"} style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: state.clienteDefaultMode === "CL" ? "#024751" : "#474747", borderBottom: state.clienteDefaultMode === "PA" ? "3px solid #024751" : "none", borderRadius: "0px", marginLeft: "5px" }} onClick={() => buttonAction("PA")} >Partners</CustomizedButtons>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} style={{ borderBottom: "2px solid #C8C8C8" }} />
            <Grid item xs={12}>
                {state.clienteDefaultMode === "CDB" &&
                    <ClientDb />
                }
            </Grid>
            <Grid item xs={12}>
                {state.clienteDefaultMode === "CTR" &&
                    <ClientTestResults />
                }
            </Grid>
            <Grid item xs={12}>
                {state.clienteDefaultMode === "CTC" &&
                    <ClientTestCategory />
                }
            </Grid>
            <Grid item xs={12}>
                {state.clienteDefaultMode === "PA" &&
                    <Partners />
                }
            </Grid>

        </>
    )
}
export default Clients;