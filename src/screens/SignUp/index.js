import React, { useState } from 'react';
import { Typography, Grid, TextField, Button } from '@mui/material';
import Image from 'next/image';
import Logo from '../../../public/Images/logo.png';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

function SignUp(props) {
    const [state, setState] = useState({
        email: "",
        emailError: false,
    })

    const router = useRouter();
    const isLogin = useSelector(state => state.sessionReducer.isLogin);

    const Login = () => {
        router.push({ pathname: '/' })
    };

    return (
        <>
            <Grid container justifyContent='center' alignItems='center'>
                <Grid item xs={12} sm={6} md={5} lg={4}>
                    <Grid container spacing={4} justifyContent='center' alignItems='center'>
                        <Grid item xs={12} textAlign='center'>
                            <Image src={Logo} alt='logo' width={240} height={80} />
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="h2" style={{ fontWeight: 600, fontSize: "22px", lineHeight: "40px" }}>Create your account</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <TextField variant='standard'
                                fullWidth
                                size="small"
                                label='Email address'
                                onChange={(e) => setState({ ...state, email: e.target.value, emailError: false })}
                                error={state.emailError}
                                helperText={state.emailError === true ? "Please enter email" : ""}
                                value={state.email}  />
                        </Grid>
                        <Grid item xs={8}>
                            <Button variant='contained' fullWidth style={{ backgroundColor: "#024751", textTransform: 'none', padding: "10px" }}>Continue</Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} justifyContent='center' alignItems='center'>
                        <Grid item xs={8} >
                            <Typography align="left" style={{ lineHeight: "24px", fontSize: "14px", marginTop: "7px" }}>Already have an account? <span><Button variant="text" style={{ color: "#024751", textTransform: "none" }} onClick={() => Login()}>Login</Button></span></Typography>
                        </Grid>
                        <Grid item xs={8} style={{ display: "flex", alignItems: "center" }}>
                            <div style={{ background: "#998E8A", height: 1, width: "15vw", marginRight: "10px" }} />
                            <Typography>or</Typography>
                            <div style={{ background: "#998E8A", height: 1, width: "15vw", marginLeft: "10px" }} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
export default SignUp;