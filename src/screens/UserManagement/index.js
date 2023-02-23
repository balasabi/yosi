import React, { useState } from 'react';
import {
    Grid, Typography, Select, MenuItem, Table, TableBody, TableCell, tableCellClasses,
    TableRow, TableHead, TableContainer, Checkbox, Button, Paper, TablePagination,
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
import { useDispatch, useSelector } from 'react-redux';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: 'rgba(2, 55, 81, 0.05)',
        borderBottom: '1px solid #E7E7E7',
        color: '#2E2E2E',
        padding: "2px",
        fontFamily: 'Avenir-Heavy',
        fontSize: '1.1em',
        paddingLeft:"30px"
    },
    [`&.${tableCellClasses.body}`]: {
        color: '#2E2E2E',
        fontSize: "1em",
        padding: "1px",
        fontFamily: "Avenir-Book",
        fontStyle: "normal",
        fontSize: '16px',
        paddingLeft:"30px"
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
        fontFamily: [
            'Avenir-Book'
        ].join(","),
        "&:focus": {
            border: 0,
            backgroundColor: "#EBF4F1",
        },
        "&:active": {
            border: 0,
            backgroundColor: "#EBF4F1"
        }
    }
}));

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
    const [state, setState] = useState({
        status: "",
        roles: "",
        users:
            [{ "id": 1, "name": "Aenny", "email": "kenny123@gmail.com", "phone": "12345678900", "role": "Admin", "status": "Active" }, { "id": 2, "name": "Jenny", "email": "kenny123@gmail.com", "phone": "12345678900", "role": "Admin", "status": "Active" }, { "id": 3, "name": "Menny", "email": "kenny123@gmail.com", "phone": "12345678900", "role": "Admin", "status": "Active" },
            { "id": 4, "name": "Benny", "email": "kenny123@gmail.com", "phone": "12345678900", "role": "Admin", "status": "Active" }, { "id": 5, "name": "Zenny", "email": "kenny123@gmail.com", "phone": "12345678900", "role": "Admin", "status": "Active" }, { "id": 6, "name": "Wenny", "email": "kenny123@gmail.com", "phone": "12345678900", "role": "Admin", "status": "Active" },
            { "id": 7, "name": "Cenny", "email": "kenny123@gmail.com", "phone": "12345678900", "role": "Admin", "status": "Active" }, { "id": 8, "name": "kenny", "email": "kenny123@gmail.com", "phone": "12345678900", "role": "Admin", "status": "Active" }, { "id": 9, "name": "Xenny", "email": "kenny123@gmail.com", "phone": "12345678900", "role": "Admin", "status": "Active" },
            { "id": 10, "name": "Denny", "email": "kenny123@gmail.com", "phone": "12345678900", "role": "Admin", "status": "Active" }, { "id": 11, "name": "kenny", "email": "kenny123@gmail.com", "phone": "12345678900", "role": "Admin", "status": "Active" }, { "id": 12, "name": "Renny", "email": "kenny123@gmail.com", "phone": "12345678900", "role": "Admin", "status": "Active" },
            { "id": 13, "name": "Kenny", "email": "kenny123@gmail.com", "phone": "12345678900", "role": "Admin", "status": "Active" }, { "id": 14, "name": "kenny", "email": "kenny123@gmail.com", "phone": "12345678900", "role": "Admin", "status": "Active" }, { "id": 15, "name": "Qenny", "email": "kenny123@gmail.com", "phone": "12345678900", "role": "Admin", "status": "Active" },
            { "id": 16, "name": "Wenny", "email": "kenny123@gmail.com", "phone": "12345678900", "role": "Admin", "status": "Active" }, { "id": 17, "name": "Penny", "email": "kenny123@gmail.com", "phone": "12345678900", "role": "Admin", "status": "Active" }, { "id": 18, "name": "Ienny", "email": "kenny123@gmail.com", "phone": "12345678900", "role": "Admin", "status": "Active" },
            { "id": 19, "name": "Jenny", "email": "kenny123@gmail.com", "phone": "12345678900", "role": "Admin", "status": "Active" }, { "id": 20, "name": "Oenny", "email": "kenny123@gmail.com", "phone": "12345678900", "role": "Admin", "status": "Active" }, { "id": 21, "name": "Menny", "email": "kenny123@gmail.com", "phone": "12345678900", "role": "Admin", "status": "Active" },
            { "id": 22, "name": "Lenny", "email": "kenny123@gmail.com", "phone": "12345678900", "role": "Admin", "status": "Active" }, { "id": 23, "name": "Renny", "email": "kenny123@gmail.com", "phone": "12345678900", "role": "Admin", "status": "Active" }, { "id": 24, "name": "Nenny", "email": "kenny123@gmail.com", "phone": "12345678900", "role": "Admin", "status": "Active" }],
        page: 0,
        rowsPerPage: 10,
        isActive: false,
        addUserOpen: false,
        openPermission: false,
        sort: false,
        isClickCheckBox: false,
        selectedUser: [],
        mode: "ADD",
        editParam:'',
        selectedTab:"U"
    })

    const users = useSelector((state) => state.userManagementReducer.users)
