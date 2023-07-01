import React, { useEffect, useState } from 'react'
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import styles from "../Hardware/index.module.css"
import FilterListIcon from '@mui/icons-material/FilterList';
import { getAllHardware, getHardwareVideo } from '../../../api/request';

const Hardware = () => {
  const [hardwares, setHardwares] = useState([])
  const [hardwareVideo, setHardwareVideo] = useState([])
  const filteredHardwaresPs5 = hardwares.filter(filteredHardware => filteredHardware.console === "PS5");
  const filteredHardwaresPs4 = hardwares.filter(filteredHardware => filteredHardware.console === "PS4");
  const filteredHardwaresVR2 = hardwares.filter(filteredHardware => filteredHardware.console === "VR2");


  useEffect(() => {
    getAllHardware().then(data => {
      setHardwares(data)
    })
  }, [])

  useEffect(() => {
    getHardwareVideo().then(data => {
      setHardwareVideo(data)
    })
  }, [])

  return (
    <>
      <div style={{ margin: "80px" }}>
        <div style={{ marginBottom: "20px" }}>
          <p className={styles.hardwareText}>All Hardware</p>
        </div>
        <div>
          {hardwareVideo && hardwareVideo.map((video) => (
            <div className={styles.hardwareVideo} key={video._id}>
              <iframe src={video.video} width="50%" height="400px" title="Hardware Video"></iframe>
              <div className={styles.hardwareLabelAndButton}>
                <label>{video.name}</label>
                <button>Shop</button>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.parentHardwareFilter}>
          <div className={styles.hardwareFilter}>
            <div><FilterListIcon /></div>
            <div><p>Sort and Filter</p></div>
          </div>
        </div>
        <div style={{ margin: "70px auto" }}>
          <label className={styles.labelContainer}>Shop PS5 Consoles</label>
          <Grid container spacing={2} xs={11} margin={"0 auto"}>
            {filteredHardwaresPs5 &&
              filteredHardwaresPs5.map((filteredHardware) => (
                <Grid item xs={12} sm={4} md={3} key={filteredHardware._id}>
                  <Card sx={{
                    boxShadow: "none",
                  }} className={styles.hardwareCard}>
                    <img src={filteredHardware.imageURL} alt={filteredHardware.name} />
                    <div className={styles.hardwareAddAndLabel}>
                      <label className={styles.hardwareLabel}>{filteredHardware.name}</label>
                      <h4>${filteredHardware.price}</h4>
                    </div>
                    <div className={styles.hardwareButtonContainer}>
                      <button className={styles.hardwareButton}>Add</button>
                    </div>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </div>
        <div style={{ margin: "120px auto", textAlign:"center" }}>
          <label className={styles.labelContainer}>Shop PS4 Consoles</label>
          <Grid container spacing={1} xs={11} margin={"0 auto"}>
            {filteredHardwaresPs4 &&
              filteredHardwaresPs4.map((filteredHardware) => (
                <Grid item xs={12} sm={4} md={3} key={filteredHardware._id}>
                  <Card sx={{
                    boxShadow: "none",
                  }} className={styles.hardwareCard}>
                    <img src={filteredHardware.imageURL} alt={filteredHardware.name} />
                    <div className={styles.hardwareAddAndLabel}>
                      <label className={styles.hardwareLabel}>{filteredHardware.name}</label>
                      <h4>${filteredHardware.price}</h4>
                    </div>
                    <div className={styles.hardwareButtonContainer}>
                      <button className={styles.hardwareButton}>Add</button>
                    </div>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </div>
        <div style={{ margin: "120px auto" }}>
          <label className={styles.labelContainer}>Shop VR2 Consoles</label>
          <Grid container spacing={1} xs={11} margin={"0 auto"}>
            {filteredHardwaresVR2 &&
              filteredHardwaresVR2.map((filteredHardware) => (
                <Grid item xs={12} sm={4} md={3} key={filteredHardware._id}>
                  <Card sx={{
                    boxShadow: "none",
                  }} className={styles.hardwareCard}>
                    <img src={filteredHardware.imageURL} alt={filteredHardware.name} />
                    <div className={styles.hardwareAddAndLabel}>
                      <label className={styles.hardwareLabel}>{filteredHardware.name}</label>
                      <h4>${filteredHardware.price}</h4>
                    </div>
                    <div className={styles.hardwareButtonContainer}>
                      <button className={styles.hardwareButton}>Add</button>
                    </div>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </div>
      </div >
    </>
  )
}

export default Hardware
