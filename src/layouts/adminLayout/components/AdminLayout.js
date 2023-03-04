import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Topbar from "./TopBar";
import Sidebar from "./SideBar";
import { Snackbar, Alert } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { displayAlert } from '../../../store/reducers/testResultReducer'
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

    // const alert = useSelector(state => state.testResultReducer.alert)
    // console.log("alert===>" + JSON.stringify(alert))

    const handleDrawerOpen = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        !alert
    }

    const openAlert = useSelector(state => state.testResultReducer.openAlert);
    const alertSeverity = useSelector(state => state.testResultReducer.alertSeverity);
    const alertMessage = useSelector(state => state.testResultReducer.alertMessage);
    return (
        <>
          <Topbar isOpen={open} handleDrawerOpen={() => handleDrawerOpen()} />
            <Drawer variant="permanent" open={open} PaperProps={{ sx: { marginTop: 8 } }}>
                <Sidebar isOpen={open} />
            </Drawer>
            {!!alertMessage &&
            <Snackbar
               open={openAlert}
               onClose={() => dispatch(
                  displayAlert(false, 'success', '')
               )}
               anchorOrigin={{ vertical: "top", horizontal: "center" }}
               autoHideDuration={3000}>
               <Alert icon={false} variant="filled" severity={alertSeverity}>{alertMessage}</Alert>
            </Snackbar>
         }
            <main style={{
                padding: "0px 25px",
                paddingTop: 75,
                marginLeft: open === true ? "250px" : "125px"
            }}>
               {props.children}
            </main>
        </>
    );
}