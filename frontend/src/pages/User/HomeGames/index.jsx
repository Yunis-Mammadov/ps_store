import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from 'react';
import 'swiper/css';
import { getAllGames } from '../../../api/request';
import styles from "./index.module.css";
import "react-multi-carousel/lib/styles.css";



const HomeGames = () => {
    const [games, setGames] = useState([])

    useEffect(() => {
        getAllGames().then(data => {
            setGames(data)
        })
    }, [])


    return (
        <>
            <Grid container spacing={2} item xs={11} margin={"100px auto"}>
                {games && games.map((game) => {
                    return <Grid item xs={12} key={game._id} sm={6} md={3}>
                        <Card className={styles.HomeGamesCard}>
                            <img className={styles.HomeGamesImg} src={game.imageURL} alt={game.name} />
                        </Card>
                    </Grid>
                })}
            </Grid>
            <Box className={styles.top10Games}>
                <Box className={styles.top10Label}>
                    <p>Top 10 games in your country</p>
                </Box>
                <Box>
                    <Grid container spacing={2} item xs={11} margin={"0px auto"}>
                        {games && games.map((game) => {
                            return <Grid item xs={2} key={game._id}>
                                <Card className={styles.HomeGamesCard}>
                                    <img className={styles.HomeGamesImg} src={game.imageURL} alt={game.name} />
                                </Card>
                            </Grid>
                        })}
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default HomeGames
