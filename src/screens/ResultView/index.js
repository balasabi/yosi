import React, { useState } from 'react';
import { Grid, Typography, IconButton } from '@mui/material';
import Image from 'next/image';
import CustomizedButtons from '../../components/CustomButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { useRouter } from 'next/router';

function ResultView(props) {
    const [state, setState] = useState({
        mode: 'R',
        isView: false
    })
    const router = useRouter();

    const buttonAction = (param) => {
        setState({ ...state, mode: param })
    };

    const handleView = () => {
        router.push({ pathname: '/result-view/pdf-view' })
    };

    return (

        <>
            <Grid container spacing={2}>
                <Grid item xs={12} style={{ background: "rgba(100, 37, 254, 0.1)", padding: "10px", borderRadius: '5px' }}>
                    <Typography>Patient Information</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Grid container>
                        <Grid item xs={5} md={4}>
                            <Typography>Patient Name:</Typography>
                        </Grid>
                        <Grid item xs={7} md={8}>
                            <Typography align='left'>Sabarinathan</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Grid container>
                        <Grid item xs={5} md={4}>
                            <Typography>Phone Number:</Typography>
                        </Grid>
                        <Grid item xs={7} md={8}>
                            <Typography align='left'>+91 9688309357</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <Grid container>
                        <Grid item xs={5} md={4}>
                            <Typography>Age:</Typography>
                        </Grid>
                        <Grid item xs={7} md={8}>
                            <Typography align='left'>27</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <Grid container>
                        <Grid item xs={5} md={4}>
                            <Typography>Gender:</Typography>
                        </Grid>
                        <Grid item xs={7} md={8}>
                            <Typography align='left'>Male</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ background: "rgba(100, 37, 254, 0.1)", padding: "10px", borderRadius: '5px' }}>
                    <Typography>Patient Reports</Typography>
                </Grid>

                <Grid item xs={12} style={{ borderBottom: '1px solid grey' }}>
                    <Grid container justifyContent={'flex-start'}>
                        <Grid item xs={12} sm={5}>
                            <Grid container>
                                <Grid item xs={6}>
                                    <CustomizedButtons variant={"text"} className='subText' style={{ color: state.mode === "R" ? "#4D1EC0" : "#474747", borderBottom: state.mode === "R" ? "4px solid #4D1EC0" : "none", borderRadius: "0px", float: 'center' }} onClick={() => buttonAction("R")}>Recent reports</CustomizedButtons>
                                </Grid>
                                <Grid item xs={6}>
                                    <CustomizedButtons variant={"text"} className='subText' style={{ color: state.mode === "H" ? "#4D1EC0" : "#474747", borderBottom: state.mode === "H" ? "4px solid #4D1EC0" : "none", borderRadius: "0px" }} onClick={() => buttonAction("H")}> Report History</CustomizedButtons>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {state.mode === "H" ?
                    <Grid item xs={12}>
                        <Grid container rowGap={1} justifyContent='center' alignItems='center' style={{ overflowY: 'scroll' }}>
                            <Grid item xs={12} sm={10} style={{ border: '1px solid grey', borderRadius: '7px' }}>
                                <Grid container alignItems='center'>
                                    <Grid item xs={1} />
                                    <Grid item xs={9}>
                                        <Typography>Patient: Sabarinathan</Typography>
                                        <Typography>Record Date: 01/11/2022</Typography>
                                        <Typography>Lab Name: Apollo</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <IconButton onClick={() => handleView()}> <ArrowForwardIcon /></IconButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={10} style={{ border: '1px solid grey', borderRadius: '7px' }}>
                                <Grid container alignItems='center'>
                                    <Grid item xs={1} />
                                    <Grid item xs={9}>
                                        <Typography>Patient: Sabarinathan</Typography>
                                        <Typography>Record Date: 01/11/2022</Typography>
                                        <Typography>Lab Name: Apollo</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <IconButton> <ArrowForwardIcon /></IconButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={10} style={{ border: '1px solid grey', borderRadius: '7px' }}>
                                <Grid container alignItems='center'>
                                    {/* <Grid item xs={3}>
                                        <a target='_blank' ><Image src={pdf} alt='pdf' width={80} height={80} /> </a>
                                    </Grid> */}
                                    <Grid item xs={1} />
                                    <Grid item xs={9}>
                                        <Typography>Patient: Sabarinathan</Typography>
                                        <Typography>Record Date: 01/11/2022</Typography>
                                        <Typography>Lab Name: Apollo</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <IconButton onClick={() => handleView()}> <ArrowForwardIcon /></IconButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={10} style={{ border: '1px solid grey', borderRadius: '7px' }}>
                                <Grid container alignItems='center'>
                                    {/* <Grid item xs={3}>
                                        <a target='_blank' ><Image src={pdf} alt='pdf' width={80} height={80} /> </a>
                                    </Grid> */}
                                    <Grid item xs={1} />
                                    <Grid item xs={9}>
                                        <Typography>Patient: Sabarinathan</Typography>
                                        <Typography>Record Date: 01/11/2022</Typography>
                                        <Typography>Lab Name: Apollo</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <IconButton onClick={() => handleView()}> <ArrowForwardIcon /></IconButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={10} style={{ border: '1px solid grey', borderRadius: '7px' }}>
                                <Grid container alignItems='center'>
                                    {/* <Grid item xs={3}>
                                        <a target='_blank' ><Image src={pdf} alt='pdf' width={80} height={80} /> </a>
                                    </Grid> */}
                                    <Grid item xs={1} />
                                    <Grid item xs={9}>
                                        <Typography>Patient: Sabarinathan</Typography>
                                        <Typography>Record Date: 01/11/2022</Typography>
                                        <Typography>Lab Name: Apollo</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <IconButton onClick={() => handleView()}> <ArrowForwardIcon /></IconButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                    :
                    <Grid item xs={12} >
                        <Grid container justifyContent='center' alignItems='center'>
                            <Grid item xs={12} sm={10} style={{ border: '1px solid grey', borderRadius: '7px' }}>
                                <Grid container alignItems='center'>
                                    <Grid item xs={1} />
                                    <Grid item xs={9}>
                                        <Typography>Patient: Sabarinathan</Typography>
                                        <Typography>Record Date: 01/11/2022</Typography>
                                        <Typography>Lab Name: Apollo</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <IconButton onClick={() => handleView()}> <ArrowForwardIcon /></IconButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                }
                {/* {state.isView === true &&
                <a href='public/report.pdf' target="_blank">
                <iframe title="PDF" allowFullScreen = {true} src="https://www.africau.edu/images/default/sample.pdf" target='_blank' height='100%' width='100%'></iframe>
                </a>
} */}
            </Grid>
        </>
    )
}
export default ResultView;