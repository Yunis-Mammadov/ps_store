import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getGamesById } from '../../../api/request';
import styles from "./index.module.css"

const DetailPage = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    getGamesById(id)
      .then((data) => {
        setGame(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const addToBasket = () => {
    setBasket(prevBasket => [...prevBasket, game]);
  };

  return (
    <>
      <div>
        {game ? (
          <div className={styles.detailPageContainer}>
            <div
              style={{
                backgroundImage: `url(${game.backgroundImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "100%",
                height: "50vh"
              }}
            />
            <div className={styles.gameDetaailContainer}>
              <div>
                <div className={styles.gameDetailCard}>
                  <h2>{game.name}</h2>
                  <label style={{ fontSize: "12.5px" }}>{game.publisher}</label>
                  <label
                    style={{
                      fontSize: "11px",
                      border: "1px solid",
                      width: "10%",
                      textAlign: "center"
                    }}
                  >
                    {game.platform}
                  </label>
                  <label style={{ fontSize: "20px", paddingTop: "8px" }}>
                    ${game.price}
                  </label>
                  <button onClick={addToBasket}>Add to Basket</button>
                </div>
                <div></div>
              </div>
              <div className={styles.legalInfoContainer}>
                <h1>Game and Legal Info</h1>
                <div>{game.info}</div>
              </div>
            </div>
            <div className={styles.detailInfoContainer}>
              <div className={styles.detailInfo}>
                <label>Platform:</label>
                <label>Release:</label>
                <label>Publisher:</label>
                <label>Genre:</label>
                <label>Language:</label>
              </div>
              <div className={styles.detailInfoApi}>
                <label>{game.platform}</label>
                <label>{game.release}</label>
                <label>{game.publisher}</label>
                <label>{game.genre}</label>
                <label>{game.language}</label>
              </div>
            </div>
            <div
              style={{
                marginTop: "100px",
                marginBottom: "20px",
                width: "100%",
                textAlign: "center"
              }}
            >
              <label style={{ color: 'white' }}>
                {game.year} {game.publisher} AB and {game.publisher} {game.name} and {game.publisher} are trademarks of {game.publisher} Synergies AB.
              </label>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default DetailPage;
