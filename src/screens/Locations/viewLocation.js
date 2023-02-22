import React, { useState } from 'react';
import { Typography, Grid, Button, TableRow, Table, TableHead, TableBody, tableCellClasses, tableRowClasses, styled,
     TableCell, Dialog, DialogContent, DialogTitle, TableFooter, TablePagination } from '@mui/material';
import CustomizedButtons from '../../components/CustomButton';
import Plus from '../../../public/Images/plus.png';
import editIcon from '../../../public/Images/editIcon.png';
import Image from 'next/image';
import AddLocations from './AddLocation';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import { useDispatch, useSelector } from 'react-redux';
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
        mode: "ADD",
        location: '',
        page: 0,
        rowsPerPage: 10,
    })
    const location = useSelector(state => state.locationReducer.location);
    // const handleAddLocation = (param) => {
    //     setState({ ...state, mode: param, isAdd: true })
    //     console.log("**mode******"+(state.mode))
    //     console.log("**isAdd******"+(state.isAdd))
    // };
    const addAction = () => {
        setState({ ...state, isAdd: true, mode: "ADD" })
        console.log("**mode***1***" + (state.mode))
    };

    const editAction = (param) => {
        setState({ ...state, isAdd: true, mode: "EDIT", location: param })
        console.log("**mode***2***" + (state.mode))
    };
    const handleCloseLocation = () => {
        setState({ ...state, isAdd: false })
    };
    const handleChangePage = (event, newPage) => {
        setState({ ...state, page: newPage });
    };

    const handleChangeRowsPerPage = (event) => {
        setState({ ...state, rowsPerPage: event.target.value, page: 0 });
    };
    // console.log("****location******"+JSON.stringify(location))
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} style={{ padding: '30px', background: 'rgba(100, 37, 254, 0.1)', borderBottomRightRadius: '60px' }}>
                    <Typography color='#4D1EC0' style={{ fontSize: '36px', fontFamily: 'Avenir-Bold' }}>Avandale (AVD)</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography className='header'>Available test types in Avandale</Typography>
                </Grid>
                <Grid item xs={12} style={{ display: 'flex', alignItems: 'center' }}>
                    <CustomizedButtons variant="contained" onClick={() => addAction()} style={{ padding: "4px 15px 4px 15px", marginLeft: "10px", }}>
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
                        { location.length>0 ? !!location && location.map((item, index) => (
                            <TableBody key={index.toString()} style={{ backgroundColor: (index % 2) ? "#FCFCFC" : "#FFFFFF", borderBottom: "1.1px solid #F2F2F2" }}>
                                <StyledTableRow>
                                    <StyledTableCell>{item.name}</StyledTableCell>
                                    <StyledTableCell>{item.location_code}</StyledTableCell>
                                    <StyledTableCell>{item.manager}</StyledTableCell>
                                    <StyledTableCell>{item.address}</StyledTableCell>
                                    <StyledTableCell>{item.status} </StyledTableCell>
                                    <StyledTableCell>
                                        <Button style={{ textTransform: "none", color: "#000" }} onClick={() => editAction(item)} >
                                            <Image src={editIcon} alt="edit" height={15} width={15} style={{ padding: 5 }} />
                                            Edit
                                        </Button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        )):
                         <TableBody>
                        <StyledTableRow>
                            <StyledTableCell align='center' colSpan={7}><Typography >There are no location available</Typography></StyledTableCell>
                        </StyledTableRow>
                    </TableBody>}
                    <TableFooter>
                                <TableRow align='left'>
                                    <TablePagination
                                        count={!!location && location.length}
                                        page={state.page}
                                        onPageChange={handleChangePage}
                                        rowsPerPage={state.rowsPerPage}
                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                        labelRowsPerPage={"No. of items per page : "}
                                        sx={{ borderBottom: "1.43px solid #D5DBE1" }}
                                    />
                                </TableRow>
                            </TableFooter>
                    </Table>

                    <Dialog open={state.isAdd} onClose={() => handleCloseLocation()}>
                        <Grid container>
                            <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end" }}>
                                <DisabledByDefaultRoundedIcon style={{ color: "#5824D6", fontSize: "45px", position: "absolute" }} onClick={() => handleCloseLocation()} />
                            </Grid>
                        </Grid>
                        <DialogTitle>
                            <Typography style={{ fontSize: "20px", paddingBottom: '10px', fontWeight: "bold", fontFamily: 'Avenir-Black' }}>{state.mode === "ADD" ? "Add location" : "Edit location"}</Typography>
                            <div style={{ background: '#E8E8E8', height: 1 }}></div>
                        </DialogTitle>
                        <DialogContent>
                            <AddLocations close={handleCloseLocation} mode={state.mode} data={state.location} />
                        </DialogContent>
                    </Dialog>
                </Grid>
            </Grid>
        </>
    )
}

export default ViewLocation;