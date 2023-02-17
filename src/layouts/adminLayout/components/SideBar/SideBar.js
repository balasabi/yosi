import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import { useRouter } from 'next/router'
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { AccordionDetails, Grid, ListItemButton, Avatar, Typography, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { sideMenu } from '../../../../helpers/pages';
import LogoutIcon from '@mui/icons-material/Logout';

const StyledButton = styled(ListItemButton)(({ theme }) => ({
    '&:focus': {
        backgroundColor: '#C1E2D8',
        borderRadius: '8px',
        margin: '0px 5px'
    },
}))

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    '&:not(:last-child)': {
        borderBottom: 0,
        padding: '0px 0px 0px 0px',
    },
    '&:before': {
        display: 'none',
    }
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosIcon
        />}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        whiteSpace: "nowrap",
        padding: '0px 0px 0px 0px'
    }
}));

export default function Sidebar(props) {
    const [expanded, setExpanded] = useState(false);

    const router = useRouter();

    const handleUrl = (param) => {
        let selectedUrl = sideMenu.find((item) => item.url === param)
        router.push(String(selectedUrl.url))
    };

    const handleSubUrl = (param) => {
        router.push(param)
    };

    const handleInitialUrl = (param) => {
        router.push(param)
    };

    return (
        <>
            <List>
                <Grid container spacing={5} justifyContent='center' alignItems='center'>
                    <Grid item xs={12}>
                        {sideMenu.map((item, index) =>
                            item.pages.length > 0 ?
                                <Accordion key={index.toString()} expanded={expanded === index ? true : false}
                                    onChange={() => { setExpanded(expanded !== index ? index : false) }}>
                                    <AccordionSummary style={{ padding: '0px 5px 0px 0px' }} expandIcon={<ArrowForwardIosIcon fontSize='10' />}>
                                        {props.isOpen === true ?
                                            <ListItemButton style={{ padding: '0px 0px 0px 20px' }} onClick={() => handleInitialUrl(item.url)}>
                                                <IconButton>{item.menuIcon}</IconButton>
                                                <Typography className='subText'>{item.name}</Typography>
                                            </ListItemButton>
                                            :
                                            <Grid item xs={12}>
                                                <ListItemButton style={{ padding: '3px 15px 3px 0px' }} onClick={() => handleInitialUrl(item.url)} >
                                                    <Grid container textAlign='center'>
                                                        <Grid item xs={12}>
                                                            <ListItemIcon>{item.menuIcon}</ListItemIcon>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Typography className='subText'>{item.name}</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </ListItemButton>
                                            </Grid>
                                        }
                                    </AccordionSummary>
                                    {item.pages.length > 0 && item.pages.map((item, index) =>
                                        <AccordionDetails style={{ padding: '0px 5px 0px 10px' }} key={index.toString()}>
                                            {props.isOpen === true ?
                                                <StyledButton onClick={() => handleSubUrl(item.url)} style={{ backgroundColor: (router.pathname.split("/").splice(0, 3).join("/") === item.url) ? "#EBF4F1" : "#fff", borderRadius: '5px', margin: '0px 5px' }}>
                                                    <IconButton>{item.menuIcon}</IconButton>
                                                    <Typography className='subText'>{item.title}</Typography>
                                                </StyledButton>
                                                :
                                                <Grid item xs={12}>
                                                    <StyledButton onClick={() => handleSubUrl(item.url)} style={{ backgroundColor: (router.pathname.split("/").splice(0, 3).join("/") === item.url) ? "#EBF4F1" : "#fff", borderRadius: '5px', }}>
                                                        <Grid container justifyContent={'center'}>
                                                            <Grid item xs={12}>
                                                                <ListItemIcon>{item.menuIcon}</ListItemIcon>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <Typography className='subText' style={{ whiteSpace: 'break-spaces' }}>{item.title}</Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </StyledButton>
                                                </Grid>
                                            }
                                        </AccordionDetails>
                                    )}
                                </Accordion>
                                :
                                <Grid item xs={12} key={index.toString()}>
                                    {props.isOpen === true ?
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <StyledButton onClick={() => item.url !== undefined && handleUrl(item.url)} style={{ padding: '15px 16px', backgroundColor: (router.pathname.split("/").splice(0, 3).join("/") === item.url) ? "#EBF4F1" : "#fff", borderRadius: '5px', margin: '0px 5px' }}>
                                                    <IconButton>{item.menuIcon}</IconButton>
                                                    <Typography className='subText' >{item.name}</Typography>
                                                </StyledButton>
                                            </Grid>
                                        </Grid>
                                        :
                                        <Grid item xs={12}>
                                            <StyledButton onClick={() => handleUrl(item.url)} style={{ backgroundColor: (router.pathname.split("/").splice(0, 3).join("/") === item.url) ? "#EBF4F1" : "#fff", borderRadius: '5px', margin: '0px 5px' }}>
                                                <Grid container justifyContent={'center'}>
                                                    <Grid item xs={12}>
                                                        <ListItemIcon>{item.menuIcon}</ListItemIcon>
                                                    </Grid>
                                                    <Grid item xs={12} textAlign='left'>
                                                        <Typography className='subText' style={{ whiteSpace: 'break-spaces' }}>{item.name}</Typography>
                                                    </Grid>
                                                </Grid>
                                            </StyledButton>
                                        </Grid>
                                    }
                                </Grid>
                        )}
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            {props.isOpen === true ?
                                <Grid item xs={12} style={{ paddingBottom: '50px' }}>
                                    <ListItemButton>
                                        <ListItemIcon><Avatar fontSize='10' style={{ color: '#fff', backgroundColor: '#024751' }} /></ListItemIcon>
                                        <Grid item xs={12}>
                                            <Typography className='subText'>Gowtam Ramanujam</Typography>
                                            <Typography align='left' style={{ fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", color: "#024751" }}>ADMIN</Typography>
                                        </Grid>
                                    </ListItemButton>
                                    <ListItemButton onClick={() => router.push('/')}>
                                        <ListItemIcon><LogoutIcon sx={{ color: "#024751", marginLeft: 1 }} /></ListItemIcon>
                                        <ListItemText style={{ color: 'red' }}>Log out</ListItemText>
                                    </ListItemButton>
                                </Grid>
                                :
                                <Grid item xs={12} style={{ paddingBottom: '50px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <ListItemIcon><Avatar fontSize='10' sx={{ color: '#fff', backgroundColor: '#024751' }} /></ListItemIcon>
                                        <Grid item xs={12}>
                                            <Typography className='subText' align='center' style={{ whiteSpace: 'break-spaces' }} >Gowtam Ramanujam</Typography>
                                            <Typography align='center' style={{ fontSize: "11px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Book", color: "#024751" }}>ADMIN</Typography>
                                        </Grid>
                                    </div>
                                    <ListItemButton onClick={() => router.push('/')} style={{ display: 'flex', flexDirection: 'column' }}>
                                        <ListItemIcon><LogoutIcon sx={{ color: '#024751' }} /></ListItemIcon>
                                        <Typography style={{ color: 'red', fontSize: '12px' }}>Log out</Typography>
                                    </ListItemButton>
                                </Grid>
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </List>
        </>
    );
}
