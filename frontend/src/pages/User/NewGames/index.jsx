import React, { useEffect, useState } from 'react';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { getAllGames } from '../../../api/request';
import styles from "./index.module.css";
import FilterListIcon from '@mui/icons-material/FilterList';

const NewGames = () => {
  const [mainGames, setMainGames] = useState([]);
  const filteredGames = mainGames.filter(mainGame => mainGame.year > 2022);


  useEffect(() => {
    getAllGames().then(data => {
      setMainGames(data);
    });
  }, []);

  return (
    <>
      <div style={{ margin: "80px" }}>
        <div style={{ marginBottom: "20px" }}>
          <p className={styles.newGamesText}>New Games</p>
        </div>
        <div className={styles.parentNewGamesFilter}>
          <div className={styles.newGamesFilter}>
            <div><FilterListIcon /></div>
            <div><p>Sort and Filter</p></div>
          </div>
        </div>
        <div>
          <Grid container spacing={4}>
            {filteredGames &&
              filteredGames.map((filteredGame) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={filteredGame._id}>
                  <Card className={styles.newGamesCard}>
                    <img className={styles.newGamesImg} src={filteredGame.imageURL} alt={filteredGame.name} />
                  </Card>
                </Grid>
              ))}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default NewGames;
