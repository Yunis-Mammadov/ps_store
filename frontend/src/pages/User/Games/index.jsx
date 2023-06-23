import React, { useEffect, useState } from 'react'
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import { getAllGames } from '../../../api/request'
import styles from "../Games/index.module.css"
import FilterListIcon from '@mui/icons-material/FilterList';

const Games = () => {
  const [games, setGames] = useState([])

  useEffect(() => {
    getAllGames().then(data => {
      setGames(data)
    })
  }, [])

  return (
    <>
      <div style={{ margin: "80px" }}>
        <div style={{ marginBottom: "20px" }}>
          <p className={styles.gamesText}>All Games</p>
        </div>
        <div className={styles.parentGamesFilter}>
          <div className={styles.gamesFilter}>
            <div><FilterListIcon /></div>
            <div><p>Sort and Filter</p></div>
          </div>
        </div>
        <div>
          <Grid container spacing={4}>
            {games && games.map((game) => (
              <Grid item xs={2} key={game._id}>
                <Card className={styles.gamesCard}>
                  <img className={styles.gamesImg} src={game.imageURL} alt={game.name} />
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  )
}

export default Games
