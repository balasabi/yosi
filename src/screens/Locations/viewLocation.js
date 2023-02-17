import React, { useState } from 'react';
import { Typography, Grid, Button, TableRow, Table, TableHead, TableBody, tableCellClasses, tableRowClasses, styled, TableCell, Dialog, DialogContent, DialogTitle } from '@mui/material';
import CustomizedButtons from '../../components/CustomButton';
import Plus from '../../../public/Images/plus.png';
import editIcon from '../../../public/Images/editIcon.png';
import Image from 'next/image';
import AddLocations from './AddLocation';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    [`&.${tableRowClasses.root}`]: {
        height: "14px"
    }
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: 'rgba(2, 55, 81, 0.05)',
        borderBottom: '1px solid #E7E7E7',
        color: '#2E2E2E',
        padding: "10px",
        fontFamily: 'Avenir-Heavy',
        fontSize: '1em',
        lineHeight: '27px'
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: "1em",
        padding: "1px",
        padding: '4px',
        fontFamily: 'Avenir-Book',
        fontSize: '1em',
        lineHeight: '24px'
    },
}))

function ViewLocation(props) {
    const [state, setState] = useState({
        isAdd: false,
        mode: "Add",
    })

    const handleAddLocation = (param) => {
        setState({ ...state, mode: param, isAdd: true })
    };

    const handleCloseLocation = () => {
        setState({ ...state, isAdd: false })
    };

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} style={{ padding: '30px', background: '#EBF4F1', borderBottomRightRadius: '60px' }}>
                    <Typography color='#02513B' style={{ fontSize: '36px', fontFamily: 'Avenir-Bold' }}>Avandale (AVD)</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography className='header'>Available test types in Avandale</Typography>
                </Grid>
                <Grid item xs={12} style={{ display: 'flex', alignItems: 'center' }}>
                    <CustomizedButtons variant="contained" onClick={() => handleAddLocation("Add")} style={{ padding: "4px 15px 4px 15px", marginLeft: "10px", }}>
                        <Image src={Plus} alt={"plus"} width={14} height={15} /> <Typography style={{ marginLeft: "5px" }}>Add location</Typography></CustomizedButtons>
                </Grid>
                <Grid item xs={12}>
                    <Table>
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell>Lab name</StyledTableCell>
                                <StyledTableCell>Lab code</StyledTableCell>
                                <StyledTableCell>Lab manager</StyledTableCell>
                                <StyledTableCell>Address </StyledTableCell>
                                <StyledTableCell>Status</StyledTableCell>
                                <StyledTableCell>Action</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow>
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
                            <Typography style={{ paddingBottom: '10px', fontWeight: "bold", fontFamily: 'Avenir-Heavy' }}>{state.mode === "Add" ? "Add Location" : "Edit location"}</Typography>
                            <div style={{ background: '#E8E8E8', height: 1 }}></div>
                        </DialogTitle>
                        <DialogContent>
                            <AddLocations close={handleCloseLocation} mode={state.mode} />
                        </DialogContent>
                    </Dialog>
                </Grid>
            </Grid>
        </>
    )
}

export default ViewLocation;