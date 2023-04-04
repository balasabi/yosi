import React, { useState } from 'react';
import {
    Typography, Grid, TableRow, tableCellClasses, styled, TableCell, Table, TableBody, tableRowClasses, FormControl,
    Select, MenuItem, Dialog, DialogTitle, DialogContent, FormControlLabel, RadioGroup, Radio, InputBase, FormHelperText, IconButton,
} from '@mui/material';
import Image from 'next/image';
import CustomSearchInput from '../../components/CustomSearchInput';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CustomizedButtons from '../../components/CustomButton';
import Edit from '../../../public/Images/editIcon.png';
import Union from '../../../public/Images/plus.png';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import { createTestTypeAction, updateTestTypeAction, removeTestTypeAction } from "../../store/actions/testTypeAction";
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    [`&.${tableRowClasses.root}`]: {
        height: "14px"
    }
}));
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        border: "none",
        color: "#848991",
        fontFamily: "Avenir-Heavy",
    },
    [`&.${tableCellClasses.body}`]: {
        color: "#313233",
        border: "none",
        fontFamily: "Avenir-Book"
    }
}));

const CustomInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
        marginTop: theme.spacing(3)
    },
    "& .MuiInputBase-input": {
        position: "relative",
        fontSize: '1em',
        padding: "10px",
        backgroundColor: "#F0E9FF",
        borderRadius: "5px",
        fontFamily: [
            'Avenir-Book'
        ].join(","),
        "&:focus": {
            border: 0,
            backgroundColor: "#F0E9FF",
            border: "2px solid #6425FE",
        },
        "&:active": {
            border: "2px solid #6425FE",
            backgroundColor: "#F0E9FF"
        }
    }
}));

