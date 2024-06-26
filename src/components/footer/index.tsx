import React from "react";
import styles from './footer.module.css';

const footer = () => {
  return (
    <div className={styles.container}>
      <div
      className={styles.background}
      >
        <div className={styles.row}>
          <div className={styles.pink}>Quick Links</div>
          <div>Home</div>
          <div>What we offer</div>
          <div>Our busses</div>
          <div>Book your ride</div>
        </div>
        <div>
          <div>Contact Information</div>
          <div>Phone: 0434222343</div>
          <div>Email: someone@candypartybus.com</div>
          <div>Address: Serving Sydney and Surrounding Areas</div>
        </div>
        <div>
          <div>Business Hours</div>
          <div>Mon - Sun</div>
          <div style={{ display: "flex" }}>
            <div>FB</div>
            <div>Insta</div>
            <div>Map</div>
          </div>
        </div>
        <div>
          <div>Open 24 hours</div>
        </div>
      </div>
      <div>LMAO DONT COPY US...grow up</div>
    </div>
  );
};

export default footer;
