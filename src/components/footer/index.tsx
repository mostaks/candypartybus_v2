import React from "react";
import styles from "./footer.module.css";

const footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.row}>
          <div className={styles.pink}>Quick Links</div>
          <div className={styles.itemBolder}>Home</div>
          <div className={styles.itemBolder}>What we offer</div>
          <div className={styles.itemBolder}>Our busses</div>
          <div className={styles.itemBolder}>Book your ride</div>
        </div>
        <div className={styles.row}>
          <div className={styles.pink}>Contact Information</div>
          <div className={styles.item}>Phone: 0434222343</div>
          <div className={styles.item}>Email: someone@candypartybus.com</div>
          <div className={styles.item}>
            Address: Serving Sydney and Surrounding Areas
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.pink}>Business Hours</div>
          <div className={styles.item}>Mon - Sun</div>
          <div style={{ display: "flex" }}>
            <div>FB</div>
            <div>Insta</div>
            <div>Map</div>
          </div>
        </div>
        <div className={styles.row}>
          <div>Open 24 hours</div>
        </div>
      </div>
      <div
        className={styles.boohoo}
        style={{
          color: "white",
        }}
      >
        Content, including images, displayed on this website is protected by
        copyright laws. Downloading, republication, retransmission or
        reproduction of content on this website is strictly prohibited.
      </div>
      <div className={styles.boohoo}>Made with ❤️ by Sydney Dev Agency</div>
    </div>
  );
};

export default footer;
