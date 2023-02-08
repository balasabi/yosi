import React, { useState } from 'react';
import { Typography, Grid, TableRow, tableCellClasses, styled, TableCell, tableRowClasses, TableBody, Table } from '@mui/material';
import Image from 'next/image';
import RightArrow from '../../../public/Images/go.png';
import Edit from '../../../public/Images/editIcon.png';
import { useRouter } from 'next/router';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    [`&.${tableRowClasses.root}`]: {
        height: "14px"
    }
}));
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        border: "none",
        color: "#848991",
        // cursor: "none",
        fontFamily: "Avenir",
    },
    [`&.${tableCellClasses.body}`]: {
        color: "#313233",
        // cursor: "none",
        border: "none",
        fontFamily: "Avenir"
    }
}));

function TestKitSources(props) {
    const [state, setState] = useState({
        test_kit_sources: [
            {
                name: "Molecular lab",
                status: "Active",
                display_name: "Molecular lab",
                description_1: "4165 N Craftsman Ct., Scottsdale, AZ ",
                description_2: "United States of America- 85251"
            },
            {
                name: "Molecular lab",
                status: "Active",
                display_name: "Molecular lab",
                description_1: "4165 N Craftsman Ct., Scottsdale, AZ ",
                description_2: "United States of America- 85251"
            },
            {
                name: "Molecular lab",
                status: "Active",
                display_name: "Molecular lab",
                description_1: "4165 N Craftsman Ct., Scottsdale, AZ ",
                description_2: "United States of America- 85251"
            },
            {
                name: "Molecular lab",
                status: "Active",
                display_name: "Molecular lab",
                description_1: "4165 N Craftsman Ct., Scottsdale, AZ ",
                description_2: "United States of America- 85251"
            },
            {
                name: "Molecular lab",
                status: "Active",
                display_name: "Molecular lab",
                description_1: "4165 N Craftsman Ct., Scottsdale, AZ ",
                description_2: "United States of America- 85251"
            },
            {
                name: "Molecular lab",
                status: "Active",
                display_name: "Molecular lab",
                description_1: "4165 N Craftsman Ct., Scottsdale, AZ ",
                description_2: "United States of America- 85251"
            }
        ]
    })
    const router = useRouter();

    return (
        <>
            <Grid container>
                <Grid item xs={12} style={{ marginTop: "20px" }} >
                    <Grid container>
                        {!!state.test_kit_sources && state.test_kit_sources.map((test_kit_sources, index) =>
                            <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={index.toString()}>
                                <Table>
                                    <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell style={{ border: "none" }}>
                                        <Grid container style={{ display: "flex", justifyContent: "center", alignItems: "center", boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)', borderRadius: "8px", padding: "10px" }}>
                                            <Grid item xs={12} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} >
                                                <Typography style={{
                                                    letterSpacing: "0.4px", fontSize: "20px", lineHeight: "32px", fontFamily: "Avenir-Black",
                                                    overflow: 'hidden',
                                                    WebkitBoxOrient: 'vertical',
                                                    WebkitLineClamp: 3,
                                                }} color={"#000000"}>{test_kit_sources.name} </Typography>
                                                <Image src={Edit} alt='edit' width={15} height={15} />
                                            </Grid>
                                            <Grid item xs={12} style={{ display: "flex", flexDirection: "row" }} >
                                                <Typography style={{
                                                    letterSpacing: "0.4px", fontSize: "13px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir", display: '-webkit-box',
                                                    overflow: 'hidden',
                                                    WebkitBoxOrient: 'vertical',
                                                    WebkitLineClamp: 3,
                                                }} color={"#718797"}>Status: </Typography>
                                                <Typography style={{
                                                    letterSpacing: "0.4px", fontSize: "13px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir", display: '-webkit-box',
                                                    overflow: 'hidden',
                                                    WebkitBoxOrient: 'vertical',
                                                    WebkitLineClamp: 3,
                                                    backgroundColor: "#EBF4F1", marginLeft: "5px", padding: "2px"
                                                }} color={"#024751"}> {test_kit_sources.status}</Typography>
                                            </Grid>
                                            <Grid item xs={12} style={{ display: "flex", flexDirection: "row" }} >
                                                <Typography style={{
                                                    letterSpacing: "0.4px", fontSize: "13px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir", display: '-webkit-box',
                                                    overflow: 'hidden',
                                                    WebkitBoxOrient: 'vertical',
                                                    WebkitLineClamp: 3,
                                                }} colo={"rgba(16, 16, 16, 0.6)"} >Display Name: {test_kit_sources.display_name} </Typography>
                                            </Grid>
                                            <Grid item xs={12} style={{ marginBottom: "5px" }} >
                                                <Typography style={{
                                                    letterSpacing: "0.4px", fontSize: "13px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir", display: '-webkit-box',
                                                    overflow: 'hidden',
                                                    WebkitBoxOrient: 'vertical',
                                                    WebkitLineClamp: 3,
                                                }} color={"#313237"}>Description: </Typography>
                                                <Typography style={{
                                                    letterSpacing: "0.4px", fontSize: "13px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir", display: '-webkit-box',
                                                    overflow: 'hidden',
                                                    WebkitBoxOrient: 'vertical',
                                                    WebkitLineClamp: 3,
                                                }} color={"rgba(16, 16, 16, 0.6)"}> {test_kit_sources.description_1}</Typography>
                                                <Typography style={{
                                                    letterSpacing: "0.4px", fontSize: "13px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir", display: '-webkit-box',
                                                    overflow: 'hidden',
                                                    WebkitBoxOrient: 'vertical',
                                                    WebkitLineClamp: 3,
                                                }} color={"rgba(16, 16, 16, 0.6)"}> {test_kit_sources.description_2}</Typography>
                                            </Grid>
                                            <Grid item xs={12} style={{ borderBottom: "0.5px solid rgba(0, 0, 0, 0.16)" }} />
                                            <Grid item xs={12} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
                                                <Typography style={{
                                                    letterSpacing: "0.4px", fontSize: "14px", lineHeight: "20px", fontFamily: "Avenir-Black", display: '-webkit-box',
                                                    overflow: 'hidden',
                                                    WebkitBoxOrient: 'vertical',
                                                    WebkitLineClamp: 3,
                                                }} color={"#313237"}>See test kits</Typography>
                                                <Image src={RightArrow} alt='rightArrow' width={"20vw"} height={"20vh"} onClick={() => router.push({ pathname: '/test-kits/test-kit-inventory' })} />
                                            </Grid>
                                        </Grid>
                                    </StyledTableCell>
                                </StyledTableRow>
                                </TableBody>
                                </Table>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
export default TestKitSources;