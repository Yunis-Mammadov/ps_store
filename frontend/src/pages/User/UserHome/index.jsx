import { Box } from '@mui/material';
import React from 'react';
import Slider from "./slider";
import HomeGames from '../HomeGames';

const Home = () => {
  return (
    <>
      <Box sx={{
        marginTop: "120px"
      }}>
        <Slider />
      </Box>
      <Box>
       <HomeGames/>
      </Box>
    </>
  )
}

export default Home
