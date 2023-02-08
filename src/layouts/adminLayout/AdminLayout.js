import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
// import IconButton from '@mui/material/IconButton';
// import ChevronLeft from '@mui/icons-material/ChevronLeft';
import { Sidebar, Topbar } from './Component';
// import Hlogo from "../../../public/images/horizontalLogo.png";
// import Image from 'next/image';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import Snackbar from '@mui/material/Snackbar';
// import Alert from '@mui/material/Alert';
// import { useSelector, useDispatch } from 'react-redux'
// import { displayAlert } from '../../store/reducers/sessionReducer';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);


export default function AdminLayout(props) {

    return (
        <Box sx={{ display: 'flex'}}>
               <CssBaseline/>
            <Topbar/>
            <main className="relative w-full h-full py-40 min-h-screen" style={{
          // paddingLeft: this.state.open ? "250px" : "90px" ,
          // paddingRight: this.state.open ? "40px":"60px",

          padding: "0px 25px",
          paddingTop: 75,
          marginLeft: "250px" 
        }}>
           {props.children}
        </main>
        </Box>
    );
}



