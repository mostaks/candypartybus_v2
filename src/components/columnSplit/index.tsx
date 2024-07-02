import React from "react";
import styles from "./columnSplit.module.css";

const columnSplit = ({
  title,
  description,
  src,
}: {
  title: string;
  description: string;
  src: string;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <div className={styles.image}>
          <img src={src} />
        </div>
        <div className={styles.content}>
          <h2>{title}</h2>
          <p>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default columnSplit;
