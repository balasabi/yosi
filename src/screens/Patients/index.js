import React, { useState, useRef } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, styled, tableCellClasses, tableRowClasses, TableRow, Grid,
  Button, TablePagination, Typography, Paper, TableFooter, DialogTitle, Dialog, DialogContent, TextField
} from '@mui/material';
import vector from '../../../public/Images/vector.png';
import _, { sortBy } from 'underscore';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import CustomizedButtons from '@/src/components/CustomButton';
import InputBase from "@mui/material/InputBase";
import Union from '../../../public/Images/plus.png';
import Image from 'next/image';
import { createPatientAction } from '../../store/actions/patientAction';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F2F5F6",
    color: '#2E2E2E',
    fontFamily: 'Avenir-Heavy',
    padding: "12px",
    fontSize: '1em',
    lineHeight: '27px'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '0.9em',
    fontFamily: 'Avenir-Book',
    padding: "10px",
    lineHeight: '24px'
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

function Patients(props) {
  const patients = useSelector((state) => state.patientReducer.patients);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    page: 0,
    rowsPerPage: 10,
    isClickCheckBox: false,
    selectedPatients: [],
    isAdd: false,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dob: null,
    id: '',
    patients:patients,
    sortOrder:false
   })
  

 const handleChangePage = (event, newPage) => {
    setState({ ...state, page: newPage })
  };

  const handleChangeRowsPerPage = (event) => {
    setState({ ...state, rowsPerPage: event.target.value, page: 0 });
  };

  const patientView = (param) => {
    Router.push({ pathname: '/patients/view-patient', query: "patientId=" + param })
  };

  const handleCancel = () => {
    setState({ ...state, isAdd: false })
  };

  const handleSubmit = () => {
    const { id, firstName, lastName, email, phoneNumber, dob } = state;
    const isError = false;
    let data = {};
    data.id = patients.length + 1;
    data.name = `${firstName} ${lastName}`;
    data.email = email;
    data.phone_number = phoneNumber;
    data.dob = moment(dob).format("DD/MM/YYYY");
    dispatch(createPatientAction(data, state, setState))
  };

  const handleAdd = () => {
    setState({ ...state, isAdd: true, firstName: '', lastName: '', email: '', phoneNumber: '', dob: '', id: '', })
  };


