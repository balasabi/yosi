import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

function CustomSearchInput(props) {
    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <TextField
                        {...props}
                        placeholder={props.placeholder && props.placeholder}
                        fullWidth
                       size="small"
                      
                        InputProps={{
                            startAdornment:
                                <InputAdornment position="end">
                                    <SearchIcon sx={{ color: "rgba(0, 0, 0, 0.87)", cursor: 'pointer' }} onClick={()=> props.onIconClick && props.onIconClick()} />
                                </InputAdornment>,
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                               padding: "0px 15px 0px 15px",
                                marginLeft: "5px", 
                                backgroundColor: "#F0E9FF",
                                marginTop:"15px"
                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: 0
                            }
                        }}
                        onChange={(event) => props.onChange && props.onChange(event.target.value)}
                        onKeyPress={(event) => props.onKeyPress && props.onKeyPress(event)}
                    />
                </Grid>
            </Grid>
        </>
    )
}
export default CustomSearchInput