// console.log("users"+JSON.stringify(users))
    function compare(a, b) {
        console.log("&&&&&")
        if (state.sort) {
            if (a.name < b.name) {
                return -1
            }
        } else {
            if (a.name > b.name) {
                return 1
            }
        }
        // if (state.sort === false) {
        //     if (a.name < b.name) {
        //         return -1
        //     }
        // } if (state.sort === true) {
        //     if (a.name > b.name) {
        //         return 1
        //     }
        // }
        // return 0
    };

    const sorting = () => {
        alert("***")
        let x = state.users.sort(compare)
        // console.log("&&&&&" + JSON.stringify(x))
        // console.log("true=====" + state.sort)
        setState({ ...state, users: x, sort: !state.sort })
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
        setState({ ...state, selectedTab: "P" })
    };

    const addUser = () => {
        setState({ ...state, addUserOpen: true, mode: "ADD" })
    };

    const editUser = (param) => {
        // console.log("PARAM"+JSON.stringify(param))
        setState({ ...state, addUserOpen: true, mode: "EDIT", editParam:param })
    };

    const handleClose = () => {
        setState({ ...state, addUserOpen: false })
    };

    const permissionClose = () => {
        setState({ ...state, openPermission: false, isActive: false,selectedTab:"U" })
    };

    // const checkBoxAction = () => {
    //     setState({
    //         ...state,
    //         isClickCheckBox: !state.isClickCheckBox,
    //         selectedUser: !state.isClickCheckBox === true ? _.pluck(state.users, 'id') : []
    //     })
    // }

    const singleSelectAction = (param) => {
        if (state.selectedUser.length > 0 && state.selectedUser.includes(param)) {
            setState({
                ...state,
                selectedUser: state.selectedUser.filter((item) => item != param)
            })
        }
        else {
            let result = state.selectedUser
            result.push(param)
            setState({
                selectedUser: result
            })
        }
    }

    const Placeholder = ({ children }) => {
        return <div style={{ color: "#101010", fontWeight: 900, fontSize: "14px", fontFamily: "Avenir", fontStyle: "normal" }}>{children}</div>;
    };

    const handleChange = (e, param) => {
        if (param === "R") {
            setState({ ...state, roles: e.target.value })
        } else if (param === "S") {
            setState({ ...state, status: e.target.value })
        }
    };

    const buttonAction = (param) => {
        setState({ userManagementMode: param })
    };

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography className='header'>Employee Management</Typography>
                </Grid>
                <Grid item xs={12} style={{ borderBottom: '1px solid #C8C8C8' }}>
                    <Grid container>
                        <Grid item xs={12} sm={3}>
                            <Grid container>
                            <Grid item xs={6} sm={3} lg={3} >
                                        <CustomizedButtons variant="text" className='switchHeading'  style={{ color: state.selectedTab === "U" ? "#4D1EC0" : "#474747", borderBottom: state.selectedTab === "U" ? "5px solid #4D1EC0" : "none", borderRadius: "0px" }}  onClick={() => handleUser()}>Users</CustomizedButtons>
                                    </Grid>
                                     <Grid item xs={6} sm={8} lg={9} >
                                        <CustomizedButtons variant="text" className='switchHeading' style={{ color: state.selectedTab === "P" ? "#4D1EC0" : "#474747", borderBottom: state.selectedTab === "P" ? "5px solid #4D1EC0" : "none", borderRadius: "0px" }}  onClick={() => handlePermission()}>Roles and Permission</CustomizedButtons>
                                  </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent='flex-end'>
                        <Grid item xs={12} sm={6} textAlign="flex-start">
                            <CustomizedButtons variant="contained" onClick={() => addUser()} style={{ padding: "4px 15px 4px 15px", marginLeft: "10px", }}>
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
                                        value={state.roles}
                                        onChange={(e) => handleChange(e, "PR")}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        renderValue={
                                            state.roles !== "" ? undefined : () => <Placeholder>All Roles</Placeholder>
                                        }>
                                        <MenuItem value={"Admin"}>Admin</MenuItem>
                                        <MenuItem value={"Doctor"}>Doctor</MenuItem>
                                        <MenuItem value={"Lab Technician"}>Lab Technician</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl sx={{ m: 1, minWidth: 60, minHeight: 10, '.MuiOutlinedInput-notchedOutline': { border: 0 } }} size="small">
                                    <Select
                                        value={state.status}
                                        onChange={(e) => handleChange(e, "PR")}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        renderValue={
                                            state.status !== "" ? undefined : () => <Placeholder>All Status</Placeholder>
                                        }>
                                        <MenuItem value={"Active"}>Active</MenuItem>
                                        <MenuItem value={"Inactive"}>Inactive</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <TableContainer component={Paper} >
                        <Table >
                            <TableHead>
                                <StyledTableRow>
                                   {/* <StyledTableCell>
                                         <Checkbox 
                                        checked={state.isClickCheckBox}
                                        onClick={() => checkBoxAction()} />
                                        </StyledTableCell>*/}
                                    <StyledTableCell>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography className='tableHeader'>Name</Typography>
                                            <div style={{ display: "flex", flexDirection: 'column' }}><ArrowDropUpIcon style={{ height: "20px", width: "50px", marginBottom: -12 }} onClick={() => sorting()} />
                                                <ArrowDropDownIcon style={{ height: "20px", width: "50px" }} /></div>
                                        </div>
                                    </StyledTableCell>
                                    <StyledTableCell>Email ID</StyledTableCell>
                                    <StyledTableCell>Phone</StyledTableCell>
                                    <StyledTableCell>Role</StyledTableCell>
                                    <StyledTableCell>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography className='tableHeader'>Status</Typography>
                                            <div style={{ display: "flex", flexDirection: 'column' }}><ArrowDropUpIcon style={{ height: "20px", width: "50px", marginBottom: -12 }} onClick={() => alert("WIP")} />
                                                <ArrowDropDownIcon style={{ height: "20px", width: "50px" }} onClick={() => alert("WIP")} /></div>
                                        </div>
                                    </StyledTableCell>
                                    <StyledTableCell>Action</StyledTableCell>
                                </StyledTableRow>
                            </TableHead>
                            { users.length > 0 ? users.slice(state.page * state.rowsPerPage, state.page * state.rowsPerPage + state.rowsPerPage).map((item, index) =>
                             <TableBody key={index.toString()} style={{ background: (index % 2) == 0 ? "#FFF" : "rgba(240, 240, 240, 0.2)" }}>
                                 <StyledTableRow>
                                        {/* <StyledTableCell>
                                            <Checkbox
                                                checked={state.selectedUser.includes(item.id)}
                                                onClick={() => singleSelectAction(item.id)}
                                            />
                                            </StyledTableCell> */}
                                        <StyledTableCell>{item.first_name}{item.last_name}</StyledTableCell>
                                        <StyledTableCell>{item.email}</StyledTableCell>
                                        <StyledTableCell>{item.phone_number}</StyledTableCell>
                                        <StyledTableCell>{item.role}</StyledTableCell>
                                        <StyledTableCell>{item.status}</StyledTableCell>
                                        <StyledTableCell className='tableContent'><Button style={{ textTransform: "none", color: "#000" }} onClick={() => editUser(item)} ><Image src={editIcon} alt="edit" height={15} width={15} style={{ padding: 5 }} /> Edit</Button></StyledTableCell>
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
                        count={users.length}
                        page={state.page}
                        rowsPerPage={state.rowsPerPage}
                        labelRowsPerPage="No. of items per page"
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={(e) => handleChangeRowsPerPage(e)} />
                </Grid>
                <Dialog open={state.addUserOpen} onClose={handleClose} maxWidth={"sm"} PaperProps={{ sx: { borderRadius: "10px" } }}>
                <Grid container>
                            <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end" }}>
                                <DisabledByDefaultRoundedIcon style={{ color: "#5824D6", fontSize: "45px", position: "absolute", cursor:"pointer" }} onClick={() => handleClose()} />
                            </Grid>
                        </Grid>
                        <DialogTitle>
                        <Typography style={{ paddingBottom: '10px', fontWeight: "bold", fontSize:"20px" }}>{state.mode === "ADD" ? "Add New User" : "Edit New User"} </Typography>
                        <div style={{ background: '#E8E8E8', height: 1 }}></div>
                    </DialogTitle>
                    <DialogContent>
                        <AddUser close={handleClose} mode={state.mode} param = {state.editParam}  />
                    </DialogContent>
                </Dialog>
                <Drawer anchor={'right'} open={state.openPermission} PaperProps={{ sx: { marginTop: '75px' } }}>
                    <RolesAndPermission dialogClose={permissionClose} />
                </Drawer>
            </Grid>
        </>
    )
}

export default UsersManagement;