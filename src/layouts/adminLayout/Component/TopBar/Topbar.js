import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
// import CustomSearchInput from '../../../../components/CustomSearchInput';
// import LogoutIcon from '@mui/icons-material/Logout';
import Image from 'next/image';
// import Logo from "../../../../../public/images/onlylogo.png";
// import { useDispatch, useSelector } from 'react-redux';
// import { logout, updateCurrentClient } from "../../../../store/actions/sessionAction";
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import { userDefaultFitterLocation } from '../../../../store/reducers/userReducer';
// // import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import {Grid, Toolbar, TextField } from '@mui/material';
// import menu from '../../../public/Images/menu.png';
// import yosiTop from '../../../public/Images/yosiTop.png';
// import bell from '../../../public/Images/bell.png';
// import back from '../../../public/Images/back.png';
// import go from '../../../public/Images/go.png';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    // border: `1px solid red`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
    margin: 0
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ fontSize: '10' }} />
        }
        {...props}
    />
))(({ theme }) => ({
    margin: 0,
    // backgroundColor:
    //   theme.palette.mode === 'dark'
    //     ? 'rgba(255, 255, 255, .05)'
    //     : 'rgba(0, 0, 0, .03)',
    // flexDirection: 'row-reverse',
    // '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    //     transform: 'rotate(90deg)',
    // },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(-2.1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(1),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));


// export default function Topbar(props) {
//     const dispatch = useDispatch();

//     const fitterLocations = useSelector((state) => state.userReducer.fitterLocations);
//     const defaultFitterLocation = useSelector((state) => state.userReducer.defaultFitterLocation);
//     const userProfile = useSelector((state) => state.userReducer.userProfile);
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const handleMenu = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleClose = () => {
//         setAnchorEl(null);
//     };

//     const handleSignOut = () => {
//         dispatch(logout());
//     };

//     const changeClient = (element) => {
//         dispatch(updateCurrentClient(element))
//         dispatch(userDefaultFitterLocation(element))
//     };

//     //   console.log("defaultFitterLocation ==>1 " + JSON.stringify(defaultFitterLocation))
//     //   console.log("fitterLocations ==> " + JSON.stringify(fitterLocations))

//     return (
//         <AppBar position="fixed" open={props.isOpen} sx={{ boxShadow: '0.5px 0px 4px rgba(133, 136, 144, 0.16)' }}>
//             <Toolbar sx={{ backgroundColor: "#FFFFFF", color: "none", width: Boolean(anchorEl) ? "102% " : "102%" }}>
//                 <IconButton
//                     color="inherit"
//                     aria-label="open drawer"
//                     onClick={() => props.handleDrawerOpen()}
//                     edge="start"
//                     sx={{
//                         marginRight: 5,
//                         ...(props.isOpen && { display: 'none' }),
//                     }}
//                 >


//                     <Image src={Logo} alt={"no image"} height={"30px"} width={"30px"} />
//                 </IconButton>
//                 <Grid container alignItems='center'>
//                     <Grid item xs={4} sx={{ textAlign: "left" }}>
//                         <CustomSearchInput placeholder='Search anything... ' />
//                     </Grid>
//                     <Grid item xs={3} />
//                     <Grid item xs={5} sx={{ textAlign: "right" }}>
             
                  
//                     </Grid>
//                 </Grid>
//             </Toolbar>
//         </AppBar>
//     );
// }
  
 function TopBar(props) {


    return (
        <>
            <AppBar style={{ background: "#024751" }}>
                <Toolbar>
                    <Grid container>
                        <Grid item xs={12}>
                            <Grid container justifyContent='center' alignItems='center'>
                                <Grid item xs={1} textAlign='center'>
                                    {/* <IconButton><Image src={menu} alt="menu" width={20} height={17} color="#000" /></IconButton> */}
                                </Grid>
                                <Grid item xs={2} textAlign="left">
                                    {/* <Image src={yosiTop} alt="YOSI LAB" width={120} height={40} color="#000" /> */}
                                </Grid>
                                <Grid item xs={3} sm={1} textAlign="center">
                                    {/* <IconButton><Image src={back} alt="back" width={20} height={20} color="#000" /></IconButton> */}
                                    {/* <IconButton><Image src={go} alt="arrow" width={20} height={20} color="#000" /></IconButton> */}
                                </Grid>
                                <Grid item xs={3} sm={6} textAlign='left'>
                                    <TextField
                                        size='small'
                                        placeholder='Search input text'
                                        InputProps={{ sx: { width: "600px", background: "#366369", color: "#FFF", borderRadius: "8px" } }}
                                    />
                                </Grid>
                                <Grid item xs={2} textAlign="center">
                                    {/* <Image src={bell} alt="YOSI LAB" width={22} height={25} color="#000" /> */}
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