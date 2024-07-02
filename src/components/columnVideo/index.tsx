import React from "react";
import styles from "./columnVideo.module.css";

const columnVideo = ({title,
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
        <div className={styles.video}>
          <video className={styles.videoControl} src={src} controls />
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

export default columnVideo;
