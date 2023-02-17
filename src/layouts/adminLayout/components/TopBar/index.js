import React from "react";
import { Grid, Toolbar, TextField, IconButton, AppBar } from '@mui/material';
import Image from 'next/image';
import menu from '../../../../../public/Images/menu.png';
import yosiTop from '../../../../../public/Images/yosiTop.png';
import bell from '../../../../../public/Images/bell.png';
import back from '../../../../../public/Images/back.png';
import go from '../../../../../public/Images/go.png';
import { AiOutlineArrowRight, AiOutlineSearch } from "react-icons/ai";


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
                                        <Image src={menu} alt="menu" width={24} height={18} />
                                    </IconButton>
                                    <Image src={yosiTop} alt="YOSI LAB" style={{ paddingLeft: "20px" }} width={128} height={34} />
                                </Grid>
                                <Grid item xs={3} sm={1} textAlign="left">
                                    <IconButton aria-label="left arrow"><Image src={back} alt="back" width={20} height={20} /></IconButton>
                                    <IconButton aria-label="right arrow"><AiOutlineArrowRight style={{ width: 20, height: 20 }} color="#446F75" /></IconButton>
                                </Grid>
                                <Grid item xs={4} sm={6} textAlign='left'>
                                    <TextField
                                        size='small'
                                        placeholder='Search input text'
                                        InputProps={{
                                            sx: { width: "600px", background: "#366369", color: "#FFF", borderRadius: "8px" },
                                            startAdornment: (
                                                <IconButton  aria-label="search">
                                                    <AiOutlineSearch style={{ width: 20, height: 20 }} color="#fff" />
                                                </IconButton>
                                            ),
                                        }}

                                    />

                                </Grid>

                                <Grid item xs={2} style={{display:"flex", flexDirection:"row", justifyContent:"flex-end",alignItems:"center"}}>
                                    <Image src={bell} alt="YOSI LAB" width={21} height={26} />  
                                     <div style={{height:4,width:4,backgroundColor:"red", borderRadius:2, marginTop:-15, marginLeft:-5}}/>
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