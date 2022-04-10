import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function DishApiItem(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        margin: '0px',
        '& > :not(style)': {
          m: 1,
          width: 90,
          height: 90,
          fontSize: '15px',
        },
      }}
    >
      <Paper elevation={8}>{props.dish.dishname}</Paper> 
    </Box>
  );
}