import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import { useRouter } from 'next/router'
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { AccordionDetails, Grid, ListItemButton, Avatar, Typography, ListItemIcon, ListItemText } from '@mui/material';
import { sideMenu } from '../../../../helpers/pages';
import LogoutIcon from '@mui/icons-material/Logout';

const StyledButton = styled(ListItemButton)(({ theme }) => ({
    '&:focus': {
        backgroundColor: '#C1E2D8',
        borderRadius: '8px',
        margin: '0px 5px'
    },
    '&:focus:within': {
        backgroundColor: 'red',
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

    return (
        <>
            <List>
                <Grid container spacing={4} justifyContent='center' alignItems='center'>
                    <Grid item xs={12}>
                        {sideMenu.map((item, index) =>
                            item.pages.length > 0 ?
                                <Accordion key={index.toString()} expanded={expanded === index ? props.isOpen : false}
                                    onChange={() => { setExpanded(expanded !== index ? index : false) }}>
                                    <AccordionSummary style={{ padding: '0px 5px 0px 0px' }} expandIcon={props.isOpen === true ? <ArrowForwardIosIcon fontSize='10' /> : <></>}>
                                        {props.isOpen === true ?
                                            <ListItemButton style={{ padding: '6px 0px 6px 16px' }}>
                                                <ListItemIcon>{item.menuIcon}</ListItemIcon>
                                                <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir" }}>{item.name}</Typography>
                                            </ListItemButton>
                                            :
                                            <ListItemButton style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '3px 0px 3px 0px' }}>
                                                <ListItemIcon>{item.menuIcon}</ListItemIcon>
                                                <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", paddingRight: '16px' }}>{item.name}</Typography>
                                            </ListItemButton>
                                        }
                                    </AccordionSummary>
                                    {item.pages.length > 0 && item.pages.map((item, index) =>
                                        <AccordionDetails style={{ padding: '0px 5px 0px 10px' }} key={index.toString()}>
                                            {props.isOpen === true ?
                                                <StyledButton onClick={() => handleSubUrl(item.url)}>
                                                    <ListItemIcon>{item.menuIcon}</ListItemIcon>
                                                    <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir" }}>{item.title}</Typography>
                                                </StyledButton>
                                                :
                                                <ListItemButton onClick={() => handleSubUrl(item.url)} >
                                                    <ListItemIcon>{item.menuIcon}</ListItemIcon>
                                                    <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir" }}>{item.title}</Typography>
                                                </ListItemButton>
                                            }
                                        </AccordionDetails>
                                    )}
                                </Accordion>
                                :
                                <div key={index.toString()}>
                                    {props.isOpen === true ?
                                        <StyledButton onClick={() => item.url !== undefined && handleUrl(item.url)} style={{ padding: '15px 16px' }}>
                                            <ListItemIcon>{item.menuIcon}</ListItemIcon>
                                            <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir" }}>{item.name}</Typography>
                                        </StyledButton>
                                        :
                                        <StyledButton onClick={() => handleUrl(item.url)} style={{ display: 'flex', flexDirection: 'column' }}>
                                            <ListItemIcon>{item.menuIcon}</ListItemIcon>
                                            <Typography style={{ fontSize: item.name === "Patients" ? "16px" : "12px" && item.name === "Dashboard" ? "16px" : "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir" }}>{item.name}</Typography>
                                        </StyledButton>
                                    }
                                </div>
                        )}
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            {props.isOpen === true ?
                                <Grid item xs={12} style={{ paddingBottom: '50px' }}>
                                    <ListItemButton>
                                        <ListItemIcon><Avatar fontSize='10' style={{ color: '#C1E2D8', backgroundColor: '#000' }} /></ListItemIcon>
                                        <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir" }}>Gowtham Ramanujam</Typography>
                                    </ListItemButton>
                                    <ListItemButton onClick={() => router.push('/')}>
                                        <ListItemIcon><LogoutIcon sx={{ color: "#000" }} /></ListItemIcon>
                                        <ListItemText style={{ color: 'red' }}>Log out</ListItemText>
                                    </ListItemButton>
                                </Grid>
                                :
                                <Grid item xs={12} style={{ paddingBottom: '50px' }}>
                                    <ListItemButton style={{ display: 'flex', flexDirection: 'column' }}>
                                        <ListItemIcon><Avatar fontSize='10' sx={{ color: '#C1E2D8', backgroundColor: '#000' }} /></ListItemIcon>
                                        <Typography style={{ fontSize: '12px', wordWrap: 'break-word' }}>Gowtham Ramanujam</Typography>
                                    </ListItemButton>
                                    <ListItemButton onClick={() => router.push('/')} style={{ display: 'flex', flexDirection: 'column' }}>
                                        <ListItemIcon><LogoutIcon /></ListItemIcon>
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
