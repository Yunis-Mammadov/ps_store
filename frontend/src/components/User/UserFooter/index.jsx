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
              <a target="_blank" href="https://www.playstation.com/en-us/support/"> Support</a>
              <a target="_blank" href="https://www.playstation.com/en-us/legal/privacy-policy/"> Privacy Policy</a>
              <a target="_blank" href="https://www.playstation.com/en-us/legal/website-terms-of-use/"> Website Terms of Use</a>
              <a target="_blank" href="https://www.playstation.com/en-us/site-map/"> Sitemap</a>
              <a target="_blank" href="https://www.playstation.com/en-us/corporate/playstation-studios/"> PlayStation Studios</a>
              <a target="_blank" href="https://www.playstation.com/en-us/legal/"> Legal</a>
              <a target="_blank" href="https://www.playstation.com/en-us/corporate/about-us/"> About SIE</a>
            </div>
            <div className={styles.footerSection2}>
              <a target="_blank" href="https://www.playstation.com/en-us/legal/psn-terms-of-service/"> PSN Terms of Service</a>
              <a target="_blank" href="https://www.playstation.com/en-us/legal/playstation-store-cancellation-policy/"> PS Store Cancellation Policy</a>
              <a target="_blank" href="https://www.playstation.com/en-us/legal/health-warning/"> Health Warnings</a>
              <a target="_blank" href="https://www.playstation.com/en-us/support/account/age-ratings-playstation/"> About Ratings</a>
            </div>
            <div className={styles.footerSection3}>
              <a target="_blank" href="https://www.facebook.com/playstation"> Facebook</a>
              <a target="_blank" href="https://twitter.com/i/flow/login?redirect_after_login=%2FPlayStation"> Twitter</a>
              <a target="_blank" href="https://www.youtube.com/user/PlayStation"> YouTube</a>
              <a target="_blank" href="https://www.instagram.com/PlayStation/"> Instagram</a>
              <a target="_blank" href="https://play.google.com/store/apps/details?id=com.scee.psxandroid&utm_source=pdcfooter&pli=1"> Android App</a>
              <a target="_blank" href="https://apps.apple.com/app/apple-store/id410896080?pt=104940801&ct=pdcfooter&mt=8"> iOS App</a>
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


