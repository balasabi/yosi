import React, { useEffect, useState } from 'react';
import { Grid, Table, TableBody, TableContainer, Typography, TableCell, TableHead, TableRow, tableCellClasses, Paper, Select, MenuItem, FormControl, OutlinedInput, Checkbox } from '@mui/material';
import { styled } from '@mui/material';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import { useDispatch } from 'react-redux';
import _ from 'underscore';

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
        padding: "14px",
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
    const dispatch = useDispatch();
    const [state, setState] = useState({
        roleWithPermissions: [],
        selected: []
    });

    const [height, setHeight] = useState(600);
    const updateDimensions = () => {
        setHeight(window.innerHeight);
    }
    useEffect(() => {
        updateDimensions()
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, [dispatch])


    const roles = ["Admin", "Consumer", "Lab Techician", "Location Manager", "System Admin", "Lab Executive", "PSR Tech", "Logistics", "Client Manager", "Client Physician", "DB"];
    const sideBar = ["Dashboard", "Patients", "Test Type", "Test result", "Test Upload Results", "Location", "Location Test Type", "Test Group", "User and Access"]
    const access = [
        "View",
        "Edit",
        "Delete",
        "NoAccess"
    ];


    useEffect(() => {
        let dummyArray = [];
        for (let x of sideBar) {
            let data = {};
            data['screen'] = x;
            data['roles'] = [];
            for (let y of roles) {
                let obj = {};
                obj[y] = [];
                for (let z of access) {
                    let obj2 = {};
                    if (z === "View" || z === "Edit") {
                        obj2[z] = true
                    } else {
                        obj2[z] = false
                    }
                    obj[y].push(obj2);
                }
                data['roles'].push(obj);
            }
            dummyArray.push(data);
        }
        setState({ roleWithPermissions: [...dummyArray] });

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

    const handleChange = (event, role, screen) => {
        let roleWithPermissions = [];
        for (let item of state.roleWithPermissions) {
            let data = {};
            data['screen'] = item.screen
            data['roles'] = []
            if (item.screen === screen) {
                for (let x of item.roles) {
                    let obj = {};
                    obj[role] = [];
                    if (Object.keys(x)[0] === role) {
                        for (let y of x[role]) {
                            let permission = {};
                            if (event.target.value.includes(Object.keys(y)[0])) {
                                permission[Object.keys(y)[0]] = true
                                obj[role].push(permission)
                            } else {
                                permission[Object.keys(y)[0]] = false
                                obj[role].push(permission)
                            }
                        }
                        data['roles'].push(obj);
                    } else {
                        data['roles'].push(x)
                    }
                }
                roleWithPermissions.push(data)
            } else {
                roleWithPermissions.push(item)
            }
        }
        setState({ roleWithPermissions });
    };


    const selectedValue = (param) => {
        let result = param.filter((item) => item.View === true || item.Edit === true || item.Delete === true || item.NoAccess === true)
        let selectArray = []
        for (let i = 0; i < result.length; i++) {
            selectArray.push(Object.keys(result[i])[0])
        }
        return selectArray
    }


    const checkedStatus = (param, access) => {
        return param.filter((item) => item[access] == true).length > 0 ? true : false;
    }


    return (
        <>
            <Grid container style={{ height: "95%" }} >
                <Grid item xs={12}>
                    <DisabledByDefaultRoundedIcon style={{ color: "#6425FE", fontSize: "45px", position: "absolute", width: 25, height: 25, cursor: "pointer" }} onClick={() => props.dialogClose()} />
                </Grid>
                <Grid item xs={12} justifyContent={"center"} alignItems={"center"} sx={{ width: "95vw" }}>
                    <TableContainer component={Paper} style={{ marginTop: "25px" }}>
                        <Table >
                            <TableHead>
                                <StyledTableRow>
                                    <StyledTableCell style={{ fontWeight: "bold" }}>Pages</StyledTableCell>
                                    {roles.map((item, index) =>
                                        <StyledTableCell align="center" style={{ fontWeight: "bold" }} key={index.toString()}>{item}</StyledTableCell>
                                    )}
                                </StyledTableRow>
                            </TableHead>
                            <TableBody >
                                {state.roleWithPermissions.map((item) => (
                                    <StyledTableRow key={item.screen}>
                                        <StyledTableCell>{item.screen}</StyledTableCell>
                                        {item.roles.map((roleItem, index) => (
                                            <StyledTableCell key={index}>
                                                <FormControl sx={{ m: 0, width: 75, mt: 1, }}>
                                                    <Select
                                                        labelId="mutiple-select-label"
                                                        multiple
                                                        value={selectedValue(roleItem[Object.keys(roleItem)[0]])}
                                                        onChange={(e) => handleChange(e, Object.keys(roleItem)[0], item.screen)}
                                                        renderValue={(selected) => selected.join(", ")}
                                                        MenuProps={MenuProps}
                                                    >
                                                        {access.map((option) => (
                                                            <MenuItem key={option} value={option}>
                                                                <Checkbox checked={checkedStatus(roleItem[Object.keys(roleItem)[0]], option)} />
                                                                {option}
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </StyledTableCell>
                                        ))}
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </>
    )
}

export default RolesAndPermission;