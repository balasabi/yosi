import React, { Component } from 'react';
import { Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, styled, tableCellClasses, tableRowClasses, TableRow, Paper, Grid, Button, TablePagination, Typography } from '@mui/material';
import vector from '../../../public/Images/vector.png';
import Image from 'next/image';
import _ from 'underscore';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#E7E7E7",
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

class Patients extends Component {
  constructor() {
    super();
    this.state = {
      rows: [
        { 'id': '1', 'name': 'Kenny Sebastian', 'email': 'kennysebastian@gmail.com', 'phone': '+1 9988776655', 'dob': '05/05/1998' },
        { 'id': '2', 'name': 'Saba Cons', 'email': 'kennysebastian@gmail.com', 'phone': '+1 9988776655', 'dob': '05/05/1998' },
        { 'id': '3', 'name': 'Kenny Sebastian', 'email': 'kennysebastian@gmail.com', 'phone': '+1 9988776655', 'dob': '05/05/1998' },
        { 'id': '4', 'name': 'Saba Cons', 'email': 'kennysebastian@gmail.com', 'phone': '+1 9988776655', 'dob': '05/05/1998' },
        { 'id': '5', 'name': 'Kenny Sebastian', 'email': 'kennysebastian@gmail.com', 'phone': '+1 9988776655', 'dob': '05/05/1998' },
        { 'id': '6', 'name': 'Saba Cons', 'email': 'kennysebastian@gmail.com', 'phone': '+1 9988776655', 'dob': '05/05/1998' },
        { 'id': '7', 'name': 'Kenny Sebastian', 'email': 'kennysebastian@gmail.com', 'phone': '+1 9988776655', 'dob': '05/05/1998' },
        { 'id': '8', 'name': 'Saba Cons', 'email': 'kennysebastian@gmail.com', 'phone': '+1 9988776655', 'dob': '05/05/1998' },
        { 'id': '9', 'name': 'Kenny Sebastian', 'email': 'kennysebastian@gmail.com', 'phone': '+1 9988776655', 'dob': '05/05/1998' },
        { 'id': '10', 'name': 'Saba Cons', 'email': 'kennysebastian@gmail.com', 'phone': '+1 9988776655', 'dob': '05/05/1998' },
        { 'id': '11', 'name': 'Kenny Sebastian', 'email': 'kennysebastian@gmail.com', 'phone': '+1 9988776655', 'dob': '05/05/1998' },
        { 'id': '12', 'name': 'Saba Cons', 'email': 'kennysebastian@gmail.com', 'phone': '+1 9988776655', 'dob': '05/05/1998' },
      ],
      page: 0,
      rowsPerPage: 7,
      isClickCheckBox: false,
      selectedPatients: []
    }
  }

  sortedData = () => {
    this.state.rows.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      }
    })
  };

  checkBoxAction = () => {
    this.setState({
      isClickCheckBox: !this.state.isClickCheckBox,
      selectedPatients: !this.state.isClickCheckBox === true ? _.pluck(this.state.rows, 'id') : []
    })
  };

  singleSelectAction = (param) => {
    if (this.state.selectedPatients.length > 0 && this.state.selectedPatients.includes(param)) {
      this.setState({
        selectedPatients: this.state.selectedPatients.filter((item) => item != param)
      })
    }
    else {
      let result = this.state.selectedPatients
      result.push(param)
      this.setState({
        selectedPatients: result
      })
    }
  };

  handleChangePage = (event, newPage) => {
    this.setState({ page: newPage })
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({
      rowsPerPage: (parseInt(event.target.value)),
      page: 0
    });
  };

  render() {
    return (
      <>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography className='header'>Patients</Typography>
          </Grid>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table aria-label="simple table" size='small'>
                <TableHead style={{ backgroundColor: '#E7E7E7' }}>
                  <StyledTableRow>
                    <StyledTableCell>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography className='tableHeader'>Name</Typography>
                        <div style={{ display: "flex", flexDirection: 'column' }}><ArrowDropUpIcon style={{ color: "#000", height: "20px", width: "50px", marginBottom: -12 }} onClick={() => alert("WIP")} />
                          <ArrowDropDownIcon style={{ color: "#000", height: "20px", width: "50px" }} onClick={() => alert("WIP")} /></div>
                      </div>
                    </StyledTableCell>
                    <StyledTableCell align="left">Email ID</StyledTableCell>
                    <StyledTableCell align="left">Phone</StyledTableCell>
                    <StyledTableCell>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography className='tableHeader'>DOB</Typography>
                        <div style={{ display: "flex", flexDirection: 'column' }}><ArrowDropUpIcon style={{ color: "#000", height: "20px", width: "50px", marginBottom: -12 }} onClick={() => alert("WIP")} />
                          <ArrowDropDownIcon style={{ color: "#000", height: "20px", width: "50px" }} onClick={() => alert("WIP")} /></div>
                      </div>
                    </StyledTableCell>
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  {this.state.rows.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map((row, index) =>
                    <StyledTableRow
                      key={index.toString()}
                      style={{ background: (index % 2) == 0 ? 'white' : '#F2F2F2' }}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      {/* <StyledTableCell align='right'>
                    <Checkbox
                     style={{display:"flex",justifyContent:"flex-start"}}
                      checked={this.state.selectedPatients.includes(row.id)}
                      onClick={() => this.singleSelectAction(row.id)}
                    />
                  </StyledTableCell> */}
                      <StyledTableCell align="left">{row.name}</StyledTableCell>
                      <StyledTableCell align="left">{row.email}</StyledTableCell>
                      <StyledTableCell align="left">{row.phone}</StyledTableCell>
                      <StyledTableCell align="left">{row.dob}</StyledTableCell>
                    </StyledTableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[7, 12]}
              component="div"
              count={this.state.rows.length}
              rowsPerPage={this.state.rowsPerPage}
              page={this.state.page}
              onPageChange={() => this.handleChangePage()}
              onRowsPerPageChange={(e) => this.handleChangeRowsPerPage(e)}
              labelRowsPerPage={'No. of item per page:'}
            />
          </Grid>
        </Grid>
      </>
    )
  }
}
export default Patients;