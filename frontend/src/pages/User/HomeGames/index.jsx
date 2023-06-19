import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { getAllGames, getHomeGames, getTop10Games } from '../../../api/request';
import styles from "./index.module.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const HomeGames = () => {
    const [mainGames, setMainGames] = useState([]);
    const [top10Games, setTop10Games] = useState([])
    const [homegames, setHomeGames] = useState([])
    const filteredGames = mainGames.filter(mainGame => mainGame.year > 2022);
    const freeToPlayGames = mainGames.filter(mainGame => mainGame.price === 0);


    useEffect(() => {
        getHomeGames().then(data => {
            setHomeGames(data);
        });
    }, []);


    useEffect(() => {
        getAllGames().then(data => {
            setMainGames(data);
        });
    }, []);

    useEffect(() => {
        getTop10Games().then(data => {
            setTop10Games(data);
        });
    }, []);

    return (
        <>
            <Box>
                <Grid container spacing={2} margin={"100px auto"} xs={11}>
                    {homegames && homegames.map((homegame) => (
                        <Grid item xs={12} key={homegame._id} sm={6} md={3}>
                            <Card className={styles.HomeGamesCard}>
                                <img className={styles.HomeGamesImg} src={homegame.imageURL} alt={homegame.name} />
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box>
                <Box className={styles.top10Label}>
                    <p>Top 10 games in your country</p>
                </Box>
                <Box>
                    <Carousel className={styles.top10Carousel} responsive={responsive} infinite={true} draggable={false} swipeable={false}>
                        {top10Games && top10Games.map((top10Game) => (
                            <Card className={styles.HomeGamesSliderCard} key={top10Game._id}>
                                <img className={styles.HomeGamesSliderImg} src={top10Game.imageURL} alt={top10Game.name} />
                            </Card>
                        ))}
                    </Carousel>
                </Box>
            </Box>
            <Box sx={{ marginTop: "100px" }}>
                <Box className={styles.top10Label}>
                    <p>New Games</p>
                </Box>
                <Box>
                    <Carousel className={styles.top10Carousel} responsive={responsive} infinite={true} draggable={false} swipeable={false}>
                        {filteredGames.map(mainGame => (
                            <Card className={styles.HomeGamesSliderCard} key={mainGame._id}>
                                <img className={styles.HomeGamesSliderImg} src={mainGame.imageURL} alt={mainGame.name} />
                            </Card>
                        ))}
                    </Carousel>
                </Box>
            </Box>
            <Box sx={{ marginTop: "100px" }}>
                <Box className={styles.top10Label}>
                    <p>Free to Play</p>
                </Box>
                <Box>
                    <Carousel className={styles.top10Carousel} responsive={responsive} infinite={true} draggable={false} swipeable={false}>
                        {freeToPlayGames.map(mainGame => (
                            <Card className={styles.HomeGamesSliderCard} key={mainGame._id}>
                                <img className={styles.HomeGamesSliderImg} src={mainGame.imageURL} alt={mainGame.name} />
                            </Card>
                        ))}
                    </Carousel>
                </Box>
            </Box>
        </>
    );
};

export default HomeGames;
