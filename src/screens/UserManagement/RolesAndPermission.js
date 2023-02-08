import React, { useState } from 'react';
import { Grid, Checkbox, Table, TableBody, TableContainer, TableCell, TableHead, TableRow, tableCellClasses, IconButton, Paper } from '@mui/material';
import Image from 'next/image';
import dialogClose from '../../../public/Images/dialogClose.png';
import { styled } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: 'rgba(2, 55, 81, 0.05)',
        borderBottom: '1px solid #E7E7E7',
        color: theme.palette.common.black,
        padding: "15px",
        fontFamily: 'Avenir-Regular',
        fontSize: '16px',
        // lineHeight: "24px",
        fontStyle: "normal"
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: "16px",
        padding: "8px",
        fontFamily: 'Avenir-Regular',
        // fontStyle: "normal",
        fontSize: '16px',
        // lineHeight: "24px"
    },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: "#FFF",
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function RolesAndPermission(props) {
    const [state, setState] = useState({

    });

    const roles = ["Admin", "Lab technician", "System admin", "Developer", "Data analyst", "Location Manager", "PSR tech", "Lab executive", "Client Manager", "Client operator", "Client physician"];
    const sideBar = ["Dashboard", "Patients", "Test Type", "Test result", "Test upload results", "Location", "Location Test Type", "Test Group", "User and Access"]

    return (
        <>
            <Grid container alignItems='center'>
                <Grid item xs={12}>
                    <IconButton onClick={props.dialogClose}><Image src={dialogClose} alt={'close'} width={25} height={25} /></IconButton>
                </Grid>
                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table sx={{ width: "95vw" }}>
                            <TableHead>
                                <StyledTableRow>
                                    <StyledTableCell style={{ fontWeight: "bold" }}>Pages</StyledTableCell>
                                    {roles.map((item, index) =>
                                        <StyledTableCell align="center" style={{ fontWeight: "bold" }} key={index.toString()}> {item}</StyledTableCell>
                                    )}
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                {sideBar.map((item, index) =>
                                    <StyledTableRow  key={index.toString()} style={{ background: (index % 2) == 0 ? "#FFF" : "rgba(240, 240, 240, 0.2)" }}>
                                        <StyledTableCell>{item}</StyledTableCell>
                                        <StyledTableCell align="center"><Checkbox /></StyledTableCell>
                                        <StyledTableCell align="center"><Checkbox /></StyledTableCell>
                                        <StyledTableCell align="center"><Checkbox /></StyledTableCell>
                                        <StyledTableCell align="center"><Checkbox /></StyledTableCell>
                                        <StyledTableCell align="center"><Checkbox /></StyledTableCell>
                                        <StyledTableCell align="center"><Checkbox /></StyledTableCell>
                                        <StyledTableCell align="center"><Checkbox /></StyledTableCell>
                                        <StyledTableCell align="center"><Checkbox /></StyledTableCell>
                                        <StyledTableCell align="center"><Checkbox /></StyledTableCell>
                                        <StyledTableCell align="center"><Checkbox /></StyledTableCell>
                                        <StyledTableCell align="center"><Checkbox /></StyledTableCell>
                                    </StyledTableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </>
    )
}

export default RolesAndPermission;