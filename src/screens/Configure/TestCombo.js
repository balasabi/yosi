import React, { useState, useRef } from 'react';
import {
    Typography, Grid, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Checkbox, TableRow, tableCellClasses, styled, TableCell, Table, TableBody, tableRowClasses,
    FormControl, Select, MenuItem, FormControlLabel, RadioGroup, Radio,
} from '@mui/material';
import CustomizedButtons from '../../components/CustomButton';
import Union from '../../../public/Images/plus.png';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CustomSearchInput from '../../components/CustomSearchInput';
import _ from 'underscore';
import InputBase from "@mui/material/InputBase";
import { createTestComboAction, updateTestComboAction, removeItemFromTestComboAction } from "../../store/actions/testComboAction";
import { useRouter } from 'next/router';

const CustomInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
        marginTop: theme.spacing(3)
    },
    "& .MuiInputBase-input": {
        position: "relative",
        backgroundColor: theme.palette.background.paper,
        fontSize: 16,
        padding: "10px",
        backgroundColor: "#F0E9FF",
        fontFamily: [
            'Avenir-Book'
        ].join(","),
        "&:focus": {
            border: "2px solid #6425FE",
            backgroundColor: "#F0E9FF",
            borderRadius: '4px'
        },
        "&:active": {
            border: "2px solid #6425FE",
            backgroundColor: "#F0E9FF",
            backgroundColor: "#F0E9FF"
        }
    }
}));

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

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 232,
            width: 160,
        },
    },
};


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function TestCombo(props) {

    const test_type = useSelector(state => state.testTypeReducer.test_type);
    const testCombo = useSelector(state => state.testComboReducer.testCombo);
    const dispatch = useDispatch();
    const router = useRouter();


    const [state, setState] = useState({
        dialogOpen: false,
        mode: "",
        id: "",
        testComboName: "",
        price: "",
        selectedTestType: [],
        statusFilter: "",
        status: ""
    })

    const Placeholder = ({ children }) => {
        return <div style={{ color: "#101010", fontWeight: 900, fontSize: "14px", fontFamily: "Avenir-Book", fontStyle: "normal" }}>{children}</div>;
    };


    const dialogAction = () => {
        setState({ ...state, dialogOpen: !state.dialogOpen, mode: "ADD" })
    };


    const onSubmit = () => {
        let data = {}
        data.testComboName = state.testComboName
        data.testComboTestTypes = state.selectedTestType
        data.price = state.price      
        
        if (state.mode === "ADD") {
            data.id = testCombo.length + 1
            data.status = "Active"
            dispatch(createTestComboAction(data, state, setState))
            setState({ ...state, dialogOpen: false, price: "", testComboName: "", id: "", selectedTestType: [],status:"" })
        }
        else {
            data.status = state.status
            data.id = state.id
            dispatch(updateTestComboAction(data, state, setState))
            setState({ ...state, dialogOpen: false, price: "", testComboName: "", id: "", selectedTestType: [] ,status:""})
        }
    }

    const editAction = (value) => {
        let selectedTypeType = value.testComboTestTypes
        setState({ ...state, dialogOpen: !state.dialogOpen, id: value.id, testComboName: value.testComboName, price: value.price, selectedTestType: selectedTypeType, mode: "EDIT" ,status:value.status})
    }

    const deleteAction = (value) => {
        dispatch(removeItemFromTestComboAction(testCombo.filter((item) => item.id !== value.id)))
    }

    const handleChange = (event) => {
        setState({ ...state, selectedTestType: [...event.target.value] })
    }

    const filterAction = (e) => {
        setState({ ...state, statusFilter: e.target.value })
    };


    const handleView = (param) => {
        router.push({ pathname: '/configure/view-test-combo', query: "testComboId=" + param })
    };


    let displayTestComboRecord = state.statusFilter === "" || state.statusFilter === "All" ? testCombo : testCombo.filter((item) => item.status === state.statusFilter)


    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Typography className='header'>Test Combo</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                            <CustomSearchInput
                                placeholder='Search test combo name'
                                onChange={(name) => alert("WIP")}
                            />
                        </Grid>
                        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                            <CustomizedButtons variant={"contained"} style={{ padding: "4px 15px 4px 15px", marginLeft: "5px", marginTop: "20px" }} onClick={() => dialogAction()}>
                                <Image src={Union} alt='union' width={14} height={15} />
                                <Typography style={{ marginLeft: "5px" }}>
                                    Add Test Combo
                                </Typography>
                            </CustomizedButtons>
                        </Grid>

                        <Grid item xs={5} sm={5} md={5} lg={5} xl={5} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "10px" }}>
                            <Typography className='miniLiteText' style={{ marginLeft: "5px", alignSelf: "center" }}>Filter by</Typography>
                            <FormControl sx={{ m: 1, minWidth: 60, minHeight: 10, '.MuiOutlinedInput-notchedOutline': { border: 0 } }} size="small">
                                <Select
                                    value={state.statusFilter}
                                    onChange={(e) => filterAction(e)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    renderValue={
                                        state.statusFilter !== "" ? undefined : () => <Placeholder>Status</Placeholder>
                                    }>
                                    <MenuItem value={"All"}>All</MenuItem>
                                    <MenuItem value={"Active"}>Active</MenuItem>
                                    <MenuItem value={"Inactive"}>Inactive</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    {/* */}
                </Grid>
                <Grid item xs={12} style={{}}>
                    <Grid container style={{}}>
                        {!!displayTestComboRecord && displayTestComboRecord.length > 0 ? displayTestComboRecord.map((item, index) =>
                            <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={index.toString()}>
                                <Table>
                                    <TableBody>
                                        <StyledTableRow>
                                            <StyledTableCell style={{ border: "none" }}>
                                                <Grid container style={{ display: "flex", justifyContent: "center", alignItems: "center", boxShadow: '0px 1px 1px -4px rgb(0 0 0 / 30%), 0px 1px 3px 4px rgb(0 0 0 / 10%)', borderRadius: "8px", padding: "10px" }}>
                                                    <Grid item xs={12} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                                        <Grid container>
                                                            <Grid item xs={10}>
                                                                <Typography className='subHeading'>{item.testComboName} </Typography>
                                                            </Grid>
                                                            <Grid item xs={2} style={{ display: "flex", justifyContent: "space-between" }}>
                                                                <EditIcon onClick={() => editAction(item)} />
                                                                <DeleteIcon onClick={() => deleteAction(item)} />
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={12} style={{ display: "flex", flexDirection: "row" }} >
                                                        <Typography style={{
                                                            letterSpacing: "0.4px", fontSize: "13px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Book",
                                                        }} color={"#718797"}>Status:</Typography>
                                                        <Typography style={{
                                                            letterSpacing: "0.4px", fontSize: "13px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Book",
                                                            backgroundColor: "#F0E9FF", marginLeft: "5px", padding: "2px"
                                                        }} color={"#6425FE"}>{item.status} </Typography>
                                                    </Grid>
                                                    <Grid item xs={12} style={{}} >
                                                        <Typography className='miniText' color='"rgba(16, 16, 16, 0.6)"'>Price: &#8377;{item.price} </Typography>

                                                    </Grid>
                                                    <Grid item xs={12} style={{ marginBottom: "5px", display: "flex", flexDirection: "row" }} >
                                                        <Typography style={{
                                                            letterSpacing: "0.4px", fontWeight: 700, fontSize: "14px", lineHeight: "20px", marginTop: "5px", fontFamily: "Avenir-Book"
                                                        }} color={"#313237"}>
                                                            Test Type Covered: {item.testComboTestTypes.length > 0 && item.testComboTestTypes.length} </Typography>
                                                        <Typography ></Typography>
                                                    </Grid>
                                                    <Grid item xs={12} style={{ borderBottom: "0.5px solid rgba(0, 0, 0, 0.16)" }} />
                                                    <Grid item xs={12} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: "10px", cursor: "pointer" }}  onClick={() => handleView(item.id)}>
                                                        <Typography className='miniHeading'>Show Details</Typography>
                                                        <ArrowForwardIcon style={{ color: "#6425FE" }} />
                                                    </Grid>
                                                </Grid>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    </TableBody>
                                </Table>
                            </Grid>
                        ) :
                            <Grid item xs={12}>
                                <Typography style={{ fontSize: "16px", color: "grey", textAlign: "center", marginTop: "100px" }}>No {state.selectedStatus} records available</Typography>
                            </Grid>
                        }
                    </Grid>
                </Grid>
                <Dialog
                    open={state.dialogOpen}
                    onClose={() => dialogAction()}>
                    <DialogTitle>
                        <Typography className='header'>
                            Add Test Combo
                        </Typography>
                    </DialogTitle>
                    <DialogContent>
                        <Grid container rowGap={3}>
                            <Grid item xs={12}>                                
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Select
                                            labelId="mutiple-select-label"
                                            multiple
                                            fullWidth
                                            
                                            size='small'
                                            value={state.selectedTestType !== undefined && state.selectedTestType}
                                            onChange={(e) => handleChange(e)}
                                            renderValue={(selected) =>    selected.join(", ")}                                            
                                            MenuProps={MenuProps}>
                                            {test_type.map((option) => (
                                                <MenuItem key={option.name} value={option.name}>
                                                    <Checkbox checked={state.selectedTestType.length > 0 ? state.selectedTestType.includes(option.name) : false} />
                                                    {option.name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} >                           
                            <CustomInput value={state.testComboName} placeholder="Test Combo Name"
                                size='small' fullWidth
                                onChange={(e) => setState({ ...state, testComboName: e.target.value })} />
                           </Grid>                              
                           
                            <Grid item xs={12} >                           
                            <CustomInput value={state.price} placeholder="Test Combo Price"
                                size='small' fullWidth
                                onChange={(e) => setState({ ...state, price: e.target.value })} />                     
                           </Grid>
                        </Grid>
                        <Grid item xs={12}  style={{ display: "flex", flexDirection:"row", alignItems: "center" , marginTop:0}}>
                            <Typography style={{ fontFamily: 'Avenir-Bold', paddingRight: "7px" }}>Status</Typography>
                            <RadioGroup defaultValue={state.mode === "ADD" ? "Active" : state.status} row onChange={(event) => setState({ ...state, status: event.target.value })}>
                                <FormControlLabel value="Active" control={<Radio sx={{ color: '#5824D6', '&.Mui-checked': { color: '#5824D6' } }} />} label="Active" />
                                <FormControlLabel value="Inactive" control={<Radio sx={{ color: '#5824D6', '&.Mui-checked': { color: '#5824D6' } }} />} label="Inactive" />
                            </RadioGroup>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <CustomizedButtons variant={"text"} style={{ padding: "4px 15px 4px 15px", marginLeft: "5px", marginTop: "20px" }} onClick={() => dialogAction()}>Cancel</CustomizedButtons>
                        <CustomizedButtons variant={"contained"} style={{ padding: "4px 15px 4px 15px", marginLeft: "5px", marginTop: "20px" }} onClick={() => onSubmit()}>Submit</CustomizedButtons>
                    </DialogActions>
                </Dialog>
            </Grid>
        </>
    )
}
export default TestCombo;