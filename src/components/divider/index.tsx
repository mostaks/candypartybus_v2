import React from "react";
import styles from "./divider.module.css";

const divider = () => {
  return (
    <div className={styles.container}>
      <div className={styles.weirdShape}>
        <span className={styles.spanBox}>
          At Candy Party Bus, we’re on a mission to redefine the party
          experience. We envision an era where celebrations aren’t just events;
          they're unforgettable adventures. Our goal is simple: to transport you
          to an '80s-inspired wonderland on wheels while maintaining the highest
          standards of professionalism.
        </span>
      </div>
      <div className={styles.bottomRow}>bottom row</div>
    </div>
  );
};

export default divider;
