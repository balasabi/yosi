import React, { useState, useEffect } from 'react';
import {
    Grid, Typography, Select, MenuItem, Table, TableBody, TableCell, tableCellClasses,
    TableRow, TableHead, TableContainer, Button, Paper, TablePagination,
    FormControl, Dialog, DialogTitle, DialogContent, Drawer,
} from '@mui/material';
import plus from '../../../public/Images/plus.png';
import { styled } from '@mui/material';
import Image from 'next/image';
import CustomizedButtons from '../../components/CustomButton';
import editIcon from '../../../public/Images/editIcon.png';
import InputBase from "@mui/material/InputBase";
import AddUser from './AddUser';
import RolesAndPermission from './RolesAndPermission';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import _ from 'underscore';
import { useSelector } from 'react-redux';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: 'rgba(2, 55, 81, 0.05)',
        borderBottom: '1px solid #E7E7E7',
        color: '#2E2E2E',
        padding: "2px",
        fontFamily: 'Avenir-Heavy',
        fontSize: '1.1em',
        paddingLeft: "30px"
    },
    [`&.${tableCellClasses.body}`]: {
        color: '#2E2E2E',
        fontSize: "1em",
        padding: "1px",
        fontFamily: "Avenir-Book",
        fontStyle: "normal",
        fontSize: '16px',
        paddingLeft: "30px"
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

function UsersManagement(props) {

    const users = useSelector(state => state.userManagementReducer.users)

    const [state, setState] = useState({
        roles: "",
        page: 0,
        rowsPerPage: 10,
        isActive: false,
        addUserOpen: false,
        openPermission: false,
        sort: false,
        isClickCheckBox: false,
        selectedUser: [],
        mode: "ADD",
        editParam: '',
        selectedTab: "U",
        name: "",
        email: "",
        phone: "",
        status: "Active",
        sortOrder: false,
        users:users
    })
    const [selectedRoles, setSelectedRoles] = useState('All');
    const [selectedStatus, setSelectedStatus] = useState('All');
    const [height, setHeight] = useState(600);

    const updateDimensions = () => {
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        setState({...state, users:users})
        updateDimensions()
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);      
    }, [users])

    const handleChange = (e, param) => {
        if (param === "R") {
            setSelectedRoles(e.target.value)
        } else {
            setSelectedStatus(e.target.value)
        }
    }

    const sortByParam = (param) => {
        let records =[... state.users]
        if (!state.sortOrder) {
            let result = records.sort((a, b) => (a[param] > b[param]) ? 1 : -1);
            setState({ ...state, users: result, sortOrder: true })
        } else {
            let result = records.sort((a, b) => (b[param] > a[param]) ? 1 : -1);
            setState({ ...state, users: result, sortOrder: false })
        }
    }

    const handleChangePage = (event, newPage) => {
        setState({ ...state, page: newPage })
    };

    const handleChangeRowsPerPage = (event) => {
        setState({ ...state, rowsPerPage: event.target.value, page: 0 });
    };

    const handlePermission = () => {
        setState({ ...state, selectedTab: "P", openPermission: true })
    };

    const handleUser = () => {
        setState({ ...state, selectedTab: "U" })
    };

    const addUser = () => {
        setState({ ...state, addUserOpen: true, mode: "ADD", editParam: '' })
    };

    const editUser = (param) => {
        setState({ ...state, addUserOpen: true, mode: "EDIT", editParam: param })
    };

    const handleClose = () => {
        setState({ ...state, addUserOpen: false })
    };

    const permissionClose = () => {
        setState({ ...state, openPermission: false, isActive: false, selectedTab: "U" })
    };

    const Placeholder = ({ children }) => {
        return <div style={{ color: "#101010", fontWeight: 900, fontSize: "14px", fontFamily: "Avenir", fontStyle: "normal" }}>{children}</div>;
    };

    let displayRecord = [];

    if (selectedStatus === "All" && selectedRoles === "All") {
        displayRecord = state.users
    } else if (selectedRoles === "All" && selectedStatus !== "All") {
        displayRecord = users.filter((item) => item.status === selectedStatus)
    } else if (selectedRoles !== "All" && selectedStatus === "All") {
        displayRecord = users.filter((item) => item.role === selectedRoles)
    } else if (selectedRoles !== "All" && selectedStatus !== "All") {
        displayRecord = users.filter((item) => item.role === selectedRoles && item.status === selectedStatus)
    }

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography className='header'>Employee Management</Typography>
                </Grid>
                <Grid item xs={12} style={{ borderBottom: '1px solid #C8C8C8' }}>
                    <Grid container>
                        <Grid item xs={12} >
                            <Grid container>
                                <Grid item xs={6} sm={2} md={1} lg={1} xl={1}>
                                    <CustomizedButtons variant="text" className='switchHeading' style={{ color: state.selectedTab === "U" ? "#4D1EC0" : "#474747", borderBottom: state.selectedTab === "U" ? "5px solid #4D1EC0" : "none", borderRadius: "0px" }} onClick={() => handleUser()}>Users</CustomizedButtons>
                                </Grid>
                                <Grid item xs={6} sm={5} md={5} lg={4} xl={1}>
                                    <CustomizedButtons variant="text" className='switchHeading' style={{ color: state.selectedTab === "P" ? "#4D1EC0" : "#474747", borderBottom: state.selectedTab === "P" ? "5px solid #4D1EC0" : "none", borderRadius: "0px" }} onClick={() => handlePermission()}>Roles and Permission</CustomizedButtons>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent='flex-end'>
                        <Grid item xs={12} sm={6} textAlign="flex-start">
                            <CustomizedButtons variant="contained" onClick={() => addUser()} style={{ padding: "4px 15px 4px 15px", marginLeft: "10px" }}>
                                <Image src={plus} alt="+" width={14} height={15} />
                                <Typography style={{ marginLeft: "3px" }}>
                                    New User
                                </Typography>
                            </CustomizedButtons>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container justifyContent="flex-end" alignItems="center">
                                <Typography className='miniLiteText'>Filter by</Typography>
                                <FormControl sx={{ m: 1, minWidth: 60, minHeight: 10, '.MuiOutlinedInput-notchedOutline': { border: 0, borderRight: "2px solid #E8E8E8", borderRadius: 0 } }} size="small">
                                    <Select
                                        value={selectedRoles}
                                        onChange={(e) => handleChange(e, "R")}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        renderValue={
                                            selectedRoles !== "All" ? undefined : () => <Placeholder>All Roles</Placeholder>
                                        }>
                                        <MenuItem value={"All"}>All</MenuItem>
                                        <MenuItem value={"Admin"}>Admin</MenuItem>
                                        <MenuItem value={"Consumer"}>Consumer</MenuItem>
                                        <MenuItem value={"Lab Technician"}>Lab Technician</MenuItem>
                                        <MenuItem value={"Location Manager"}>Location Manager</MenuItem>
                                        <MenuItem value={"System Admin"}>System Admin</MenuItem>
                                        <MenuItem value={"Lab Executive"}>Lab Executive</MenuItem>
                                        <MenuItem value={"PSR Tech"}>PSR Tech</MenuItem>
                                        <MenuItem value={"Logistics"}>Logistics</MenuItem>
                                        <MenuItem value={"Client Manager"}>Client Manager</MenuItem>
                                        <MenuItem value={"Client Physician"}>Client Physician</MenuItem>
                                        <MenuItem value={"DB"}>DB</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl sx={{ m: 1, minWidth: 60, minHeight: 10, '.MuiOutlinedInput-notchedOutline': { border: 0 } }} size="small">
                                    <Select
                                        value={selectedStatus}
                                        onChange={(e) => handleChange(e, "S")}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        renderValue={
                                            selectedStatus !== "All" ? undefined : () => <Placeholder>All Status</Placeholder>
                                        }>
                                        <MenuItem value={"All"}>All</MenuItem>
                                        <MenuItem value={"Active"}>Active</MenuItem>
                                        <MenuItem value={"Inactive"}>Inactive</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table >
                            <TableHead>
                                <StyledTableRow>
                                    <StyledTableCell>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography className='tableHeader'>Name</Typography>
                                            <div style={{ display: "flex", flexDirection: 'column' }}><ArrowDropUpIcon style={{ height: "20px", width: "50px", marginBottom: -12 }} onClick={() => sortByParam("first_name")} />
                                                <ArrowDropDownIcon style={{ height: "20px", width: "50px" }} onClick={() => sortByParam("first_name")} /></div>
                                        </div>
                                    </StyledTableCell>
                                    <StyledTableCell>Email ID</StyledTableCell>
                                    <StyledTableCell>Phone</StyledTableCell>
                                    <StyledTableCell>Role</StyledTableCell>
                                    <StyledTableCell>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography className='tableHeader'>Status</Typography>
                                            <div style={{ display: "flex", flexDirection: 'column' }}><ArrowDropUpIcon style={{ height: "20px", width: "50px", marginBottom: -12 }} onClick={() => sortByParam("status")} />
                                                <ArrowDropDownIcon style={{ height: "20px", width: "50px" }} onClick={() => sortByParam("status")} /></div>
                                        </div>
                                    </StyledTableCell>
                                    <StyledTableCell>Action</StyledTableCell>
                                </StyledTableRow>
                            </TableHead>
                            {displayRecord.length > 0 ? displayRecord.slice(state.page * state.rowsPerPage, state.page * state.rowsPerPage + state.rowsPerPage).map((item, index) =>
                                <TableBody key={index.toString()} style={{ background: (index % 2) == 0 ? "#FFF" : "rgba(240, 240, 240, 0.2)", borderBottom: "1.1px solid #F2F2F2" }}>
                                    <StyledTableRow>
                                        <StyledTableCell>{item.first_name} {item.last_name}</StyledTableCell>
                                        <StyledTableCell>{item.email}</StyledTableCell>
                                        <StyledTableCell>{item.phone_number}</StyledTableCell>
                                        <StyledTableCell>{item.role}</StyledTableCell>
                                        <StyledTableCell>{item.status}</StyledTableCell>
                                        <StyledTableCell className='tableContent'>
                                            <div style={{ textTransform: "none", color: "#000" }}>
                                                <Button  onClick={() => editUser(item)}>
                                                    <Image src={editIcon} alt="edit" height={15} width={15} style={{ padding: 5 }} /> Edit</Button>
                                            </div>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                </TableBody>)
                                :
                                <TableBody>
                                    <StyledTableRow>
                                        <StyledTableCell align='center' colSpan={7}><Typography >There are no user available</Typography></StyledTableCell>
                                    </StyledTableRow>
                                </TableBody>}
                        </Table>
                    </TableContainer>
                    <TablePagination component="div"
                        rowsPerPageOptions={[10, 25]}
                        count={state.users.length}
                        page={state.page}
                        rowsPerPage={state.rowsPerPage}
                        labelRowsPerPage="No. of items per page"
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={(e) => handleChangeRowsPerPage(e)} />
                </Grid>
                <Dialog open={state.addUserOpen} onClose={handleClose} maxWidth={"sm"} PaperProps={{ sx: { borderRadius: "10px" } }}>
                    <Grid container>
                        <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end" }}>
                            <DisabledByDefaultRoundedIcon style={{ color: "#5824D6", fontSize: "45px", position: "absolute", cursor: "pointer" }} onClick={() => handleClose()} />
                        </Grid>
                    </Grid>
                    <DialogTitle>
                        <Typography style={{ paddingBottom: '10px', fontWeight: "bold", fontSize: "20px" }}>{state.mode === "ADD" ? "Add New User" : "Edit New User"} </Typography>
                        <div style={{ background: '#E8E8E8', height: 1 }}></div>
                    </DialogTitle>
                    <DialogContent>
                        <AddUser close={handleClose} mode={state.mode} param={state.editParam} />
                    </DialogContent>
                </Dialog>
                <Drawer anchor={'right'} open={state.openPermission} PaperProps={{ sx: { marginTop: '75px', height: height > 700 ? height / 1.05 : height / 1.17 } }}>
                    <RolesAndPermission dialogClose={permissionClose} />
                </Drawer>
            </Grid>
        </>
    )
}

export default UsersManagement;