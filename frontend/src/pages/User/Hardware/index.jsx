import React, { useEffect, useState } from 'react'
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import { getAllHardware, hardwareVideo } from '../../../api/request'
import styles from "../Hardware/index.module.css"
import FilterListIcon from '@mui/icons-material/FilterList';

const Hardware = () => {
  const [hardwares, setHardware] = useState([])
  const [hardwareVideos, setHardwareVideos] = useState([])

  useEffect(() => {
    getAllHardware().then(data => {
      setHardware(data)
    })
  }, [])

  useEffect(() => {
    hardwareVideo().then(data => {
      setHardwareVideos(data)
    })
  }, [])

  return (
    <>
      <div style={{ margin: "80px" }}>
        <div style={{ marginBottom: "20px" }}>
          <p className={styles.hardwareText}>All Hardware</p>
        </div>
          <div>
            {hardwareVideos && hardwareVideos.map((video) => (
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
        <div>
          <Grid container spacing={2}>
            {hardwares && hardwares.map((hardware) => (
              <Grid item xs={2} key={hardware._id}>
                <Card className={styles.HardwareCard}>
                  <img className={styles.HardwareImg} src={hardware.imageURL} alt={hardware.name} />
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  )
}

export default Hardware
