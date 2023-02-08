import React from "react";
import { Grid, Toolbar, TextField, IconButton, AppBar } from '@mui/material';
import Image from 'next/image';
import menu from '../../../../../public/Images/menu.png';
import yosiTop from '../../../../../public/Images/yosiTop.png';
import bell from '../../../../../public/Images/bell.png';
import back from '../../../../../public/Images/back.png';
import go from '../../../../../public/Images/go.png';

function TopBar(props) {

    return (
        <>
            <AppBar style={{ background: "#024751" }}>
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
                                        <Image src={menu} alt="menu" width={20} height={17} />
                                    </IconButton>
                                    <Image src={yosiTop} alt="YOSI LAB" style={{ paddingLeft: "20px" }} width={100} height={30} />
                                </Grid>
                                <Grid item xs={3} sm={1} textAlign="left">
                                    <IconButton><Image src={back} alt="back" width={20} height={20} /></IconButton>
                                    <IconButton><Image src={go} alt="arrow" width={20} height={20} /></IconButton>
                                </Grid>
                                <Grid item xs={4} sm={6} textAlign='left'>
                                    <TextField
                                        size='small'
                                        placeholder='Search input text'
                                        InputProps={{ sx: { width: "600px", background: "#366369", color: "#FFF", borderRadius: "8px" } }}
                                    />
                                </Grid>
                                <Grid item xs={2} textAlign="center">
                                    <Image src={bell} alt="YOSI LAB" width={22} height={25} />
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