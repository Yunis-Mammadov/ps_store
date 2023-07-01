import React, { useEffect, useState } from 'react';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { getAllGames } from '../../../api/request';
import FilterListIcon from '@mui/icons-material/FilterList';
import styles from "./index.module.css";

const FreeToPlay = () => {
  const [mainGames, setMainGames] = useState([]);
  const freeToPlayGames = mainGames.filter(mainGame => mainGame.price === 0);


  useEffect(() => {
    getAllGames().then(data => {
      setMainGames(data);
    });
  }, []);

  return (
    <>
      <div style={{ margin: "80px" }}>
        <div style={{ marginBottom: "20px" }}>
          <p className={styles.freeToPlayText}>Free To Play</p>
        </div>
        <div className={styles.parentFreeToPlayFilter}>
          <div className={styles.freeToPlayFilter}>
            <div><FilterListIcon /></div>
            <div><p>Sort and Filter</p></div>
          </div>
        </div>
        <div>
          <Grid container spacing={4}>
            {freeToPlayGames &&
              freeToPlayGames.map((freeToPlayGame) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={freeToPlayGame._id}>
                  <Card className={styles.freeToPlayCard}>
                    <img className={styles.freeToPlayImg} src={freeToPlayGame.imageURL} alt={freeToPlayGame.name} />
                  </Card>
                </Grid>
              ))}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default FreeToPlay;
