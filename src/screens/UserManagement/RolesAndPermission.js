import React, { useEffect, useState } from 'react';
import { Grid, Table, TableBody, TableContainer, TableCell, TableHead, TableRow, tableCellClasses, IconButton, Paper, Select, MenuItem, FormControl, OutlinedInput } from '@mui/material';
import Image from 'next/image';
import dialogClose from '../../../public/Images/dialogClose.png';
import { styled } from '@mui/material';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: 'rgba(2, 55, 81, 0.05)',
        borderBottom: '1px solid #E7E7E7',
        color: theme.palette.common.black,
        padding: "15px",
        fontFamily: 'Avenir-Regular',
        fontSize: '16px',
        fontStyle: "normal"
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: "16px",
        padding: "8px",
        fontFamily: 'Avenir-Regular',
        fontSize: '16px',
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

function RolesAndPermission(props) {
    const [state, setState] = useState({
        personName: [],
        rolesAndPermission:[]
    });

    const [role ,setRole] = useState([]);

    const roles = ["Admin", "Consumer", "Lab Techician", "Location Manager", "System Admin", "Lab Executive", "PSR Tech", "Logistics", "Client Manager", "Client Physician", "DB"];
    const sideBar = ["Dashboard", "Patients", "Test Type", "Test result", "Test Upload Results", "Location", "Location Test Type", "Test Group", "User and Access"]
   const access = [
         'View',
        'Edit',
        'Delete',
        'NoAccess'
    ];


    useEffect(() => {
    //   let screenArray = []       
    //   for(let a of sideBar){           
    //          let data = {}           
    //           data.screen = a   
    //           let permissionArray = []
    //           let screen = undefined   
    //           for(let b of roles){                     
    //               let sideData = {}      
    //                sideData.permission = {'view': true,'add':true, 'edit': false , 'delete':false , 'noAccess':false}
    //                permissionArray.push(sideData)
    //             }
    //           data.screenAccess = permissionArray
    //           screenArray.push(data)  
            
    //     }

    //     setRole(screenArray)

        
        
       

        let dummyArray = [];

        for (let x of sideBar) {
            let data = {};
            data['screen'] = x;
            data['roles'] = [];
            // console.log("####roles#####"+JSON.stringify(data));

            for (let y of roles) {
                let obj = {};
                obj[y] = [];

                for (let z of access) {
                    console.log("************z***********"+JSON.stringify(z))
                    let obj2 = {};
                    obj2[z] = z;
                    obj[y].push(obj2);
                }
                data['roles'].push(obj);
            }
            dummyArray.push(data);
        }
        setState({ personName: [...dummyArray] });
    }, []);

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const handleChange = (event) => {
        const { target: { value } } = event;
        setState({
            ...state,
            personName: typeof value === 'string' ? value.split(',') : value,
        }
        );
    };

    return (
        <>
            <Grid container  style={{height:"100%"}}  >
                <Grid item xs={12}>
                    {/* <IconButton onClick={props.dialogClose}><Image src={dialogClose} alt={'close'} width={25} height={25} /></IconButton> */}
                    <DisabledByDefaultRoundedIcon style={{ color: "#6425FE", fontSize: "45px", position: "absolute", width:25, height:25, cursor:"pointer" }} onClick={() => props.dialogClose()} />
                </Grid>
                <Grid  item xs={12}  justifyContent ={"center"} alignItems={"center"} sx={{ width: "90vw" }}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <StyledTableRow>
                                    <StyledTableCell style={{ fontWeight: "bold" }}>Pages</StyledTableCell>
                                    {roles.map((item, index) =>
                                        <StyledTableCell align="center" style={{ fontWeight: "bold" }} key={index.toString()}>{item}</StyledTableCell>
                                    )}
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                {state.personName.map((personNameItem, personNameIndex) =>
                                     <StyledTableRow key={personNameIndex.toString()} style={{ background: (personNameIndex % 2) == 0 ? "#FFF" : "rgba(240, 240, 240, 0.2)" }}>
                                        <StyledTableCell>{personNameItem.screen}</StyledTableCell>                                       
                                        {personNameItem.roles.map ((item) =>
                                            <StyledTableCell align="center">                                             
                                                <FormControl sx={{ m: 1, width: 100, mt: 3 }}>
                                                    <Select
                                                        size='small'
                                                        multiple
                                                        displayEmpty
                                                        value={state.personName}
                                                        onChange={handleChange}
                                                        input={<OutlinedInput />}
                                                        MenuProps={MenuProps}
                                                        inputProps={{ 'aria-label': 'Without label' }}
                                                    >
                                                        <MenuItem disabled value="">
                                                            <em>Placeholder</em>
                                                        </MenuItem>
                                                        {access.map((name) => (
                                                            <MenuItem
                                                                key={name}
                                                                value={name}
                                                            >
                                                                {name}
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </StyledTableCell>
                                        )} 
                                    </StyledTableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </>
    )
}

export default RolesAndPermission;