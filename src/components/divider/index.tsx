import React from "react";
import styles from "./divider.module.css";

const Divider = () => {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <div className={styles.textContent}>
          <p>
            Your description or content here. Add more text to describe the
            video or any other relevant information.
          </p>
        </div>
        <div className={styles.imageContent}>
          <img src="path_to_your_image.jpg" alt="Description" />
        </div>
      </div>
    </div>
  );
};

export default Divider;
