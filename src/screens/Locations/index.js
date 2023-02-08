import React, { useState } from 'react';
import { Typography, Grid, TableRow, tableCellClasses, styled, TableCell, tableRowClasses } from '@mui/material';
import CustomizedButtons from '../../components/CustomButton';
import Image from 'next/image';
import DownArrow from '../../../public/Images/downArrow.png';
import CustomSearchInput from '../../components/CustomSearchInput';
import RightArrow from '../../../public/Images/go.png';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    [`&.${tableRowClasses.root}`]: {
        height: "14px"
    }
}));
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        border: "none",
        color: "#848991",
        fontFamily: "Avenir",
    },
    [`&.${tableCellClasses.body}`]: {
        color: "#313233",
        border: "none",
        fontFamily: "Avenir"
    }
}));

function Locations(props) {
    const [state, setState] = useState({
        type: [
            {
                name: "Avadale (AVD)",
                status: "Active",
                display_name: "Saguaro bloom,",
                description: "4165 N Craftsman Ct., Scottsdale, AZ United States of America-85251",
            },
            {
                name: "Old Town (OTN)",
                status: "Active",
                display_name: "Saguaro bloom,",
                description: "4165 N Craftsman Ct., Scottsdale, AZ United States of America-85251",
            },
            {
                name: "New York (NY)",
                status: "Active",
                display_name: "Saguaro bloom,",
                description: "4165 N Craftsman Ct., Scottsdale, AZ United States of America-85251",
            },
            {
                name: "Thunder Bird (AVD)",
                status: "Active",
                display_name: "Saguaro bloom,",
                description: "4165 N Craftsman Ct., Scottsdale, AZ United States of America-85251",
            },
            {
                name: "Cameback (GCK)",
                status: "Active",
                display_name: "Saguaro bloom,",
                description: "4165 N Craftsman Ct., Scottsdale, AZ United States of America-85251",
            },
            {
                name: "Scottsdale (SCT)",
                status: "Active",
                display_name: "Saguaro bloom,",
                description: "4165 N Craftsman Ct., Scottsdale, AZ United States of America-85251",
            }
        ]
    })
    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Typography fontWeight={800} fontSize={"24px"}>Lab Locations</Typography>
                </Grid>
                <Grid item xs={12} marginBottom={"20px"}>
                    <Grid container>
                        <Grid item xs={5}>
                            <CustomSearchInput
                                placeholder='Search test upload name, tube number, file name'
                                onChange={(name) => alert("WIP")}
                            />
                        </Grid>
                        <Grid item xs={7} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "20px" }}>
                            <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#474747", marginLeft: "5px", alignSelf: "center" }}>Filter by</Typography>
                            <CustomizedButtons variant={"text"} style={{ padding: "0px 15px 0px 15px", marginLeft: "10px", backgroundColor: "#FBF7F4" }} >
                                <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#000", marginLeft: "5px", marginRight: '10px', fontWeight: 900 }} >
                                    All Status
                                </Typography>
                                <Image src={DownArrow} alt='downArrow' width={"20vw"} height={"20vh"} />
                            </CustomizedButtons>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={3} justifyContent='center'>
                        {!!state.type && state.type.map((item, index) =>
                            <Grid item xs={12} sm={4} key={index.toString()}>
                                <Grid container style={{ display: "flex", justifyContent: "center", alignItems: "center", boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)', borderRadius: "8px", padding: "10px" }}>
                                    <Grid item xs={12} >
                                        <Typography style={{
                                            letterSpacing: "0.4px", fontSize: "20px", lineHeight: "32px", fontFamily: "Avenir-Black",
                                            fontWeight: 800,
                                            overflow: 'hidden',
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 3,
                                        }} color={"#000000"}>{item.name} </Typography>
                                    </Grid>
                                    <Grid item xs={12} style={{ display: "flex", flexDirection: "row" }}>
                                        <Typography style={{
                                            letterSpacing: "0.4px", fontSize: "14px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir", display: '-webkit-box',
                                            overflow: 'hidden',
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 3,
                                        }} color={"#718797"}>Status: </Typography>
                                        <Typography style={{
                                            letterSpacing: "0.4px", fontSize: "14px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir", display: '-webkit-box',
                                            overflow: 'hidden',
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 3,
                                            backgroundColor: "#EBF4F1", marginLeft: "5px", padding: "2px", borderRadius: "5px"
                                        }} color={"#024751"}> {item.status}</Typography>
                                    </Grid>
                                    <Grid item xs={12} style={{ display: "flex", flexDirection: "row" }}>
                                        <Grid item xs={6}>
                                            <Typography style={{
                                                letterSpacing: "0.4px", fontSize: "14px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir", display: '-webkit-box',
                                                overflow: 'hidden',
                                                WebkitBoxOrient: 'vertical',
                                                WebkitLineClamp: 3,
                                                fontWeight: '900',
                                            }} color={"rgba(16, 16, 16, 0.6)"} >Lab Name: {item.display_name}</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography style={{
                                                letterSpacing: "0.4px", fontSize: "14px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir", display: '-webkit-box',
                                                overflow: 'hidden',
                                                WebkitBoxOrient: 'vertical',
                                                WebkitLineClamp: 3,
                                            }} color={"rgba(16, 16, 16, 0.6)"} >{"Lab Code: SGB"}</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} style={{ marginBottom: "5px" }} >
                                        <Typography style={{
                                            letterSpacing: "0.4px", fontSize: "14px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir", display: '-webkit-box',
                                            overflow: 'hidden',
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 3,
                                            fontWeight: 900
                                        }} color={"#313237"}>Address: </Typography>
                                        <Typography style={{
                                            letterSpacing: "0.4px", fontSize: "14px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir", display: '-webkit-box',
                                            overflow: 'hidden',
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 3,
                                        }} color={"rgba(16, 16, 16, 0.6)"}> {item.description}</Typography>
                                        <Typography style={{
                                            letterSpacing: "0.4px", fontSize: "14px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir", display: '-webkit-box',
                                            overflow: 'hidden',
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 3,
                                        }}></Typography>
                                    </Grid>
                                    <Grid item xs={12} style={{ borderBottom: "0.5px solid rgba(0, 0, 0, 0.16)" }} />
                                    <Grid item xs={12} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: "10px", cursor: 'pointer' }}>
                                        <Typography style={{
                                            letterSpacing: "0.4px", fontSize: "14px", lineHeight: "20px", fontFamily: "Avenir-Black", display: '-webkit-box',
                                            overflow: 'hidden',
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 3,
                                            fontWeight: 'bold'
                                        }} color={"#313237"}>Show Details</Typography>
                                        <Image src={RightArrow} alt='rightArrow' width={"20vw"} height={"20vh"} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
export default Locations;