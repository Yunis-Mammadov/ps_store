import React from "react";
import styles from "../UserFooter/index.module.css";
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';

const UserFooter = () => {
  return (
    <>
      <footer>
        <div className={styles.footer}>
          <div className={styles.parentIconAndText}>
            <div>
              <img src="https://media.direct.playstation.com/is/image/sierialto/ps-logo-us?$Icons$" alt="" />
            </div>
            <div className={styles.iconAndText}>
              <div>
                <OnlinePredictionIcon sx={{ color: "white", fontSize: "2.2rem" }} />
              </div>
              <div>
                <p style={{ marginBottom: "7px" }}>Country / Region: United States</p>
              </div>
            </div>
          </div>
          <div className={styles.parentFooterSection1}>
            <div className={styles.footerSection1}>
              <a href=""> Support</a>
              <a href=""> Privacy Policy</a>
              <a href=""> Website Terms of Use</a>
              <a href=""> Sitemap</a>
              <a href=""> PlayStation Studios</a>
              <a href=""> Legal</a>
              <a href=""> About SIE</a>
            </div>
            <div className={styles.footerSection2}>
              <a href=""> PSN Terms of Service</a>
              <a href=""> PS Store Cancellation Policy</a>
              <a href=""> Health Warnings</a>
              <a href=""> About Ratings</a>
            </div>
            <div className={styles.footerSection3}>
              <a href=""> Facebook</a>
              <a href=""> Twitter</a>
              <a href=""> YouTube</a>
              <a href=""> Instagram</a>
              <a href=""> Android App</a>
              <a href=""> iOS App</a>
            </div>
          </div>
          <div className={styles.parentFooterImgAndText}>
            <div className={styles.FooterImgAndText}>
                <p>© 2023 Sony Interactive Entertainment LLC</p>
            </div>
            <div>
                <img src="https://www.esrb.org/wp-content/uploads/2019/08/privacy_certified_globe_registered.svg" alt="" />
            </div>
          </div>
        </div>
      </footer>

    </>
  );
};

export default UserFooter;


