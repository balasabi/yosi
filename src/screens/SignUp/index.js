import React, { useState, useRef } from 'react';
import { Typography, Grid, TextField } from '@mui/material';
import Image from 'next/image';
import Logo from '../../../public/Images/svg/LogoLogin.svg';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import CustomizedButtons from '@/src/components/CustomButton';

function SignUp(props) {
    const [state, setState] = useState({
        email: "",
        emailError: false,
        invalidEmailError: false,
    })

    const ref = useRef();
    const router = useRouter();
    const isLogin = useSelector(state => state.sessionReducer.isLogin);

    const Login = () => {
        router.push({ pathname: '/' })
    };

    const handleContinue = () => {
        let isError = false;
        const { email } = state
        const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        let result = emailRegex.test(email);

        if (!result) {
            setState({ ...ref, invalidEmailError: true })
            isError = true
        }
        if ( email === "" || email === undefined || email === null) {
            setState({ ...ref, emailError: true })
            isError = true
        }
    }

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
                                onChange={(e) => setState({ ...state, email: e.target.value, emailError: false, invalidEmailError: false })}
                                error={state.emailError ? true : state.invalidEmailError}
                                helperText={state.emailError === true ? "Please enter email" : state.invalidEmailError ? "Please enter valid email" : false}
                                value={state.email} />
                        </Grid>
                        <Grid item xs={8}>
                            <CustomizedButtons variant='contained' fullWidth onClick={() => handleContinue()}>Continue</CustomizedButtons>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} justifyContent='center' alignItems='center'>
                        <Grid item xs={8} >
                            <Typography align="left" style={{ lineHeight: "24px", fontSize: "14px", marginTop: "7px" }}>Already have an account? <span><CustomizedButtons variant="text" onClick={() => Login()}>Login</CustomizedButtons></span></Typography>
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