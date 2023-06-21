import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import styles from "../Games/index.module.css";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { getAllGames } from "../../../api/request";

const Games = () => {
  const [mainGames, setMainGames] = useState([]);

  useEffect(() => {
    getAllGames().then((data) => {
      setMainGames(data);
    });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.section1}>
          <button>Messi</button>
        </div>
        <div className={styles.section2}>
          <Grid container spacing={2}>
            {mainGames &&
              mainGames.map((mainGame) => (
                <Grid item xs={12} sm={6} md={4} key={mainGame.id}>
                  <Card className={styles.GamesCard}>
                    <Box className={styles.GamesCardImgBox}>
                      <img className={styles.GamesCardImg} src={mainGame.imageURL} alt={mainGame.title} />
                    </Box>
                    <Box className={styles.nameAndPrice}>
                      <Box>
                        <p>{mainGame.name}</p>
                      </Box>
                      <Box>
                        <h4>{mainGame.price === 0 ? "Free" : `${mainGame.price}$`}</h4>
                      </Box>
                    </Box>
                    <Box className={styles.gamesCardBtn}>
                      <button>Add</button>
                    </Box>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Games;
