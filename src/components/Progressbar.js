import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const CustomizedProgressBars = ({ num, res }) => {

  const colorgenerator = () => {
    let color;

    switch (res) {
      case 0:
      case 1:
        color = "#E74C3C";
        break;
      case 2:
        color = "#FBA119";
        break;
      case 3:
        color = "#FAF20C";
        break;
      case 4:
        color = "#6495ED";
        break;
      default:
        color = "#6495ED";
    }
    return color;
  };


  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: colorgenerator(),
    },
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <BorderLinearProgress variant="determinate" value={num} />
      <span style={{
        right: "420px",
        top: "142px"
      }}>{num}%</span>
    </Box>
  );
};

export default CustomizedProgressBars;
