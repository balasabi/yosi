import React, { useState } from 'react';
import {
    Typography, Grid, Table, TableRow, TableBody, TableHead, styled, TableCell, tableCellClasses, tableRowClasses,
    TablePagination, FormControl, Select, MenuItem, TableContainer, Paper, Dialog, DialogTitle, DialogContent, TableFooter
} from '@mui/material';
import { useRouter } from 'next/router';
import CustomSearchInput from '../../components/CustomSearchInput';
import Image from 'next/image';
import Upload from '../../../public/Images/svg/Upload.svg';
import { useDropzone } from "react-dropzone";
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import { MdDelete } from "react-icons/md";
import CustomizedButtons from '../../components/CustomButton';
import { useSelector, useDispatch } from 'react-redux';
import Excel from 'exceljs'
import Papa from "papaparse";
import { addTestResultUploadAction } from "../../store/actions/testResultAction";
import _ from "underscore";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#F2F5F6",
        color: theme.palette.common.black,
        fontFamily: 'Avenir-Heavy',
        padding: "13px",
        fontSize: '1.1em'
    },
    [`&.${tableCellClasses.body}`]: {
        padding: "13px"
    },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    [`&.${tableRowClasses.root}`]: {
    },
    '&:nth-of-type(odd)': {
    },
}));

