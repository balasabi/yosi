import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Topbar from "./TopBar";
import Sidebar from "./SideBar";
import { Snackbar } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';


const drawerWidth = 250;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    whiteSpace: 'nowrap',

});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    padding: 0,
    whiteSpace: 'nowrap',
    overflowX: 'hidden',
    width: `calc(${theme.spacing(8)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(17)} + 1px)`,
    },
});


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        padding: 0,
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
    const [open, setOpen] = useState(true);

    const dispatch = useDispatch();

    const handleDrawerOpen = () => {
        setOpen(!open);
    };

   
    return (    
        <>
            <Topbar isOpen={open} handleDrawerOpen={() => handleDrawerOpen()} />
            <Drawer variant="permanent" open={open} PaperProps={{ sx: { marginTop: 8 } }}>
                <Sidebar isOpen={open} />
            </Drawer>
            <main style={{
                padding: "0px 25px",
                paddingTop: 75,
                marginLeft: open === true ? "250px" : "125px"
            }}>
                {/* {!!alertMessage &&
                                        <Snackbar
                                            open={openAlert}
                                            onClose={() => props.dispatch(
                                                displayAlert(false, 'success', '')
                                            )}
                                            anchorOrigin={{ vertical: "top", horizontal: "center" }}
                                            autoHideDuration={8000}>
                                            <Alert icon={false} variant="filled" severity={alertSeverity}>{alertMessage}</Alert>
                                        </Snackbar>
                                    } */}
                {props.children}
            </main>
        </>
    );
}