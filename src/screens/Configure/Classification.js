import React, { useState } from 'react';
import {
    Typography, Grid, Table, TableRow, TableBody, TableHead, styled, TableCell, tableCellClasses,
    tableRowClasses, TablePagination, TableFooter, FormControl, Select, MenuItem, TableContainer, Paper,
    Dialog, DialogTitle, DialogContent, FormControlLabel, RadioGroup, Radio, InputBase
} from '@mui/material';
import { useRouter } from 'next/router';
import Image from 'next/image';
import CustomSearchInput from '../../components/CustomSearchInput';
import Edit from '../../../public/Images/editIcon.png';
import CustomizedButtons from '../../components/CustomButton';
import Union from '../../../public/Images/plus.png';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import { createClassificationAction, updateClassificationAction } from "../../store/actions/testTypeAction";
import { useDispatch, useSelector } from 'react-redux';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#F2F5F6",
        color: '#2E2E2E',
        fontFamily: 'Avenir-Heavy',
        fontSize: '1.1em',
        padding: "12px",
        lineHeight: '27px'
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: '0.9em',
        fontFamily: 'Avenir-Book',
        padding: "10px",
        lineHeight: '24px',
        color: '#2E2E2E',
    },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    [`&.${tableRowClasses.root}`]: {
    },
    '&:nth-of-type(odd)': {
    },
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