function Uploads(props) {
    // const uploads = useSelector(state => state.testResultReducer.uploads);
    // console.log("upload===>" + JSON.stringify(uploads))
    const [state, setState] = useState({
        page: 0,
        rowsPerPage: 10,
        searchText: "",
        result: "",
        status: "",
        date: "",
        data: "",
        uploadTestOpen: false,
        values: []
    })
    const [selectedResult, setSelectedResult] = useState('All');
    const [selectedStatus, setSelectedStatus] = useState('All');
    const uploads = useSelector(state => state.testResultReducer.uploads);
    const dispatch = useDispatch();
    const router = useRouter();
    const { isDragActive, acceptedFiles } = useDropzone({})
    const files = acceptedFiles.map((file) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    const handleChangePage = (event, newPage) => {
        setState({ ...state, page: newPage });
    };

    const handleChangeRowsPerPage = (event) => {
        setState({ ...state, rowsPerPage: event.target.value, page: 0 });
    };
  
    const Placeholder = ({ children }) => {
        return <div style={{ color: "#101010", fontWeight: 900, fontSize: "14px", fontFamily: "Avenir-Book", fontStyle: "normal" }}>{children}</div>;
    };

    const handleChange = (e, param) => {
        if (param === "R") {
            setSelectedResult(e.target.value)
        }
        // else if (param === "S") {
        //     setState({ ...state, status: e.target.value, displayUpload: e.target.value === "All" ? uploads : uploads.filter((item) => item.status === e.target.value) })
        // }
        else {
            setSelectedStatus(e.target.value)
        }
        // else if (param === "D") {
        //     setState({ ...state, date: e.target.value })
        // }
    };

    const uploadTestClose = () => {
        setState({ ...state, uploadTestOpen: false, data: "" })
    };

    const dragOver = (e) => {
        e.preventDefault();
    };

    const dragEnter = (e) => {
        e.preventDefault();
    };

    const dragLeave = (e) => {
        e.preventDefault();
    };

    const dropOn = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files
        let file = files[0]
        setState({ ...state, data: file })
    };

    // const fileHandler = (e) => {
    //     e.preventDefault();
    //     let file = e.target.files[0];
    //     setState({ ...state, data: file })
    // };
    const changeHandler = (event) => {
        // Passing file data (event.target.files[0]) to parse using Papa.parse
        Papa.parse(event.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                const valuesArray = [];
                // Iterating data to get column name and their values
                results.data.map((d) => {
                    valuesArray.push(d);
                });
                // Filtered Values
                //  setState({displayUpload:valuesArray});

                dispatch(addTestResultUploadAction(valuesArray, state, setState))
                setState({ ...state, uploadTestOpen: false, page: state.page, rowsPerPage: state.rowsPerPage });
            },
        });
    };
    const handleSubmit = async (param) => {
        // console.log("****param****" + JSON.stringify(param))

        // const workbook = new Excel.Workbook();
        // await workbook.xlsx.readFile(param).then(() =>{
        //     const ws = workbook.getWorksheet('Account');
        //     try{
        //         ws.eachRow({ includeEmpty: true }, async (row, rowNumber) => {
        //             if(rowNumber > 0){

        //             setState({...state, status:row.getCell(4).value})
        //             }
        //         })
        //     }catch{

        //     }
        // } 
        // )
        Papa.parse((param), {
            header: true, skipEmptyLines: true, complete: function (result) {
                //to append the results to our state
                // setState({...state, ...result.data});
                dispatch(addTestResultUploadAction(result.data, state, setState))
                setState({ ...state, uploadTestOpen: false, page: state.page, rowsPerPage: state.rowsPerPage, data: "" });
            },
        });
    };

    let displayRecord = [];

    if (selectedResult === "All" && selectedStatus === "All") {
        displayRecord = _.flatten(uploads)
    } else if (selectedResult !== "All" && selectedStatus === "All") {
        displayRecord = _.flatten(uploads).filter((item) => item.Result === selectedResult)
    } else if (selectedResult === "All" && selectedStatus !== "All") {
        displayRecord = _.flatten(uploads).filter((item) => item.Status === selectedStatus)
    } else if (selectedResult !== "All" && selectedStatus !== "All") {
        displayRecord = _.flatten(uploads).filter((item) => item.Result === selectedResult && item.Status === selectedStatus)
    }

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                            <CustomSearchInput
                                placeholder='Search test upload name, tube number, file name'
                                onChange={(name) => alert("WIP")}
                            />
                        </Grid>
                        <Grid item xs={8} sm={8} md={8} lg={8} xl={8} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "20px", alignItems: 'center' }}>
                            <Typography className='miniText' style={{ marginLeft: "5px", alignSelf: "center" }}>Filter by</Typography>
                            <FormControl sx={{ m: 1, minWidth: 60, minHeight: 10, '.MuiOutlinedInput-notchedOutline': { border: 0, borderRight: "2px solid #E8E8E8", borderRadius: 0 } }} size="small">
                                <Select
                                    value={selectedResult}
                                    onChange={(e) => handleChange(e, "R")}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    renderValue={
                                        selectedResult !== "All" ? undefined : () => <Placeholder>All Results</Placeholder>
                                    }>
                                    <MenuItem value={"All"}>All</MenuItem>
                                    <MenuItem value={"Negative"}>Negative</MenuItem>
                                    <MenuItem value={"Positive"}>Positive</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl sx={{ m: 1, minWidth: 60, minHeight: 10, '.MuiOutlinedInput-notchedOutline': { border: 0, borderRight: "2px solid #E8E8E8", borderRadius: 0 } }} size="small">
                                <Select
                                    value={selectedStatus}
                                    onChange={(e) => handleChange(e, "S")}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    renderValue={selectedStatus !== "All" ? undefined : () => <Placeholder>Status</Placeholder>}>
                                    <MenuItem value={"All"}>All</MenuItem>
                                    <MenuItem value={"Result Available"}>Result Available</MenuItem>
                                    <MenuItem value={"Result Unavailable"}>Result Unavailable</MenuItem>
                                    <MenuItem value={"Result Sent"}>Result Sent</MenuItem>
                                </Select>
                            </FormControl>
                            {/* <FormControl sx={{ m: 1, minWidth: 60, minHeight: 10, '.MuiOutlinedInput-notchedOutline': { border: 0 } }} size="small">
                                <Select
                                    value={state.date}
                                    onChange={(e) => handleChange(e, "D")}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    renderValue={
                                        state.date !== "" ? undefined : () => <Placeholder>Date</Placeholder>
                                    }>
                                </Select>
                            </FormControl> */}
                            <Image src={Upload} alt='upload' width={24} height={22} style={{ cursor: "pointer" }} onClick={() => setState({ ...state, uploadTestOpen: true })} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ marginTop: "15px" }}>
                    <TableContainer component={Paper} >
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Test Upload Name</StyledTableCell>
                                    <StyledTableCell>Tube Number</StyledTableCell>
                                    <StyledTableCell >Result</StyledTableCell>
                                    <StyledTableCell >File Name</StyledTableCell>
                                    <StyledTableCell >Created By</StyledTableCell>
                                    <StyledTableCell >Created Date</StyledTableCell>
                                    <StyledTableCell >Status</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            {displayRecord.length > 0 ? displayRecord.slice(state.page * state.rowsPerPage, state.page * state.rowsPerPage + state.rowsPerPage).map((upload, index) => (
                                <TableBody key={index.toString()} style={{ backgroundColor: (index % 2) ? "#FCFCFC" : "#FFFFFF", borderBottom: "1.1px solid #F2F2F2" }}>
                                    <StyledTableRow >
                                        <StyledTableCell className='tableContent'>{upload.Test_Upload_Name}</StyledTableCell>
                                        <StyledTableCell className='tableContent'>{upload.Tube_Number}</StyledTableCell>
                                        <StyledTableCell className='tableContent'>{upload.Result}</StyledTableCell>
                                        <StyledTableCell className='tableContent'>{upload.File_Name}</StyledTableCell>
                                        <StyledTableCell className='tableContent'>{upload.Created_By}</StyledTableCell>
                                        <StyledTableCell className='tableContent'>{upload.Created_Date}</StyledTableCell>
                                        <StyledTableCell className='tableContent'>{upload.Status}</StyledTableCell>
                                    </StyledTableRow>
                                </TableBody>
                            )) :
                                <TableBody>
                                    <StyledTableRow>
                                        <StyledTableCell align='center' colSpan={7}><Typography >There are no test upload available</Typography></StyledTableCell>
                                    </StyledTableRow>
                                </TableBody>}
                                <TableFooter>
                  <TableRow>
                    <TablePagination
                      rowsPerPageOptions={[10, 25]}
                      count={!!displayRecord && displayRecord.length}
                      rowsPerPage={state.rowsPerPage}
                      page={state.page}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={(e) => handleChangeRowsPerPage(e)}
                      labelRowsPerPage={'No. of item per page:'}
                    />
                  </TableRow>
                </TableFooter>
                        </Table>
                    </TableContainer>
                 </Grid>

                <Dialog open={state.uploadTestOpen} onClose={() => uploadTestClose()} maxWidth={'sm'}>
                    <Grid container>
                        <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end" }}>
                            <DisabledByDefaultRoundedIcon style={{ color: "#5824D6", fontSize: "35px", position: "absolute", cursor: "pointer" }} onClick={() => uploadTestClose()} />
                        </Grid>
                    </Grid>
                    <DialogTitle style={{ fontSize: "18px", fontStyle: "normal", lineHeight: "32px", fontFamily: "Avenir-Black", color: "#000", borderBottom: "1px solid #E8E8E8" }}>Upload test result</DialogTitle>
                    <DialogContent>
                        <Grid container>
                            <Grid item xs={6} display="flex">
                                <CustomizedButtons variant={"contained"} style={{ padding: "0px 14px", marginLeft: "5px", marginTop: "10px" }} >
                                    <Typography style={{ color: "#fff", fontSize: "12px", fontStyle: "normal", fontWeight: "bold", lineHeight: "10px", fontFamily: "Avenir-Bold", textTransform: "none", textAlign: "center" }}>
                                        <div >
                                            <input
                                                accept=".csv"
                                                name="file"
                                                style={{ display: "none" }}
                                                id="text-button-file2"
                                                type="file"
                                                multiple
                                                onChange={(e) => changeHandler(e)}
                                            />
                                            {/* <input
        type="file"
        name="file"
        onChange={changeHandler}
        accept=".csv"
        style={{ display: "block", margin: "10px auto" }}
      /> */}
                                            <label htmlFor="text-button-file2" style={{ cursor: "pointer" }}>
                                                {!isDragActive &&
                                                    <p>Browse</p>
                                                } </label>
                                        </div>
                                    </Typography>
                                </CustomizedButtons>
                            </Grid>
                            <Grid item xs={6}>
                                {state.data !== "" ?
                                    <CustomizedButtons variant={"contained"} style={{ padding: "8px 10px", marginLeft: "5px", marginTop: "10px", float: "right" }} onClick={() => handleSubmit(state.data)}>
                                        <Typography style={{ fontSize: "12px", fontFamily: "Avenir-Bold", }}>
                                            Submit
                                        </Typography>
                                    </CustomizedButtons>
                                    : ""}
                            </Grid>
                            <Grid item xs={12} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <div style={{ border: "1px dashed #998E8A", marginTop: "20px", borderRadius: "5px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: '#F7F7F7', paddingTop: "50px", paddingBottom: "50px", paddingRight: "180px", paddingLeft: "180px" }}
                                    onDragOver={(e) => dragOver(e)}
                                    onDragEnter={(e) => dragEnter(e)}
                                    onDragLeave={(e) => dragLeave(e)}
                                    onDrop={(e) => dropOn(e)}>
                                    <div>
                                        <Typography style={{ fontSize: state.data === "" ? "20px" : "12px", color: "#5824D6", fontWeight: 600 }}>{state.data === "" ? "Drag and Drop" : state.data.name}{state.data !== "" && <MdDelete style={{ color: "red", marginTop: "10px", cursor: "pointer" }} onClick={() => setState({ ...state, data: "" })} />}</Typography>
                                        {
                                            state.data === "" ?
                                                <>
                                                    <Typography className='miniLiteText' textAlign={"center"}>Supports: .csv</Typography>
                                                    <Typography className='miniLiteText' textAlign={"center"}>Maximum size: .10Kb</Typography>
                                                </>
                                                :
                                                ""
                                        }
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} style={{ marginTop: "20px", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <Typography style={{ fontSize: "14px", fontStyle: "normal", lineHeight: "24px", fontFamily: "Avenir-Black", textTransform: "none", marginLeft: "5px", }}>{files}</Typography>
                            </Grid>
                        </Grid>
                    </DialogContent>
                </Dialog>
            </Grid>
        </>
    )
}
export default Uploads;