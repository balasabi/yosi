import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material';

const CustomButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: '0.87em',
  lineHeight: '24px',
  padding: "5px",
  color: "#FFF",
  backgroundColor: '#5824D6',
  fontFamily: 'Avenir-Book',
  '&:hover': {
    backgroundColor: '#5824D6',
    borderColor: '#5824D6',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#5824D6',
    borderColor: '#5824D6',
  }
});

const CustomVariant = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: '0.9em',
  lineHeight: '24px',
  color: "#6425FE",
  fontFamily: 'Avenir-Book',
  '&:hover': {
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
  },
});


export default function CustomizedButtons(props) {
  const { size, variant, onClick, fullWidth, style, children } = props
  return (
    <>
      {props.variant === "contained" ?
        <CustomButton size={size} variant={variant} fullWidth={fullWidth} onClick={onClick} style={style}>
          {props.children}
        </CustomButton>
        :
        <CustomVariant size={size} variant={variant} fullWidth={fullWidth} onClick={onClick} style={style}>
          {props.children}
        </CustomVariant>
      }
    </>

  );
}