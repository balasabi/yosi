import React, { Component } from 'react';
import { Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Button, TablePagination } from '@mui/material';
import vector from '../../../public/Images/vector.png';
import Image from 'next/image';
import _ from 'underscore';

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
      // sortOrder: 'asc'
    }
  }

  sortedData = () => {
    this.state.rows.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      }
    })
  }



  // const handlecheck = async (param) => {

  //   console.log("(((((param))))))" + JSON.stringify(param))
  //   await setIsChecked(!param)
  // console.log("(((((param))))))" + isChecked)
  // console.log("((((())))))" + JSON.stringify(_.pluck(rows, 'id')))
  // console.log("(((((param))))))" + JSON.stringify(isChecked))
  // if (!param) {
  //   setselectedIds(_.pluck(rows, 'id'))
  // } else {
  //   setselectedIds([])
  // }
  // };



  checkBoxAction = () => {
    this.setState({
      isClickCheckBox: !this.state.isClickCheckBox,
      selectedPatients: !this.state.isClickCheckBox === true ? _.pluck(this.state.rows, 'id') : []
    })
  }
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
  }

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
      <div>
        <Grid item xs={12} style={{ fontWeight: 'bold', fontSize: '30px' }}>Patients</Grid>
        <TableContainer component={Paper} style={{ marginTop: '20px' }}>
          <Table aria-label="simple table" size='small'>
            <TableHead style={{ backgroundColor: '#E7E7E7' }}>
              <TableRow>
                <TableCell align='right'>
                  <Checkbox 
                  checked={this.state.isClickCheckBox}
                    onClick={() => this.checkBoxAction()}
                  />
                </TableCell>
                <TableCell align="left" style={{ fontWeight: 'bold', fontSize: '18px' }}>Name<Button onClick={this.sortedData()}><Image src={vector} alt="vector" /></Button>
                </TableCell>
                <TableCell align="left" style={{ fontWeight: 'bold', fontSize: '18px' }}>Email ID</TableCell>
                <TableCell align="left" style={{ fontWeight: 'bold', fontSize: '18px' }}>Phone</TableCell>
                <TableCell align="left" style={{ fontWeight: 'bold', fontSize: '18px' }}>DOB<Button><Image src={vector} alt="vector" /></Button>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.rows.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map((row, index) => (
                <TableRow
                  key={index}
                  style={{ background: (index % 2) == 0 ? 'white' : '#F2F2F2' }}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align='right'>
                    <Checkbox
                      checked={this.state.selectedPatients.includes(row.id)}
                      onClick={() => this.singleSelectAction(row.id)}
                    />
                  </TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="left">{row.phone}</TableCell>
                  <TableCell align="left">{row.dob}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
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
        </TableContainer>
      </div>
    )
  }
}
export default Patients;