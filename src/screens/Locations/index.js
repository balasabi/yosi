import React, { useState } from 'react';
import { Typography, Grid, TableRow, tableCellClasses, styled, TableCell, FormControl, Select, MenuItem, IconButton } from '@mui/material';
import Image from 'next/image';
import CustomSearchInput from '../../components/CustomSearchInput';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from 'next/router';

function Locations(props) {
    const [state, setState] = useState({
        status: "",
        openLocation: false,
        type: [
            {
                name: "Avondale (AVD)",
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
                name: "Camelback (GCK)",
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

    const router = useRouter();

    const Placeholder = ({ children }) => {
        return <div style={{ color: "#101010", fontWeight: 900, fontSize: "14px", fontFamily: "Avenir-Book", fontStyle: "normal" }}>{children}</div>;
    };

    const handleChange = (e) => {
        setState({ ...state, status: e.target.value })
    };

    const handleView = () => {
        router.push('/locations/view-location')
    };

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Typography className='header'>Location</Typography>
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
                            <Typography className='miniLiteText' style={{ marginLeft: "5px", alignSelf: "center" }}>Filter by</Typography>
                            <FormControl sx={{ m: 1, minWidth: 60, minHeight: 10, '.MuiOutlinedInput-notchedOutline': { border: 0 } }} size="small">
                                <Select
                                    value={state.status}
                                    onChange={(e) => handleChange(e, "T")}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    renderValue={
                                        state.status !== "" ? undefined : () => <Placeholder>All Status</Placeholder>
                                    }>
                                    <MenuItem value={"All"}>All</MenuItem>
                                    <MenuItem value={"Active"}>Active</MenuItem>
                                    <MenuItem value={"Inactive"}>Inactive</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={3} justifyContent='center'>
                        {!!state.type && state.type.map((item, index) =>
                            <Grid item xs={12} sm={4} key={index.toString()}>
                                <Grid container style={{ display: "flex", justifyContent: "center", alignItems: "center", boxShadow: '0px 1px 1px -4px rgb(0 0 0 / 30%), 0px 1px 3px 4px rgb(0 0 0 / 10%)', borderRadius: "8px", padding: "10px", }}>
                                    <Grid item xs={12} >
                                        <Typography className='subHeading'>{item.name} </Typography>
                                    </Grid>
                                    <Grid item xs={12} style={{ display: "flex", flexDirection: "row" }}>
                                        <Typography style={{
                                            letterSpacing: "0.4px", fontSize: "14px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Book"
                                        }} color={"#718797"}>Status: </Typography>
                                        <Typography style={{
                                            letterSpacing: "0.4px", fontSize: "14px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Medium",
                                            backgroundColor: "#F0E9FF", marginLeft: "5px", padding: "2px", borderRadius: "5px"
                                        }} color={"#6425FE"}> {item.status}</Typography>
                                    </Grid>
                                    <Grid item xs={12} style={{ display: "flex", flexDirection: "row" }}>
                                        <Grid item xs={6}>
                                            <Typography style={{
                                                letterSpacing: "0.4px", fontSize: "14px", lineHeight: "20px", marginTop: "5px",
                                                fontFamily: "Avenir-Medium", fontWeight: '900'
                                            }} color={"rgba(16, 16, 16, 0.6)"} >Lab Name: {item.display_name}</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography style={{
                                                letterSpacing: "0.4px", fontSize: "14px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Book",
                                            }} color={"rgba(16, 16, 16, 0.6)"} >{"Lab Code: SGB"}</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} style={{ marginBottom: "5px" }} >
                                        <Typography style={{
                                            letterSpacing: "0.4px", fontSize: "14px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Book",
                                            fontWeight: 900
                                        }} color={"#313237"}>Address: </Typography>
                                        <Typography className='miniLiteText' style={{ marginTop: "5px" }} color={"rgba(16, 16, 16, 0.6)"}> {item.description}</Typography>
                                        <Typography style={{
                                            letterSpacing: "0.4px", fontSize: "14px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Book"
                                        }}></Typography>
                                    </Grid>
                                    <Grid item xs={12} style={{ borderBottom: "0.5px solid rgba(0, 0, 0, 0.16)" }} />
                                    <Grid item xs={12} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: "10px", cursor: 'pointer' }}>
                                        <Typography style={{
                                            letterSpacing: "0.4px", fontSize: "14px", lineHeight: "20px", fontFamily: "Avenir-Black", fontWeight: 'bold'
                                        }} color={"#313237"}>Show Details</Typography>
                                        <IconButton onClick={() => handleView()}>
                                        <ArrowForwardIcon width={"20vw"} height={"20vh"} style={{color:"#6425FE"}} />
                                        </IconButton>
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