function TestType(props) {
    const [state, setState] = useState({
        test_type: [],
        id: "",
        name: "",
        code: "",
        display_name: "",
        description: "",
        status: "Active",
        result: "",
        date: "",
        addTestTypeOpen: false,
        statusFilter: "",
        mode: "ADD",
        searchText: null,
        selectedStatus: "All",
        nameError: false,
        codeError: false,
        isSearch: false
    })
    const dispatch = useDispatch();
    const test_type = useSelector(state => state.testTypeReducer.test_type);

    const Placeholder = ({ children }) => {
        return <div style={{ color: "#101010", fontWeight: 800, fontSize: "14px", fontFamily: "Avenir-Book", fontStyle: "normal" }}>{children}</div>;
    };

    const handleChange = (event, param) => {
        if (param === "S") {
            setState({ ...state, selectedStatus: event.target.value, isSearch: false, searchText: null, });
        }
    };

    const testTypeClose = () => {
        setState({ ...state, addTestTypeOpen: false })
    };

    const submit = async () => {
        let { id, name, code, display_name, description, description_2, status } = state;
        let isError = false;
        if (name === "" || name === null || name === undefined) {
            setState(ref => ({ ...ref, nameError: true }))
            isError = true;
        }
        if (code === "" || code === null || code === undefined) {
            setState(ref => ({ ...ref, codeError: true }))
            isError = true;
        }
        if (isError === false) {
            let data = {}
            data.id = id;
            data.code = code;
            data.name = name;
            data.display_name = display_name;
            data.description = description;
            data.status = status;
            if (state.mode === "ADD") {
                data.id = test_type.length + 1
                dispatch(createTestTypeAction(data))
            }
            else {
                data.id = id
                dispatch(updateTestTypeAction(data))
            }
            setState({ ...state, addTestTypeOpen: false })
        }

    };

    const cancel = () => {
        setState({ ...state, addTestTypeOpen: false })
    };

    const addAction = () => {
        setState({ ...state, mode: "ADD", addTestTypeOpen: true, id: "", name: "", code: "", display_name: "", description: "", nameError: false, codeError: false })
    };

    const editAction = (param) => {
        setState({ ...state, mode: "EDIT", addTestTypeOpen: true, id: param.id, code: param.code, name: param.name, code: param.code, display_name: param.display_name, description: param.description, status: param.status })
    };

    const testTypeAction = (param) => {
        Router.push({ pathname: '/configure/view-test-type', query: "testTypeId=" + param })
    }
    const handleDelete = (param) => {
        let removeTestType = test_type.filter((item) => item.id !== param.id && item)
        dispatch(removeTestTypeAction(removeTestType))
    };

    const search = (name) => {
        setState({ ...state, searchText: name, isSearch: true })
    }

    let displayTestTypeRecord = []
    if (state.searchText === null && state.selectedStatus === "All") {
        displayTestTypeRecord = test_type
    }
    else {
        if (state.isSearch === true) {
            displayTestTypeRecord = test_type.filter((item, index) => item.name.toLowerCase().includes(state.searchText.toLowerCase()))
        }
        else {
            displayTestTypeRecord = test_type.filter((item) => item.status === state.selectedStatus)
        }
    }

    return (
        <>
            <Grid container>
                <Grid item xs={12}  >
                    <Grid container spacing={2} >
                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                            <CustomSearchInput
                                placeholder='Search test name, code'
                                onChange={(name) => search(name)}
                            />
                        </Grid>
                        <Grid item xs={3} sm={3} md={3} lg={3} xl={3} >
                            <CustomizedButtons variant={"contained"} style={{ padding: "4px 15px 4px 15px", marginLeft: "5px", marginTop: "20px" }} onClick={() => addAction()}>
                                <Image src={Union} alt='union' width={14} height={15} />
                                <Typography style={{ marginLeft: "5px" }}>
                                    Add Test Type
                                </Typography>
                            </CustomizedButtons>
                        </Grid>
                        <Grid item xs={5} sm={5} md={5} lg={5} xl={5} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "10px" }}>
                            <Typography className='miniLiteText' style={{ marginLeft: "5px", alignSelf: "center" }}>Filter by</Typography>
                            <FormControl sx={{ m: 1, minWidth: 60, minHeight: 10, '.MuiOutlinedInput-notchedOutline': { border: 0 }, '.Mui-focused fieldset': { border: 0 }, borderRadius: 0 }} size="small">
                                <Select
                                    value={state.selectedStatus}
                                    onChange={(e) => handleChange(e, "S")}
                                    displayEmpty
                                    renderValue={state.selectedStatus !== "All" ? undefined : () => <Placeholder>Status</Placeholder>}
                                >
                                    <MenuItem value={"All"}>All</MenuItem>
                                    <MenuItem value={"Active"}>Active</MenuItem>
                                    <MenuItem value={"Inactive"}>Inactive</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        {!!displayTestTypeRecord && displayTestTypeRecord.length > 0 ? displayTestTypeRecord.map((type, index) =>
                            <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={index.toString()}>
                                <Table>
                                    <TableBody>
                                        <StyledTableRow>
                                            <StyledTableCell style={{ border: "none" }}>
                                                <Grid container style={{ display: "flex", justifyContent: "center", alignItems: "center", boxShadow: '0px 1px 1px -4px rgb(0 0 0 / 30%), 0px 1px 3px 4px rgb(0 0 0 / 10%)', borderRadius: "8px", padding: "10px" }}>
                                                    <Grid item xs={12} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                                        <Typography className='subHeading'>{type.name} </Typography>
                                                        <Grid item xs={2} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                                            <Image src={Edit} alt='edit' width={18} height={18} style={{ cursor: "pointer" }} onClick={() => editAction(type)} />
                                                            <IconButton onClick={() => handleDelete(type)}>
                                                                <DeleteIcon style={{ color: "red", fontSize: "24px", position: "absolute" }} />
                                                            </IconButton>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={12} onClick={() => testTypeAction(type.id)}>
                                                    <Grid item xs={12} style={{ display: "flex", flexDirection: "row" }} >
                                                        <Typography style={{
                                                            letterSpacing: "0.4px", fontSize: "13px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Book",
                                                        }} color={"#718797"}>Status: </Typography>
                                                        <Typography style={{
                                                            letterSpacing: "0.4px", fontSize: "13px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Book",
                                                            backgroundColor: "#F0E9FF", marginLeft: "5px", padding: "2px"
                                                        }} color={"#6425FE"}> {type.status}</Typography>
                                                    </Grid>
                                                    <Grid item xs={12} style={{ display: "flex", flexDirection: "row" }} >
                                                        <Typography className='miniText' color='"rgba(16, 16, 16, 0.6)"'>Display Name: {type.display_name} </Typography>
                                                    </Grid>
                                                    <Grid item xs={12} style={{ marginBottom: "5px" }} >
                                                        <Typography style={{
                                                            letterSpacing: "0.4px", fontWeight: 700, fontSize: "14px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Book"
                                                        }} color={"#313237"}>
                                                            Description: </Typography>
                                                        <Typography className='miniLiteText'>{type.description}</Typography>
                                                    </Grid>
                                                    <Grid item xs={12} style={{ borderBottom: "0.5px solid rgba(0, 0, 0, 0.16)" }} />
                                                    <Grid item xs={12} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: "10px", cursor: "pointer" }}>
                                                        <Typography className='miniHeading'>Show Details</Typography>
                                                        <ArrowForwardIcon style={{ color: "#6425FE" }} onClick={() => testTypeAction(type.id)} />
                                                    </Grid>
                                                    </Grid>
                                                </Grid>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    </TableBody>
                                </Table>
                            </Grid>
                        ) :
                            <Grid item xs={12}>
                                <Typography style={{ fontSize: "16px", color: "grey", textAlign: "center", marginTop: "10px" }}>No {state.selectedStatus} records available</Typography>
                            </Grid>
                        }
                    </Grid>
                </Grid>
                <Dialog open={state.addTestTypeOpen} maxWidth={'sm'} >
                    <Grid container>
                        <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end" }}>
                            <DisabledByDefaultRoundedIcon style={{ color: "#5824D6", fontSize: "45px", position: "absolute", cursor: "pointer" }} onClick={() => testTypeClose()} />
                        </Grid>
                    </Grid>
                    <DialogTitle style={{ fontSize: "20px", fontStyle: "normal", lineHeight: "32px", fontFamily: "Avenir-Black", color: "#000", borderBottom: "1px solid #E8E8E8" }}>{state.mode === "ADD" ? "Add test type" : "Edit test type"}</DialogTitle>
                    <DialogContent>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Book", color: "#5824D6", marginTop: "10px", marginBottom: "10px" }}>Test type information</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <CustomInput size="small"
                                            placeholder={"Code"}
                                            fullWidth
                                            value={state.code}
                                            onChange={(event) => setState({ ...state, code: event.target.value, codeError: false })}
                                            error={state.codeError} />
                                        {state.codeError === true &&
                                            <FormHelperText style={{ color: 'red', marginLeft: '10px' }}>Please enter the code</FormHelperText>
                                        }
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <CustomInput size="small"
                                            placeholder={"Name"}
                                            fullWidth
                                            value={state.name}
                                            onChange={(event) => setState({ ...state, name: event.target.value, nameError: false })}
                                            error={state.nameError} />
                                        {state.nameError === true &&
                                            <FormHelperText style={{ color: 'red', marginLeft: '10px' }}>Please enter the name</FormHelperText>
                                        }
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <CustomInput size="small"
                                            placeholder={"Display name"}
                                            fullWidth
                                            value={state.display_name}
                                            onChange={(event) => setState({ ...state, display_name: event.target.value })}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <CustomInput size="small"
                                            placeholder={"Description"}
                                            fullWidth
                                            value={state.description}
                                            onChange={(event) => setState({ ...state, description: event.target.value })}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} style={{ display: "flex", alignItems: "center" }}>
                                        <Typography style={{ fontFamily: 'Avenir-Bold', paddingRight: "7px" }}>Status</Typography>
                                        <RadioGroup defaultValue={state.mode === "ADD" ? "Active" : state.status} row onChange={(event) => setState({ ...state, status: event.target.value })}>
                                            <FormControlLabel value="Active" control={<Radio sx={{ color: '#5824D6', '&.Mui-checked': { color: '#5824D6' } }} />} label="Active" />
                                            <FormControlLabel value="Inactive" control={<Radio sx={{ color: '#5824D6', '&.Mui-checked': { color: '#5824D6' } }} />} label="Inactive" />
                                        </RadioGroup>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
                                    <CustomizedButtons variant={"text"} onClick={() => cancel()} >
                                        Cancel
                                    </CustomizedButtons>
                                    <CustomizedButtons variant={"contained"} style={{ marginLeft: "5px", borderRadius: "5px" }} onClick={() => submit()} >
                                        {state.mode === "ADD" ? "Submit" : "Update"}
                                    </CustomizedButtons>
                                </Grid>
                            </Grid>
                        </Grid>
                    </DialogContent>
                </Dialog>
            </Grid>
        </>
    )
}
export default TestType;