const sortAction =(param) =>{
   if(!state.sortOrder){
    let result =  patients.sort((a, b) => (a.name > b.name) ? 1: -1);  
    setState({...state,patients:result, sortOrder:true})
  }else{
    let result =  patients.sort((a, b) => (b.name > a.name) ? 1: -1);  
    setState({...state,patients:result,sortOrder:false})
  }
}



  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography className='header'>Patients</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent='flex-start'>
            <Grid item xs={6} textAlign='left'>
              <CustomizedButtons variant={"contained"} onClick={() => handleAdd()} style={{ padding: "4px 15px 4px 15px", marginLeft: "5px" }}>
                <Image src={Union} alt='union' width={14} height={15} />
                <Typography style={{ marginLeft: "5px", }} >
                  Add Patient
                </Typography>
              </CustomizedButtons>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <TableContainer>
              <Table aria-label="simple table" size='small'>
                <TableHead style={{ backgroundColor: '#E7E7E7' }}>
                  <StyledTableRow>
                    <StyledTableCell>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography className='tableHeader'>Name</Typography>
                        <div style={{ display: "flex", flexDirection: 'column' }}><ArrowDropUpIcon style={{ color: "#000", height: "20px", width: "50px", marginBottom: -12 }} onClick={() => sortAction("A")} />
                          <ArrowDropDownIcon style={{ color: "#000", height: "20px", width: "50px" }} onClick={() => sortAction("A")}  /></div>
                      </div>
                    </StyledTableCell>
                    <StyledTableCell align="left">Email ID</StyledTableCell>
                    <StyledTableCell align="left">Phone Number</StyledTableCell>
                    <StyledTableCell>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography className='tableHeader'>DOB</Typography>
                        <div style={{ display: "flex", flexDirection: 'column' }}><ArrowDropUpIcon style={{ color: "#000", height: "20px", width: "50px", marginBottom: -12 }} onClick={() => sortAction("D")} />
                          <ArrowDropDownIcon style={{ color: "#000", height: "20px", width: "50px" }} onClick={() => sortAction("D")}/></div>
                      </div>
                    </StyledTableCell>
                  </StyledTableRow>
                </TableHead>
                {state.patients.length > 0 ?
                  state.patients.slice(state.page * state.rowsPerPage, state.page * state.rowsPerPage + state.rowsPerPage).map((row, index) =>
                    <TableBody key={index.toString()} style={{ background: (index % 2) == 0 ? 'white' : '#FCFCFC' }}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <StyledTableRow>
                        <StyledTableCell align="left"><span><Button variant='text' onClick={() => patientView(row.id)} style={{ textTransform: 'none', textDecoration: 'underline' }}>{row.name}</Button></span></StyledTableCell>
                        <StyledTableCell align="left">{row.email}</StyledTableCell>
                        <StyledTableCell align="left">{row.phone_number}</StyledTableCell>
                        <StyledTableCell align="left">{row.dob}</StyledTableCell>
                      </StyledTableRow>
                    </TableBody>) :
                  <TableBody>
                    <StyledTableRow>
                      <StyledTableCell align='center' colSpan={7}><Typography >There are no patient available</Typography></StyledTableCell>
                    </StyledTableRow>
                  </TableBody>}
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      rowsPerPageOptions={[10, 25]}
                      count={!!state.patients && state.patients.length}
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
          </Paper>
        </Grid>
      </Grid>
      <Dialog open={state.isAdd}>
        <Grid container>
          <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end" }}>
            <DisabledByDefaultRoundedIcon style={{ color: "#6425FE", fontSize: "45px", position: "absolute" }} onClick={() => handleCancel()} />
          </Grid>
        </Grid>
        <DialogTitle style={{ fontSize: "20px", fontStyle: "normal", lineHeight: "32px", fontFamily: "Avenir-Black", color: "#000", borderBottom: "1px solid #E8E8E8" }}>Add Patient</DialogTitle>
        <DialogContent style={{ paddingTop: '15px' }}>
          <Grid container>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <CustomInput fullWidth
                    placeholder="First name"
                    size='small' value={state.firstName}
                    onChange={(e) => setState({ ...state, firstName: e.target.value.charAt(0).toUpperCase().trim() + e.target.value.slice(1) })} />
                </Grid>
                <Grid item xs={6}>
                  <CustomInput fullWidth
                    size='small' value={state.lastName}
                    onChange={(e) => setState({ ...state, lastName: e.target.value.charAt(0).toUpperCase().trim() + e.target.value.slice(1) })}
                    placeholder="Last name" />
                </Grid>
                <Grid item xs={6}>
                  <CustomInput fullWidth
                    placeholder="Email" size='small'
                    value={state.email}
                    onChange={(e) => setState({ ...state, email: e.target.value })} />
                </Grid>
                <Grid item xs={6}>
                  <CustomInput fullWidth
                    size='small' placeholder="Phone number"
                    value={state.phoneNumber}
                    inputProps={{ maxLength: 10 }}
                    onChange={(e) => setState({ ...state, phoneNumber: e.target.value.replace(/[^0-9]/g, '') })} />
                </Grid>
                {/* <Grid item xs={6}>
                  <CustomInput fullWidth size='small'
                    value={state.dob}
                    placeholder="Date of Birth"
                    onChange={(e) => setState({ ...state, dob: e.target.value })} />
                </Grid> */}
                <Grid item xs={6}>
                  <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DatePicker
                      views={['year', 'month', 'day']}
                      disableFuture
                      value={state.dob}
                      style={{ marginBottom: "25px", marginTop: "10px" }}
                      inputFormat="MM/DD/YYYY"
                      onChange={(date) => setState({ ...state, dob: date })}
                      renderInput={(params) =>
                        <TextField {...params}
                          size='small'
                          fullWidth
                          sx={{
                            backgroundColor: '#F0E9FF', fontFamily: "Avenir", "&.Mui-disabled": {
                              border: "none"
                            }
                          }}
                          inputProps={{
                            ...params.inputProps,
                            placeholder: "Date of Birth"
                          }}
                          InputLabelProps={{
                            sx: {
                              fontFamily: "Avenir",
                              backgroundColor: "#F0E9FF",
                              border: "2px solid #5824D6",
                            }
                          }}
                          error={false}
                        />
                      }
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
                  <CustomizedButtons variant={"text"} onClick={() => handleCancel()}>
                    Cancel
                  </CustomizedButtons>
                  <CustomizedButtons variant={"contained"} style={{ marginLeft: "5px", borderRadius: "5px" }} onClick={() => handleSubmit()} >
                    Submit
                  </CustomizedButtons>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  )
}
export default Patients;