function Classification(props) {
    const [state, setState] = useState({
        page: 0,
        rowsPerPage: 10,
        results: "",
        date: "",
        classification: [],
        addClassificationOpen: false,
        id: "",
        name: "",
        code: "",
        test_type: "",
        test_groups: "",
        status: "Active",
        searchText: null,
        selectedStatus:"All"
    })

    const router = useRouter();
    const dispatch = useDispatch();
    const classification = useSelector(state => state.testTypeReducer.classification);
    const test_type = useSelector(state => state.testTypeReducer.test_type);

    const handleChangePage = (event, newPage) => {
        setState({ ...state, page: newPage });
    };

    const handleChangeRowsPerPage = (event) => {
        setState({ ...state, rowsPerPage: event.target.value, page: 0 });
    };

    const Placeholder = ({ children }) => {
        return <div style={{ color: "#101010", fontWeight: 800, fontSize: "14px", fontFamily: "Avenir-Book", fontStyle: "normal" }}>{children}</div>;
    };

    const handleChange = (e, param) => {
       if (param === "S") {
            setState({ ...state, selectedStatus: e.target.value })
        }
    }

    const classificationClose = () => {
        setState({ ...state, addClassificationOpen: false })
    };

    const submit = async () => {
        let { id, name, code, test_type, test_groups, status } = state;
        let data = {}
        data.id = id;
        data.code = code;
        data.name = name;
        data.test_type = test_type;
        data.test_groups = test_groups;
        data.status = status;

        if (state.mode === "ADD") {
            data.id = classification.length + 1
            dispatch(createClassificationAction(data))
        }
        else {
            data.id = id
            dispatch(updateClassificationAction(data))
        }
        setState({ ...state, addClassificationOpen: false })
    };

    const cancel = () => {
        setState({ ...state, addClassificationOpen: false })
    };

    const addAction = () => {
        setState({ ...state, mode: "ADD", addClassificationOpen: true, id: "", name: "", code: "", test_type: "", test_groups: "", status: "Active" })
    };

    const editAction = (param) => {
        setState({ ...state, mode: "EDIT", addClassificationOpen: true, id: param.id, code: param.code, name: param.name, code: param.code, test_type: param.test_type, test_groups: param.test_groups, status: param.status })
    };

    let displayClassificationRecord = state.selectedStatus === "All" ? classification : classification.filter((item) => item.status === state.selectedStatus);

    return (
        <>
            <Grid container>
                <Grid item xs={12} >
                    <Grid container spacing={2}>
                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4} >
                            <CustomSearchInput
                                placeholder='Search test upload name, tube number, file name'
                                onChange={(name) => alert("WIP")}
                            />
                        </Grid>
                        <Grid item xs={3} sm={3} md={3} lg={3} xl={3} >
                            <CustomizedButtons variant={"contained"} style={{ padding: "4px 15px 4px 15px", marginLeft: "5px", marginTop: "20px" }} onClick={() => addAction()}>
                                <Image src={Union} alt='union' width={14} height={15} />
                                <Typography style={{ marginLeft: "5px"}} >
                                    Add Classification
                                </Typography>
                            </CustomizedButtons>
                        </Grid>
                        <Grid item xs={5} sm={5} md={5} lg={5} xl={5} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "10px" }}>
                            <Typography className='miniLiteText' style={{ marginLeft: "5px", alignSelf: "center" }}>Filter by</Typography>
                            <FormControl sx={{ m: 1, minWidth: 60, minHeight: 10, '.MuiOutlinedInput-notchedOutline': { border: 0, borderRadius: 0 } }} size="small">
                                <Select
                                    value={state.selectedStatus}
                                    onChange={(e) => handleChange(e, "S")}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    renderValue={
                                        state.selectedStatus !== "All" ? undefined : () => <Placeholder>Status</Placeholder>
                                    }>
                                    <MenuItem value={"All"}>All</MenuItem>
                                    <MenuItem value={"Active"}>Active</MenuItem>
                                    <MenuItem value={"Inactive"}>Inactive</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ marginTop: "15px" }}>
                    <TableContainer component={Paper} >
                        <Table>
                            <TableHead>
                                <TableRow >
                                    <StyledTableCell style={{ width: "210px" }}>Name</StyledTableCell>
                                    <StyledTableCell style={{ width: "130px" }}>Code</StyledTableCell>
                                    <StyledTableCell>Test Type</StyledTableCell>
                                    <StyledTableCell>Test Groups</StyledTableCell>
                                    <StyledTableCell>Status</StyledTableCell>
                                    <StyledTableCell>Action</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            {!!displayClassificationRecord && displayClassificationRecord.length > 0 ? displayClassificationRecord.slice(state.page * state.rowsPerPage, state.page * state.rowsPerPage + state.rowsPerPage).map((classification, index) => (
                                <TableBody key={index.toString()} style={{ backgroundColor: (index % 2) ? "#FCFCFC" : "#FFFFFF", borderBottom: "1.1px solid #F2F2F2" }}>
                                    <StyledTableRow >
                                        <StyledTableCell>{classification.name}</StyledTableCell>
                                        <StyledTableCell>{classification.code}</StyledTableCell>
                                        <StyledTableCell>{classification.test_type}</StyledTableCell>
                                        <StyledTableCell>{classification.test_groups}</StyledTableCell>
                                        <StyledTableCell >{classification.status}</StyledTableCell>
                                        <StyledTableCell>
                                            <div style={{ display: "flex", flexDirection: "row", cursor:"pointer" }} onClick={() => editAction(classification)}>
                                                <Image src={Edit} alt='edit' width={18} height={18} />
                                                <Typography className="subText" style={{ marginLeft: "5px" }}>Edit</Typography>
                                            </div>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                </TableBody>
                            )) :
                                <TableBody>
                                    <StyledTableRow>
                                        <StyledTableCell align='center' colSpan={7}><Typography >There are no classification available</Typography></StyledTableCell>
                                    </StyledTableRow>
                                </TableBody>}
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        count={!!displayClassificationRecord && displayClassificationRecord.length}
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
                    </TableContainer>
                </Grid>
                <Dialog open={state.addClassificationOpen} maxWidth={'sm'} >
                    <Grid container>
                        <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end" }}>
                            <DisabledByDefaultRoundedIcon style={{ color: "#5824D6", fontSize: "45px", position: "absolute", cursor:"pointer" }} onClick={() => classificationClose()} />
                        </Grid>
                    </Grid>
                    <DialogTitle style={{ fontSize: "20px", fontStyle: "normal", lineHeight: "32px", fontFamily: "Avenir-Black", color: "#000", borderBottom: "1px solid #E8E8E8" }}>{state.mode === "ADD" ? "Add classification" : "Edit classification"}</DialogTitle>
                    <DialogContent>
                        <Grid container>
                            <Grid item xs={12} >
                                <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Book", color: "#5824D6", marginTop: "10px", marginBottom: "10px" }}>Classification information</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <CustomInput size="small"
                                            placeholder={"Name"}
                                            fullWidth
                                            value={state.name}
                                            onChange={(event) => setState({ ...state, name: event.target.value })}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <CustomInput size="small"
                                            placeholder={"Code"}
                                            fullWidth
                                            value={state.code}
                                            onChange={(event) => setState({ ...state, code: event.target.value })}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <Select size='small'
                                            fullWidth
                                            value={!!state.test_type && state.test_type}
                                            input={<CustomInput />}
                                            onChange={(e) => setState({ ...state, test_type: e.target.value })}
                                            displayEmpty
                                            renderValue={
                                                state.test_type !== "" ? undefined : () => <Placeholder><Typography style={{ fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir", color: "#998E8A" }}>Test type</Typography></Placeholder>
                                            }  >
                                            {!!test_type && test_type.map((item, index) =>
                                                <MenuItem key={index.toString()} value={item.name}>{item.name}</MenuItem>
                                            )}
                                        </Select>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <CustomInput size="small"
                                            placeholder={"Test group"}
                                            fullWidth
                                            value={state.test_groups}
                                            onChange={(event) => setState({ ...state, test_groups: event.target.value })}
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
export default Classification;