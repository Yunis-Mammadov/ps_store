import React, { useEffect, useState } from 'react'
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import styles from "../Accessories/index.module.css"
import FilterListIcon from '@mui/icons-material/FilterList';
import { getAccessoriesHeaders, getAllAccessories } from '../../../api/request';

const Accessories = () => {
  const [accessories, setAccessories] = useState([])
  const [accessoriesHeaders, setAccessoriesHeaders] = useState([])
  const filteredAccessoriesPs5 = accessories.filter(filteredAccessories => filteredAccessories.console === "PS5");
  const filteredAccessoriesPs4 = accessories.filter(filteredAccessories => filteredAccessories.console === "PS4");
  const filteredAccessoriesHeadSet = accessories.filter(filteredAccessories => filteredAccessories.console === "PS5 HeadSet");
  const filteredAccessoriesInzone = accessories.filter(filteredAccessories => filteredAccessories.console === "PS5 Inzone");


  useEffect(() => {
    getAllAccessories().then(data => {
      setAccessories(data)
    })
  }, [])
  
  useEffect(() => {
    getAccessoriesHeaders().then(data => {
      setAccessoriesHeaders(data)
    })
  }, [])

  return (
    <>
      <div style={{ margin: "80px" }}>
        <div style={{ marginBottom: "20px" }}>
          <p className={styles.accessoriesText}>All Accessories</p>
        </div>
        <div>
          {accessoriesHeaders && accessoriesHeaders.map((header) => (
            <div className={styles.accessoriesHeader} key={header._id}>
              <img src={header.imageURL} alt={header.name} />
              <div className={styles.accessoriesLabelAndButton}>
                <label>{header.name}</label>
                <label style={{
                  fontSize:"20px",
                  textAlign:"center"
                }}>{header.description}</label>
                <button>Shop</button>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.parentAccessoriesFilter}>
          <div className={styles.accessoriesFilter}>
            <div><FilterListIcon /></div>
            <div><p>Sort and Filter</p></div>
          </div>
        </div>
        <div style={{ margin: "70px auto" }}>
          <label className={styles.labelContainer}>Shop PS5 Consoles</label>
          <Grid container spacing={2} item xs={11} margin={"0 auto"}>
            {filteredAccessoriesPs5 &&
              filteredAccessoriesPs5.map((filteredAccessories) => (
                <Grid item xs={12} sm={4} md={3} key={filteredAccessories._id}>
                  <Card sx={{
                    boxShadow: "none",
                  }} className={styles.accessoriesCard}>
                    <img src={filteredAccessories.imageURL} alt={filteredAccessories.name} />
                    <div className={styles.accessoriesAddAndLabel}>
                      <label className={styles.accessoriesLabel}>{filteredAccessories.name}</label>
                      <h4>${filteredAccessories.price}</h4>
                    </div>
                    <div className={styles.accessoriesButtonContainer}>
                      <button onClick={() => {
                        
                      }} className={styles.accessoriesButton}>Add</button>
                    </div>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </div>
        <div style={{ margin: "120px auto"}}>
          <label className={styles.labelContainer}>Shop PS4 Consoles</label>
          <Grid container spacing={1} item xs={11} margin={"0 auto"}>
            {filteredAccessoriesPs4 &&
              filteredAccessoriesPs4.map((filteredAccessories) => (
                <Grid item xs={12} sm={4} md={3} key={filteredAccessories._id}>
                  <Card sx={{
                    boxShadow: "none",
                  }} className={styles.accessoriesCard}>
                    <img src={filteredAccessories.imageURL} alt={filteredAccessories.name} />
                    <div className={styles.accessoriesAddAndLabel}>
                      <label className={styles.accessoriesLabel}>{filteredAccessories.name}</label>
                      <h4>${filteredAccessories.price}</h4>
                    </div>
                    <div className={styles.accessoriesButtonContainer}>
                      <button className={styles.accessoriesButton}>Add</button>
                    </div>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </div>
        <div style={{ margin: "120px auto" }}>
          <label className={styles.labelContainer}>SHOP PS5 HEADSET </label>
          <Grid container spacing={1} item xs={11} margin={"0 auto"}>
            {filteredAccessoriesHeadSet &&
              filteredAccessoriesHeadSet.map((filteredAccessories) => (
                <Grid item xs={12} sm={6} md={4} key={filteredAccessories._id}>
                  <Card sx={{
                    boxShadow: "none",
                  }} className={styles.accessoriesCard}>
                    <img src={filteredAccessories.imageURL} alt={filteredAccessories.name} />
                    <div className={styles.accessoriesAddAndLabel}>
                      <label className={styles.accessoriesLabel}>{filteredAccessories.name}</label>
                      <h4>${filteredAccessories.price}</h4>
                    </div>
                    <div className={styles.accessoriesButtonContainer}>
                      <button className={styles.accessoriesButton}>Add</button>
                    </div>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </div>
        <div style={{ margin: "120px auto" }}>
          <label className={styles.labelContainer}>Shop PS5 Inzone</label>
          <Grid container spacing={1} item xs={11} margin={"0 auto"}>
            {filteredAccessoriesInzone &&
              filteredAccessoriesInzone.map((filteredAccessories) => (
                <Grid item xs={12} sm={6} md={4} key={filteredAccessories._id}>
                  <Card sx={{
                    boxShadow: "none",
                  }} className={styles.accessoriesCard}>
                    <img src={filteredAccessories.imageURL} alt={filteredAccessories.name} />
                    <div className={styles.accessoriesAddAndLabel}>
                      <label className={styles.accessoriesLabel}>{filteredAccessories.name}</label>
                      <h4>${filteredAccessories.price}</h4>
                    </div>
                    <div className={styles.accessoriesButtonContainer}>
                      <button className={styles.accessoriesButton}>Add</button>
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

export default Accessories
