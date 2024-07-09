import React from "react";
import styles from "./column.module.css";

const column = ({
  title,
  description,
  backgroundImage,
}: {
  title: string;
  description: string;
  backgroundImage: string;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <div className={styles.content}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default column;
