import React, { useState } from 'react';
import { Typography, Grid, Button, TableRow, Table, TableHead, TableBody, Checkbox, tableCellClasses, tableRowClasses, styled, TableCell, Dialog, DialogContent, DialogActions, DialogTitle } from '@mui/material';
import CustomizedButtons from '../../components/CustomButton';
import Plus from '../../../public/Images/plus.png';
import editIcon from '../../../public/Images/editIcon.png';
import Image from 'next/image';
import InputBase from "@mui/material/InputBase";
import style from '../../pages/_app';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    [`&.${tableRowClasses.root}`]: {
        height: "14px"
    }
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: 'rgba(2, 55, 81, 0.05)',
        borderBottom: '1px solid #E7E7E7',
        color: theme.palette.common.black,
        padding: "2px",
        fontFamily: 'Avenir-Heavy',
        fontSize: '1em',
        fontStyle: "normal"
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: "1em",
        padding: "1px",
        fontFamily: 'Avenir-Book',
        fontStyle: "normal",
        fontSize: '1em',
    },
}))

const CustomInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
        marginTop: theme.spacing(3)
    },
    "& .MuiInputBase-input": {
        position: "relative",
        backgroundColor: theme.palette.background.paper,
        fontSize: 16,
        padding: "4px",
        backgroundColor: "#FBF7F4",
        fontFamily: [
            'Avenir-Book'
        ].join(","),
        "&:focus": {
            border: 0,
            backgroundColor: "#FBF7F4",
        },
        "&:active": {
            border: 0,
            backgroundColor: "#FBF7F4"
        }
    }
}));

function ViewLocation(props) {
    const [state, setState] = useState({
        isAdd: false,
        mode: "Add",
        locationCode: "",
        manager: '',
        status: '',
        address: '',
        name: '',
    })

    const handleAddLocation = (param) => {
        console.log("PAram" + JSON.stringify(param))
        setState({ ...state, mode: param, isAdd: true })
    };

    const handleCloseLocation = () => {
        setState({ ...state, isAdd: false })
    };

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Typography>View Location</Typography>
                </Grid>
                <Grid item xs={12}>
                    <CustomizedButtons variant="contained" onClick={() => handleAddLocation("Add")}><div>
                        <Image src={Plus} alt={"plus"} width={14} height={15} /> Add location</div></CustomizedButtons>
                </Grid>
                <Grid item xs={12}>
                    <Table>
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell>
                                    <Checkbox
                                    /></StyledTableCell>
                                <StyledTableCell style={{ fontWeight: "bold" }}>Lab name</StyledTableCell>
                                <StyledTableCell style={{ fontWeight: "bold" }}>Lab code</StyledTableCell>
                                <StyledTableCell style={{ fontWeight: "bold" }}>Lab manager</StyledTableCell>
                                <StyledTableCell style={{ fontWeight: "bold" }}>Address </StyledTableCell>
                                <StyledTableCell style={{ fontWeight: "bold" }}>Status</StyledTableCell>
                                <StyledTableCell style={{ fontWeight: "bold" }}>Action</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow>
                                <StyledTableCell>
                                    <Checkbox
                                    /></StyledTableCell>
                                <StyledTableCell>Lab name</StyledTableCell>
                                <StyledTableCell>Lab manager</StyledTableCell>
                                <StyledTableCell>DSP</StyledTableCell>
                                <StyledTableCell>Address </StyledTableCell>
                                <StyledTableCell>Status</StyledTableCell>
                                <StyledTableCell><Button style={{ textTransform: "none", color: "#000" }} onClick={() => handleAddLocation("Edit")} ><Image src={editIcon} alt="edit" height={15} width={15} style={{ padding: 5 }} /> Edit</Button></StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                    </Table>

                    <Dialog open={state.isAdd} onClose={() => handleCloseLocation()}>
                        <DialogTitle>
                            <Typography>{state.mode === "Add" ? "Add Location" : "Edit location"}</Typography>
                        </DialogTitle>
                        <DialogContent>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <CustomInput value={state.locationCode}
                                                size='small' fullWidth />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <CustomInput value={state.name} size='small' fullWidth />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <CustomInput value={state.manager} fullWidth size='small' />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <CustomInput value={state.address} fullWidth size='small' />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <CustomInput value={state.status} fullWidth size='small' />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <CustomizedButtons variant='contained' onClick={() => handleCloseLocation()}>Cancel</CustomizedButtons>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <CustomizedButtons variant='contained' >Submit</CustomizedButtons>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </DialogActions>
                    </Dialog>
                </Grid>
            </Grid>
        </>
    )
}

export default ViewLocation;