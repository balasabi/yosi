import React, { useState } from 'react';
import { Typography, Grid } from '@mui/material';

function CalenderAppointments(props) {
    const [state, setState] = useState({
      
    })   

    return (
        <>
          <Grid style={{display:"flex",justifyContent:"center",alignItems:"center", alignSelf:"center"}}>
             <Typography style={{ color: "blue", alignItems:"center",marginTop:250 }}> Calendar View  </Typography>
         </Grid>
        </>
    )
}
export default CalenderAppointments;