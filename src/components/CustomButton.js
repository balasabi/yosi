import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material';

const CustomButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  lineHeight: 1.5,
  padding: "10px",
  color: "#FFF",
  backgroundColor: '#024751',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
  ].join(','),
  '&:hover': {
    backgroundColor: '#024751',
    borderColor: '#024751',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#024751',
    borderColor: '#024751',
  }
});

const CustomVariant = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  lineHeight: 1.5,
  color: "#024751",
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
  ].join(','),
  '&:hover': {
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    // backgroundColor: '#024751',
    // borderColor: '#024751',
  },
  //   '&:focus': {
  //     boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  //   },
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