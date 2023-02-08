import React, { useState } from "react";
import {
    Typography, Grid, Table, TableHead, TableRow, styled, TableCell, tableCellClasses,
    tableRowClasses, TableBody, TablePagination, TableFooter
} from '@mui/material';
import CustomizedButtons from '../../components/CustomButton';
import plus from "../../../public/Images/plus.png";
import DownArrow from "../../../public/Images/downArrow.png";
import Image from 'next/image';
import Edit from '../../../public/Images/editIcon.png';

function CouponCode() {

    const [state, setState] = useState({
        rows: [
            { "Name": "YOS150%", "Code": "1st order deal", "Price": "50%", "Status": "Active", "Action": "Edit" },
            { "Name": "YOS150%", "Code": "1st order deal", "Price": "50%", "Status": "Active", "Action": "Edit" },
            { "Name": "YOS150%", "Code": "1st order deal", "Price": "50%", "Status": "Active", "Action": "Edit" },
            { "Name": "YOS150%", "Code": "1st order deal", "Price": "50%", "Status": "Active", "Action": "Edit" },
            { "Name": "YOS150%", "Code": "1st order deal", "Price": "50%", "Status": "Active", "Action": "Edit" },
            { "Name": "YOS150%", "Code": "1st order deal", "Price": "50%", "Status": "Active", "Action": "Edit" },
        ]
    })

    return (
        <>
            <Grid container>
                <Grid item xs={12} style={{ borderBottom: "2px solid #C8C8C8" }} />
                <Grid item xs={12} display={"flex"} flexDirection={'row'}>
                    <Grid container>
                        <Grid item xs={6}>
                            <CustomizedButtons variant={"contained"} style={{ padding: "4px 15px 4px 15px", marginLeft: "10px", marginTop: "20px" }}>
                                <Image src={plus} alt='union' width={"20vw"} height={"20vh"} />
                                <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", marginLeft: "5px" }}>
                                    Create Coupon Code
                                </Typography>
                            </CustomizedButtons>
                        </Grid>
                        <Grid item xs={6} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "20px" }}>
                            <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#474747", marginLeft: "5px", alignSelf: "center" }}>Filter by</Typography>
                            <CustomizedButtons variant={"text"} style={{ padding: "0px 15px 0px 15px", marginLeft: "10px", backgroundColor: "#FBF7F4" }} >
                                <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#000", marginLeft: "5px", marginRight: '10px', fontWeight: 900 }}>
                                    All Price
                                </Typography>
                                <Image src={DownArrow} alt='downArrow' width={"20vw"} height={"20vh"} />
                                <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#000", marginLeft: "5px", marginRight: '10px', fontWeight: 900 }}>
                                    All Status
                                </Typography>
                                <Image src={DownArrow} alt='downArrow' width={"20vw"} height={"20vh"} />
                            </CustomizedButtons>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} >
                    <Grid container>
                        <Grid item xs={12} style={{ marginTop: "15px", padding: "12px", backgroundColor: "#E7E7E7", display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                            <Grid container>
                                <Grid item xs={3}>
                                    <Typography style={{ fontSize: "18px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Black", textAlign: "center" }}>Name</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography style={{ fontSize: "18px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Black", textAlign: "center" }} >Code</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography style={{ fontSize: "18px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Black", textAlign: "center" }}>Price</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography style={{ fontSize: "18px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Black", textAlign: "center" }}>Status</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography style={{ fontSize: "18px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Black", textAlign: "center" }}>Action</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {!!state.rows && state.rows.map((item, index) => (
                        <Grid container  >
                            <Grid item xs={12} style={{ marginTop: "30px", border: "2px dashed #D9D9D9", padding: "10px", borderBottom: 0, width: "50vw" }} />
                            <Grid item xs={12} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
                                <div style={{ marginLeft: -20, border: "2px dashed #D9D9D9", borderRadius: "50px", width: 50, height: 50, borderLeft: 0, borderTop: 0, borderBottom: 0 }} />
                                <Grid item xs={12} style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                                    <Grid container>
                                        <Grid item xs={3}>
                                            <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textAlign: "center", marginLeft: "10px" }}>{item.Name}</Typography>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textAlign: "center", marginLeft: "45px" }} >{item.Code}</Typography>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textAlign: "center" }}>{item.Price}</Typography>
                                        </Grid>
                                        <Grid item xs={2} >
                                            <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textAlign: "center", marginLeft: "10px" }}>{item.Status}</Typography>
                                        </Grid>
                                        <Grid item xs={2} >
                                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginLeft: "25px" }}>
                                                <Image src={Edit} alt='edit' width={18} height={18} />
                                                <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", textTransform: "none", color: "#000", marginLeft: "5px" }}>Edit</Typography>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <div style={{ marginRight: -20, border: "2px dashed #D9D9D9", borderRadius: "50px", width: 50, height: 50, borderRight: 0, borderTop: 0, borderBottom: 0 }} />
                            </Grid>
                            <Grid item xs={12} style={{ border: "2px dashed #D9D9D9", padding: "10px", borderTop: 0 }} />
                        </Grid>))}
                </Grid>
            </Grid>
        </>
    )
}

export default CouponCode