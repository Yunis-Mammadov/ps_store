import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { getAllCategories, getAllGames, getHomeGames, getTop10Games, getUsers } from '../../../api/request';
import styles from "./index.module.css";
import { Link } from "react-router-dom"



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
    const [categories, setCategories] = useState([])
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

    useEffect(() => {
        getAllCategories().then(data => {
            setCategories(data);
        });
    }, []);

    return (
        <>
            <Box>
                <Grid container spacing={2} item margin={"100px auto"} xs={11}>
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
                <Box className={styles.btnAndLabel}>
                    <p className={styles.newGamesLabel}>New Games</p>
                    <button onClick={() => {
                        window.location.href = "/newgames";
                    }} className={styles.homeBtn}>View All</button>
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
                <Box className={styles.btnAndLabel}>
                    <Box >
                        <p className={styles.newGamesLabel}>Free to Play</p>
                    </Box>
                    <Box>
                        <button onClick={() => {
                            window.location.href = "/freetoplay";
                        }} className={styles.homeBtn}>View All</button>
                    </Box>
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
            <Box >
                <img className={styles.homeImg} src="https://image.api.playstation.com/pr/bam-art/146/087/c2365174-0742-4f05-9dc9-210b8bed59f4.jpg?w=1920" alt="" />
            </Box>
            <Box>
                <Box>
                    <p style={{
                        marginTop: "70px",
                        textAlign: "center",
                        fontSize: "25px"
                    }}>See more</p>
                </Box>
                <Box>
                    <Grid container spacing={2} item margin={"50px auto"} xs={11}>
                        {categories && categories.map((category) => (
                            <Grid item xs={12} key={category._id} sm={6} md={3}>
                                <Card className={styles.categoriesCard}>
                                    <img className={styles.HomeGamesImg} src={category.imageURL} alt={category.name} />
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </>
    );
};

export default HomeGames;
