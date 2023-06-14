import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import Grid from "@mui/material/Grid";
import React from 'react';
import styles from "./index.module.css";
import Slider from "./slider";

const Home = () => {
  return (
    <>
      <Box sx={{
        marginTop: "120px"
      }}>
        <Slider />
      </Box>
      <Box>
        <Grid container spacing={7} item xs={10} margin={"0 auto"}>
          <Grid item xs={12} sm={6} md={4}>
            <Card  sx={{ minWidth: 275 }}
            >
              <img className={styles.CardsImg} src="https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/JKqkaz5Sy6AvH2fZAVdjTxR8.png?w=5000&thumb=false" alt="" />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home
