import React, { useState, useRef } from 'react';
import { Typography, Grid, TextField, InputAdornment, IconButton } from '@mui/material';
import Image from 'next/image';
import Logo from '../../../public/Images/svg/LogoLogin.svg';
import { useRouter } from 'next/router';
import CustomizedButtons from '../../components/CustomButton';
import { login } from "../../store/actions/sessionAction";
import { useDispatch } from 'react-redux';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function Login(props) {
    const [state, setState] = useState({
        email: "",
        userName: "",
        emailError: false,
        invalidEmailError:false,
        password: "",
        passwordError: false,
        showPassword: false
    })

    const ref = useRef();
    const router = useRouter();
    const dispatch = useDispatch();

    const SignUp = () => {
        router.push({ pathname: '/sign-up' })
    };

    function loginAction(e) {
        e.preventDefault()
        let isError = false;
        // const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        // let result = emailRegex.test(state.email);
       
        // if (result) {
        //     setState(ref => ({ ...ref, email:state.email }))
        //     isError = true
        // }
        if (state.email === null || state.email === "") {
            setState(ref => ({ ...ref, emailError: true }))
            isError = true;
        }
        if (state.password === null || state.password === "") {
            setState(ref => ({ ...ref, passwordError: true }))
            isError = true;
        }
        if (isError === false) {
            let data = {};
            data.email = state.email;
            data.password = state.password;
            dispatch(login(data))
        }
    };

    const handleClickShowPassword = () => {
        setState({ ...state, showPassword: !state.showPassword })
    };

    return (
        <>
            <Grid container justifyContent='center' alignItems='center'>
                <Grid item xs={12} sm={6} md={5} lg={4}>
                    <Grid container spacing={4} justifyContent='center' alignItems='center'>
                        <Grid item xs={12} textAlign='center'>
                            <Image src={Logo} alt='logo' width={256} height={88} />
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="h2" style={{ fontWeight: 600, fontSize: "22px", lineHeight: "40px" }}>Login to your account</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <TextField variant='standard'
                                fullWidth
                                size="small"
                                placeholder={'Username or email address'}
                                onChange={(e) => setState({ ...state, email: e.target.value, emailError: false, invalidEmailError: false })}
                                error={state.emailError ? true : state.invalidEmailError}
                                helperText={state.emailError === true ? "Please enter email" : state.invalidEmailError ? "Please enter valid email" : false}
                                value={state.email} />
                        </Grid>
                        <Grid item xs={8}>
                            <form onSubmit={loginAction}>
                                <TextField variant='standard'
                                    fullWidth
                                    size="small"
                                    type={state.showPassword ? "text" : "password"}
                                    placeholder={!!state.password ? null : "Password"}
                                    value={state.password}
                                    error={state.passwordError}
                                    onChange={(e) => setState({ ...state, password: e.target.value, passwordError: false })}
                                    helperText={state.passwordError === true ? "Please enter password" : ""}
                                    InputProps={{
                                        endAdornment:
                                            <InputAdornment position='start'>
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => handleClickShowPassword()}
                                                    edge={"end"}>
                                                    {state.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                    }} />
                            </form>
                        </Grid>
                        <Grid item xs={8}>
                            <CustomizedButtons variant="contained" fullWidth onClick={loginAction}>Login</CustomizedButtons>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} justifyContent='center' alignItems='center'>
                        <Grid item xs={8}>
                            <Typography align="left" style={{ lineHeight: "24px", fontSize: "14px", marginTop: "7px" }}>Do you have an account? <span><CustomizedButtons variant='text' onClick={() => SignUp()}>Sign up</CustomizedButtons></span></Typography>
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
export default Login;