import React, { useState } from 'react';
import {
    Typography, Grid, Table, TableRow, TableBody, TableHead, styled, TableCell, tableCellClasses,
    tableRowClasses, TablePagination, TableFooter, FormControl, Select, MenuItem, TableContainer, Paper,
    Dialog, DialogTitle, DialogContent, FormControlLabel, RadioGroup, Radio, InputBase
} from '@mui/material';
import { useRouter } from 'next/router';
import CustomSearchInput from '../../components/CustomSearchInput';
import CustomizedButtons from '../../components/CustomButton';
import Union from '../../../public/Images/plus.png';
import Image from 'next/image';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import { createCategoryAction, updateCategoryAction } from "../../store/actions/testTypeAction";
import { useDispatch, useSelector } from 'react-redux';
import Edit from '../../../public/Images/editIcon.png';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#F2F5F6",
        color: '#2E2E2E',
        fontFamily: 'Avenir-Heavy',
        padding: "12px",
        fontSize: '1.1em',
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

function Category(props) {
    const [state, setState] = useState({
        page: 0,
        rowsPerPage: 10,
        searchText: null,
        results: "",
        statusFilter: "",
        date: "",
        category: [],
        addCategoryOpen: false,
        id: "",
        name: "",
        code: "",
        short_code: "",
        sequence_number: "",
        description: "",
        status: "Active",
        mode: 'ADD',
        selectedStatus:"All"
    })

    const router = useRouter();
    const dispatch = useDispatch();
    const category = useSelector(state => state.testTypeReducer.category);

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
    };
    const categoryClose = () => {
        setState({ ...state, addCategoryOpen: false })
    };
    const submit = async () => {
        let { id, name, code, short_code, sequence_number, description, status } = state;
        let data = {}
        data.id = id;
        data.code = code;
        data.name = name;
        data.short_code = short_code;
        data.sequence_number = sequence_number;
        data.description = description;
        data.status = status;
        if (state.mode === "ADD") {
            data.id = category.length + 1
            dispatch(createCategoryAction(data))
        }
        else {
            data.id = id
            dispatch(updateCategoryAction(data))
        }
        setState({ ...state, addCategoryOpen: false })
    };

    const cancel = () => {
        setState({ ...state, addCategoryOpen: false })
    };

    const addAction = () => {
        setState({ ...state, mode: "ADD", addCategoryOpen: true, id: "", name: "", code: "", short_code: "", sequence_number: "", description: "", status: "Active" })
    };

    const editAction = (param, mode) => {
        setState({ ...state, mode: mode, addCategoryOpen: true, id: param.id, code: param.code, name: param.name, code: param.code, short_code: param.short_code, sequence_number: param.sequence_number, description: param.description, status: param.status })
    };

    let displayCategoryRecord = state.selectedStatus === "All" ? category : category.filter((item) => item.status === state.selectedStatus)
    
    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                            <CustomSearchInput
                                placeholder='Search test upload name, tube number, file name'
                                onChange={(name) => alert("WIP")}
                            />
                        </Grid>
                        <Grid item xs={3} sm={3} md={3} lg={3} xl={3} >
                            <CustomizedButtons variant={"contained"} style={{ padding: "4px 15px 4px 15px", marginLeft: "5px", marginTop: "20px" }} onClick={() => addAction()}>
                                <Image src={Union} alt='union' width={14} height={15} />
                                <Typography style={{ marginLeft: "5px", }} >
                                    Add Category
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
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow >
                                    <StyledTableCell style={{ width: "150px" }}>Name</StyledTableCell>
                                    <StyledTableCell style={{ width: "80px" }}>Code</StyledTableCell>
                                    <StyledTableCell style={{ width: "98px" }}>Short Code</StyledTableCell>
                                    <StyledTableCell style={{ width: "158px" }}>Sequence Number</StyledTableCell>
                                    <StyledTableCell>Description</StyledTableCell>
                                    <StyledTableCell >Status</StyledTableCell>
                                    <StyledTableCell>Action</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            {!!displayCategoryRecord && displayCategoryRecord.length > 0 ? displayCategoryRecord.slice(state.page * state.rowsPerPage, state.page * state.rowsPerPage + state.rowsPerPage).map((category, index) => (
                                <TableBody key={index.toString()} style={{ backgroundColor: (index % 2) ? "#FCFCFC" : "#FFFFFF", borderBottom: "1.1px solid #F2F2F2" }}>
                                    <StyledTableRow >
                                        <StyledTableCell>{category.name}</StyledTableCell>
                                        <StyledTableCell>{category.code}</StyledTableCell>
                                        <StyledTableCell>{category.short_code}</StyledTableCell>
                                        <StyledTableCell>{category.sequence_number}</StyledTableCell>
                                        <StyledTableCell style={{ wordBreak: "break-word" }}>{category.description}</StyledTableCell>
                                        <StyledTableCell >{category.status}</StyledTableCell>
                                        <StyledTableCell>
                                            <div style={{ display: "flex", flexDirection: "row" }} onClick={() => editAction(category, "EDIT")}>
                                                <Image src={Edit} alt='edit' width={18} height={18} />
                                                <Typography className="subText" style={{ marginLeft: "5px" }}>Edit</Typography>
                                            </div>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                </TableBody>
                            )) :
                                <TableBody>
                                    <StyledTableRow>
                                        <StyledTableCell align='center' colSpan={7}><Typography >There are no category available</Typography></StyledTableCell>
                                    </StyledTableRow>
                                </TableBody>}
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        count={!!displayCategoryRecord && displayCategoryRecord.length}
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
                <Dialog open={state.addCategoryOpen} maxWidth={'sm'} >
                    <Grid container>
                        <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end" }}>
                            <DisabledByDefaultRoundedIcon style={{ color: "#5824D6", fontSize: "45px", position: "absolute" }} onClick={() => categoryClose()} />
                        </Grid>
                    </Grid>
                    <DialogTitle style={{ fontSize: "20px", fontStyle: "normal", lineHeight: "32px", fontFamily: "Avenir-Black", color: "#000", borderBottom: "1px solid #E8E8E8" }}>{state.mode === "ADD" ? "Add category" : "Edit category"}</DialogTitle>
                    <DialogContent>
                        <Grid container>
                            <Grid item xs={12} >
                                <Typography style={{ fontSize: "16px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Book", color: "#5824D6", marginTop: "10px", marginBottom: "10px" }}>Category information</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <CustomInput size="small"
                                            placeholder={"Name"}
                                            fullWidth
                                            // inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Book", backgroundColor: "#F0E9FF" } }}
                                            value={state.name}
                                            onChange={(event) => setState({ ...state, name: event.target.value })}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <CustomInput size="small"
                                            placeholder={"Code"}
                                            fullWidth
                                            // inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Book", backgroundColor: "#F0E9FF" } }}
                                            value={state.code}
                                            onChange={(event) => setState({ ...state, code: event.target.value })}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <CustomInput size="small"
                                            placeholder={"Short code"}
                                            fullWidth
                                            // inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Book", backgroundColor: "#F0E9FF" } }}
                                            value={state.short_code}
                                            onChange={(event) => setState({ ...state, short_code: event.target.value })}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <CustomInput size="small"
                                            placeholder={"Sequence number"}
                                            fullWidth
                                            // inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Book", backgroundColor: "#F0E9FF" } }}
                                            value={state.sequence_number}
                                            onChange={(event) => setState({ ...state, sequence_number: event.target.value })}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <CustomInput size="small"
                                            placeholder={"Description"}
                                            fullWidth
                                            // inputProps={{ style: { fontSize: "12px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Book", backgroundColor: "#F0E9FF" } }}
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
export default Category;