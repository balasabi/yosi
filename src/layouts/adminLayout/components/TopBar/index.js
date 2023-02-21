import React from "react";
import { Grid, Toolbar, TextField, IconButton, AppBar, InputAdornment } from '@mui/material';
import Image from 'next/image';
import menu from '../../../../../public/Images/menu.png';
import yosiTop from '../../../../../public/Images/svg/LogoFinal.svg';
import bell from '../../../../../public/Images/svg/Notification.svg';
import back from '../../../../../public/Images/back.png';
import go from '../../../../../public/Images/go.png';
import { AiOutlineArrowRight, AiOutlineSearch,AiOutlineArrowLeft } from "react-icons/ai";


function TopBar(props) {

    return (
        <>
            <AppBar style={{ background: "#4D1EC0" }}>
                <Toolbar>
                    <Grid container>
                        <Grid item xs={12}>
                            <Grid container justifyContent='center' alignItems='center'>
                                <Grid item xs={3} style={{ display: 'flex', alignItems: "center" }}>
                                    <IconButton
                                        color="inherit"
                                        aria-label="open drawer"
                                        onClick={() => props.handleDrawerOpen()}
                                        edge="start">
                                        <Image src={menu} alt="menu" width={24} height={18} />
                                    </IconButton>
                                    <Image src={yosiTop} alt="YOSI LAB" style={{ paddingLeft: "20px" }} width={140} height={49} />
                                </Grid>
                                <Grid item xs={3} sm={1} textAlign="left">
                                    <IconButton aria-label="left arrow"> <AiOutlineArrowLeft style={{ width: 20, height: 20, color:"#fff" }} /></IconButton>
                                    <IconButton aria-label="right arrow"><AiOutlineArrowRight style={{ width: 20, height: 20 ,color:"#AFA8C2" }} /></IconButton>
                                </Grid>
                                <Grid item xs={4} sm={6} textAlign='left' >
                                    <div style={{ display: "flex", flexDirection: "row", borderRadius: "10px", padding: "4px", background: "#3A1692", border: "1px solid #3A1692", width: "500px" }}>
                                        <IconButton aria-label="search">
                                            <AiOutlineSearch style={{ width: 20, height: 20 }} color="#fff" />
                                        </IconButton>
                                        <input
                                            type="text"
                                            className="no-outline"
                                            size='small'
                                            placeholder='Search input text'
                                            style={{ width: "500px", color: "#FFF", background: "#3A1692", border: 0, fontFamily: "Avenir", fontSize: 18 }}
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={2} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                                    <Image src={bell} alt="YOSI LAB" width={21} height={26} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default TopBar;